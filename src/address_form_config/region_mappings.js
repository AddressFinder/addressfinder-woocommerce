export default (state_field) => {
  const element = document.querySelector(state_field)

  const three_letter_mapping = {
    'Auckland Region': 'AUK',
    'Bay of Plenty Region': 'BOP',
    'Canterbury Region': 'CAN',
    'Gisborne Region': 'GIS',
    'Hawke\'s Bay Region': 'HKB',
    'Manawatu-Wanganui Region': 'MWT',
    'Marlborough Region': 'MBH',
    'Nelson Region': 'NSN',
    'Northland Region': 'NTL',
    'Otago Region': 'OTA',
    'Southland Region': 'STL',
    'Taranaki Region': 'TKI',
    'Tasman Region': 'TAS',
    'Waikato Region': 'WKO',
    'Wellington Region': 'WGN',
    'West Coast Region': 'WTC',
    'No Region (Chatham Islands)': null
  };

  const two_letter_mapping = {
    'Auckland Region': 'AK',
    'Bay of Plenty Region': 'BP',
    'Canterbury Region': 'CT',
    'Gisborne Region': 'GI',
    'Hawke\'s Bay Region': 'HB',
    'Manawatu-Wanganui Region': 'MW',
    'Marlborough Region': 'MB',
    'Nelson Region': 'NS',
    'Northland Region': 'NL',
    'Otago Region': 'OT',
    'Southland Region': 'SL',
    'Taranaki Region': 'TK',
    'Tasman Region': 'TM',
    'Waikato Region': 'WA',
    'Wellington Region': 'WE',
    'West Coast Region': 'WC',
    'No Region (Chatham Islands)': null
  };

  if (element && Array.from(element.querySelectorAll("option")).map((el) => el.value).filter((val) => val.length > 0)[0]?.length == 2) {
    return two_letter_mapping;
  }

  return three_letter_mapping;
}
