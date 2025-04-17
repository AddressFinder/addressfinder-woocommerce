export default class FindBlockCheckoutIds {

  findElements(formConfigurations) {
    let shippingCountry = this._getElementId('shipping-country') || "#shipping-country"
    let shippingState = this._getElementId('shipping-state') || "#shipping-state"
    let billingCountry = this._getElementId('billing-country') || "#billing-country"
    let billingState = this._getElementId('billing-state') || "#billing-state"

    // Set the shipping and billing ids for the elements which are known to change on the block checkout.
    formConfigurations.forEach((configuration) => {
      if (configuration.label == "Block Shipping Checkout") {
        configuration.countryIdentifier = shippingCountry
        configuration.nz.elements.region = shippingState
        configuration.au.elements.state = shippingState
        configuration.int.elements.state = shippingState
      } else if (configuration.label == "Block Billing Checkout") {
        configuration.countryIdentifier = billingCountry
        configuration.nz.elements.region = billingState
        configuration.au.elements.state = billingState
        configuration.int.elements.state = billingState
      } else if (configuration.label == "block billing checkout (phone)") {
        configuration.countryIdentifier = billingCountry
      } else if (configuration.label == "block shipping checkout (phone)") {
        configuration.countryIdentifier = shippingCountry
      }
    });
  }

  _getElementId(parentId){
    let parent = document.getElementById(parentId)

    if (parent){
      let inputs = parent.getElementsByTagName('input')

      if (inputs.length == 1) {
        return `#${inputs[0].id}`
      }
    }

    return null
  }
}
