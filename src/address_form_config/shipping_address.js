import regionMappings from './region_mappings'
import internationalStateMappings from './international_state_mappings'

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
    regionMappings: regionMappings('#shipping_state')
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
  },
  int: {
    countryValue: {'BE': 'be', 'CA': 'ca', 'CZ': 'cz', 'DE': 'de', 'FR': 'fr', 'DK': 'dk', 'IE': 'ie', 'NL': 'nl', 'PT': 'pt', 'SG': 'sg', 'ES': 'es', 'SE': 'se', 'GB': 'gb', 'US': 'us'},
    elements: {
      address1: '#shipping_address_1',
      address2: '#shipping_address_2',
      suburb: '#shipping_city',
      state: '#shipping_state',
      postcode: '#shipping_postcode',
    },
    stateMappings: internationalStateMappings('standardForm'),
    optionalElements: {'be': ['address_line_2', 'state_territory'], 'ca': ['address_line_2'], 'cz': ['address_line_2'], 'de': ['address_line_2', 'state_territory'], 'fr': ['address_line_2'], 'dk': ['address_line_2'], 'ie': ['address_line_2'], 'nl': ['address_line_2', 'state_territory'], 'pt': ['address_line_2', 'state_territory'], 'sg': ['address_line_2', 'state_territory'], 'es': ['address_line_2'], 'se': ['address_line_2', 'state_territory'], 'gb': ['address_line_2'], 'us': ['address_line_2']}
  }
}
