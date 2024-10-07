bbk1 = document.getElementsByClassName("cb21")[0];
bbk11 = document.getElementsByClassName("cb21")[1];
bbk12 = document.getElementsByClassName("cb21")[2];
bbk13 = document.getElementsByClassName("cb21")[3];
bbk14 = document.getElementsByClassName("cb21")[4];
bbk15 = document.getElementsByClassName("cb21")[5];
bbk16 = document.getElementsByClassName("cb21")[6];
bbk17 = document.getElementsByClassName("cb21")[7];

//Row 2
bbk2 = document.getElementsByClassName("cb21")[8];
bbk21 = document.getElementsByClassName("cb21")[9];
bbk22 = document.getElementsByClassName("cb21")[10];
bbk23 = document.getElementsByClassName("cb21")[11];
bbk24 = document.getElementsByClassName("cb21")[12];
bbk25 = document.getElementsByClassName("cb21")[13];
bbk26 = document.getElementsByClassName("cb21")[14];
bbk27 = document.getElementsByClassName("cb21")[15];
//Row 3
bbk3 = document.getElementsByClassName("cb21")[16];
bbk31 = document.getElementsByClassName("cb21")[17];
bbk32 = document.getElementsByClassName("cb21")[18];
bbk33 = document.getElementsByClassName("cb21")[19];
bbk34 = document.getElementsByClassName("cb21")[20];
bbk35 = document.getElementsByClassName("cb21")[21];
bbk36 = document.getElementsByClassName("cb21")[22];
bbk37 = document.getElementsByClassName("cb21")[23];
//Row 4
bbk4 = document.getElementsByClassName("cb21")[24];
bbk41 = document.getElementsByClassName("cb21")[25];
bbk42 = document.getElementsByClassName("cb21")[26];
bbk43 = document.getElementsByClassName("cb21")[27];
bbk44 = document.getElementsByClassName("cb21")[28];
bbk45 = document.getElementsByClassName("cb21")[29];
bbk46 = document.getElementsByClassName("cb21")[30];
bbk47 = document.getElementsByClassName("cb21")[31];
//Row 5
bbk5 = document.getElementsByClassName("cb21")[32];
bbk51 = document.getElementsByClassName("cb21")[33];
bbk52 = document.getElementsByClassName("cb21")[34];
bbk53 = document.getElementsByClassName("cb21")[35];
bbk54 = document.getElementsByClassName("cb21")[36];
bbk55 = document.getElementsByClassName("cb21")[37];
bbk56 = document.getElementsByClassName("cb21")[38];
bbk57 = document.getElementsByClassName("cb21")[39];
//Row 6
bbk6 = document.getElementsByClassName("cb21")[40];
bbk61 = document.getElementsByClassName("cb21")[41];
bbk62 = document.getElementsByClassName("cb21")[42];
bbk63 = document.getElementsByClassName("cb21")[43];
bbk64 = document.getElementsByClassName("cb21")[44];
bbk65 = document.getElementsByClassName("cb21")[45];
bbk66 = document.getElementsByClassName("cb21")[46];
bbk67 = document.getElementsByClassName("cb21")[47];
//Row 7
bbk7 = document.getElementsByClassName("cb21")[48];
bbk71 = document.getElementsByClassName("cb21")[49];
bbk72 = document.getElementsByClassName("cb21")[50];
bbk73 = document.getElementsByClassName("cb21")[51];
bbk74 = document.getElementsByClassName("cb21")[52];
bbk75 = document.getElementsByClassName("cb21")[53];
bbk76 = document.getElementsByClassName("cb21")[54];
bbk77 = document.getElementsByClassName("cb21")[55];
//Row 6
bbk8 = document.getElementsByClassName("cb21")[56];
bbk81 = document.getElementsByClassName("cb21")[57];
bbk82 = document.getElementsByClassName("cb21")[58];
bbk83 = document.getElementsByClassName("cb21")[59];
bbk84 = document.getElementsByClassName("cb21")[60];
bbk85 = document.getElementsByClassName("cb21")[61];
bbk86 = document.getElementsByClassName("cb21")[62];
bbk87 = document.getElementsByClassName("cb21")[63];

