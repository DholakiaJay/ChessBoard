//  bishop

// Row 1
btr1 = document.getElementsByClassName("cb4")[0];
btr11 = document.getElementsByClassName("cb4")[1];
btr12 = document.getElementsByClassName("cb4")[2];
btr13 = document.getElementsByClassName("cb4")[3];
btr14 = document.getElementsByClassName("cb4")[4];
btr15 = document.getElementsByClassName("cb4")[5];
btr16 = document.getElementsByClassName("cb4")[6];
btr17 = document.getElementsByClassName("cb4")[7];
//  Row 2
btr2 = document.getElementsByClassName("cb4")[8];
btr21 = document.getElementsByClassName("cb4")[9];
btr22 = document.getElementsByClassName("cb4")[10];
btr23 = document.getElementsByClassName("cb4")[11];
btr24 = document.getElementsByClassName("cb4")[12];
btr25 = document.getElementsByClassName("cb4")[13];
btr26 = document.getElementsByClassName("cb4")[14];
btr27 = document.getElementsByClassName("cb4")[15];
//  Row 3
btr3 = document.getElementsByClassName("cb4")[16];
btr31 = document.getElementsByClassName("cb4")[17];
btr32 = document.getElementsByClassName("cb4")[18];
btr33 = document.getElementsByClassName("cb4")[19];
btr34 = document.getElementsByClassName("cb4")[20];
btr35 = document.getElementsByClassName("cb4")[21];
btr36 = document.getElementsByClassName("cb4")[22];
btr37 = document.getElementsByClassName("cb4")[23];
//  Row 4
btr4 = document.getElementsByClassName("cb4")[24];
btr41 = document.getElementsByClassName("cb4")[25];
btr42 = document.getElementsByClassName("cb4")[26];
btr43 = document.getElementsByClassName("cb4")[27];
btr44 = document.getElementsByClassName("cb4")[28];
btr45 = document.getElementsByClassName("cb4")[29];
btr46 = document.getElementsByClassName("cb4")[30];
btr47 = document.getElementsByClassName("cb4")[31];

// Row 5
btr5 = document.getElementsByClassName("cb4")[32];
btr51 = document.getElementsByClassName("cb4")[33];
btr52 = document.getElementsByClassName("cb4")[34];
btr53 = document.getElementsByClassName("cb4")[35];
btr54 = document.getElementsByClassName("cb4")[36];
btr55 = document.getElementsByClassName("cb4")[37];
btr56 = document.getElementsByClassName("cb4")[38];
btr57 = document.getElementsByClassName("cb4")[39];

// Row 6
btr6 = document.getElementsByClassName("cb4")[40];
btr61 = document.getElementsByClassName("cb4")[41];
btr62 = document.getElementsByClassName("cb4")[42];
btr63 = document.getElementsByClassName("cb4")[43];
btr64 = document.getElementsByClassName("cb4")[44];
btr65 = document.getElementsByClassName("cb4")[45];
btr66 = document.getElementsByClassName("cb4")[46];
btr67 = document.getElementsByClassName("cb4")[47];

// Row 7
btr7 = document.getElementsByClassName("cb4")[48];
btr71 = document.getElementsByClassName("cb4")[49];
btr72 = document.getElementsByClassName("cb4")[50];
btr73 = document.getElementsByClassName("cb4")[51];
btr74 = document.getElementsByClassName("cb4")[52];
btr75 = document.getElementsByClassName("cb4")[53];
btr76 = document.getElementsByClassName("cb4")[54];
btr77 = document.getElementsByClassName("cb4")[55];
// Row 8
// Row 8
btr8 = document.getElementsByClassName("cb4")[56];
btr81 = document.getElementsByClassName("cb4")[57];
btr82 = document.getElementsByClassName("cb4")[58];
btr83 = document.getElementsByClassName("cb4")[59];
btr84 = document.getElementsByClassName("cb4")[60];
btr85 = document.getElementsByClassName("cb4")[61];
btr86 = document.getElementsByClassName("cb4")[62];
btr87 = document.getElementsByClassName("cb4")[63];

