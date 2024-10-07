bpEight1 = document.getElementsByClassName("cb33")[0];
bpEight11 = document.getElementsByClassName("cb33")[1];
bpEight12 = document.getElementsByClassName("cb33")[2];
bpEight13 = document.getElementsByClassName("cb33")[3];
bpEight14 = document.getElementsByClassName("cb33")[4];
bpEight15 = document.getElementsByClassName("cb33")[5];
bpEight16 = document.getElementsByClassName("cb33")[6];
bpEight17 = document.getElementsByClassName("cb33")[7];

//Row 2
bpEight2 = document.getElementsByClassName("cb33")[8];
bpEight21 = document.getElementsByClassName("cb33")[9];
bpEight22 = document.getElementsByClassName("cb33")[10];
bpEight23 = document.getElementsByClassName("cb33")[11];
bpEight24 = document.getElementsByClassName("cb33")[12];
bpEight25 = document.getElementsByClassName("cb33")[13];
bpEight26 = document.getElementsByClassName("cb33")[14];
bpEight27 = document.getElementsByClassName("cb33")[15];
//Row 3
bpEight3 = document.getElementsByClassName("cb33")[16];
bpEight31 = document.getElementsByClassName("cb33")[17];
bpEight32 = document.getElementsByClassName("cb33")[18];
bpEight33 = document.getElementsByClassName("cb33")[19];
bpEight34 = document.getElementsByClassName("cb33")[20];
bpEight35 = document.getElementsByClassName("cb33")[21];
bpEight36 = document.getElementsByClassName("cb33")[22];
bpEight37 = document.getElementsByClassName("cb33")[23];
//Row 4
bpEight4 = document.getElementsByClassName("cb33")[24];
bpEight41 = document.getElementsByClassName("cb33")[25];
bpEight42 = document.getElementsByClassName("cb33")[26];
bpEight43 = document.getElementsByClassName("cb33")[27];
bpEight44 = document.getElementsByClassName("cb33")[28];
bpEight45 = document.getElementsByClassName("cb33")[29];
bpEight46 = document.getElementsByClassName("cb33")[30];
bpEight47 = document.getElementsByClassName("cb33")[31];
//Row 5
bpEight5 = document.getElementsByClassName("cb33")[32];
bpEight51 = document.getElementsByClassName("cb33")[33];
bpEight52 = document.getElementsByClassName("cb33")[34];
bpEight53 = document.getElementsByClassName("cb33")[35];
bpEight54 = document.getElementsByClassName("cb33")[36];
bpEight55 = document.getElementsByClassName("cb33")[37];
bpEight56 = document.getElementsByClassName("cb33")[38];
bpEight57 = document.getElementsByClassName("cb33")[39];
//Row 6
bpEight6 = document.getElementsByClassName("cb33")[40];
bpEight61 = document.getElementsByClassName("cb33")[41];
bpEight62 = document.getElementsByClassName("cb33")[42];
bpEight63 = document.getElementsByClassName("cb33")[43];
bpEight64 = document.getElementsByClassName("cb33")[44];
bpEight65 = document.getElementsByClassName("cb33")[45];
bpEight66 = document.getElementsByClassName("cb33")[46];
bpEight67 = document.getElementsByClassName("cb33")[47];
//Row 7
bpEight7 = document.getElementsByClassName("cb33")[48];
bpEight71 = document.getElementsByClassName("cb33")[49];
bpEight72 = document.getElementsByClassName("cb33")[50];
bpEight73 = document.getElementsByClassName("cb33")[51];
bpEight74 = document.getElementsByClassName("cb33")[52];
bpEight75 = document.getElementsByClassName("cb33")[53];
bpEight76 = document.getElementsByClassName("cb33")[54];
bpEight77 = document.getElementsByClassName("cb33")[55];
//Row 6
bpEight8 = document.getElementsByClassName("cb33")[56];
bpEight81 = document.getElementsByClassName("cb33")[57];
bpEight82 = document.getElementsByClassName("cb33")[58];
bpEight83 = document.getElementsByClassName("cb33")[59];
bpEight84 = document.getElementsByClassName("cb33")[60];
bpEight85 = document.getElementsByClassName("cb33")[61];
bpEight86 = document.getElementsByClassName("cb33")[62];
bpEight87 = document.getElementsByClassName("cb33")[63];

