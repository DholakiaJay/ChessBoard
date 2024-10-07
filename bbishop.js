bbs1 = document.getElementsByClassName("cb20")[0];
bbs11 = document.getElementsByClassName("cb20")[1];
bbs12 = document.getElementsByClassName("cb20")[2];
bbs13 = document.getElementsByClassName("cb20")[3];
bbs14 = document.getElementsByClassName("cb20")[4];
bbs15 = document.getElementsByClassName("cb20")[5];
bbs16 = document.getElementsByClassName("cb20")[6];
bbs17 = document.getElementsByClassName("cb20")[7];

//Row 2
bbs2 = document.getElementsByClassName("cb20")[8];
bbs21 = document.getElementsByClassName("cb20")[9];
bbs22 = document.getElementsByClassName("cb20")[10];
bbs23 = document.getElementsByClassName("cb20")[11];
bbs24 = document.getElementsByClassName("cb20")[12];
bbs25 = document.getElementsByClassName("cb20")[13];
bbs26 = document.getElementsByClassName("cb20")[14];
bbs27 = document.getElementsByClassName("cb20")[15];
//Row 3
bbs3 = document.getElementsByClassName("cb20")[16];
bbs31 = document.getElementsByClassName("cb20")[17];
bbs32 = document.getElementsByClassName("cb20")[18];
bbs33 = document.getElementsByClassName("cb20")[19];
bbs34 = document.getElementsByClassName("cb20")[20];
bbs35 = document.getElementsByClassName("cb20")[21];
bbs36 = document.getElementsByClassName("cb20")[22];
bbs37 = document.getElementsByClassName("cb20")[23];
//Row 4
bbs4 = document.getElementsByClassName("cb20")[24];
bbs41 = document.getElementsByClassName("cb20")[25];
bbs42 = document.getElementsByClassName("cb20")[26];
bbs43 = document.getElementsByClassName("cb20")[27];
bbs44 = document.getElementsByClassName("cb20")[28];
bbs45 = document.getElementsByClassName("cb20")[29];
bbs46 = document.getElementsByClassName("cb20")[30];
bbs47 = document.getElementsByClassName("cb20")[31];
//Row 5
bbs5 = document.getElementsByClassName("cb20")[32];
bbs51 = document.getElementsByClassName("cb20")[33];
bbs52 = document.getElementsByClassName("cb20")[34];
bbs53 = document.getElementsByClassName("cb20")[35];
bbs54 = document.getElementsByClassName("cb20")[36];
bbs55 = document.getElementsByClassName("cb20")[37];
bbs56 = document.getElementsByClassName("cb20")[38];
bbs57 = document.getElementsByClassName("cb20")[39];
//Row 6
bbs6 = document.getElementsByClassName("cb20")[40];
bbs61 = document.getElementsByClassName("cb20")[41];
bbs62 = document.getElementsByClassName("cb20")[42];
bbs63 = document.getElementsByClassName("cb20")[43];
bbs64 = document.getElementsByClassName("cb20")[44];
bbs65 = document.getElementsByClassName("cb20")[45];
bbs66 = document.getElementsByClassName("cb20")[46];
bbs67 = document.getElementsByClassName("cb20")[47];
//Row 7
bbs7 = document.getElementsByClassName("cb20")[48];
bbs71 = document.getElementsByClassName("cb20")[49];
bbs72 = document.getElementsByClassName("cb20")[50];
bbs73 = document.getElementsByClassName("cb20")[51];
bbs74 = document.getElementsByClassName("cb20")[52];
bbs75 = document.getElementsByClassName("cb20")[53];
bbs76 = document.getElementsByClassName("cb20")[54];
bbs77 = document.getElementsByClassName("cb20")[55];
//Row 6
bbs8 = document.getElementsByClassName("cb20")[56];
bbs81 = document.getElementsByClassName("cb20")[57];
bbs82 = document.getElementsByClassName("cb20")[58];
bbs83 = document.getElementsByClassName("cb20")[59];
bbs84 = document.getElementsByClassName("cb20")[60];
bbs85 = document.getElementsByClassName("cb20")[61];
bbs86 = document.getElementsByClassName("cb20")[62];
bbs87 = document.getElementsByClassName("cb20")[63];

