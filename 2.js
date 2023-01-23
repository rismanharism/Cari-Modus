function cariModus(arr) {
    let result = -1;
  
    for (const angka of arr) {
      let jumlahAngka = 0;
      for (const countAngka of arr) {
        if (angka === countAngka) {
          jumlahAngka++;
        }
        if (jumlahAngka === arr.length) {
          return result;
        }
      }
      if (jumlahAngka > 1 && jumlahAngka > result) {
        result = angka;
      }
    }
  
    return result;
  }