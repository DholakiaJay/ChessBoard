bpFour1 = document.getElementsByClassName("cb29")[0];
bpFour11 = document.getElementsByClassName("cb29")[1];
bpFour12 = document.getElementsByClassName("cb29")[2];
bpFour13 = document.getElementsByClassName("cb29")[3];
bpFour14 = document.getElementsByClassName("cb29")[4];
bpFour15 = document.getElementsByClassName("cb29")[5];
bpFour16 = document.getElementsByClassName("cb29")[6];
bpFour17 = document.getElementsByClassName("cb29")[7];

//Row 2
bpFour2 = document.getElementsByClassName("cb29")[8];
bpFour21 = document.getElementsByClassName("cb29")[9];
bpFour22 = document.getElementsByClassName("cb29")[10];
bpFour23 = document.getElementsByClassName("cb29")[11];
bpFour24 = document.getElementsByClassName("cb29")[12];
bpFour25 = document.getElementsByClassName("cb29")[13];
bpFour26 = document.getElementsByClassName("cb29")[14];
bpFour27 = document.getElementsByClassName("cb29")[15];
//Row 3
bpFour3 = document.getElementsByClassName("cb29")[16];
bpFour31 = document.getElementsByClassName("cb29")[17];
bpFour32 = document.getElementsByClassName("cb29")[18];
bpFour33 = document.getElementsByClassName("cb29")[19];
bpFour34 = document.getElementsByClassName("cb29")[20];
bpFour35 = document.getElementsByClassName("cb29")[21];
bpFour36 = document.getElementsByClassName("cb29")[22];
bpFour37 = document.getElementsByClassName("cb29")[23];
//Row 4
bpFour4 = document.getElementsByClassName("cb29")[24];
bpFour41 = document.getElementsByClassName("cb29")[25];
bpFour42 = document.getElementsByClassName("cb29")[26];
bpFour43 = document.getElementsByClassName("cb29")[27];
bpFour44 = document.getElementsByClassName("cb29")[28];
bpFour45 = document.getElementsByClassName("cb29")[29];
bpFour46 = document.getElementsByClassName("cb29")[30];
bpFour47 = document.getElementsByClassName("cb29")[31];
//Row 5
bpFour5 = document.getElementsByClassName("cb29")[32];
bpFour51 = document.getElementsByClassName("cb29")[33];
bpFour52 = document.getElementsByClassName("cb29")[34];
bpFour53 = document.getElementsByClassName("cb29")[35];
bpFour54 = document.getElementsByClassName("cb29")[36];
bpFour55 = document.getElementsByClassName("cb29")[37];
bpFour56 = document.getElementsByClassName("cb29")[38];
bpFour57 = document.getElementsByClassName("cb29")[39];
//Row 6
bpFour6 = document.getElementsByClassName("cb29")[40];
bpFour61 = document.getElementsByClassName("cb29")[41];
bpFour62 = document.getElementsByClassName("cb29")[42];
bpFour63 = document.getElementsByClassName("cb29")[43];
bpFour64 = document.getElementsByClassName("cb29")[44];
bpFour65 = document.getElementsByClassName("cb29")[45];
bpFour66 = document.getElementsByClassName("cb29")[46];
bpFour67 = document.getElementsByClassName("cb29")[47];
//Row 7
bpFour7 = document.getElementsByClassName("cb29")[48];
bpFour71 = document.getElementsByClassName("cb29")[49];
bpFour72 = document.getElementsByClassName("cb29")[50];
bpFour73 = document.getElementsByClassName("cb29")[51];
bpFour74 = document.getElementsByClassName("cb29")[52];
bpFour75 = document.getElementsByClassName("cb29")[53];
bpFour76 = document.getElementsByClassName("cb29")[54];
bpFour77 = document.getElementsByClassName("cb29")[55];
//Row 6
bpFour8 = document.getElementsByClassName("cb29")[56];
bpFour81 = document.getElementsByClassName("cb29")[57];
bpFour82 = document.getElementsByClassName("cb29")[58];
bpFour83 = document.getElementsByClassName("cb29")[59];
bpFour84 = document.getElementsByClassName("cb29")[60];
bpFour85 = document.getElementsByClassName("cb29")[61];
bpFour86 = document.getElementsByClassName("cb29")[62];
bpFour87 = document.getElementsByClassName("cb29")[63];