bbishop.onclick = () => {
    bbishop.style.cssText = "color:blue;";
    bbishop.classList.add('kookri');
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
  cb20.style.cssText = `display:initial;`;
  cb20.classList.add('aniblue');
};

bbs1.addEventListener("click", () => {
  tr[1].children[1].append(bbishop);

  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs11.addEventListener("click", () => {
  tr[1].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs12.addEventListener("click", () => {
  tr[1].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs13.addEventListener("click", () => {
  tr[1].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs14.addEventListener("click", () => {
  tr[1].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs15.addEventListener("click", () => {
  tr[1].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs16.addEventListener("click", () => {
  tr[1].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs17.addEventListener("click", () => {
  tr[1].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

// Row 2

bbs2.addEventListener("click", () => {
  tr[2].children[1].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs21.addEventListener("click", () => {
  tr[2].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs22.addEventListener("click", () => {
  tr[2].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs23.addEventListener("click", () => {
  tr[2].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs24.addEventListener("click", () => {
  tr[2].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs25.addEventListener("click", () => {
  tr[2].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs26.addEventListener("click", () => {
  tr[2].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs27.addEventListener("click", () => {
  tr[2].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
// Row 3

bbs3.addEventListener("click", () => {
  tr[3].children[1].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs31.addEventListener("click", () => {
  tr[3].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs32.addEventListener("click", () => {
  tr[3].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs33.addEventListener("click", () => {
  tr[3].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs34.addEventListener("click", () => {
  tr[3].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs35.addEventListener("click", () => {
  tr[3].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs36.addEventListener("click", () => {
  tr[3].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs37.addEventListener("click", () => {
  tr[3].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
// Row 4

bbs4.addEventListener("click", () => {
  tr[4].children[1].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs41.addEventListener("click", () => {
  tr[4].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs42.addEventListener("click", () => {
  tr[4].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs43.addEventListener("click", () => {
  tr[4].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs44.addEventListener("click", () => {
  tr[4].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs45.addEventListener("click", () => {
  tr[4].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs46.addEventListener("click", () => {
  tr[4].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs47.addEventListener("click", () => {
  tr[4].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
// Row 5

bbs5.addEventListener("click", () => {
  tr[5].children[1].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs51.addEventListener("click", () => {
  tr[5].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs52.addEventListener("click", () => {
  tr[5].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs53.addEventListener("click", () => {
  tr[5].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs54.addEventListener("click", () => {
  tr[5].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs55.addEventListener("click", () => {
  tr[5].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs56.addEventListener("click", () => {
  tr[5].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs57.addEventListener("click", () => {
  tr[5].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
// Row 6

bbs6.addEventListener("click", () => {
  tr[6].children[1].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs61.addEventListener("click", () => {
  tr[6].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs62.addEventListener("click", () => {
  tr[6].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs63.addEventListener("click", () => {
  tr[6].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs64.addEventListener("click", () => {
  tr[6].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs65.addEventListener("click", () => {
  tr[6].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs66.addEventListener("click", () => {
  tr[6].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs67.addEventListener("click", () => {
  tr[6].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
// Row 7

bbs7.addEventListener("click", () => {
  tr[7].children[1].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs71.addEventListener("click", () => {
  tr[7].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs72.addEventListener("click", () => {
  tr[7].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs73.addEventListener("click", () => {
  tr[7].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs74.addEventListener("click", () => {
  tr[7].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs75.addEventListener("click", () => {
  tr[7].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs76.addEventListener("click", () => {
  tr[7].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs77.addEventListener("click", () => {
  tr[7].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
// Row 8

bbs8.addEventListener("click", () => {
  tr[8].children[1].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});

bbs81.addEventListener("click", () => {
  tr[8].children[2].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs82.addEventListener("click", () => {
  tr[8].children[3].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs83.addEventListener("click", () => {
  tr[8].children[4].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs84.addEventListener("click", () => {
  tr[8].children[5].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs85.addEventListener("click", () => {
  tr[8].children[6].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs86.addEventListener("click", () => {
  tr[8].children[7].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
bbs87.addEventListener("click", () => {
  tr[8].children[8].append(bbishop);
  cb20.classList.remove('aniblue');
  bbishop.classList.remove('kookri');
});