bking.onclick = () => {
  bking.style.cssText = "color:blue;";
  bking.classList.add("kookri");
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
  cb21.style.cssText = `display:initial;`;
  cb21.classList.add("aniblue");
};

bbk1.addEventListener("click", () => {
  tr[1].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk11.addEventListener("click", () => {
  tr[1].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk12.addEventListener("click", () => {
  tr[1].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk13.addEventListener("click", () => {
  tr[1].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk14.addEventListener("click", () => {
  tr[1].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk15.addEventListener("click", () => {
  tr[1].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk16.addEventListener("click", () => {
  tr[1].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk17.addEventListener("click", () => {
  tr[1].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

// Row 2

bbk2.addEventListener("click", () => {
  tr[2].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk21.addEventListener("click", () => {
  tr[2].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk22.addEventListener("click", () => {
  tr[2].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk23.addEventListener("click", () => {
  tr[2].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk24.addEventListener("click", () => {
  tr[2].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk25.addEventListener("click", () => {
  tr[2].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk26.addEventListener("click", () => {
  tr[2].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk27.addEventListener("click", () => {
  tr[2].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
// Row 3

bbk3.addEventListener("click", () => {
  tr[3].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk31.addEventListener("click", () => {
  tr[3].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk32.addEventListener("click", () => {
  tr[3].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk33.addEventListener("click", () => {
  tr[3].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk34.addEventListener("click", () => {
  tr[3].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk35.addEventListener("click", () => {
  tr[3].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk36.addEventListener("click", () => {
  tr[3].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk37.addEventListener("click", () => {
  tr[3].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
// Row 4

bbk4.addEventListener("click", () => {
  tr[4].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk41.addEventListener("click", () => {
  tr[4].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk42.addEventListener("click", () => {
  tr[4].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk43.addEventListener("click", () => {
  tr[4].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk44.addEventListener("click", () => {
  tr[4].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk45.addEventListener("click", () => {
  tr[4].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk46.addEventListener("click", () => {
  tr[4].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk47.addEventListener("click", () => {
  tr[4].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
// Row 5

bbk5.addEventListener("click", () => {
  tr[5].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk51.addEventListener("click", () => {
  tr[5].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk52.addEventListener("click", () => {
  tr[5].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk53.addEventListener("click", () => {
  tr[5].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk54.addEventListener("click", () => {
  tr[5].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk55.addEventListener("click", () => {
  tr[5].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk56.addEventListener("click", () => {
  tr[5].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk57.addEventListener("click", () => {
  tr[5].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
// Row 6

bbk6.addEventListener("click", () => {
  tr[6].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk61.addEventListener("click", () => {
  tr[6].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk62.addEventListener("click", () => {
  tr[6].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk63.addEventListener("click", () => {
  tr[6].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk64.addEventListener("click", () => {
  tr[6].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk65.addEventListener("click", () => {
  tr[6].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk66.addEventListener("click", () => {
  tr[6].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk67.addEventListener("click", () => {
  tr[6].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
// Row 7

bbk7.addEventListener("click", () => {
  tr[7].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk71.addEventListener("click", () => {
  tr[7].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk72.addEventListener("click", () => {
  tr[7].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk73.addEventListener("click", () => {
  tr[7].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk74.addEventListener("click", () => {
  tr[7].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk75.addEventListener("click", () => {
  tr[7].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk76.addEventListener("click", () => {
  tr[7].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk77.addEventListener("click", () => {
  tr[7].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
// Row 8

bbk8.addEventListener("click", () => {
  tr[8].children[1].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});

bbk81.addEventListener("click", () => {
  tr[8].children[2].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk82.addEventListener("click", () => {
  tr[8].children[3].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk83.addEventListener("click", () => {
  tr[8].children[4].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk84.addEventListener("click", () => {
  tr[8].children[5].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk85.addEventListener("click", () => {
  tr[8].children[6].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk86.addEventListener("click", () => {
  tr[8].children[7].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
bbk87.addEventListener("click", () => {
  tr[8].children[8].append(bking);
  cb21.classList.remove("aniblue");
  bking.classList.remove("kookri");
});
