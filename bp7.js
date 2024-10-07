bpSeven1 = document.getElementsByClassName("cb32")[0];
bpSeven11 = document.getElementsByClassName("cb32")[1];
bpSeven12 = document.getElementsByClassName("cb32")[2];
bpSeven13 = document.getElementsByClassName("cb32")[3];
bpSeven14 = document.getElementsByClassName("cb32")[4];
bpSeven15 = document.getElementsByClassName("cb32")[5];
bpSeven16 = document.getElementsByClassName("cb32")[6];
bpSeven17 = document.getElementsByClassName("cb32")[7];

//Row 2
bpSeven2 = document.getElementsByClassName("cb32")[8];
bpSeven21 = document.getElementsByClassName("cb32")[9];
bpSeven22 = document.getElementsByClassName("cb32")[10];
bpSeven23 = document.getElementsByClassName("cb32")[11];
bpSeven24 = document.getElementsByClassName("cb32")[12];
bpSeven25 = document.getElementsByClassName("cb32")[13];
bpSeven26 = document.getElementsByClassName("cb32")[14];
bpSeven27 = document.getElementsByClassName("cb32")[15];
//Row 3
bpSeven3 = document.getElementsByClassName("cb32")[16];
bpSeven31 = document.getElementsByClassName("cb32")[17];
bpSeven32 = document.getElementsByClassName("cb32")[18];
bpSeven33 = document.getElementsByClassName("cb32")[19];
bpSeven34 = document.getElementsByClassName("cb32")[20];
bpSeven35 = document.getElementsByClassName("cb32")[21];
bpSeven36 = document.getElementsByClassName("cb32")[22];
bpSeven37 = document.getElementsByClassName("cb32")[23];
//Row 4
bpSeven4 = document.getElementsByClassName("cb32")[24];
bpSeven41 = document.getElementsByClassName("cb32")[25];
bpSeven42 = document.getElementsByClassName("cb32")[26];
bpSeven43 = document.getElementsByClassName("cb32")[27];
bpSeven44 = document.getElementsByClassName("cb32")[28];
bpSeven45 = document.getElementsByClassName("cb32")[29];
bpSeven46 = document.getElementsByClassName("cb32")[30];
bpSeven47 = document.getElementsByClassName("cb32")[31];
//Row 5
bpSeven5 = document.getElementsByClassName("cb32")[32];
bpSeven51 = document.getElementsByClassName("cb32")[33];
bpSeven52 = document.getElementsByClassName("cb32")[34];
bpSeven53 = document.getElementsByClassName("cb32")[35];
bpSeven54 = document.getElementsByClassName("cb32")[36];
bpSeven55 = document.getElementsByClassName("cb32")[37];
bpSeven56 = document.getElementsByClassName("cb32")[38];
bpSeven57 = document.getElementsByClassName("cb32")[39];
//Row 6
bpSeven6 = document.getElementsByClassName("cb32")[40];
bpSeven61 = document.getElementsByClassName("cb32")[41];
bpSeven62 = document.getElementsByClassName("cb32")[42];
bpSeven63 = document.getElementsByClassName("cb32")[43];
bpSeven64 = document.getElementsByClassName("cb32")[44];
bpSeven65 = document.getElementsByClassName("cb32")[45];
bpSeven66 = document.getElementsByClassName("cb32")[46];
bpSeven67 = document.getElementsByClassName("cb32")[47];
//Row 7
bpSeven7 = document.getElementsByClassName("cb32")[48];
bpSeven71 = document.getElementsByClassName("cb32")[49];
bpSeven72 = document.getElementsByClassName("cb32")[50];
bpSeven73 = document.getElementsByClassName("cb32")[51];
bpSeven74 = document.getElementsByClassName("cb32")[52];
bpSeven75 = document.getElementsByClassName("cb32")[53];
bpSeven76 = document.getElementsByClassName("cb32")[54];
bpSeven77 = document.getElementsByClassName("cb32")[55];
//Row 6
bpSeven8 = document.getElementsByClassName("cb32")[56];
bpSeven81 = document.getElementsByClassName("cb32")[57];
bpSeven82 = document.getElementsByClassName("cb32")[58];
bpSeven83 = document.getElementsByClassName("cb32")[59];
bpSeven84 = document.getElementsByClassName("cb32")[60];
bpSeven85 = document.getElementsByClassName("cb32")[61];
bpSeven86 = document.getElementsByClassName("cb32")[62];
bpSeven87 = document.getElementsByClassName("cb32")[63];

