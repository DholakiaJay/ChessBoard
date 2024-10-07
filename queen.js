//  queen

// Row 1
qtr1 = document.getElementsByClassName("cb6")[0];
qtr11 = document.getElementsByClassName("cb6")[1];
qtr12 = document.getElementsByClassName("cb6")[2];
qtr13 = document.getElementsByClassName("cb6")[3];
qtr14 = document.getElementsByClassName("cb6")[4];
qtr15 = document.getElementsByClassName("cb6")[5];
qtr16 = document.getElementsByClassName("cb6")[6];
qtr17 = document.getElementsByClassName("cb6")[7];
//  Row 2
qtr2 = document.getElementsByClassName("cb6")[8];
qtr21 = document.getElementsByClassName("cb6")[9];
qtr22 = document.getElementsByClassName("cb6")[10];
qtr23 = document.getElementsByClassName("cb6")[11];
qtr24 = document.getElementsByClassName("cb6")[12];
qtr25 = document.getElementsByClassName("cb6")[13];
qtr26 = document.getElementsByClassName("cb6")[14];
qtr27 = document.getElementsByClassName("cb6")[15];
//  Row 3
qtr3 = document.getElementsByClassName("cb6")[16];
qtr31 = document.getElementsByClassName("cb6")[17];
qtr32 = document.getElementsByClassName("cb6")[18];
qtr33 = document.getElementsByClassName("cb6")[19];
qtr34 = document.getElementsByClassName("cb6")[20];
qtr35 = document.getElementsByClassName("cb6")[21];
qtr36 = document.getElementsByClassName("cb6")[22];
qtr37 = document.getElementsByClassName("cb6")[23];
//  Row 4
qtr4 = document.getElementsByClassName("cb6")[24];
qtr41 = document.getElementsByClassName("cb6")[25];
qtr42 = document.getElementsByClassName("cb6")[26];
qtr43 = document.getElementsByClassName("cb6")[27];
qtr44 = document.getElementsByClassName("cb6")[28];
qtr45 = document.getElementsByClassName("cb6")[29];
qtr46 = document.getElementsByClassName("cb6")[30];
qtr47 = document.getElementsByClassName("cb6")[31];

// Row 5
qtr5 = document.getElementsByClassName("cb6")[32];
qtr51 = document.getElementsByClassName("cb6")[33];
qtr52 = document.getElementsByClassName("cb6")[34];
qtr53 = document.getElementsByClassName("cb6")[35];
qtr54 = document.getElementsByClassName("cb6")[36];
qtr55 = document.getElementsByClassName("cb6")[37];
qtr56 = document.getElementsByClassName("cb6")[38];
qtr57 = document.getElementsByClassName("cb6")[39];

// Row 6
qtr6 = document.getElementsByClassName("cb6")[40];
qtr61 = document.getElementsByClassName("cb6")[41];
qtr62 = document.getElementsByClassName("cb6")[42];
qtr63 = document.getElementsByClassName("cb6")[43];
qtr64 = document.getElementsByClassName("cb6")[44];
qtr65 = document.getElementsByClassName("cb6")[45];
qtr66 = document.getElementsByClassName("cb6")[46];
qtr67 = document.getElementsByClassName("cb6")[47];

// Row 7
qtr7 = document.getElementsByClassName("cb6")[48];
qtr71 = document.getElementsByClassName("cb6")[49];
qtr72 = document.getElementsByClassName("cb6")[50];
qtr73 = document.getElementsByClassName("cb6")[51];
qtr74 = document.getElementsByClassName("cb6")[52];
qtr75 = document.getElementsByClassName("cb6")[53];
qtr76 = document.getElementsByClassName("cb6")[54];
qtr77 = document.getElementsByClassName("cb6")[55];
// Row 8
// Row 8
qtr8 = document.getElementsByClassName("cb6")[56];
qtr81 = document.getElementsByClassName("cb6")[57];
qtr82 = document.getElementsByClassName("cb6")[58];
qtr83 = document.getElementsByClassName("cb6")[59];
qtr84 = document.getElementsByClassName("cb6")[60];
qtr85 = document.getElementsByClassName("cb6")[61];
qtr86 = document.getElementsByClassName("cb6")[62];
qtr87 = document.getElementsByClassName("cb6")[63];

