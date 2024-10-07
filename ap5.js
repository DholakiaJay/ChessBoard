apFive1 = document.getElementsByClassName("cb14")[0];
apFive11 = document.getElementsByClassName("cb14")[1];
apFive12 = document.getElementsByClassName("cb14")[2];
apFive13 = document.getElementsByClassName("cb14")[3];
apFive14 = document.getElementsByClassName("cb14")[4];
apFive15 = document.getElementsByClassName("cb14")[5];
apFive16 = document.getElementsByClassName("cb14")[6];
apFive17 = document.getElementsByClassName("cb14")[7];

//Row 2
apFive2 = document.getElementsByClassName("cb14")[8];
apFive21 = document.getElementsByClassName("cb14")[9];
apFive22 = document.getElementsByClassName("cb14")[10];
apFive23 = document.getElementsByClassName("cb14")[11];
apFive24 = document.getElementsByClassName("cb14")[12];
apFive25 = document.getElementsByClassName("cb14")[13];
apFive26 = document.getElementsByClassName("cb14")[14];
apFive27 = document.getElementsByClassName("cb14")[15];
//Row 3
apFive3 = document.getElementsByClassName("cb14")[16];
apFive31 = document.getElementsByClassName("cb14")[17];
apFive32 = document.getElementsByClassName("cb14")[18];
apFive33 = document.getElementsByClassName("cb14")[19];
apFive34 = document.getElementsByClassName("cb14")[20];
apFive35 = document.getElementsByClassName("cb14")[21];
apFive36 = document.getElementsByClassName("cb14")[22];
apFive37 = document.getElementsByClassName("cb14")[23];
//Row 4
apFive4 = document.getElementsByClassName("cb14")[24];
apFive41 = document.getElementsByClassName("cb14")[25];
apFive42 = document.getElementsByClassName("cb14")[26];
apFive43 = document.getElementsByClassName("cb14")[27];
apFive44 = document.getElementsByClassName("cb14")[28];
apFive45 = document.getElementsByClassName("cb14")[29];
apFive46 = document.getElementsByClassName("cb14")[30];
apFive47 = document.getElementsByClassName("cb14")[31];
//Row 5
apFive5 = document.getElementsByClassName("cb14")[32];
apFive51 = document.getElementsByClassName("cb14")[33];
apFive52 = document.getElementsByClassName("cb14")[34];
apFive53 = document.getElementsByClassName("cb14")[35];
apFive54 = document.getElementsByClassName("cb14")[36];
apFive55 = document.getElementsByClassName("cb14")[37];
apFive56 = document.getElementsByClassName("cb14")[38];
apFive57 = document.getElementsByClassName("cb14")[39];
//Row 6
apFive6 = document.getElementsByClassName("cb14")[40];
apFive61 = document.getElementsByClassName("cb14")[41];
apFive62 = document.getElementsByClassName("cb14")[42];
apFive63 = document.getElementsByClassName("cb14")[43];
apFive64 = document.getElementsByClassName("cb14")[44];
apFive65 = document.getElementsByClassName("cb14")[45];
apFive66 = document.getElementsByClassName("cb14")[46];
apFive67 = document.getElementsByClassName("cb14")[47];
//Row 7
apFive7 = document.getElementsByClassName("cb14")[48];
apFive71 = document.getElementsByClassName("cb14")[49];
apFive72 = document.getElementsByClassName("cb14")[50];
apFive73 = document.getElementsByClassName("cb14")[51];
apFive74 = document.getElementsByClassName("cb14")[52];
apFive75 = document.getElementsByClassName("cb14")[53];
apFive76 = document.getElementsByClassName("cb14")[54];
apFive77 = document.getElementsByClassName("cb14")[55];
//Row 6
apFive8 = document.getElementsByClassName("cb14")[56];
apFive81 = document.getElementsByClassName("cb14")[57];
apFive82 = document.getElementsByClassName("cb14")[58];
apFive83 = document.getElementsByClassName("cb14")[59];
apFive84 = document.getElementsByClassName("cb14")[60];
apFive85 = document.getElementsByClassName("cb14")[61];
apFive86 = document.getElementsByClassName("cb14")[62];
apFive87 = document.getElementsByClassName("cb14")[63];

