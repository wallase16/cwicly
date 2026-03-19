/**
 * Cwicly Interactions Engine.
 * 
 * This script handles both block-level and global interactions.
 */

window.addEventListener("DOMContentLoaded", function() {
    // Handle blocks with interaction data attributes
    const blocks = document.querySelectorAll("[data-cc-interaction]");
    if (blocks.length) {
        blocks.forEach(function(block) {
            cc_interactions(block.getAttribute('id') || block, block.dataset.ccInteraction);
        });
    }

    // Handle legacy data-interaction attribute if present
    const legacyBlocks = document.querySelectorAll("[data-interaction]");
    if (legacyBlocks.length) {
        legacyBlocks.forEach(function(block) {
            cc_interactions(block.getAttribute('id') || block, block.dataset.interaction);
        });
    }
});

/**
 * Slide helpers
 */
const slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

const slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

const slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

function cc_isHidden(el) {
    return (window.getComputedStyle(el).display === 'none');
}

function cc_fadeIn(el, duration = 600) {
    el.style.display = 'block';
    el.style.opacity = 0;
    let last = +new Date();
    let tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

/**
 * Main interaction handler
 */
function cc_interactions(elementOrId, interactionData) {
    if (!interactionData) return;

    let localInteractions;
    try {
        localInteractions = JSON.parse(interactionData);
    } catch (e) {
        console.error("Cwicly: Failed to parse local interaction data", e);
        return;
    }

    const globalInteractionsEl = document.getElementById("cc-global-interactions");
    let globalInteractions = null;
    if (globalInteractionsEl) {
        try {
            globalInteractions = JSON.parse(globalInteractionsEl.innerHTML);
            if (typeof globalInteractions === 'string') {
                globalInteractions = JSON.parse(globalInteractions);
            }
        } catch (e) {
            console.error("Cwicly: Failed to parse global interaction data", e);
        }
    }

    const currentElement = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
    if (!currentElement) return;

    function runActions(triggerElement, actions) {
        actions.forEach(action => {
            if (action.action === "customjs" && action.customjs) {
                try {
                    new Function("element", action.customjs)(triggerElement);
                } catch (e) {
                    console.error("Cwicly: Error in custom JS interaction", e);
                }
                return;
            }

            // Target resolution logic
            let targets = [];
            if (action.targets && action.targets.length) {
                action.targets.forEach(t => {
                    if (t.target === "current") targets.push(triggerElement);
                    else if (t.target === "selector" && t.data) {
                        document.querySelectorAll(t.data).forEach(el => targets.push(el));
                    } else if (t.target === "contains" && t.data) {
                        document.querySelectorAll(`.${t.data}`).forEach(el => targets.push(el));
                    } else if (t.target === "parent" && triggerElement.parentElement) {
                        targets.push(triggerElement.parentElement);
                    } else if (t.target === "withattribute" && t.data) {
                        document.querySelectorAll(`[${t.data}]`).forEach(el => targets.push(el));
                    }
                });
            }

            // TODO: Conditions logic (filtering targets) could be added here if needed

            targets.forEach(target => {
                switch (action.action) {
                    case "addclass":
                        if (action.class) target.classList.add(action.class);
                        break;
                    case "removeclass":
                        if (action.class) target.classList.remove(action.class);
                        break;
                    case "toggleclass":
                        if (action.class) target.classList.toggle(action.class);
                        break;
                    case "slideup":
                        slideUp(target);
                        break;
                    case "slidedown":
                        slideDown(target);
                        break;
                    case "toggleslide":
                        slideToggle(target);
                        break;
                    case "property":
                        if (action.class && action.value !== undefined) {
                            target.style[action.class] = action.value;
                        }
                        break;
                    case "toggledisplay":
                        target.style.display = cc_isHidden(target) ? 'block' : 'none';
                        break;
                    case "toggledisplaysmooth":
                        cc_isHidden(target) ? cc_fadeIn(target) : target.style.display = 'none';
                        break;
                    case "animate":
                        if (!action.animation) return;
                        const duration = action.duration || 500;
                        const ease = action.ease || "power2.out";
                        const delay = action.delay || 0;
                        
                        // GSAP Support if available
                        if (window.gsap) {
                            window.gsap.to(target, {
                                ...action.animation,
                                duration: duration / 1000,
                                ease: ease,
                                delay: delay / 1000
                            });
                        } else {
                            // CSS Fallback for common properties
                            target.style.transition = `all ${duration}ms ${delay}ms ease-out`;
                            Object.keys(action.animation).forEach(prop => {
                                let value = action.animation[prop];
                                if (prop === 'x' || prop === 'y') {
                                    const currentTransform = window.getComputedStyle(target).transform;
                                    target.style.transform = `${currentTransform === 'none' ? '' : currentTransform} translate${prop.toUpperCase()}(${typeof value === 'number' ? value + 'px' : value})`;
                                } else {
                                    target.style[prop] = value;
                                }
                            });
                        }
                        break;
                }
            });
        });
    }

    Object.keys(localInteractions).forEach(key => {
        // We look for keys like 'clickTar' which indicate the trigger configuration
        if (key.endsWith("Tar")) {
            const triggerType = key.replace("Tar", "").replace(/[0-9]+$/, ""); // Handles clickTar, click1Tar, etc.
            const actionsKey = key.replace("Tar", ""); // click, click1, etc.
            
            const triggerConfig = localInteractions[key];
            const actions = localInteractions[actionsKey];

            if (!actions) return;

            let eventType = triggerType;
            if (triggerType === "urlHash") eventType = "hashchange";
            if (triggerType === "dbclick") eventType = "dblclick";

            // If a global function is specified
            let activeActions = actions;
            if (triggerConfig.function && globalInteractions && globalInteractions[triggerConfig.function]) {
                if (globalInteractions[triggerConfig.function].interactions) {
                    activeActions = globalInteractions[triggerConfig.function].interactions;
                }
            }

            // Resolve trigger element(s)
            let triggerElements = [];
            if (triggerConfig.target === "selector" && triggerConfig.selector) {
                document.querySelectorAll(triggerConfig.selector).forEach(el => triggerElements.push(el));
            } else {
                triggerElements.push(currentElement);
            }

            triggerElements.forEach(triggerEl => {
                if (eventType === "scrollinview") {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                runActions(triggerEl, activeActions);
                                if (triggerConfig.once) observer.unobserve(triggerEl);
                            }
                        });
                    }, { threshold: triggerConfig.threshold || 0.1 });
                    observer.observe(triggerEl);
                } else if (eventType === "hashchange") {
                    const handleHash = () => {
                        if (location.hash && triggerEl.id === location.hash.replace("#", "")) {
                            runActions(triggerEl, activeActions);
                        }
                    };
                    window.addEventListener("hashchange", handleHash);
                    handleHash(); // Run on load
                } else {
                    triggerEl.addEventListener(eventType, () => {
                        runActions(triggerEl, activeActions);
                    }, false);
                }
            });
        }
    });
}
