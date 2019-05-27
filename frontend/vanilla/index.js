class StripeWorkshop {
  constructor(config) {
    if (typeof config === 'undefined') {
      throw new Error('Cannot be called directly.');
    }

    // Init Stripe.js
    this.stripe = Stripe(config.stripePublishableKey);
  }

  static async build() {
    const config = await fetch(`/config`).then(r => r.json());
    return new StripeWorkshop(config);
  }

  addListeners() {
    const preorderButton = document.querySelector('.pre-order');
    preorderButton.addEventListener('click', e => {
      // Implement functionality.
      console.log('foo');
    });
  }
}

StripeWorkshop.build().then((stripeWorkshop) => {
  stripeWorkshop.addListeners();
});
