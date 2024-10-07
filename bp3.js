bpThree1 = document.getElementsByClassName("cb28")[0];
bpThree11 = document.getElementsByClassName("cb28")[1];
bpThree12 = document.getElementsByClassName("cb28")[2];
bpThree13 = document.getElementsByClassName("cb28")[3];
bpThree14 = document.getElementsByClassName("cb28")[4];
bpThree15 = document.getElementsByClassName("cb28")[5];
bpThree16 = document.getElementsByClassName("cb28")[6];
bpThree17 = document.getElementsByClassName("cb28")[7];

//Row 2
bpThree2 = document.getElementsByClassName("cb28")[8];
bpThree21 = document.getElementsByClassName("cb28")[9];
bpThree22 = document.getElementsByClassName("cb28")[10];
bpThree23 = document.getElementsByClassName("cb28")[11];
bpThree24 = document.getElementsByClassName("cb28")[12];
bpThree25 = document.getElementsByClassName("cb28")[13];
bpThree26 = document.getElementsByClassName("cb28")[14];
bpThree27 = document.getElementsByClassName("cb28")[15];
//Row 3
bpThree3 = document.getElementsByClassName("cb28")[16];
bpThree31 = document.getElementsByClassName("cb28")[17];
bpThree32 = document.getElementsByClassName("cb28")[18];
bpThree33 = document.getElementsByClassName("cb28")[19];
bpThree34 = document.getElementsByClassName("cb28")[20];
bpThree35 = document.getElementsByClassName("cb28")[21];
bpThree36 = document.getElementsByClassName("cb28")[22];
bpThree37 = document.getElementsByClassName("cb28")[23];
//Row 4
bpThree4 = document.getElementsByClassName("cb28")[24];
bpThree41 = document.getElementsByClassName("cb28")[25];
bpThree42 = document.getElementsByClassName("cb28")[26];
bpThree43 = document.getElementsByClassName("cb28")[27];
bpThree44 = document.getElementsByClassName("cb28")[28];
bpThree45 = document.getElementsByClassName("cb28")[29];
bpThree46 = document.getElementsByClassName("cb28")[30];
bpThree47 = document.getElementsByClassName("cb28")[31];
//Row 5
bpThree5 = document.getElementsByClassName("cb28")[32];
bpThree51 = document.getElementsByClassName("cb28")[33];
bpThree52 = document.getElementsByClassName("cb28")[34];
bpThree53 = document.getElementsByClassName("cb28")[35];
bpThree54 = document.getElementsByClassName("cb28")[36];
bpThree55 = document.getElementsByClassName("cb28")[37];
bpThree56 = document.getElementsByClassName("cb28")[38];
bpThree57 = document.getElementsByClassName("cb28")[39];
//Row 6
bpThree6 = document.getElementsByClassName("cb28")[40];
bpThree61 = document.getElementsByClassName("cb28")[41];
bpThree62 = document.getElementsByClassName("cb28")[42];
bpThree63 = document.getElementsByClassName("cb28")[43];
bpThree64 = document.getElementsByClassName("cb28")[44];
bpThree65 = document.getElementsByClassName("cb28")[45];
bpThree66 = document.getElementsByClassName("cb28")[46];
bpThree67 = document.getElementsByClassName("cb28")[47];
//Row 7
bpThree7 = document.getElementsByClassName("cb28")[48];
bpThree71 = document.getElementsByClassName("cb28")[49];
bpThree72 = document.getElementsByClassName("cb28")[50];
bpThree73 = document.getElementsByClassName("cb28")[51];
bpThree74 = document.getElementsByClassName("cb28")[52];
bpThree75 = document.getElementsByClassName("cb28")[53];
bpThree76 = document.getElementsByClassName("cb28")[54];
bpThree77 = document.getElementsByClassName("cb28")[55];
//Row 6
bpThree8 = document.getElementsByClassName("cb28")[56];
bpThree81 = document.getElementsByClassName("cb28")[57];
bpThree82 = document.getElementsByClassName("cb28")[58];
bpThree83 = document.getElementsByClassName("cb28")[59];
bpThree84 = document.getElementsByClassName("cb28")[60];
bpThree85 = document.getElementsByClassName("cb28")[61];
bpThree86 = document.getElementsByClassName("cb28")[62];
bpThree87 = document.getElementsByClassName("cb28")[63];

