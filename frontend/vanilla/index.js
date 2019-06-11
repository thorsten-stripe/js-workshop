let stripe;

async function main() {
  const config = await getConfig();

  stripe = Stripe(config.stripePublishableKey);

  const preorderButton = document.querySelector('.pre-order');
  preorderButton.addEventListener('click', e => {
    // Implement functionality.
    console.log('foo');
  });
}

async function getConfig() {
  const config = await fetch(`/config`).then(r => r.json());

  return config;
}

main();
