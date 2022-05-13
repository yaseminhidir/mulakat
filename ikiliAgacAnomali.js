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
        righ: null,
      },
      right: null,
    },
    right: {
      left: null,
      right: null,
    },
  },
};

var bozukAgacYaprak = {
  left: null,
  right: null,
};

var bozukAgac = {
  left: {
    left: {
      left: bozukAgacYaprak,
      right: null,
    },
    righ: {
      left: null,
      right: null,
    },
  },
  right: {
    left: bozukAgacYaprak,
    right: {
      left: null,
      right: bozukAgacYaprak,
    },
  },
};

function agacKontrol(agac, dahil = []) {
  if (agac == null) {
    return true;
  }
  if (dahil.includes(agac)) {
    return false;
  }

  // recursive
  var solDogruluk = agacKontrol(agac.left, dahil);

  if (!solDogruluk) {
    return false;
  }
  var sagDogruluk = agacKontrol(agac.right, dahil);

  if (!sagDogruluk) {
    return false;
  }
  dahil.push(agac);
  return true;
}
console.log("Bozuk Agac Sonuc : ", agacKontrol(bozukAgac)); // false demeli
console.log("Duzdun Agac Sonuc : ", agacKontrol(duzgunAgac)); // true demeli