bp7.onclick = () => {
  bp7.style.cssText = "color:blue;";
  bp7.classList.add("kookri");
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
  cb33.style.cssText = `display:none;`;
  cb32.style.cssText = `display:initial;`;
  cb32.classList.add("aniblue");
};

bpSeven1.addEventListener("click", () => {
  tr[1].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven11.addEventListener("click", () => {
  tr[1].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven12.addEventListener("click", () => {
  tr[1].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven13.addEventListener("click", () => {
  tr[1].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven14.addEventListener("click", () => {
  tr[1].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven15.addEventListener("click", () => {
  tr[1].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven16.addEventListener("click", () => {
  tr[1].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven17.addEventListener("click", () => {
  tr[1].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

// Row 2

bpSeven2.addEventListener("click", () => {
  tr[2].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven21.addEventListener("click", () => {
  tr[2].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven22.addEventListener("click", () => {
  tr[2].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven23.addEventListener("click", () => {
  tr[2].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven24.addEventListener("click", () => {
  tr[2].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven25.addEventListener("click", () => {
  tr[2].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven26.addEventListener("click", () => {
  tr[2].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven27.addEventListener("click", () => {
  tr[2].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
// Row 3

bpSeven3.addEventListener("click", () => {
  tr[3].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven31.addEventListener("click", () => {
  tr[3].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven32.addEventListener("click", () => {
  tr[3].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven33.addEventListener("click", () => {
  tr[3].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven34.addEventListener("click", () => {
  tr[3].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven35.addEventListener("click", () => {
  tr[3].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven36.addEventListener("click", () => {
  tr[3].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven37.addEventListener("click", () => {
  tr[3].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
// Row 4

bpSeven4.addEventListener("click", () => {
  tr[4].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven41.addEventListener("click", () => {
  tr[4].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven42.addEventListener("click", () => {
  tr[4].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven43.addEventListener("click", () => {
  tr[4].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven44.addEventListener("click", () => {
  tr[4].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven45.addEventListener("click", () => {
  tr[4].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven46.addEventListener("click", () => {
  tr[4].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven47.addEventListener("click", () => {
  tr[4].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
// Row 5

bpSeven5.addEventListener("click", () => {
  tr[5].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven51.addEventListener("click", () => {
  tr[5].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven52.addEventListener("click", () => {
  tr[5].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven53.addEventListener("click", () => {
  tr[5].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven54.addEventListener("click", () => {
  tr[5].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven55.addEventListener("click", () => {
  tr[5].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven56.addEventListener("click", () => {
  tr[5].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven57.addEventListener("click", () => {
  tr[5].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
// Row 6

bpSeven6.addEventListener("click", () => {
  tr[6].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven61.addEventListener("click", () => {
  tr[6].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven62.addEventListener("click", () => {
  tr[6].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven63.addEventListener("click", () => {
  tr[6].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven64.addEventListener("click", () => {
  tr[6].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven65.addEventListener("click", () => {
  tr[6].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven66.addEventListener("click", () => {
  tr[6].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven67.addEventListener("click", () => {
  tr[6].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
// Row 7

bpSeven7.addEventListener("click", () => {
  tr[7].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven71.addEventListener("click", () => {
  tr[7].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven72.addEventListener("click", () => {
  tr[7].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven73.addEventListener("click", () => {
  tr[7].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven74.addEventListener("click", () => {
  tr[7].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven75.addEventListener("click", () => {
  tr[7].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven76.addEventListener("click", () => {
  tr[7].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven77.addEventListener("click", () => {
  tr[7].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
// Row 8

bpSeven8.addEventListener("click", () => {
  tr[8].children[1].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});

bpSeven81.addEventListener("click", () => {
  tr[8].children[2].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven82.addEventListener("click", () => {
  tr[8].children[3].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven83.addEventListener("click", () => {
  tr[8].children[4].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven84.addEventListener("click", () => {
  tr[8].children[5].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven85.addEventListener("click", () => {
  tr[8].children[6].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven86.addEventListener("click", () => {
  tr[8].children[7].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
bpSeven87.addEventListener("click", () => {
  tr[8].children[8].append(bp7);
  cb32.classList.remove("aniblue");
  bp7.classList.remove("kookri");
});
