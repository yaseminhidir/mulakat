function buyukUnlu(word) {
  let kalinSayisi = 0;
  let inceSayisi = 0;
  let kalin = ["a", "ı", "o", "u"];
  let ince = ["e", "i", "ö", "ü"];
  let harfler = word.split("");

  for (const harf of harfler) {
    if (kalin.includes(harf)) {
      kalinSayisi += 1;
      continue;
    }
    if (ince.includes(harf)) {
      inceSayisi += 1;
      continue;
    }
  }

  if (inceSayisi > 0 && kalinSayisi > 0) {
    alert("büyük ünlü uyumuna uyulmamıştır");
  } else if (inceSayisi > 0 && kalinSayisi == 0) {
    alert("büyük ünlü uyumuna uyulmuştur");
  } else if (inceSayisi == 0 && kalinSayisi > 0) {
    alert("büyük ünlü uyumuna uyulmuştur");
  }
}

