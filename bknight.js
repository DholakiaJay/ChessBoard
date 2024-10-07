bktr1 = document.getElementsByClassName("cb19")[0];
bktr11 = document.getElementsByClassName("cb19")[1];
bktr12 = document.getElementsByClassName("cb19")[2];
bktr13 = document.getElementsByClassName("cb19")[3];
bktr14 = document.getElementsByClassName("cb19")[4];
bktr15 = document.getElementsByClassName("cb19")[5];
bktr16 = document.getElementsByClassName("cb19")[6];
bktr17 = document.getElementsByClassName("cb19")[7];

//Row 2
bktr2 = document.getElementsByClassName("cb19")[8];
bktr21 = document.getElementsByClassName("cb19")[9];
bktr22 = document.getElementsByClassName("cb19")[10];
bktr23 = document.getElementsByClassName("cb19")[11];
bktr24 = document.getElementsByClassName("cb19")[12];
bktr25 = document.getElementsByClassName("cb19")[13];
bktr26 = document.getElementsByClassName("cb19")[14];
bktr27 = document.getElementsByClassName("cb19")[15];
//Row 3
bktr3 = document.getElementsByClassName("cb19")[16];
bktr31 = document.getElementsByClassName("cb19")[17];
bktr32 = document.getElementsByClassName("cb19")[18];
bktr33 = document.getElementsByClassName("cb19")[19];
bktr34 = document.getElementsByClassName("cb19")[20];
bktr35 = document.getElementsByClassName("cb19")[21];
bktr36 = document.getElementsByClassName("cb19")[22];
bktr37 = document.getElementsByClassName("cb19")[23];
//Row 4
bktr4 = document.getElementsByClassName("cb19")[24];
bktr41 = document.getElementsByClassName("cb19")[25];
bktr42 = document.getElementsByClassName("cb19")[26];
bktr43 = document.getElementsByClassName("cb19")[27];
bktr44 = document.getElementsByClassName("cb19")[28];
bktr45 = document.getElementsByClassName("cb19")[29];
bktr46 = document.getElementsByClassName("cb19")[30];
bktr47 = document.getElementsByClassName("cb19")[31];
//Row 5
bktr5 = document.getElementsByClassName("cb19")[32];
bktr51 = document.getElementsByClassName("cb19")[33];
bktr52 = document.getElementsByClassName("cb19")[34];
bktr53 = document.getElementsByClassName("cb19")[35];
bktr54 = document.getElementsByClassName("cb19")[36];
bktr55 = document.getElementsByClassName("cb19")[37];
bktr56 = document.getElementsByClassName("cb19")[38];
bktr57 = document.getElementsByClassName("cb19")[39];
//Row 6
bktr6 = document.getElementsByClassName("cb19")[40];
bktr61 = document.getElementsByClassName("cb19")[41];
bktr62 = document.getElementsByClassName("cb19")[42];
bktr63 = document.getElementsByClassName("cb19")[43];
bktr64 = document.getElementsByClassName("cb19")[44];
bktr65 = document.getElementsByClassName("cb19")[45];
bktr66 = document.getElementsByClassName("cb19")[46];
bktr67 = document.getElementsByClassName("cb19")[47];
//Row 7
bktr7 = document.getElementsByClassName("cb19")[48];
bktr71 = document.getElementsByClassName("cb19")[49];
bktr72 = document.getElementsByClassName("cb19")[50];
bktr73 = document.getElementsByClassName("cb19")[51];
bktr74 = document.getElementsByClassName("cb19")[52];
bktr75 = document.getElementsByClassName("cb19")[53];
bktr76 = document.getElementsByClassName("cb19")[54];
bktr77 = document.getElementsByClassName("cb19")[55];
//Row 6
bktr8 = document.getElementsByClassName("cb19")[56];
bktr81 = document.getElementsByClassName("cb19")[57];
bktr82 = document.getElementsByClassName("cb19")[58];
bktr83 = document.getElementsByClassName("cb19")[59];
bktr84 = document.getElementsByClassName("cb19")[60];
bktr85 = document.getElementsByClassName("cb19")[61];
bktr86 = document.getElementsByClassName("cb19")[62];
bktr87 = document.getElementsByClassName("cb19")[63];

bknight.onclick = () => {
  bknight.style.cssText = "color:blue;";
  bknight.classList.add("kookri");
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
  cb19.style.cssText = `display:initial;`;
  cb19.classList.add("aniblue");
};

