import regionMappings from './region_mappings'
import internationalStateMappings from './international_state_mappings'

export default {
  label: "Block Shipping Checkout",
  layoutSelectors: ["#shipping-address_1"],
  countryIdentifier: '#components-form-token-input-0',
  searchIdentifier: '#shipping-address_1',
  nz: {
    countryValue: ["New Zealand", "NZ"],
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
    countryValue: ["Australia", "AU"],
    elements: {
      address1: '#shipping-address_1',
      address2: '#shipping-address_2',
      suburb: '#shipping-city',
      state: "#components-form-token-input-1",
      postcode: '#shipping-postcode',
    },
    stateMappings: null
  },
  int: {
    countryValue: {'Belgium': 'be', 'Canada': 'ca', 'Czechia': 'cz', 'Czech Republic': 'cz', 'Denmark': 'dk', 'France': 'fr', 'Germany': 'de', 'Ireland': 'ie', 'Netherlands': 'nl', 'Portugal': 'pt', 'Singapore': 'sg', 'Spain': 'es', 'Sweden': 'se', 'United Kingdom (UK)': 'gb', 'United States (US)': 'us'},
    elements: {
      address1: '#shipping-address_1',
      address2: '#shipping-address_2',
      suburb: '#shipping-city',
      state: "#components-form-token-input-1",
      postcode: '#shipping-postcode',
    },
    stateMappings: internationalStateMappings('blockForm'),
    optionalElements: {'be': ['address_line_2', 'state_territory'], 'ca': ['address_line_2'], 'cz': ['address_line_2', 'state_territory'], 'de': ['address_line_2', 'state_territory'], 'fr': ['address_line_2'], 'dk': ['address_line_2', 'state_territory'], 'ie': ['address_line_2'], 'nl': ['address_line_2', 'state_territory'], 'pt': ['address_line_2', 'state_territory'], 'sg': ['address_line_2', 'state_territory'], 'es': ['address_line_2'], 'se': ['address_line_2', 'state_territory'], 'gb': ['address_line_2'], 'us': ['address_line_2']}
  },
}
