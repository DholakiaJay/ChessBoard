apFour1= document.getElementsByClassName("cb13")[0];
apFour11 = document.getElementsByClassName("cb13")[1];
apFour12 = document.getElementsByClassName("cb13")[2];
apFour13 = document.getElementsByClassName("cb13")[3];
apFour14 = document.getElementsByClassName("cb13")[4];
apFour15 = document.getElementsByClassName("cb13")[5];
apFour16 = document.getElementsByClassName("cb13")[6];
apFour17 = document.getElementsByClassName("cb13")[7];

//Row 2
apFour2 = document.getElementsByClassName("cb13")[8];
apFour21 = document.getElementsByClassName("cb13")[9];
apFour22 = document.getElementsByClassName("cb13")[10];
apFour23 = document.getElementsByClassName("cb13")[11];
apFour24 = document.getElementsByClassName("cb13")[12];
apFour25 = document.getElementsByClassName("cb13")[13];
apFour26 = document.getElementsByClassName("cb13")[14];
apFour27 = document.getElementsByClassName("cb13")[15];
//Row 3
apFour3 = document.getElementsByClassName("cb13")[16];
apFour31 = document.getElementsByClassName("cb13")[17];
apFour32 = document.getElementsByClassName("cb13")[18];
apFour33 = document.getElementsByClassName("cb13")[19];
apFour34 = document.getElementsByClassName("cb13")[20];
apFour35 = document.getElementsByClassName("cb13")[21];
apFour36 = document.getElementsByClassName("cb13")[22];
apFour37 = document.getElementsByClassName("cb13")[23];
//Row 4
apFour4 = document.getElementsByClassName("cb13")[24];
apFour41 = document.getElementsByClassName("cb13")[25];
apFour42 = document.getElementsByClassName("cb13")[26];
apFour43 = document.getElementsByClassName("cb13")[27];
apFour44 = document.getElementsByClassName("cb13")[28];
apFour45 = document.getElementsByClassName("cb13")[29];
apFour46 = document.getElementsByClassName("cb13")[30];
apFour47 = document.getElementsByClassName("cb13")[31];
//Row 5
apFour5 = document.getElementsByClassName("cb13")[32];
apFour51 = document.getElementsByClassName("cb13")[33];
apFour52 = document.getElementsByClassName("cb13")[34];
apFour53 = document.getElementsByClassName("cb13")[35];
apFour54 = document.getElementsByClassName("cb13")[36];
apFour55 = document.getElementsByClassName("cb13")[37];
apFour56 = document.getElementsByClassName("cb13")[38];
apFour57 = document.getElementsByClassName("cb13")[39];
//Row 6
apFour6 = document.getElementsByClassName("cb13")[40];
apFour61 = document.getElementsByClassName("cb13")[41];
apFour62 = document.getElementsByClassName("cb13")[42];
apFour63 = document.getElementsByClassName("cb13")[43];
apFour64 = document.getElementsByClassName("cb13")[44];
apFour65 = document.getElementsByClassName("cb13")[45];
apFour66 = document.getElementsByClassName("cb13")[46];
apFour67 = document.getElementsByClassName("cb13")[47];
//Row 7
apFour7 = document.getElementsByClassName("cb13")[48];
apFour71 = document.getElementsByClassName("cb13")[49];
apFour72 = document.getElementsByClassName("cb13")[50];
apFour73 = document.getElementsByClassName("cb13")[51];
apFour74 = document.getElementsByClassName("cb13")[52];
apFour75 = document.getElementsByClassName("cb13")[53];
apFour76 = document.getElementsByClassName("cb13")[54];
apFour77 = document.getElementsByClassName("cb13")[55];
//Row 6
apFour8 = document.getElementsByClassName("cb13")[56];
apFour81 = document.getElementsByClassName("cb13")[57];
apFour82 = document.getElementsByClassName("cb13")[58];
apFour83 = document.getElementsByClassName("cb13")[59];
apFour84 = document.getElementsByClassName("cb13")[60];
apFour85 = document.getElementsByClassName("cb13")[61];
apFour86 = document.getElementsByClassName("cb13")[62];
apFour87 = document.getElementsByClassName("cb13")[63];