bktr1.addEventListener("click", () => {
  tr[1].children[1].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr11.addEventListener("click", () => {
  tr[1].children[2].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr12.addEventListener("click", () => {
  tr[1].children[3].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr13.addEventListener("click", () => {
  tr[1].children[4].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr14.addEventListener("click", () => {
  tr[1].children[5].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr15.addEventListener("click", () => {
  tr[1].children[6].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr16.addEventListener("click", () => {
  tr[1].children[7].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr17.addEventListener("click", () => {
  tr[1].children[8].append(bknight);

  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

// Row 2

bktr2.addEventListener("click", () => {
  tr[2].children[1].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr21.addEventListener("click", () => {
  tr[2].children[2].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr22.addEventListener("click", () => {
  tr[2].children[3].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr23.addEventListener("click", () => {
  tr[2].children[4].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr24.addEventListener("click", () => {
  tr[2].children[5].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr25.addEventListener("click", () => {
  tr[2].children[6].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr26.addEventListener("click", () => {
  tr[2].children[7].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr27.addEventListener("click", () => {
  tr[2].children[8].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
// Row 3

bktr3.addEventListener("click", () => {
  tr[3].children[1].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr31.addEventListener("click", () => {
  tr[3].children[2].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr32.addEventListener("click", () => {
  tr[3].children[3].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr33.addEventListener("click", () => {
  tr[3].children[4].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr34.addEventListener("click", () => {
  tr[3].children[5].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr35.addEventListener("click", () => {
  tr[3].children[6].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr36.addEventListener("click", () => {
  tr[3].children[7].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr37.addEventListener("click", () => {
  tr[3].children[8].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
// Row 4

bktr4.addEventListener("click", () => {
  tr[4].children[1].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr41.addEventListener("click", () => {
  tr[4].children[2].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr42.addEventListener("click", () => {
  tr[4].children[3].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr43.addEventListener("click", () => {
  tr[4].children[4].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr44.addEventListener("click", () => {
  tr[4].children[5].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr45.addEventListener("click", () => {
  tr[4].children[6].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr46.addEventListener("click", () => {
  tr[4].children[7].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr47.addEventListener("click", () => {
  tr[4].children[8].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
// Row 5

bktr5.addEventListener("click", () => {
  tr[5].children[1].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr51.addEventListener("click", () => {
  tr[5].children[2].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr52.addEventListener("click", () => {
  tr[5].children[3].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr53.addEventListener("click", () => {
  tr[5].children[4].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr54.addEventListener("click", () => {
  tr[5].children[5].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr55.addEventListener("click", () => {
  tr[5].children[6].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr56.addEventListener("click", () => {
  tr[5].children[7].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr57.addEventListener("click", () => {
  tr[5].children[8].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
// Row 6

bktr6.addEventListener("click", () => {
  tr[6].children[1].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr61.addEventListener("click", () => {
  tr[6].children[2].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr62.addEventListener("click", () => {
  tr[6].children[3].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr63.addEventListener("click", () => {
  tr[6].children[4].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr64.addEventListener("click", () => {
  tr[6].children[5].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr65.addEventListener("click", () => {
  tr[6].children[6].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr66.addEventListener("click", () => {
  tr[6].children[7].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr67.addEventListener("click", () => {
  tr[6].children[8].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
// Row 7

bktr7.addEventListener("click", () => {
  tr[7].children[1].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr71.addEventListener("click", () => {
  tr[7].children[2].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr72.addEventListener("click", () => {
  tr[7].children[3].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr73.addEventListener("click", () => {
  tr[7].children[4].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr74.addEventListener("click", () => {
  tr[7].children[5].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr75.addEventListener("click", () => {
  tr[7].children[6].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr76.addEventListener("click", () => {
  tr[7].children[7].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr77.addEventListener("click", () => {
  tr[7].children[8].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
// Row 8

bktr8.addEventListener("click", () => {
  tr[8].children[1].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});

bktr81.addEventListener("click", () => {
  tr[8].children[2].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr82.addEventListener("click", () => {
  tr[8].children[3].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr83.addEventListener("click", () => {
  tr[8].children[4].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr84.addEventListener("click", () => {
  tr[8].children[5].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr85.addEventListener("click", () => {
  tr[8].children[6].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr86.addEventListener("click", () => {
  tr[8].children[7].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
bktr87.addEventListener("click", () => {
  tr[8].children[8].append(bknight);
  cb19.classList.remove("aniblue");
  bknight.classList.remove("kookri");
});
