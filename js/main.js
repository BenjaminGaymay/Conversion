function convert() {
  var convert_tab = {
    "EURUSD": 1.1258,
    "USDEUR": 0.8883,
    "EURGPB": 0.8683,
    "GPBEUR": 1.15166,
    "USDGPB": 0.771893,
    "GPBUSD": 1.29552,
    "EUREUR": 1,
    "USDUSD": 1,
    "GPBGPB": 1
  };
  var select_dep = document.getElementById("monnaie_dep");
  var monnaie_dep = select_dep.options[select_dep.selectedIndex].value;
  var select_arr = document.getElementById("monnaie_arr");
  var monnaie_arr = select_arr.options[select_arr.selectedIndex].value;
  var res = monnaie_dep + monnaie_arr;
  var somme = parseFloat(document.getElementById("somme").value);

  if (isNaN(somme) || somme === 0) {
    somme = 1;
  }
  res = convert_tab[res] * somme;
  res = Math.round(res * 100000) / 100000;
  document.getElementById("somme").value = "";
  document.getElementById("result").innerHTML = somme + " " + monnaie_dep + " = " + res + " " + monnaie_arr;
}
