function buyukUnlu(word) {
  word = word.toLowerCase();
  console.log(word);
  var ince = ["e", "i", "ü", "ö"];
  var kalin = ["a", "o", "u", "ı"];
  var array = word.split("");
  var sesliTuru = "";
  for (const a of array) {
    if (ince.includes(a) || kalin.includes(a)) {
      if (sesliTuru == "") {
        if (ince.includes(a)) {
          sesliTuru = "ince";
          continue;
        }
        if (kalin.includes(a)) {
          sesliTuru = "kalin";
          continue;
        }
      } else {
        if (sesliTuru == "ince") {
          if (!ince.includes(a)) {
            console.log(sesliTuru);
            console.log(a);
            return false;
          }
        }
        if (sesliTuru == "kalin") {
          if (!kalin.includes(a)) {
            console.log(sesliTuru);
            console.log(a);
            return false;
          }
        }
      }
    }
  }
  return true;
}
