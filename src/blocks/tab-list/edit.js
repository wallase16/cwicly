import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import { getBlockID } from '../../utils/block-id.js';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { uniqueID, tabContentsID, tabContentsActive, tabTrigger } = attributes;

	useEffect(() => {
		if (!uniqueID) {
			setAttributes({ uniqueID: getBlockID() });
		}
	}, []);

	const blockProps = useBlockProps({
		className: 'cc-tab-list',
		'data-cc-tab-list': 'true',
		'data-tab-contents-id': tabContentsID,
		'data-tab-active': tabContentsActive,
		'data-tab-trigger': tabTrigger,
		role: 'tablist',
	});

	return (
		<>
			<CwiclyInspector {...props} />
			<InspectorControls>
				<PanelBody title={__('Tab List Settings', 'cwicly')}>
					<TextControl
						label={__('Linked Tab Contents ID', 'cwicly')}
						value={tabContentsID}
						onChange={(val) => setAttributes({ tabContentsID: val })}
						help={__('Enter the ID of the Tab Contents block this list should control.', 'cwicly')}
					/>
					<SelectControl
						label={__('Trigger', 'cwicly')}
						value={tabTrigger}
						options={[
							{ label: __('Click', 'cwicly'), value: 'click' },
							{ label: __('Hover', 'cwicly'), value: 'hover' },
						]}
						onChange={(val) => setAttributes({ tabTrigger: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={['cwicly/tab']}
					template={[['cwicly/tab'], ['cwicly/tab']]}
					orientation="horizontal"
				/>
			</div>
		</>
	);
}