bp3.onclick = () => {
  bp3.style.cssText = "color:blue;";
  bp3.classList.add("kookri");
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
  cb29.style.cssText = `display:none;`;
  cb30.style.cssText = `display:none;`;
  cb31.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:none;`;
  cb28.style.cssText = `display:initial;`;
  cb28.classList.add("aniblue");
};

bpThree1.addEventListener("click", () => {
  tr[1].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree11.addEventListener("click", () => {
  tr[1].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree12.addEventListener("click", () => {
  tr[1].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree13.addEventListener("click", () => {
  tr[1].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree14.addEventListener("click", () => {
  tr[1].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree15.addEventListener("click", () => {
  tr[1].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree16.addEventListener("click", () => {
  tr[1].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree17.addEventListener("click", () => {
  tr[1].children[8].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

// Row 2

bpThree2.addEventListener("click", () => {
  tr[2].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree21.addEventListener("click", () => {
  tr[2].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree22.addEventListener("click", () => {
  tr[2].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree23.addEventListener("click", () => {
  tr[2].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree24.addEventListener("click", () => {
  tr[2].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree25.addEventListener("click", () => {
  tr[2].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree26.addEventListener("click", () => {
  tr[2].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree27.addEventListener("click", () => {
  tr[2].children[8].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
// Row 3

bpThree3.addEventListener("click", () => {
  tr[3].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree31.addEventListener("click", () => {
  tr[3].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree32.addEventListener("click", () => {
  tr[3].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree33.addEventListener("click", () => {
  tr[3].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree34.addEventListener("click", () => {
  tr[3].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree35.addEventListener("click", () => {
  tr[3].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree36.addEventListener("click", () => {
  tr[3].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree37.addEventListener("click", () => {
  tr[3].children[8].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
// Row 4

bpThree4.addEventListener("click", () => {
  tr[4].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree41.addEventListener("click", () => {
  tr[4].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree42.addEventListener("click", () => {
  tr[4].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree43.addEventListener("click", () => {
  tr[4].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree44.addEventListener("click", () => {
  tr[4].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree45.addEventListener("click", () => {
  tr[4].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree46.addEventListener("click", () => {
  tr[4].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree47.addEventListener("click", () => {
  tr[4].children[8].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
// Row 5

bpThree5.addEventListener("click", () => {
  tr[5].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree51.addEventListener("click", () => {
  tr[5].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree52.addEventListener("click", () => {
  tr[5].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree53.addEventListener("click", () => {
  tr[5].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree54.addEventListener("click", () => {
  tr[5].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree55.addEventListener("click", () => {
  tr[5].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree56.addEventListener("click", () => {
  tr[5].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree57.addEventListener("click", () => {
  tr[5].children[8].append(bp3);

  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
// Row 6

bpThree6.addEventListener("click", () => {
  tr[6].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree61.addEventListener("click", () => {
  tr[6].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree62.addEventListener("click", () => {
  tr[6].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree63.addEventListener("click", () => {
  tr[6].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree64.addEventListener("click", () => {
  tr[6].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree65.addEventListener("click", () => {
  tr[6].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree66.addEventListener("click", () => {
  tr[6].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree67.addEventListener("click", () => {
  tr[6].children[8].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
// Row 7

bpThree7.addEventListener("click", () => {
  tr[7].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree71.addEventListener("click", () => {
  tr[7].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree72.addEventListener("click", () => {
  tr[7].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree73.addEventListener("click", () => {
  tr[7].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree74.addEventListener("click", () => {
  tr[7].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree75.addEventListener("click", () => {
  tr[7].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree76.addEventListener("click", () => {
  tr[7].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree77.addEventListener("click", () => {
  tr[7].children[8].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
// Row 8

bpThree8.addEventListener("click", () => {
  tr[8].children[1].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});

bpThree81.addEventListener("click", () => {
  tr[8].children[2].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree82.addEventListener("click", () => {
  tr[8].children[3].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree83.addEventListener("click", () => {
  tr[8].children[4].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree84.addEventListener("click", () => {
  tr[8].children[5].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree85.addEventListener("click", () => {
  tr[8].children[6].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree86.addEventListener("click", () => {
  tr[8].children[7].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
bpThree87.addEventListener("click", () => {
  tr[8].children[8].append(bp3);
  cb28.classList.remove("aniblue");
  bp3.classList.remove("kookri");
});
