import { __ } from '@wordpress/i18n';
import { PanelBody, TextareaControl, TextControl, Button } from '@wordpress/components';

/**
 * AdvancedPanel
 * Cwicly's "Advanced" tab — custom CSS, free-form HTML attributes, extra CSS classes.
 *
 * `customCSS`     → injected verbatim into the block's generated CSS (after class rules).
 * `htmlAttributes` → array of { key, value } pairs emitted as HTML attributes on the root element.
 * `classes`       → space-separated extra class string beyond `cc-{classID}`.
 */
export default function AdvancedPanel({ attributes, setAttributes }) {
    const { customCSS = '', htmlAttributes = [], classes = '' } = attributes;

    const updateHtmlAttr = (index, field, value) => {
        const updated = htmlAttributes.map((attr, i) =>
            i === index ? { ...attr, [field]: value } : attr
        );
        setAttributes({ htmlAttributes: updated });
    };

    const addHtmlAttr = () => {
        setAttributes({ htmlAttributes: [...htmlAttributes, { key: '', value: '' }] });
    };

    const removeHtmlAttr = (index) => {
        setAttributes({ htmlAttributes: htmlAttributes.filter((_, i) => i !== index) });
    };

    return (
        <div className="cwicly-advanced-panel">
            {/* Extra CSS Classes */}
            <PanelBody title={__('CSS Classes', 'cwicly')} initialOpen={true}>
                <TextControl
                    label={__('Additional Classes', 'cwicly')}
                    value={classes}
                    onChange={(val) => setAttributes({ classes: val })}
                    help={__('Space-separated class names added alongside the auto-generated cc-{id} class.', 'cwicly')}
                />
            </PanelBody>

            {/* Custom CSS */}
            <PanelBody title={__('Custom CSS', 'cwicly')} initialOpen={false}>
                <p style={{ fontSize: '11px', color: '#666', margin: '0 0 8px' }}>
                    {__('Use &selector to reference this block\'s class. e.g.', 'cwicly')}{' '}
                    <code>&selector {'{ color: red }'}</code>
                </p>
                <TextareaControl
                    label=""
                    value={customCSS}
                    rows={10}
                    onChange={(val) => setAttributes({ customCSS: val })}
                    placeholder={`&selector {\n  color: red;\n}\n\n&selector:hover {\n  color: blue;\n}`}
                    style={{ fontFamily: 'monospace', fontSize: '12px' }}
                />
            </PanelBody>

            {/* HTML Attributes */}
            <PanelBody title={__('HTML Attributes', 'cwicly')} initialOpen={false}>
                {htmlAttributes.map((attr, index) => (
                    <div
                        key={index}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '6px', alignItems: 'end', marginBottom: '8px' }}
                    >
                        <TextControl
                            label={index === 0 ? __('Attribute', 'cwicly') : undefined}
                            value={attr.key}
                            onChange={(val) => updateHtmlAttr(index, 'key', val)}
                            placeholder="data-id"
                        />
                        <TextControl
                            label={index === 0 ? __('Value', 'cwicly') : undefined}
                            value={attr.value}
                            onChange={(val) => updateHtmlAttr(index, 'value', val)}
                            placeholder="my-value"
                        />
                        <Button
                            isDestructive
                            isSmall
                            onClick={() => removeHtmlAttr(index)}
                            style={{ marginBottom: index === 0 ? '0' : undefined }}
                            aria-label={__('Remove attribute', 'cwicly')}
                        >
                            ✕
                        </Button>
                    </div>
                ))}
                <Button
                    variant="secondary"
                    isSmall
                    onClick={addHtmlAttr}
                    style={{ marginTop: '4px' }}
                >
                    {__('+ Add Attribute', 'cwicly')}
                </Button>
            </PanelBody>
        </div>
    );
}