bishop.onclick = () => {
  bishop.style.cssText = "color:red;";
  bishop.classList.add("kookri");
  cb2.style.cssText = "display:none;";
  cb3.style.cssText = `display:none;`;
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
  cb33.style.cssText = `display:none;`;
  cb4.style.cssText = `display:initial;`;
  cb4.classList.add("anired");
};

// bishop
btr1.addEventListener("click", () => {
  tr[1].children[1].append(bishop);
  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr11.addEventListener("click", () => {
  tr[1].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr12.addEventListener("click", () => {
  tr[1].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr13.addEventListener("click", () => {
  tr[1].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr14.addEventListener("click", () => {
  tr[1].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr15.addEventListener("click", () => {
  tr[1].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr16.addEventListener("click", () => {
  tr[1].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr17.addEventListener("click", () => {
  tr[1].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
// Row 2
btr2.addEventListener("click", () => {
  tr[2].children[1].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr21.addEventListener("click", () => {
  tr[2].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr22.addEventListener("click", () => {
  tr[2].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr23.addEventListener("click", () => {
  tr[2].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr24.addEventListener("click", () => {
  tr[2].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr25.addEventListener("click", () => {
  tr[2].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr26.addEventListener("click", () => {
  tr[2].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr27.addEventListener("click", () => {
  tr[2].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
// Row 3

btr3.addEventListener("click", () => {
  tr[3].children[1].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr31.addEventListener("click", () => {
  tr[3].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr32.addEventListener("click", () => {
  tr[3].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr33.addEventListener("click", () => {
  tr[3].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr34.addEventListener("click", () => {
  tr[3].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr35.addEventListener("click", () => {
  tr[3].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr36.addEventListener("click", () => {
  tr[3].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr37.addEventListener("click", () => {
  tr[3].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
// Row 4

btr4.addEventListener("click", () => {
  tr[4].children[1].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr41.addEventListener("click", () => {
  tr[4].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr42.addEventListener("click", () => {
  tr[4].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr43.addEventListener("click", () => {
  tr[4].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr44.addEventListener("click", () => {
  tr[4].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr45.addEventListener("click", () => {
  tr[4].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr46.addEventListener("click", () => {
  tr[4].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr47.addEventListener("click", () => {
  tr[4].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
// Row 5

btr5.addEventListener("click", () => {
  tr[5].children[1].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr51.addEventListener("click", () => {
  tr[5].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr52.addEventListener("click", () => {
  tr[5].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr53.addEventListener("click", () => {
  tr[5].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr54.addEventListener("click", () => {
  tr[5].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr55.addEventListener("click", () => {
  tr[5].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr56.addEventListener("click", () => {
  tr[5].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr57.addEventListener("click", () => {
  tr[5].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr6.addEventListener("click", () => {
  tr[6].children[1].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr61.addEventListener("click", () => {
  tr[6].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr62.addEventListener("click", () => {
  tr[6].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr63.addEventListener("click", () => {
  tr[6].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr64.addEventListener("click", () => {
  tr[6].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr65.addEventListener("click", () => {
  tr[6].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr66.addEventListener("click", () => {
  tr[6].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr67.addEventListener("click", () => {
  tr[6].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

// Row 7

btr7.addEventListener("click", () => {
  tr[7].children[1].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr71.addEventListener("click", () => {
  tr[7].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr72.addEventListener("click", () => {
  tr[7].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr73.addEventListener("click", () => {
  tr[7].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr74.addEventListener("click", () => {
  tr[7].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr75.addEventListener("click", () => {
  tr[7].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr76.addEventListener("click", () => {
  tr[7].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr77.addEventListener("click", () => {
  tr[7].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

// Row 8

btr8.addEventListener("click", () => {
  tr[8].children[1].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});

btr81.addEventListener("click", () => {
  tr[8].children[2].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr82.addEventListener("click", () => {
  tr[8].children[3].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr83.addEventListener("click", () => {
  tr[8].children[4].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr84.addEventListener("click", () => {
  tr[8].children[5].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr85.addEventListener("click", () => {
  tr[8].children[6].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr86.addEventListener("click", () => {
  tr[8].children[7].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
btr87.addEventListener("click", () => {
  tr[8].children[8].append(bishop);

  cb4.classList.remove("anired");
  bishop.classList.remove("kookri");
});
