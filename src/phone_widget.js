export default class PhoneWidget {
  constructor(document, addressfinderConfig, safeParseJSONObject){
    this.document = document
    this.addressfinderConfig = addressfinderConfig
    this.safeParseJSONObject = safeParseJSONObject

    this.countryElement = document.getElementById('billing_country')
    this.phoneLoaded = false
    this.previousCountry = null
  }

  loadPhoneWidget() {
    let s = this.document.createElement("script");
    s.src = 'http://api.addressfinder.io/assets/phone/v2/widget.js'
    s.async = 1;
    s.onload = this._initialisePhoneWidget.bind(this)
    this.document.body.appendChild(s)
  }

  _initialisePhoneWidget(){
    let conf = {
      key: this.addressfinderConfig.key_nz || this.addressfinderConfig.key_au || this.addressfinderConfig.key,
      defaultCountryCode: this.addressfinderConfig.phone.defaultCountryCode,
      countrySelect: "#billing_country"
    }

    conf.rules = this.safeParseJSONObject(this.addressfinderConfig.phone.rules)

    new AddressfinderPhone.Phone.Widget("input[type=tel]", conf.key, conf);

    if (this.countryElement) {
      this.phoneLoaded = true
      this.previousCountry = this.countryElement.value
    }
  }

  // Phone widget needs to know there has been a change.
  checkForCountryChange() {
    if (this.phoneLoaded && this.countryElement.value != this.previousCountry) {
      try {
        this.previousCountry = this.countryElement.value
        this.countryElement.dispatchEvent(new Event("change", { bubbles: false }));
      } catch (error) {
        // do nothing
      }
    }
  }
}
