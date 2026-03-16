import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { 
    FormTokenField,
    BaseControl
} from '@wordpress/components';

/**
 * GlobalClassPicker
 * Allows selecting and applying global classes to a block.
 */
export default function GlobalClassPicker({ selectedClasses = [], onChange }) {
    const { globalClasses } = useSelect((select) => ({
        globalClasses: select('cwicly/base').getGlobalClasses(),
    }), []);

    const classNames = Object.keys(globalClasses);

    return (
        <div className="cwicly-global-class-picker" style={{ marginBottom: '20px' }}>
            <BaseControl
                label={__('Global Classes', 'cwicly')}
                help={__('Apply reusable global classes to this block.', 'cwicly')}
            >
                <FormTokenField
                    value={selectedClasses}
                    suggestions={classNames}
                    onChange={onChange}
                    placeholder={__('Search or select classes...', 'cwicly')}
                />
            </BaseControl>
        </div>
    );
}
