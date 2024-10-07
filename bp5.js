bpFive1 = document.getElementsByClassName("cb30")[0];
bpFive11 = document.getElementsByClassName("cb30")[1];
bpFive12 = document.getElementsByClassName("cb30")[2];
bpFive13 = document.getElementsByClassName("cb30")[3];
bpFive14 = document.getElementsByClassName("cb30")[4];
bpFive15 = document.getElementsByClassName("cb30")[5];
bpFive16 = document.getElementsByClassName("cb30")[6];
bpFive17 = document.getElementsByClassName("cb30")[7];

//Row 2
bpFive2 = document.getElementsByClassName("cb30")[8];
bpFive21 = document.getElementsByClassName("cb30")[9];
bpFive22 = document.getElementsByClassName("cb30")[10];
bpFive23 = document.getElementsByClassName("cb30")[11];
bpFive24 = document.getElementsByClassName("cb30")[12];
bpFive25 = document.getElementsByClassName("cb30")[13];
bpFive26 = document.getElementsByClassName("cb30")[14];
bpFive27 = document.getElementsByClassName("cb30")[15];
//Row 3
bpFive3 = document.getElementsByClassName("cb30")[16];
bpFive31 = document.getElementsByClassName("cb30")[17];
bpFive32 = document.getElementsByClassName("cb30")[18];
bpFive33 = document.getElementsByClassName("cb30")[19];
bpFive34 = document.getElementsByClassName("cb30")[20];
bpFive35 = document.getElementsByClassName("cb30")[21];
bpFive36 = document.getElementsByClassName("cb30")[22];
bpFive37 = document.getElementsByClassName("cb30")[23];
//Row 4
bpFive4 = document.getElementsByClassName("cb30")[24];
bpFive41 = document.getElementsByClassName("cb30")[25];
bpFive42 = document.getElementsByClassName("cb30")[26];
bpFive43 = document.getElementsByClassName("cb30")[27];
bpFive44 = document.getElementsByClassName("cb30")[28];
bpFive45 = document.getElementsByClassName("cb30")[29];
bpFive46 = document.getElementsByClassName("cb30")[30];
bpFive47 = document.getElementsByClassName("cb30")[31];
//Row 5
bpFive5 = document.getElementsByClassName("cb30")[32];
bpFive51 = document.getElementsByClassName("cb30")[33];
bpFive52 = document.getElementsByClassName("cb30")[34];
bpFive53 = document.getElementsByClassName("cb30")[35];
bpFive54 = document.getElementsByClassName("cb30")[36];
bpFive55 = document.getElementsByClassName("cb30")[37];
bpFive56 = document.getElementsByClassName("cb30")[38];
bpFive57 = document.getElementsByClassName("cb30")[39];
//Row 6
bpFive6 = document.getElementsByClassName("cb30")[40];
bpFive61 = document.getElementsByClassName("cb30")[41];
bpFive62 = document.getElementsByClassName("cb30")[42];
bpFive63 = document.getElementsByClassName("cb30")[43];
bpFive64 = document.getElementsByClassName("cb30")[44];
bpFive65 = document.getElementsByClassName("cb30")[45];
bpFive66 = document.getElementsByClassName("cb30")[46];
bpFive67 = document.getElementsByClassName("cb30")[47];
//Row 7
bpFive7 = document.getElementsByClassName("cb30")[48];
bpFive71 = document.getElementsByClassName("cb30")[49];
bpFive72 = document.getElementsByClassName("cb30")[50];
bpFive73 = document.getElementsByClassName("cb30")[51];
bpFive74 = document.getElementsByClassName("cb30")[52];
bpFive75 = document.getElementsByClassName("cb30")[53];
bpFive76 = document.getElementsByClassName("cb30")[54];
bpFive77 = document.getElementsByClassName("cb30")[55];
//Row 6
bpFive8 = document.getElementsByClassName("cb30")[56];
bpFive81 = document.getElementsByClassName("cb30")[57];
bpFive82 = document.getElementsByClassName("cb30")[58];
bpFive83 = document.getElementsByClassName("cb30")[59];
bpFive84 = document.getElementsByClassName("cb30")[60];
bpFive85 = document.getElementsByClassName("cb30")[61];
bpFive86 = document.getElementsByClassName("cb30")[62];
bpFive87 = document.getElementsByClassName("cb30")[63];

