document.addEventListener('DOMContentLoaded', () => {
	const forms = document.querySelectorAll('.cc-form');

	forms.forEach(form => {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();

			const submitButton = form.querySelector('button[type="submit"]');
			const waitBlock = form.querySelector('.cc-wait');
			const actionType = form.dataset.actionType;
			const successMessage = form.dataset.successMessage || 'Sent successfully!';
			const errorMessage = form.dataset.errorMessage || 'Submission failed.';

			// Show Wait Block
			if (waitBlock) {
				waitBlock.style.display = 'flex';
			}
			if (submitButton) {
				submitButton.disabled = true;
			}

			const formData = new FormData(form);
			const data = Object.fromEntries(formData.entries());

			try {
				let response;
				if (actionType === 'email') {
					// In a real implementation, this would call a WordPress AJAX/REST endpoint
					// which then uses wp_mail(). For this rebuild, we'll simulate it or 
					// assume a "Contact Form 7" style handler exists.
					response = await fakeSubmit('/wp-admin/admin-ajax.php', {
						action: 'cc_form_submit',
						...data,
						_cc_email_to: form.dataset.emailTo,
					});
				} else if (actionType === 'webhook') {
					response = await fetch(form.dataset.webhookUrl, {
						method: 'POST',
						body: JSON.stringify(data),
						headers: { 'Content-Type': 'application/json' }
					});
				}

				if (actionType === 'redirect' && form.dataset.redirectUrl) {
					window.location.href = form.dataset.redirectUrl;
					return;
				}

				// Handle Success
				alert(successMessage);
				form.reset();

			} catch (error) {
				console.error('Form submission error:', error);
				alert(errorMessage);
			} finally {
				if (waitBlock) {
					waitBlock.style.display = 'none';
				}
				if (submitButton) {
					submitButton.disabled = false;
				}
			}
		});
	});

	// Mock submit for demonstration/placeholder
	async function fakeSubmit(url, data) {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('Submitted to:', url, 'Data:', data);
				resolve({ success: true });
			}, 1500);
		});
	}
});
