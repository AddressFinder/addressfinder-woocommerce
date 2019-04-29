import regionMappings from './region_mappings'

export default {
  label: "Shipping Checkout",
  layoutSelector: ["#shipping_address_1"],
  countryIdentifier: '#shipping_country',
  searchIdentifier: '#shipping_address1',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#shipping_address1',
      address2: '#shipping_address2',
      suburb: null,
      city: '#shipping_city',
      region: '#shipping_state',
      postcode: '#shipping_postcode',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#shipping_address1',
      address2: '#shipping_address2',
      suburb: '#shipping_city',
      state: '#shipping_state',
      postcode: '#shipping_postcode',
    },
    stateMappings: null
  }
}