ap5.onclick = () => {
  ap5.style.cssText = "color:red;";
  ap5.classList.add('kookri');
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
  cb12.style.cssText = `display:none;`;
  cb13.style.cssText = `display:none;`;
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
  cb30.style.cssText = `display:none;`;
  cb31.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:none;`;
  cb14.style.cssText = `display:initial;`;
  cb14.classList.add('anired');
};

apFive1.addEventListener("click", () => {
  tr[1].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive11.addEventListener("click", () => {
  tr[1].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive12.addEventListener("click", () => {
  tr[1].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive13.addEventListener("click", () => {
  tr[1].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive14.addEventListener("click", () => {
  tr[1].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive15.addEventListener("click", () => {
  tr[1].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive16.addEventListener("click", () => {
  tr[1].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive17.addEventListener("click", () => {
  tr[1].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

// Row 2

apFive2.addEventListener("click", () => {
  tr[2].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive21.addEventListener("click", () => {
  tr[2].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive22.addEventListener("click", () => {
  tr[2].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive23.addEventListener("click", () => {
  tr[2].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive24.addEventListener("click", () => {
  tr[2].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive25.addEventListener("click", () => {
  tr[2].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive26.addEventListener("click", () => {
  tr[2].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive27.addEventListener("click", () => {
  tr[2].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
// Row 3

apFive3.addEventListener("click", () => {
  tr[3].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive31.addEventListener("click", () => {
  tr[3].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive32.addEventListener("click", () => {
  tr[3].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive33.addEventListener("click", () => {
  tr[3].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive34.addEventListener("click", () => {
  tr[3].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive35.addEventListener("click", () => {
  tr[3].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive36.addEventListener("click", () => {
  tr[3].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive37.addEventListener("click", () => {
  tr[3].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
// Row 4

apFive4.addEventListener("click", () => {
  tr[4].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive41.addEventListener("click", () => {
  tr[4].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive42.addEventListener("click", () => {
  tr[4].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive43.addEventListener("click", () => {
  tr[4].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive44.addEventListener("click", () => {
  tr[4].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive45.addEventListener("click", () => {
  tr[4].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive46.addEventListener("click", () => {
  tr[4].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive47.addEventListener("click", () => {
  tr[4].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
// Row 5

apFive5.addEventListener("click", () => {
  tr[5].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive51.addEventListener("click", () => {
  tr[5].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive52.addEventListener("click", () => {
  tr[5].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive53.addEventListener("click", () => {
  tr[5].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive54.addEventListener("click", () => {
  tr[5].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive55.addEventListener("click", () => {
  tr[5].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive56.addEventListener("click", () => {
  tr[5].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive57.addEventListener("click", () => {
  tr[5].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
// Row 6

apFive6.addEventListener("click", () => {
  tr[6].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive61.addEventListener("click", () => {
  tr[6].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive62.addEventListener("click", () => {
  tr[6].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive63.addEventListener("click", () => {
  tr[6].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive64.addEventListener("click", () => {
  tr[6].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive65.addEventListener("click", () => {
  tr[6].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive66.addEventListener("click", () => {
  tr[6].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive67.addEventListener("click", () => {
  tr[6].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
// Row 7

apFive7.addEventListener("click", () => {
  tr[7].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive71.addEventListener("click", () => {
  tr[7].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive72.addEventListener("click", () => {
  tr[7].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive73.addEventListener("click", () => {
  tr[7].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive74.addEventListener("click", () => {
  tr[7].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive75.addEventListener("click", () => {
  tr[7].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive76.addEventListener("click", () => {
  tr[7].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive77.addEventListener("click", () => {
  tr[7].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
// Row 8

apFive8.addEventListener("click", () => {
  tr[8].children[1].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});

apFive81.addEventListener("click", () => {
  tr[8].children[2].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive82.addEventListener("click", () => {
  tr[8].children[3].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive83.addEventListener("click", () => {
  tr[8].children[4].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive84.addEventListener("click", () => {
  tr[8].children[5].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive85.addEventListener("click", () => {
  tr[8].children[6].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive86.addEventListener("click", () => {
  tr[8].children[7].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
apFive87.addEventListener("click", () => {
  tr[8].children[8].append(ap5);
  cb14.classList.remove('anired');
  ap5.classList.remove('kookri');
});