bp8.onclick = () => {
  bp8.style.cssText = "color:blue;";
  bp8.classList.add("kookri");
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
  cb31.style.cssText = `display:none;`;
  cb32.style.cssText = `display:none;`;
  cb33.style.cssText = `display:initial;`;
  cb33.classList.add("aniblue");
};

bpEight1.addEventListener("click", () => {
  tr[1].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight11.addEventListener("click", () => {
  tr[1].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight12.addEventListener("click", () => {
  tr[1].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight13.addEventListener("click", () => {
  tr[1].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight14.addEventListener("click", () => {
  tr[1].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight15.addEventListener("click", () => {
  tr[1].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight16.addEventListener("click", () => {
  tr[1].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight17.addEventListener("click", () => {
  tr[1].children[8].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

// Row 2

bpEight2.addEventListener("click", () => {
  tr[2].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight21.addEventListener("click", () => {
  tr[2].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight22.addEventListener("click", () => {
  tr[2].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight23.addEventListener("click", () => {
  tr[2].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight24.addEventListener("click", () => {
  tr[2].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight25.addEventListener("click", () => {
  tr[2].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight26.addEventListener("click", () => {
  tr[2].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight27.addEventListener("click", () => {
  tr[2].children[8].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
// Row 3

bpEight3.addEventListener("click", () => {
  tr[3].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight31.addEventListener("click", () => {
  tr[3].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight32.addEventListener("click", () => {
  tr[3].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight33.addEventListener("click", () => {
  tr[3].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight34.addEventListener("click", () => {
  tr[3].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight35.addEventListener("click", () => {
  tr[3].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight36.addEventListener("click", () => {
  tr[3].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight37.addEventListener("click", () => {
  tr[3].children[8].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
// Row 4

bpEight4.addEventListener("click", () => {
  tr[4].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight41.addEventListener("click", () => {
  tr[4].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight42.addEventListener("click", () => {
  tr[4].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight43.addEventListener("click", () => {
  tr[4].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight44.addEventListener("click", () => {
  tr[4].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight45.addEventListener("click", () => {
  tr[4].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight46.addEventListener("click", () => {
  tr[4].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight47.addEventListener("click", () => {
  tr[4].children[8].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
// Row 5

bpEight5.addEventListener("click", () => {
  tr[5].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight51.addEventListener("click", () => {
  tr[5].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight52.addEventListener("click", () => {
  tr[5].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight53.addEventListener("click", () => {
  tr[5].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight54.addEventListener("click", () => {
  tr[5].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight55.addEventListener("click", () => {
  tr[5].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight56.addEventListener("click", () => {
  tr[5].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight57.addEventListener("click", () => {
  tr[5].children[8].append(bp8);

  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
// Row 6

bpEight6.addEventListener("click", () => {
  tr[6].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight61.addEventListener("click", () => {
  tr[6].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight62.addEventListener("click", () => {
  tr[6].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight63.addEventListener("click", () => {
  tr[6].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight64.addEventListener("click", () => {
  tr[6].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight65.addEventListener("click", () => {
  tr[6].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight66.addEventListener("click", () => {
  tr[6].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight67.addEventListener("click", () => {
  tr[6].children[8].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
// Row 7

bpEight7.addEventListener("click", () => {
  tr[7].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight71.addEventListener("click", () => {
  tr[7].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight72.addEventListener("click", () => {
  tr[7].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight73.addEventListener("click", () => {
  tr[7].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight74.addEventListener("click", () => {
  tr[7].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight75.addEventListener("click", () => {
  tr[7].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight76.addEventListener("click", () => {
  tr[7].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight77.addEventListener("click", () => {
  tr[7].children[8].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
// Row 8

bpEight8.addEventListener("click", () => {
  tr[8].children[1].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});

bpEight81.addEventListener("click", () => {
  tr[8].children[2].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight82.addEventListener("click", () => {
  tr[8].children[3].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight83.addEventListener("click", () => {
  tr[8].children[4].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight84.addEventListener("click", () => {
  tr[8].children[5].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight85.addEventListener("click", () => {
  tr[8].children[6].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight86.addEventListener("click", () => {
  tr[8].children[7].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
bpEight87.addEventListener("click", () => {
  tr[8].children[8].append(bp8);
  cb33.classList.remove("aniblue");
  bp8.classList.remove("kookri");
});
