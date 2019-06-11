let stripe;

async function main() {
  const config = await getConfig();

  stripe = Stripe(config.stripePublishableKey);

  const preorderButton = document.querySelector('.pre-order');
  preorderButton.addEventListener('click', e => {
    // Implement functionality.
  });
}

async function getConfig() {
  return await fetch(`/config`).then(r => r.json());
}

window.onload = main;
