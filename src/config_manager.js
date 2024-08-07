import billingAddress from './address_form_config/billing_address'
import blockBillingEmail from './email_form_config/block_billing_checkout'
import blockBillingPhone from './phone_form_config/block_billing_checkout'
import blockShippingPhone from './phone_form_config/block_shipping_checkout'
import billingEmail from './email_form_config/billing_checkout'
import billingPhone from './phone_form_config/billing_checkout'
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

  loadEmailConfigurations() {
    const emailFormConfigurations = [
      billingEmail,
      blockBillingEmail
    ]

    return emailFormConfigurations
  }

  loadPhoneConfigurations() {
    const phoneFormConfigurations = [
      billingPhone,
      blockBillingPhone,
      blockShippingPhone
    ]

    // The block checkout input fields have different id's depending on:
    // - country selected
    // - on form create/destroy
    this.FindBlockCheckoutIds.findElements(phoneFormConfigurations)

    return phoneFormConfigurations
  }
}
