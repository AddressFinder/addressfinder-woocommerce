export default (form_type) => {
  if (form_type == 'blockForm') {
    const block_form_mapping = {
      'IE': {
        "County Cavan": "CN",
        "County Clare": "CE",
        "County Westmeath": "WH",
        "County Longford": "LD",
        "County Munster": "M",
        "County Meath": "MH",
        "County Dublin": "DU",
        "County Carlow": "CW",
        "County Kerry": "KY",
        "County Kilkenny": "KK",
        "County Kildare": "KE",
        "County Wicklow": "WW",
        "County Connaught": "C",
        "County Cork": "CO",
        "County Donegal": "D",
        "County Galway": "G",
        "County Leinster": "L",
        "County Laois": "LS",
        "County Leitrim": "LM",
        "County Limerick": "LK",
        "County Wexford": "WX",
        "County Louth": "LH",
        "County Mayo": "MO",
        "County Monaghan": "MN",
        "County Offaly": "OY",
        "County Waterford": "WD",
        "County Roscommon": "RN",
        "County Sligo": "SO",
        "County Tipperary": "TA",
        "County Ulster": "U"
      }
    };

    return block_form_mapping;
  } else {
    const standard_form_mapping = {
      'IE': {
        "County Cavan": "CN",
        "County Clare": "CE",
        "County Westmeath": "WH",
        "County Longford": "LD",
        "County Munster": "M",
        "County Meath": "MH",
        "County Dublin": "D",
        "County Carlow": "CW",
        "County Kerry": "KY",
        "County Kilkenny": "KK",
        "County Kildare": "KE",
        "County Wicklow": "WW",
        "County Connaught": "C",
        "County Cork": "CO",
        "County Donegal": "DL",
        "County Galway": "G",
        "County Leinster": "L",
        "County Laois": "LS",
        "County Leitrim": "LM",
        "County Limerick": "LK",
        "County Wexford": "WX",
        "County Louth": "LH",
        "County Mayo": "MO",
        "County Monaghan": "MN",
        "County Offaly": "OY",
        "County Waterford": "WD",
        "County Roscommon": "RN",
        "County Sligo": "SO",
        "County Tipperary": "TA",
        "County Ulster": "U"
      }
    };

    return standard_form_mapping;
  }
}
