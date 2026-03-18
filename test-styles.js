
import { generateBlockCSSObject } from './src/utils/style-generator.js';

const mockAttributes = {
    classID: 'test-block',
    padding: {
        lg: { top: '10px', bottom: '10px' },
        md: { top: '5px' },
        sm: { top: '2px' },
        hover: {
            lg: { top: '20px' }
        }
    },
    typography: {
        lg: { fontSize: '18px', fontWeight: '700' },
        md: { fontSize: '16px' }
    },
    background: {
        lg: { type: 'color', color: '#ff0000' },
        md: { type: 'color', color: '#00ff00' }
    },
    customCSS: '&selector { color: blue; }'
};

console.log('--- GENERATING CSS FOR MOCK ATTRIBUTES ---');
const cssObject = generateBlockCSSObject(mockAttributes.classID, mockAttributes);

console.log('BREAKPOINT: LG');
console.log(cssObject.lg);

console.log('BREAKPOINT: MD');
console.log(cssObject.md);

console.log('BREAKPOINT: SM');
console.log(cssObject.sm);

console.log('COMMON/CUSTOM');
console.log(cssObject.common);
