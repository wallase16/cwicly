document.addEventListener('DOMContentLoaded', function() {
	if (typeof Prism !== 'undefined') {
		Prism.highlightAll();
	}
});

// Support for dynamic content (if Cwicly re-renders blocks)
if (typeof cwicly !== 'undefined' && cwicly.events) {
	cwicly.events.on('cc-block-rendered', function(el) {
		if (el.classList.contains('cc-prism-pre') || el.querySelector('.cc-prism-pre')) {
			if (typeof Prism !== 'undefined') {
				Prism.highlightAllUnder(el);
			}
		}
	});
}