ap4.onclick = () => {
  ap4.style.cssText = "color:red;";
  ap4.classList.add('kookri');
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
  cb30.style.cssText = `display:none;`;
  cb31.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:none;`;
  cb13.style.cssText = `display:initial;`;
  cb13.classList.add('anired');
};

apFour1.addEventListener("click", () => {
  tr[1].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour11.addEventListener("click", () => {
  tr[1].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour12.addEventListener("click", () => {
  tr[1].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour13.addEventListener("click", () => {
  tr[1].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour14.addEventListener("click", () => {
  tr[1].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour15.addEventListener("click", () => {
  tr[1].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour16.addEventListener("click", () => {
  tr[1].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour17.addEventListener("click", () => {
  tr[1].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

// Row 2

apFour2.addEventListener("click", () => {
  tr[2].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour21.addEventListener("click", () => {
  tr[2].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour22.addEventListener("click", () => {
  tr[2].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour23.addEventListener("click", () => {
  tr[2].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour24.addEventListener("click", () => {
  tr[2].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour25.addEventListener("click", () => {
  tr[2].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour26.addEventListener("click", () => {
  tr[2].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour27.addEventListener("click", () => {
  tr[2].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
// Row 3

apFour3.addEventListener("click", () => {
  tr[3].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour31.addEventListener("click", () => {
  tr[3].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour32.addEventListener("click", () => {
  tr[3].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour33.addEventListener("click", () => {
  tr[3].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour34.addEventListener("click", () => {
  tr[3].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour35.addEventListener("click", () => {
  tr[3].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour36.addEventListener("click", () => {
  tr[3].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour37.addEventListener("click", () => {
  tr[3].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
// Row 4

apFour4.addEventListener("click", () => {
  tr[4].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour41.addEventListener("click", () => {
  tr[4].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour42.addEventListener("click", () => {
  tr[4].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour43.addEventListener("click", () => {
  tr[4].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour44.addEventListener("click", () => {
  tr[4].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour45.addEventListener("click", () => {
  tr[4].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour46.addEventListener("click", () => {
  tr[4].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour47.addEventListener("click", () => {
  tr[4].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
// Row 5

apFour5.addEventListener("click", () => {
  tr[5].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour51.addEventListener("click", () => {
  tr[5].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour52.addEventListener("click", () => {
  tr[5].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour53.addEventListener("click", () => {
  tr[5].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour54.addEventListener("click", () => {
  tr[5].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour55.addEventListener("click", () => {
  tr[5].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour56.addEventListener("click", () => {
  tr[5].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour57.addEventListener("click", () => {
  tr[5].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
// Row 6

apFour6.addEventListener("click", () => {
  tr[6].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour61.addEventListener("click", () => {
  tr[6].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour62.addEventListener("click", () => {
  tr[6].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour63.addEventListener("click", () => {
  tr[6].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour64.addEventListener("click", () => {
  tr[6].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour65.addEventListener("click", () => {
  tr[6].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour66.addEventListener("click", () => {
  tr[6].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour67.addEventListener("click", () => {
  tr[6].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
// Row 7

apFour7.addEventListener("click", () => {
  tr[7].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour71.addEventListener("click", () => {
  tr[7].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour72.addEventListener("click", () => {
  tr[7].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour73.addEventListener("click", () => {
  tr[7].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour74.addEventListener("click", () => {
  tr[7].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour75.addEventListener("click", () => {
  tr[7].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour76.addEventListener("click", () => {
  tr[7].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour77.addEventListener("click", () => {
  tr[7].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
// Row 8

apFour8.addEventListener("click", () => {
  tr[8].children[1].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});

apFour81.addEventListener("click", () => {
  tr[8].children[2].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour82.addEventListener("click", () => {
  tr[8].children[3].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour83.addEventListener("click", () => {
  tr[8].children[4].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour84.addEventListener("click", () => {
  tr[8].children[5].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour85.addEventListener("click", () => {
  tr[8].children[6].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour86.addEventListener("click", () => {
  tr[8].children[7].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
apFour87.addEventListener("click", () => {
  tr[8].children[8].append(ap4);
  cb13.classList.remove('anired');
  ap4.classList.remove('kookri');
});
