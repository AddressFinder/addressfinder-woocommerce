import billingAddress from './address_form_config/billing_address'
import shippingAddress from './address_form_config/shipping_address'
import blockShippingAddress from './address_form_config/block_shipping_address'
import blockBillingAddress from './address_form_config/block_billing_address'
import FindBlockCheckoutIds from './address_form_config/find_block_checkout_ids'

export default class ConfigManager {

  constructor(){
    this.FindBlockCheckoutIds = new FindBlockCheckoutIds()
  }

  load() {
    // This function is called when the page mutates and returns our form configurations
    const addressFormConfigurations = [
      shippingAddress,
      billingAddress,
      blockShippingAddress,
      blockBillingAddress
    ]

    // The block checkout input fields have different id's depending on:
    // - country selected
    // - on form create/destroy
    this.FindBlockCheckoutIds.findElements(addressFormConfigurations)

    return addressFormConfigurations
  }
}
