import regionMappings from './region_mappings'

export default {
  label: "Billing Checkout",
  layoutSelector: ["#billing_address_1"],
  countryIdentifier: '#billing_country',
  searchIdentifier: '#billing_address1',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#billing_address1',
      address2: '#billing_address2',
      suburb: null,
      city: '#billing_city',
      region: '#billing_state',
      postcode: '#billing_postcode',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#billing_address1',
      address2: '#billing_address2',
      suburb: '#billing_city',
      state: '#billing_state',
      postcode: '#billing_postcode',
    },
    stateMappings: null
  }
}