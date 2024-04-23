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
      address2: null,
      suburb: '#billing_address_2',
      city: '#billing_city',
      region: '#billing_state',
      postcode: '#billing_postcode',
    },
    regionMappings: regionMappings('#billing_state')
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
  },
  int: {
    countryValue: {'BE': 'be', 'CA': 'ca', 'CZ': 'cz', 'DE': 'de', 'FR': 'fr', 'DK': 'dk', 'IE': 'ie', 'NL': 'nl', 'PT': 'pt', 'SG': 'sg', 'ES': 'es', 'SE': 'se', 'GB': 'gb', 'US': 'us'},
    elements: {
      address1: '#billing_address_1',
      address2: '#billing_address_2',
      suburb: '#billing_city',
      state: '#billing_state',
      postcode: '#billing_postcode',
    },
    stateMappings: null,
    optionalElements: {'be': ['address_line_2', 'state_territory'], 'ca': ['address_line_2'], 'cz': ['address_line_2'], 'de': ['address_line_2', 'state_territory'], 'fr': ['address_line_2'], 'dk': ['address_line_2'], 'ie': ['address_line_2'], 'nl': ['address_line_2', 'state_territory'], 'pt': ['address_line_2', 'state_territory'], 'sg': ['address_line_2', 'state_territory'], 'es': ['address_line_2'], 'se': ['address_line_2'], 'gb': ['address_line_2'], 'us': ['address_line_2']}
  }
}
