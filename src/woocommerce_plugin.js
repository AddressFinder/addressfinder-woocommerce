import "core-js/fn/symbol" // see https://github.com/zloirock/core-js
import "core-js/fn/symbol/iterator"
import "core-js/fn/array/find"
import "core-js/fn/array/includes"
import FormHelper from "./form_helper"

export default class WooCommercePlugin {
  constructor(widgetConfig) {
    this.widgetConfig = widgetConfig
    this.layoutConfigurations = [
      {
        label: "WooCommerce Checkout Billing Details",
        layoutIdentifier: "woocommerce-billing-fields", //This is a class
        countryIdentifier: 'select2-billing_country-container', //This is a dropdown inside a span. get the title property
        searchIdentifier: "billing_address_1",
        nz: {
          countryValue: "New Zealand",
          elements: {
            address1: 'billing_address_1',
            suburb: 'billing_address_2',
            city: 'billing_city',
            region: 'select2-billing_state-container',
            postcode: 'billing_postcode'
          },
          regionMappings: null
        },
        au: {
          countryValue: "Australia",
          elements: {
            address1: 'billing_address_1',
            address2: 'billing_address_2',
            suburb: 'billing_city',
            state: 'select2-billing_state-container',
            postcode: 'billing_postcode'
          },
          stateMappings: null
        }
      },
      {
        label: "WooCommerce Checkout Shipping Details",
        layoutIdentifier: "woocommerce-shipping-fields", //This is a class
        countryIdentifier: 'select2-shipping_country-container', //This is a dropdown inside a span. get the title property
        searchIdentifier: "shipping_address_1",
        nz: {
          countryValue: "New Zealand",
          elements: {
            address1: 'shipping_address_1',
            suburb: 'shipping_address_2',
            city: 'shipping_city',
            region: 'select2-shipping_state-container',
            postcode: 'shipping_postcode'
          },
          regionMappings: null
        },
        au: {
          countryValue: "Australia",
          elements: {
            address1: 'shipping_address_1',
            address2: 'shipping_address_2',
            suburb: 'shipping_city',
            state: 'select2-shipping_state-container',
            postcode: 'shipping_postcode'
          },
          stateMappings: null
        }
      },
    ]
      this.formHelpers = []

      this.identifyLayout()
      this.monitorMutations()
    }

    identifyLayout(){
      for (const layoutConfig of this.layoutConfigurations) {
        let identifyingElement = document.getElementById(layoutConfig.layoutIdentifier)

        if (identifyingElement) {
          this.log(`Identified layout named: ${layoutConfig.label}`)
          this.initialiseFormHelper(layoutConfig)
        }
      }
    }

    initialiseFormHelper(layoutConfig){
      let searchElement = document.getElementById(layoutConfig.searchIdentifier)

      if (searchElement) {
        let formHelperConfig = {
          countryElement: document.getElementById(layoutConfig.countryIdentifier),
          label: layoutConfig.label,
          layoutIdentifier: layoutConfig.layoutIdentifier,
          nz: {
            countryValue: layoutConfig.nz.countryValue,
            searchElement: document.getElementById(layoutConfig.nz.elements.address1),
            elements: {
              address_line_1_and_2: document.getElementById(layoutConfig.nz.elements.address1),
              address_line_1: null,
              address_line_2: null,
              suburb: document.getElementById(layoutConfig.nz.elements.suburb),
              city: document.getElementById(layoutConfig.nz.elements.city),
              region: document.getElementById(layoutConfig.nz.elements.region),
              postcode: document.getElementById(layoutConfig.nz.elements.postcode)
            },
            regionMappings: null
          },
          au: {
            countryValue: layoutConfig.au.countryValue,
            searchElement: document.getElementById(layoutConfig.au.elements.address1),
            elements: {
              address_line_1_and_2: null,
              address_line_1: document.getElementById(layoutConfig.au.elements.address1),
              address_line_2: document.getElementById(layoutConfig.au.elements.address2),
              locality_name: document.getElementById(layoutConfig.au.elements.suburb),
              city: null,
              state_territory: document.getElementById(layoutConfig.au.elements.state),
              postcode: document.getElementById(layoutConfig.au.elements.postcode)
            },
            stateMappings: layoutConfig.au.stateMappings
          }
        }

        let helper = new FormHelper(this.widgetConfig, formHelperConfig)
        this.formHelpers.push(helper)
      }
    }
  }
