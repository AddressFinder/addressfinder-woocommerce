import regionMappings from './region_mappings'

export default {
  label: "Billing Checkout",
  layoutSelectors: ["#billing_address_1"],
  countryIdentifier: '#billing_country',
  searchIdentifier: '#billing_address_1',
  nz: {
    countryValue: "NZ",
    elements: {
      address1: '#billing_address_1',
      suburb: '#billing_address_2',
      city: '#billing_city',
      region: '#billing_state',
      postcode: '#billing_postcode',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "AU",
    elements: {
      address1: '#billing_address_1',
      address2: '#billing_address_2',
      suburb: '#billing_city',
      state: '#billing_state',
      postcode: '#billing_postcode',
    },
    stateMappings: null
  }
}