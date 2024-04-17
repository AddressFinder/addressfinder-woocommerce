import regionMappings from './region_mappings'

export default {
  label: "Block Shipping Checkout",
  layoutSelectors: ["#shipping-address_1"],
  countryIdentifier: '#components-form-token-input-0',
  searchIdentifier: '#shipping-address_1',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#shipping-address_1',
      address2: null,
      suburb: '#shipping-address_2',
      city: '#shipping-city',
      region: '#components-form-token-input-1',
      postcode: '#shipping-postcode',
    },
    regionMappings: regionMappings('#components-form-token-input-1')
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#shipping-address_1',
      address2: '#shipping-address_2',
      suburb: '#shipping-city',
      state: "#components-form-token-input-1",
      postcode: '#shipping-postcode',
    },
    stateMappings: null
  }
}
