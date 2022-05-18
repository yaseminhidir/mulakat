var duzgunAgac = {
  left: {
    left: {
      left: null,
      right: null,
    },
    righ: {
      left: null,
      right: null,
    },
  },
  right: {
    left: {
      left: {
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      left: null,
      right: null,
    },
  },
};

var bozukAgacYaprak2 = {
  left: null,

  right: null,
};
bozukAgacYaprak2.left = bozukAgacYaprak2;

function agacKontrol(agac, dahil = []) {
  if (agac == null) {
    return true;
  }
  if (dahil.includes(agac)) {
    return false;
  }
  dahil.push(agac);

  // recursive
  var solDogruluk = agacKontrol(agac.left, dahil);
  console.log(agac);
  if (!solDogruluk) {
    return false;
  }
  var sagDogruluk = agacKontrol(agac.right, dahil);

  if (!sagDogruluk) {
    return false;
  }

  return true;
}
console.log("Bozuk Agac Sonuc : ", agacKontrol(bozukAgacYaprak2)); // false demeli
console.log("Duzdun Agac Sonuc : ", agacKontrol(duzgunAgac)); // true demeli
