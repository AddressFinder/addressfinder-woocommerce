export default class EmailWidget {
  constructor(document, addressfinderConfig, safeParseJSONObject){
    this.document = document
    this.addressfinderConfig = addressfinderConfig
    this.safeParseJSONObject = safeParseJSONObject
  }

  loadEmailWidget() {
    let s = this.document.createElement("script");
    s.src = 'https://api.addressfinder.io/assets/email/v2/widget.js'
    s.async = 1;
    s.onload = this._initialiseEmailWidget.bind(this)
    this.document.body.appendChild(s)
  }

  _initialiseEmailWidget(){
    let conf = {
      key: this.addressfinderConfig.key_nz || this.addressfinderConfig.key_au || this.addressfinderConfig.key
    }

    conf.rules = this.safeParseJSONObject(this.addressfinderConfig.email.rules)

    new AddressfinderEmail.Email.Widget("input[type=email]", conf.key, conf);
  };
}
