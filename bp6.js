bpSix1 = document.getElementsByClassName("cb31")[0];
bpSix11 = document.getElementsByClassName("cb31")[1];
bpSix12 = document.getElementsByClassName("cb31")[2];
bpSix13 = document.getElementsByClassName("cb31")[3];
bpSix14 = document.getElementsByClassName("cb31")[4];
bpSix15 = document.getElementsByClassName("cb31")[5];
bpSix16 = document.getElementsByClassName("cb31")[6];
bpSix17 = document.getElementsByClassName("cb31")[7];

//Row 2
bpSix2 = document.getElementsByClassName("cb31")[8];
bpSix21 = document.getElementsByClassName("cb31")[9];
bpSix22 = document.getElementsByClassName("cb31")[10];
bpSix23 = document.getElementsByClassName("cb31")[11];
bpSix24 = document.getElementsByClassName("cb31")[12];
bpSix25 = document.getElementsByClassName("cb31")[13];
bpSix26 = document.getElementsByClassName("cb31")[14];
bpSix27 = document.getElementsByClassName("cb31")[15];
//Row 3
bpSix3 = document.getElementsByClassName("cb31")[16];
bpSix31 = document.getElementsByClassName("cb31")[17];
bpSix32 = document.getElementsByClassName("cb31")[18];
bpSix33 = document.getElementsByClassName("cb31")[19];
bpSix34 = document.getElementsByClassName("cb31")[20];
bpSix35 = document.getElementsByClassName("cb31")[21];
bpSix36 = document.getElementsByClassName("cb31")[22];
bpSix37 = document.getElementsByClassName("cb31")[23];
//Row 4
bpSix4 = document.getElementsByClassName("cb31")[24];
bpSix41 = document.getElementsByClassName("cb31")[25];
bpSix42 = document.getElementsByClassName("cb31")[26];
bpSix43 = document.getElementsByClassName("cb31")[27];
bpSix44 = document.getElementsByClassName("cb31")[28];
bpSix45 = document.getElementsByClassName("cb31")[29];
bpSix46 = document.getElementsByClassName("cb31")[30];
bpSix47 = document.getElementsByClassName("cb31")[31];
//Row 5
bpSix5 = document.getElementsByClassName("cb31")[32];
bpSix51 = document.getElementsByClassName("cb31")[33];
bpSix52 = document.getElementsByClassName("cb31")[34];
bpSix53 = document.getElementsByClassName("cb31")[35];
bpSix54 = document.getElementsByClassName("cb31")[36];
bpSix55 = document.getElementsByClassName("cb31")[37];
bpSix56 = document.getElementsByClassName("cb31")[38];
bpSix57 = document.getElementsByClassName("cb31")[39];
//Row 6
bpSix6 = document.getElementsByClassName("cb31")[40];
bpSix61 = document.getElementsByClassName("cb31")[41];
bpSix62 = document.getElementsByClassName("cb31")[42];
bpSix63 = document.getElementsByClassName("cb31")[43];
bpSix64 = document.getElementsByClassName("cb31")[44];
bpSix65 = document.getElementsByClassName("cb31")[45];
bpSix66 = document.getElementsByClassName("cb31")[46];
bpSix67 = document.getElementsByClassName("cb31")[47];
//Row 7
bpSix7 = document.getElementsByClassName("cb31")[48];
bpSix71 = document.getElementsByClassName("cb31")[49];
bpSix72 = document.getElementsByClassName("cb31")[50];
bpSix73 = document.getElementsByClassName("cb31")[51];
bpSix74 = document.getElementsByClassName("cb31")[52];
bpSix75 = document.getElementsByClassName("cb31")[53];
bpSix76 = document.getElementsByClassName("cb31")[54];
bpSix77 = document.getElementsByClassName("cb31")[55];
//Row 6
bpSix8 = document.getElementsByClassName("cb31")[56];
bpSix81 = document.getElementsByClassName("cb31")[57];
bpSix82 = document.getElementsByClassName("cb31")[58];
bpSix83 = document.getElementsByClassName("cb31")[59];
bpSix84 = document.getElementsByClassName("cb31")[60];
bpSix85 = document.getElementsByClassName("cb31")[61];
bpSix86 = document.getElementsByClassName("cb31")[62];
bpSix87 = document.getElementsByClassName("cb31")[63];

