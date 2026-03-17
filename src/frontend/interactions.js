/**
 * Cwicly Rebuild - Interactions Engine
 */

(function() {
    'use strict';

    /**
     * Initialize interactions on DOMContentLoaded
     */
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('[data-interaction]');
        elements.forEach(element => {
            try {
                const interactions = JSON.parse(element.getAttribute('data-interaction'));
                initInteractions(element, interactions);
            } catch (e) {
                console.error('Cwicly Rebuild: Failed to parse interactions for', element, e);
            }
        });
    });

    /**
     * Map events to initialization functions
     */
    function initInteractions(element, interactions) {
        if (interactions.click) {
            element.addEventListener('click', (e) => {
                executeActions(element, interactions.click, e);
            });
        }
        
        // Add more events here (scrollinview, etc.)
    }

    /**
     * Execute a list of actions for an event
     */
    function executeActions(element, actions, event) {
        actions.forEach(action => {
            const targets = getTargets(element, action.targets);
            
            targets.forEach(target => {
                if (!target) return;

                switch (action.action) {
                    case 'addClass':
                        if (action.value) target.classList.add(action.value);
                        break;
                    case 'removeClass':
                        if (action.value) target.classList.remove(action.value);
                        break;
                    case 'toggleClass':
                        if (action.value) target.classList.toggle(action.value);
                        break;
                    case 'visibility':
                        if (target.style.display === 'none') {
                            target.style.display = '';
                        } else {
                            target.style.display = 'none';
                        }
                        break;
                }
            });
        });
    }

    /**
     * Resolve target elements based on Cwicly logic
     */
    function getTargets(currentElement, targetDefinitions) {
        if (!targetDefinitions || targetDefinitions.length === 0) return [currentElement];

        let resolvedTargets = [];

        targetDefinitions.forEach(def => {
            switch (def.target) {
                case 'current':
                    resolvedTargets.push(currentElement);
                    break;
                case 'parent':
                    if (currentElement.parentElement) {
                        resolvedTargets.push(currentElement.parentElement);
                    }
                    break;
                case 'selector':
                    if (def.data) {
                        const elements = document.querySelectorAll(def.data);
                        resolvedTargets = [...resolvedTargets, ...Array.from(elements)];
                    }
                    break;
            }
        });

        return resolvedTargets;
    }

})();
