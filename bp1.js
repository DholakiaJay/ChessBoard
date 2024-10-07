bpOne1 = document.getElementsByClassName("cb26")[0];
bpOne11 = document.getElementsByClassName("cb26")[1];
bpOne12 = document.getElementsByClassName("cb26")[2];
bpOne13 = document.getElementsByClassName("cb26")[3];
bpOne14 = document.getElementsByClassName("cb26")[4];
bpOne15 = document.getElementsByClassName("cb26")[5];
bpOne16 = document.getElementsByClassName("cb26")[6];
bpOne17 = document.getElementsByClassName("cb26")[7];

//Row 2
bpOne2 = document.getElementsByClassName("cb26")[8];
bpOne21 = document.getElementsByClassName("cb26")[9];
bpOne22 = document.getElementsByClassName("cb26")[10];
bpOne23 = document.getElementsByClassName("cb26")[11];
bpOne24 = document.getElementsByClassName("cb26")[12];
bpOne25 = document.getElementsByClassName("cb26")[13];
bpOne26 = document.getElementsByClassName("cb26")[14];
bpOne27 = document.getElementsByClassName("cb26")[15];
//Row 3
bpOne3 = document.getElementsByClassName("cb26")[16];
bpOne31 = document.getElementsByClassName("cb26")[17];
bpOne32 = document.getElementsByClassName("cb26")[18];
bpOne33 = document.getElementsByClassName("cb26")[19];
bpOne34 = document.getElementsByClassName("cb26")[20];
bpOne35 = document.getElementsByClassName("cb26")[21];
bpOne36 = document.getElementsByClassName("cb26")[22];
bpOne37 = document.getElementsByClassName("cb26")[23];
//Row 4
bpOne4 = document.getElementsByClassName("cb26")[24];
bpOne41 = document.getElementsByClassName("cb26")[25];
bpOne42 = document.getElementsByClassName("cb26")[26];
bpOne43 = document.getElementsByClassName("cb26")[27];
bpOne44 = document.getElementsByClassName("cb26")[28];
bpOne45 = document.getElementsByClassName("cb26")[29];
bpOne46 = document.getElementsByClassName("cb26")[30];
bpOne47 = document.getElementsByClassName("cb26")[31];
//Row 5
bpOne5 = document.getElementsByClassName("cb26")[32];
bpOne51 = document.getElementsByClassName("cb26")[33];
bpOne52 = document.getElementsByClassName("cb26")[34];
bpOne53 = document.getElementsByClassName("cb26")[35];
bpOne54 = document.getElementsByClassName("cb26")[36];
bpOne55 = document.getElementsByClassName("cb26")[37];
bpOne56 = document.getElementsByClassName("cb26")[38];
bpOne57 = document.getElementsByClassName("cb26")[39];
//Row 6
bpOne6 = document.getElementsByClassName("cb26")[40];
bpOne61 = document.getElementsByClassName("cb26")[41];
bpOne62 = document.getElementsByClassName("cb26")[42];
bpOne63 = document.getElementsByClassName("cb26")[43];
bpOne64 = document.getElementsByClassName("cb26")[44];
bpOne65 = document.getElementsByClassName("cb26")[45];
bpOne66 = document.getElementsByClassName("cb26")[46];
bpOne67 = document.getElementsByClassName("cb26")[47];
//Row 7
bpOne7 = document.getElementsByClassName("cb26")[48];
bpOne71 = document.getElementsByClassName("cb26")[49];
bpOne72 = document.getElementsByClassName("cb26")[50];
bpOne73 = document.getElementsByClassName("cb26")[51];
bpOne74 = document.getElementsByClassName("cb26")[52];
bpOne75 = document.getElementsByClassName("cb26")[53];
bpOne76 = document.getElementsByClassName("cb26")[54];
bpOne77 = document.getElementsByClassName("cb26")[55];
//Row 6
bpOne8 = document.getElementsByClassName("cb26")[56];
bpOne81 = document.getElementsByClassName("cb26")[57];
bpOne82 = document.getElementsByClassName("cb26")[58];
bpOne83 = document.getElementsByClassName("cb26")[59];
bpOne84 = document.getElementsByClassName("cb26")[60];
bpOne85 = document.getElementsByClassName("cb26")[61];
bpOne86 = document.getElementsByClassName("cb26")[62];
bpOne87 = document.getElementsByClassName("cb26")[63];

