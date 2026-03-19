/**
 * Cwicly Rebuilt Entry Point
 */
import './style.css';
import './store/index.js';
import './blocks/columns/index.js';
import './blocks/column/index.js';
import './blocks/section/index.js';
import './blocks/container/index.js';
import './blocks/heading/index.js';
import './blocks/paragraph/index.js';
import './blocks/image/index.js';
import './blocks/button/index.js';
// Phase 16: Query Loop & Templates
import './blocks/query-loop/index.js';
import './blocks/query-template/index.js';
import './blocks/query-no-results/index.js';
import './blocks/query-pagination/index.js';
import './blocks/post-title/index.js';
// Phase 16.x: Query child content blocks
import './blocks/post-featured-image/index.js';
import './blocks/post-excerpt/index.js';
import './blocks/post-date/index.js';
import './blocks/post-link/index.js';
// Phase 19: Accordion
import './blocks/accordion/index.js';
import './blocks/accordion-header/index.js';
import './blocks/accordion-content/index.js';
// Phase 20: Tabs
import './blocks/tab-list/index.js';
import './blocks/tab/index.js';
import './blocks/tab-contents/index.js';
import './blocks/tab-content/index.js';
// Phase 24: Slider
import './blocks/slider/index.js';
import './blocks/sliderchild/index.js';
import initStyleSaver from './hooks/style-saver.js';

initStyleSaver();
