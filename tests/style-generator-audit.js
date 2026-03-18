import { generateBlockCSSObject } from '../src/utils/style-generator.js';

const mockAttributes = {
    padding: {
        lg: { top: '20px', right: '10px', bottom: '20px', left: '10px' },
        md: { top: '15px' },
        sm: { top: '10px' }
    },
    typography: {
        lg: { fontSize: '24px' },
        md: { fontSize: '20px' },
        sm: { fontSize: '18px' },
        fontFamily: 'Inter',
        color: '#000'
    },
    background: {
        lg: { type: 'color', color: '#ffffff' },
        md: { type: 'color', color: '#f0f0f0' }
    },
    border: {
        lg: { width: '1px', style: 'solid', color: '#ccc', radius: '4px' },
        sm: { width: '0px' }
    }
};

const classID = 'test-block';
const css = generateBlockCSSObject(classID, mockAttributes);

console.log('--- LG CSS ---');
console.log(css.lg);

console.log('--- MD CSS ---');
console.log(css.md);

console.log('--- SM CSS ---');
console.log(css.sm);

// Verify specific values
const expectedLg = [
    'padding-top: 20px',
    'font-size: 24px',
    'background-color: #ffffff',
    'border-width: 1px'
];

const failures = [];

expectedLg.forEach(rule => {
    if (!css.lg.includes(rule)) {
        failures.push(`Missing rule in LG: ${rule}`);
    }
});

if (!css.md.includes('padding-top: 15px')) failures.push('Missing padding-top in MD');
if (!css.sm.includes('padding-top: 10px')) failures.push('Missing padding-top in SM');
if (!css.sm.includes('border-width: 0px')) failures.push('Missing border-width in SM');

if (failures.length > 0) {
    console.error('FAILURES:');
    failures.forEach(f => console.error(` - ${f}`));
    process.exit(1);
} else {
    console.log('SUCCESS: All responsive rules resolved correctly.');
}
