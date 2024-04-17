import regionMappings from './region_mappings'

export default {
  label: "Block Billing Checkout",
  layoutSelectors: ["#billing-address_1"],
  countryIdentifier: '#components-form-token-input-2',
  searchIdentifier: '#billing-address_1',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#billing-address_1',
      address2: null,
      suburb: '#billing-address_2',
      city: '#billing-city',
      region: '#components-form-token-input-3',
      postcode: '#billing-postcode',
    },
    regionMappings: regionMappings('#components-form-token-input-3')
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#billing-address_1',
      address2: '#billing-address_2',
      suburb: '#billing-city',
      state: '#components-form-token-input-3',
      postcode: '#billing-postcode',
    },
    stateMappings: null
  }
}