bp1.onclick = () => {
  bp1.style.cssText = "color:blue;";
  bp1.classList.add("kookri");
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
  cb27.style.cssText = `display:none;`;
  cb28.style.cssText = `display:none;`;
  cb29.style.cssText = `display:none;`;
  cb30.style.cssText = `display:none;`;
  cb31.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:none;`;
  cb26.style.cssText = `display:initial;`;
  cb26.classList.add("aniblue");
};

bpOne1.addEventListener("click", () => {
  tr[1].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne11.addEventListener("click", () => {
  tr[1].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne12.addEventListener("click", () => {
  tr[1].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne13.addEventListener("click", () => {
  tr[1].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne14.addEventListener("click", () => {
  tr[1].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne15.addEventListener("click", () => {
  tr[1].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne16.addEventListener("click", () => {
  tr[1].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne17.addEventListener("click", () => {
  tr[1].children[8].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

// Row 2

bpOne2.addEventListener("click", () => {
  tr[2].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne21.addEventListener("click", () => {
  tr[2].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne22.addEventListener("click", () => {
  tr[2].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne23.addEventListener("click", () => {
  tr[2].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne24.addEventListener("click", () => {
  tr[2].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne25.addEventListener("click", () => {
  tr[2].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne26.addEventListener("click", () => {
  tr[2].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne27.addEventListener("click", () => {
  tr[2].children[8].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
// Row 3

bpOne3.addEventListener("click", () => {
  tr[3].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne31.addEventListener("click", () => {
  tr[3].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne32.addEventListener("click", () => {
  tr[3].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne33.addEventListener("click", () => {
  tr[3].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne34.addEventListener("click", () => {
  tr[3].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne35.addEventListener("click", () => {
  tr[3].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne36.addEventListener("click", () => {
  tr[3].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne37.addEventListener("click", () => {
  tr[3].children[8].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
// Row 4

bpOne4.addEventListener("click", () => {
  tr[4].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne41.addEventListener("click", () => {
  tr[4].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne42.addEventListener("click", () => {
  tr[4].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne43.addEventListener("click", () => {
  tr[4].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne44.addEventListener("click", () => {
  tr[4].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne45.addEventListener("click", () => {
  tr[4].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne46.addEventListener("click", () => {
  tr[4].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne47.addEventListener("click", () => {
  tr[4].children[8].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
// Row 5

bpOne5.addEventListener("click", () => {
  tr[5].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne51.addEventListener("click", () => {
  tr[5].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne52.addEventListener("click", () => {
  tr[5].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne53.addEventListener("click", () => {
  tr[5].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne54.addEventListener("click", () => {
  tr[5].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne55.addEventListener("click", () => {
  tr[5].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne56.addEventListener("click", () => {
  tr[5].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne57.addEventListener("click", () => {
  tr[5].children[8].append(bp1);

  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
// Row 6

bpOne6.addEventListener("click", () => {
  tr[6].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne61.addEventListener("click", () => {
  tr[6].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne62.addEventListener("click", () => {
  tr[6].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne63.addEventListener("click", () => {
  tr[6].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne64.addEventListener("click", () => {
  tr[6].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne65.addEventListener("click", () => {
  tr[6].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne66.addEventListener("click", () => {
  tr[6].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne67.addEventListener("click", () => {
  tr[6].children[8].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
// Row 7

bpOne7.addEventListener("click", () => {
  tr[7].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne71.addEventListener("click", () => {
  tr[7].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne72.addEventListener("click", () => {
  tr[7].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne73.addEventListener("click", () => {
  tr[7].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne74.addEventListener("click", () => {
  tr[7].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne75.addEventListener("click", () => {
  tr[7].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne76.addEventListener("click", () => {
  tr[7].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne77.addEventListener("click", () => {
  tr[7].children[8].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
// Row 8

bpOne8.addEventListener("click", () => {
  tr[8].children[1].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});

bpOne81.addEventListener("click", () => {
  tr[8].children[2].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne82.addEventListener("click", () => {
  tr[8].children[3].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne83.addEventListener("click", () => {
  tr[8].children[4].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne84.addEventListener("click", () => {
  tr[8].children[5].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne85.addEventListener("click", () => {
  tr[8].children[6].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne86.addEventListener("click", () => {
  tr[8].children[7].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
bpOne87.addEventListener("click", () => {
  tr[8].children[8].append(bp1);
  cb26.classList.remove("aniblue");
  bp1.classList.remove("kookri");
});
