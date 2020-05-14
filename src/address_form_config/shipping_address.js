import regionMappings from './region_mappings'

export default {
  label: "Shipping Checkout",
  layoutSelectors: ["#shipping_address_1"],
  countryIdentifier: '#shipping_country',
  searchIdentifier: '#shipping_address_1',
  nz: {
    countryValue: "NZ",
    elements: {
      address1: '#shipping_address_1',
      address2: null,
      suburb: '#shipping_address_2',
      city: '#shipping_city',
      region: '#shipping_state',
      postcode: '#shipping_postcode',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "AU",
    elements: {
      address1: '#shipping_address_1',
      address2: '#shipping_address_2',
      suburb: '#shipping_city',
      state: '#shipping_state',
      postcode: '#shipping_postcode',
    },
    stateMappings: null
  }
}
