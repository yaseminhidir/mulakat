function buyukUnlu(word) {
  let kalinSayisi = 0;
  let inceSayisi = 0;
  let kalin = ["A", "I", "O", "U", "a", "ı", "o", "u"];
  let ince = ["E", "İ", "Ö", "Ü", "e", "i", "ö", "ü"];
  let harfler = word.split("");

  for (const harf of harfler) {
    if (kalin.includes(harf)) {
      kalinSayisi += 1;
      console.log("kalın Sayısı " + kalinSayisi);
    }
    if (ince.includes(harf)) {
      inceSayisi += 1;
      console.log("ince Sayısı " + inceSayisi);
    }
  }

  if (inceSayisi > 0 && kalinSayisi > 0) {
    return false;
  } else if (inceSayisi > 0 && kalinSayisi == 0) {
    return true;
  } else if (inceSayisi == 0 && kalinSayisi > 0) {
    return true;
  }
}