bp5.onclick = () => {
  bp5.style.cssText = "color:blue;";
  bp5.classList.add('kookri');
  cb2.style.cssText = `display:none;`;
  cb3.style.cssText = "display:none;";
  cb4.style.cssText = `display:none;`;
  cb5.style.cssText = `display:none;`;
  cb6.style.cssText = `display:none;`;
  cb7.style.cssText = `display:none;`;
  cb8.style.cssText = `display:none;`;
  cb9.style.cssText = `display:none;`;
  cb10.style.cssText = `display:none;`;
  cb11.style.cssText = `display:none;`;
  cb12.style.cssText = `display:none`;
  cb13.style.cssText = `display:none;`;
  cb14.style.cssText = `display:none;`;
  cb15.style.cssText = `display:none;`;
  cb16.style.cssText = `display:none;`;
  cb17.style.cssText = `display:none;`;
  cb18.style.cssText = `display:none;`;
  cb19.style.cssText = `display:none;`;
  cb20.style.cssText = `display:none;`;
  cb21.style.cssText = `display:none;`;
  cb22.style.cssText = `display:none;`;
  cb23.style.cssText = `display:none;`;
  cb24.style.cssText = `display:none;`;
  cb25.style.cssText = `display:none;`;
  cb26.style.cssText = `display:none;`;
  cb27.style.cssText = `display:none;`;
  cb28.style.cssText = `display:none;`;
  cb29.style.cssText = `display:none;`;
  cb31.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:none;`;
  cb30.style.cssText = `display:initial;`;
  cb30.classList.add('aniblue');

};

bpFive1.addEventListener("click", () => {
  tr[1].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive11.addEventListener("click", () => {
  tr[1].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive12.addEventListener("click", () => {
  tr[1].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive13.addEventListener("click", () => {
  tr[1].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive14.addEventListener("click", () => {
  tr[1].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive15.addEventListener("click", () => {
  tr[1].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive16.addEventListener("click", () => {
  tr[1].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive17.addEventListener("click", () => {
  tr[1].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

// Row 2

bpFive2.addEventListener("click", () => {
  tr[2].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive21.addEventListener("click", () => {
  tr[2].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive22.addEventListener("click", () => {
  tr[2].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive23.addEventListener("click", () => {
  tr[2].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive24.addEventListener("click", () => {
  tr[2].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive25.addEventListener("click", () => {
  tr[2].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive26.addEventListener("click", () => {
  tr[2].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive27.addEventListener("click", () => {
  tr[2].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
// Row 3

bpFive3.addEventListener("click", () => {
  tr[3].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive31.addEventListener("click", () => {
  tr[3].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive32.addEventListener("click", () => {
  tr[3].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive33.addEventListener("click", () => {
  tr[3].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive34.addEventListener("click", () => {
  tr[3].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive35.addEventListener("click", () => {
  tr[3].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive36.addEventListener("click", () => {
  tr[3].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive37.addEventListener("click", () => {
  tr[3].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
// Row 4

bpFive4.addEventListener("click", () => {
  tr[4].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive41.addEventListener("click", () => {
  tr[4].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive42.addEventListener("click", () => {
  tr[4].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive43.addEventListener("click", () => {
  tr[4].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive44.addEventListener("click", () => {
  tr[4].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive45.addEventListener("click", () => {
  tr[4].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive46.addEventListener("click", () => {
  tr[4].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive47.addEventListener("click", () => {
  tr[4].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
// Row 5

bpFive5.addEventListener("click", () => {
  tr[5].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive51.addEventListener("click", () => {
  tr[5].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive52.addEventListener("click", () => {
  tr[5].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive53.addEventListener("click", () => {
  tr[5].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive54.addEventListener("click", () => {
  tr[5].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive55.addEventListener("click", () => {
  tr[5].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive56.addEventListener("click", () => {
  tr[5].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive57.addEventListener("click", () => {
  tr[5].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
// Row 6

bpFive6.addEventListener("click", () => {
  tr[6].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive61.addEventListener("click", () => {
  tr[6].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive62.addEventListener("click", () => {
  tr[6].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive63.addEventListener("click", () => {
  tr[6].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive64.addEventListener("click", () => {
  tr[6].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive65.addEventListener("click", () => {
  tr[6].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive66.addEventListener("click", () => {
  tr[6].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive67.addEventListener("click", () => {
  tr[6].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
// Row 7

bpFive7.addEventListener("click", () => {
  tr[7].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive71.addEventListener("click", () => {
  tr[7].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive72.addEventListener("click", () => {
  tr[7].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive73.addEventListener("click", () => {
  tr[7].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive74.addEventListener("click", () => {
  tr[7].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive75.addEventListener("click", () => {
  tr[7].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive76.addEventListener("click", () => {
  tr[7].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive77.addEventListener("click", () => {
  tr[7].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
// Row 8

bpFive8.addEventListener("click", () => {
  tr[8].children[1].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});

bpFive81.addEventListener("click", () => {
  tr[8].children[2].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive82.addEventListener("click", () => {
  tr[8].children[3].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive83.addEventListener("click", () => {
  tr[8].children[4].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive84.addEventListener("click", () => {
  tr[8].children[5].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive85.addEventListener("click", () => {
  tr[8].children[6].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive86.addEventListener("click", () => {
  tr[8].children[7].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
bpFive87.addEventListener("click", () => {
  tr[8].children[8].append(bp5);
  cb30.classList.remove('aniblue');
  bp5.classList.remove('kookri');
});