bp4.onclick = () => {
  bp4.style.cssText = "color:blue;";
   bp4.classList.add("kookri");
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
  cb30.style.cssText = `display:none;`;
  cb31.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:none;`;
  cb29.style.cssText = `display:initial;`;
  cb29.classList.add('aniblue');

};

bpFour1.addEventListener("click", () => {
  tr[1].children[1].append(bp4);
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour11.addEventListener("click", () => {
  tr[1].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour12.addEventListener("click", () => {
  tr[1].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour13.addEventListener("click", () => {
  tr[1].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour14.addEventListener("click", () => {
  tr[1].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour15.addEventListener("click", () => {
  tr[1].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour16.addEventListener("click", () => {
  tr[1].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour17.addEventListener("click", () => {
  tr[1].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

// Row 2

bpFour2.addEventListener("click", () => {
  tr[2].children[1].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour21.addEventListener("click", () => {
  tr[2].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour22.addEventListener("click", () => {
  tr[2].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour23.addEventListener("click", () => {
  tr[2].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour24.addEventListener("click", () => {
  tr[2].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour25.addEventListener("click", () => {
  tr[2].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour26.addEventListener("click", () => {
  tr[2].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour27.addEventListener("click", () => {
  tr[2].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
// Row 3

bpFour3.addEventListener("click", () => {
  tr[3].children[1].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour31.addEventListener("click", () => {
  tr[3].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour32.addEventListener("click", () => {
  tr[3].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour33.addEventListener("click", () => {
  tr[3].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour34.addEventListener("click", () => {
  tr[3].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour35.addEventListener("click", () => {
  tr[3].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour36.addEventListener("click", () => {
  tr[3].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour37.addEventListener("click", () => {
  tr[3].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
// Row 4

bpFour4.addEventListener("click", () => {
  tr[4].children[1].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour41.addEventListener("click", () => {
  tr[4].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour42.addEventListener("click", () => {
  tr[4].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour43.addEventListener("click", () => {
  tr[4].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour44.addEventListener("click", () => {
  tr[4].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour45.addEventListener("click", () => {
  tr[4].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour46.addEventListener("click", () => {
  tr[4].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour47.addEventListener("click", () => {
  tr[4].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
// Row 5

bpFour5.addEventListener("click", () => {
  tr[5].children[1].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour51.addEventListener("click", () => {
  tr[5].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour52.addEventListener("click", () => {
  tr[5].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour53.addEventListener("click", () => {
  tr[5].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour54.addEventListener("click", () => {
  tr[5].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour55.addEventListener("click", () => {
  tr[5].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour56.addEventListener("click", () => {
  tr[5].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour57.addEventListener("click", () => {
  tr[5].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
// Row 6

bpFour6.addEventListener("click", () => {
  tr[6].children[1].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour61.addEventListener("click", () => {
  tr[6].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour62.addEventListener("click", () => {
  tr[6].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour63.addEventListener("click", () => {
  tr[6].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour64.addEventListener("click", () => {
  tr[6].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour65.addEventListener("click", () => {
  tr[6].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour66.addEventListener("click", () => {
  tr[6].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour67.addEventListener("click", () => {
  tr[6].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
// Row 7

bpFour7.addEventListener("click", () => {
  tr[7].children[1].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour71.addEventListener("click", () => {
  tr[7].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour72.addEventListener("click", () => {
  tr[7].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour73.addEventListener("click", () => {
  tr[7].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour74.addEventListener("click", () => {
  tr[7].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour75.addEventListener("click", () => {
  tr[7].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour76.addEventListener("click", () => {
  tr[7].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour77.addEventListener("click", () => {
  tr[7].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
// Row 8

bpFour8.addEventListener("click", () => {
  tr[8].children[1].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});

bpFour81.addEventListener("click", () => {
  tr[8].children[2].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour82.addEventListener("click", () => {
  tr[8].children[3].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour83.addEventListener("click", () => {
  tr[8].children[4].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour84.addEventListener("click", () => {
  tr[8].children[5].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour85.addEventListener("click", () => {
  tr[8].children[6].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour86.addEventListener("click", () => {
  tr[8].children[7].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
bpFour87.addEventListener("click", () => {
  tr[8].children[8].append(bp4);
  
  cb29.classList.remove('aniblue');
  bp4.classList.remove('kookri');
});