bp6.onclick = () => {
  bp6.style.cssText = "color:blue;";
  bp6.classList.add("kookri");
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
  cb30.style.cssText = `display:none;`;
  cb26.style.cssText = `display:none;`;
  cb27.style.cssText = `display:none;`;
  cb28.style.cssText = `display:none;`;
  cb29.style.cssText = `display:none;`;
  cb30.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:none;`;
  cb31.style.cssText = `display:initial;`;
  cb31.classList.add("aniblue");
};

bpSix1.addEventListener("click", () => {
  tr[1].children[1].append(bp6);
  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix11.addEventListener("click", () => {
  tr[1].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix12.addEventListener("click", () => {
  tr[1].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix13.addEventListener("click", () => {
  tr[1].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix14.addEventListener("click", () => {
  tr[1].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix15.addEventListener("click", () => {
  tr[1].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix16.addEventListener("click", () => {
  tr[1].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix17.addEventListener("click", () => {
  tr[1].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

// Row 2

bpSix2.addEventListener("click", () => {
  tr[2].children[1].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix21.addEventListener("click", () => {
  tr[2].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix22.addEventListener("click", () => {
  tr[2].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix23.addEventListener("click", () => {
  tr[2].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix24.addEventListener("click", () => {
  tr[2].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix25.addEventListener("click", () => {
  tr[2].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix26.addEventListener("click", () => {
  tr[2].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix27.addEventListener("click", () => {
  tr[2].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
// Row 3

bpSix3.addEventListener("click", () => {
  tr[3].children[1].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix31.addEventListener("click", () => {
  tr[3].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix32.addEventListener("click", () => {
  tr[3].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix33.addEventListener("click", () => {
  tr[3].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix34.addEventListener("click", () => {
  tr[3].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix35.addEventListener("click", () => {
  tr[3].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix36.addEventListener("click", () => {
  tr[3].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix37.addEventListener("click", () => {
  tr[3].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
// Row 4

bpSix4.addEventListener("click", () => {
  tr[4].children[1].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix41.addEventListener("click", () => {
  tr[4].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix42.addEventListener("click", () => {
  tr[4].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix43.addEventListener("click", () => {
  tr[4].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix44.addEventListener("click", () => {
  tr[4].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix45.addEventListener("click", () => {
  tr[4].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix46.addEventListener("click", () => {
  tr[4].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix47.addEventListener("click", () => {
  tr[4].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
// Row 5

bpSix5.addEventListener("click", () => {
  tr[5].children[1].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix51.addEventListener("click", () => {
  tr[5].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix52.addEventListener("click", () => {
  tr[5].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix53.addEventListener("click", () => {
  tr[5].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix54.addEventListener("click", () => {
  tr[5].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix55.addEventListener("click", () => {
  tr[5].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix56.addEventListener("click", () => {
  tr[5].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix57.addEventListener("click", () => {
  tr[5].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
// Row 6

bpSix6.addEventListener("click", () => {
  tr[6].children[1].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix61.addEventListener("click", () => {
  tr[6].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix62.addEventListener("click", () => {
  tr[6].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix63.addEventListener("click", () => {
  tr[6].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix64.addEventListener("click", () => {
  tr[6].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix65.addEventListener("click", () => {
  tr[6].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix66.addEventListener("click", () => {
  tr[6].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix67.addEventListener("click", () => {
  tr[6].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
// Row 7

bpSix7.addEventListener("click", () => {
  tr[7].children[1].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix71.addEventListener("click", () => {
  tr[7].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix72.addEventListener("click", () => {
  tr[7].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix73.addEventListener("click", () => {
  tr[7].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix74.addEventListener("click", () => {
  tr[7].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix75.addEventListener("click", () => {
  tr[7].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix76.addEventListener("click", () => {
  tr[7].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix77.addEventListener("click", () => {
  tr[7].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
// Row 8

bpSix8.addEventListener("click", () => {
  tr[8].children[1].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});

bpSix81.addEventListener("click", () => {
  tr[8].children[2].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix82.addEventListener("click", () => {
  tr[8].children[3].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix83.addEventListener("click", () => {
  tr[8].children[4].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix84.addEventListener("click", () => {
  tr[8].children[5].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix85.addEventListener("click", () => {
  tr[8].children[6].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix86.addEventListener("click", () => {
  tr[8].children[7].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
bpSix87.addEventListener("click", () => {
  tr[8].children[8].append(bp6);

  cb31.classList.remove("aniblue");
  bp6.classList.remove("kookri");
});
