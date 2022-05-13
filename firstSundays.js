var ayGunleri = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var current = 1; // gün sayısı
var sundays = 0;
var years = [];

for (var yil = 1900; yil <= 2000; yil++) {
  for (var ay = 1; ay <= 12; ay++) {
    var eklenecekGunler = ayGunleri[ay - 1];

    if (ay == 2 && yil % 4 == 0 && (yil % 100 == 0 ? yil % 400 == 0 : true)) {
      //Yüz yıl başlarında şubat ayı 29 çekmediği için 400 'e bölünebilirliği kontrol edildi.
      eklenecekGunler = 29;
    }
    if (current % 7 == 0) {
      sundays += 1;
      years.push("01/" + ay + "/" + yil);
    }

    current += eklenecekGunler;
  }
}
console.log(years, sundays);
