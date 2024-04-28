import regionMappings from './region_mappings'
import internationalStateMappings from './international_state_mappings'

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
  },
  int: {
    countryValue: {'Belgium': 'be', 'Canada': 'ca', 'Czechia': 'cz', 'Denmark': 'dk', 'France': 'fr', 'Germany': 'de', 'Ireland': 'ie', 'Netherlands': 'nl', 'Portugal': 'pt', 'Singapore': 'sg', 'Spain': 'es', 'Sweden': 'se', 'United Kingdom (UK)': 'gb', 'United States (US)': 'us'},
    elements: {
      address1: '#billing-address_1',
      address2: '#billing-address_2',
      suburb: '#billing-city',
      state: '#components-form-token-input-3',
      postcode: '#billing-postcode',
    },
    stateMappings: internationalStateMappings('blockForm'),
    optionalElements: {'be': ['address_line_2', 'state_territory'], 'ca': ['address_line_2'], 'cz': ['address_line_2'], 'de': ['address_line_2', 'state_territory'], 'fr': ['address_line_2'], 'dk': ['address_line_2', 'state_territory'], 'ie': ['address_line_2'], 'nl': ['address_line_2', 'state_territory'], 'pt': ['address_line_2', 'state_territory'], 'sg': ['address_line_2', 'state_territory'], 'es': ['address_line_2'], 'se': ['address_line_2', 'state_territory'], 'gb': ['address_line_2'], 'us': ['address_line_2']}
  }
}
