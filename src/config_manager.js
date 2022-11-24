import billingAddress from './address_form_config/billing_address'
import shippingAddress from './address_form_config/shipping_address'
import blockAddress from './address_form_config/block_address'

export default class ConfigManager {

   load() {
    // This function is called when the page mutates and returns our form configurations
    const addressFormConfigurations = [
      billingAddress,
      shippingAddress,
      blockAddress
    ]

    return addressFormConfigurations
  }
}
