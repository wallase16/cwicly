import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, NumberControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import { getBlockID } from '../../utils/block-id.js';

export default function Edit(props) {
	const { attributes, setAttributes, context } = props;
	const { uniqueID, tabIndex, tabActive } = attributes;
	const contentsID = context['cwicly/tabContentsID'] || 'default';

	useEffect(() => {
		if (!uniqueID) {
			setAttributes({ uniqueID: getBlockID() });
		}
	}, []);

	const blockProps = useBlockProps({
		className: `cc-tab-content ${tabActive ? 'cc-tab-content-active' : ''}`,
		'data-cc-tab-content': 'true',
		'data-tab-index': tabIndex,
		role: 'tabpanel',
		'aria-labelledby': `cc-tab-${contentsID}-${tabIndex}`,
		id: `cc-tab-content-${contentsID}-${tabIndex}`,
	});

	return (
		<>
			<CwiclyInspector {...props} />
			<InspectorControls>
				<PanelBody title={__('Tab Content Settings', 'cwicly')}>
					<NumberControl
						label={__('Tab Index', 'cwicly')}
						value={tabIndex}
						onChange={(val) => setAttributes({ tabIndex: parseInt(val) })}
						min={1}
					/>
					<ToggleControl
						label={__('Start Active', 'cwicly')}
						checked={tabActive}
						onChange={(val) => setAttributes({ tabActive: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
}