queen.onclick = () => {
  queen.style.cssText = "color:red;";
  queen.classList.add("kookri");
  cb2.style.cssText = "display:none;";
  cb3.style.cssText = `display:none;`;
  cb4.style.cssText = `display:none;`;
  cb5.style.cssText = `display:none;`;
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
  cb33.style.cssText = `display:none;`;
  cb6.style.cssText = `display:initial;`;
  cb6.classList.add("anired");
};

// queen
qtr1.addEventListener("click", () => {
  tr[1].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr11.addEventListener("click", () => {
  tr[1].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr12.addEventListener("click", () => {
  tr[1].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr13.addEventListener("click", () => {
  tr[1].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr14.addEventListener("click", () => {
  tr[1].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr15.addEventListener("click", () => {
  tr[1].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr16.addEventListener("click", () => {
  tr[1].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr17.addEventListener("click", () => {
  tr[1].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
// Row 2
qtr2.addEventListener("click", () => {
  tr[2].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr21.addEventListener("click", () => {
  tr[2].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr22.addEventListener("click", () => {
  tr[2].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr23.addEventListener("click", () => {
  tr[2].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr24.addEventListener("click", () => {
  tr[2].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr25.addEventListener("click", () => {
  tr[2].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr26.addEventListener("click", () => {
  tr[2].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr27.addEventListener("click", () => {
  tr[2].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
// Row 3

qtr3.addEventListener("click", () => {
  tr[3].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr31.addEventListener("click", () => {
  tr[3].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr32.addEventListener("click", () => {
  tr[3].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr33.addEventListener("click", () => {
  tr[3].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr34.addEventListener("click", () => {
  tr[3].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr35.addEventListener("click", () => {
  tr[3].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr36.addEventListener("click", () => {
  tr[3].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr37.addEventListener("click", () => {
  tr[3].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
// Row 4

qtr4.addEventListener("click", () => {
  tr[4].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr41.addEventListener("click", () => {
  tr[4].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr42.addEventListener("click", () => {
  tr[4].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr43.addEventListener("click", () => {
  tr[4].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr44.addEventListener("click", () => {
  tr[4].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr45.addEventListener("click", () => {
  tr[4].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr46.addEventListener("click", () => {
  tr[4].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr47.addEventListener("click", () => {
  tr[4].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
// Row 5

qtr5.addEventListener("click", () => {
  tr[5].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr51.addEventListener("click", () => {
  tr[5].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr52.addEventListener("click", () => {
  tr[5].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr53.addEventListener("click", () => {
  tr[5].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr54.addEventListener("click", () => {
  tr[5].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr55.addEventListener("click", () => {
  tr[5].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr56.addEventListener("click", () => {
  tr[5].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr57.addEventListener("click", () => {
  tr[5].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr6.addEventListener("click", () => {
  tr[6].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr61.addEventListener("click", () => {
  tr[6].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr62.addEventListener("click", () => {
  tr[6].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr63.addEventListener("click", () => {
  tr[6].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr64.addEventListener("click", () => {
  tr[6].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr65.addEventListener("click", () => {
  tr[6].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr66.addEventListener("click", () => {
  tr[6].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr67.addEventListener("click", () => {
  tr[6].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

// Row 7

qtr7.addEventListener("click", () => {
  tr[7].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr71.addEventListener("click", () => {
  tr[7].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr72.addEventListener("click", () => {
  tr[7].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr73.addEventListener("click", () => {
  tr[7].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr74.addEventListener("click", () => {
  tr[7].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr75.addEventListener("click", () => {
  tr[7].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr76.addEventListener("click", () => {
  tr[7].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr77.addEventListener("click", () => {
  tr[7].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
// Row 8

qtr8.addEventListener("click", () => {
  tr[8].children[1].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});

qtr81.addEventListener("click", () => {
  tr[8].children[2].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr82.addEventListener("click", () => {
  tr[8].children[3].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr83.addEventListener("click", () => {
  tr[8].children[4].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr84.addEventListener("click", () => {
  tr[8].children[5].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr85.addEventListener("click", () => {
  tr[8].children[6].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr86.addEventListener("click", () => {
  tr[8].children[7].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
qtr87.addEventListener("click", () => {
  tr[8].children[8].append(queen);

  cb6.classList.remove("anired");
  queen.classList.remove("kookri");
});
