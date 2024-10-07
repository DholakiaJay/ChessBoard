//  Knight

// Row 1
ktr1 = document.getElementsByClassName("cb3")[0];
ktr11 = document.getElementsByClassName("cb3")[1];
ktr12 = document.getElementsByClassName("cb3")[2];
ktr13 = document.getElementsByClassName("cb3")[3];
ktr14 = document.getElementsByClassName("cb3")[4];
ktr15 = document.getElementsByClassName("cb3")[5];
ktr16 = document.getElementsByClassName("cb3")[6];
ktr17 = document.getElementsByClassName("cb3")[7];
//  Row 2
ktr2 = document.getElementsByClassName("cb3")[8];
ktr21 = document.getElementsByClassName("cb3")[9];
ktr22 = document.getElementsByClassName("cb3")[10];
ktr23 = document.getElementsByClassName("cb3")[11];
ktr24 = document.getElementsByClassName("cb3")[12];
ktr25 = document.getElementsByClassName("cb3")[13];
ktr26 = document.getElementsByClassName("cb3")[14];
ktr27 = document.getElementsByClassName("cb3")[15];
//  Row 3
ktr3 = document.getElementsByClassName("cb3")[16];
ktr31 = document.getElementsByClassName("cb3")[17];
ktr32 = document.getElementsByClassName("cb3")[18];
ktr33 = document.getElementsByClassName("cb3")[19];
ktr34 = document.getElementsByClassName("cb3")[20];
ktr35 = document.getElementsByClassName("cb3")[21];
ktr36 = document.getElementsByClassName("cb3")[22];
ktr37 = document.getElementsByClassName("cb3")[23];
//  Row 4
ktr4 = document.getElementsByClassName("cb3")[24];
ktr41 = document.getElementsByClassName("cb3")[25];
ktr42 = document.getElementsByClassName("cb3")[26];
ktr43 = document.getElementsByClassName("cb3")[27];
ktr44 = document.getElementsByClassName("cb3")[28];
ktr45 = document.getElementsByClassName("cb3")[29];
ktr46 = document.getElementsByClassName("cb3")[30];
ktr47 = document.getElementsByClassName("cb3")[31];

// Row 5
ktr5 = document.getElementsByClassName("cb3")[32];
ktr51 = document.getElementsByClassName("cb3")[33];
ktr52 = document.getElementsByClassName("cb3")[34];
ktr53 = document.getElementsByClassName("cb3")[35];
ktr54 = document.getElementsByClassName("cb3")[36];
ktr55 = document.getElementsByClassName("cb3")[37];
ktr56 = document.getElementsByClassName("cb3")[38];
ktr57 = document.getElementsByClassName("cb3")[39];

// Row 6
ktr6 = document.getElementsByClassName("cb3")[40];
ktr61 = document.getElementsByClassName("cb3")[41];
ktr62 = document.getElementsByClassName("cb3")[42];
ktr63 = document.getElementsByClassName("cb3")[43];
ktr64 = document.getElementsByClassName("cb3")[44];
ktr65 = document.getElementsByClassName("cb3")[45];
ktr66 = document.getElementsByClassName("cb3")[46];
ktr67 = document.getElementsByClassName("cb3")[47];

// Row 7
ktr7 = document.getElementsByClassName("cb3")[48];
ktr71 = document.getElementsByClassName("cb3")[49];
ktr72 = document.getElementsByClassName("cb3")[50];
ktr73 = document.getElementsByClassName("cb3")[51];
ktr74 = document.getElementsByClassName("cb3")[52];
ktr75 = document.getElementsByClassName("cb3")[53];
ktr76 = document.getElementsByClassName("cb3")[54];
ktr77 = document.getElementsByClassName("cb3")[55];
// Row 8
// Row 8
ktr8 = document.getElementsByClassName("cb3")[56];
ktr81 = document.getElementsByClassName("cb3")[57];
ktr82 = document.getElementsByClassName("cb3")[58];
ktr83 = document.getElementsByClassName("cb3")[59];
ktr84 = document.getElementsByClassName("cb3")[60];
ktr85 = document.getElementsByClassName("cb3")[61];
ktr86 = document.getElementsByClassName("cb3")[62];
ktr87 = document.getElementsByClassName("cb3")[63];

knight.onclick = () => {
  knight.style.cssText = "color:red;";
  knight.classList.add("kookri");
  cb2.style.cssText = "display:none;";
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
  cb33.style.cssText = `display:none;`;
  cb3.style.cssText = `display:initial;`;
  cb3.classList.add("anired");
};

// knight
ktr1.addEventListener("click", () => {
  tr[1].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr11.addEventListener("click", () => {
  tr[1].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr12.addEventListener("click", () => {
  tr[1].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr13.addEventListener("click", () => {
  tr[1].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr14.addEventListener("click", () => {
  tr[1].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr15.addEventListener("click", () => {
  tr[1].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr16.addEventListener("click", () => {
  tr[1].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr17.addEventListener("click", () => {
  tr[1].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
// Row 2
ktr2.addEventListener("click", () => {
  tr[2].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr21.addEventListener("click", () => {
  tr[2].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr22.addEventListener("click", () => {
  tr[2].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr23.addEventListener("click", () => {
  tr[2].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr24.addEventListener("click", () => {
  tr[2].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr25.addEventListener("click", () => {
  tr[2].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr26.addEventListener("click", () => {
  tr[2].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr27.addEventListener("click", () => {
  tr[2].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
// Row 3

ktr3.addEventListener("click", () => {
  tr[3].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr31.addEventListener("click", () => {
  tr[3].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr32.addEventListener("click", () => {
  tr[3].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr33.addEventListener("click", () => {
  tr[3].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr34.addEventListener("click", () => {
  tr[3].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr35.addEventListener("click", () => {
  tr[3].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr36.addEventListener("click", () => {
  tr[3].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr37.addEventListener("click", () => {
  tr[3].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
// Row 4

ktr4.addEventListener("click", () => {
  tr[4].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr41.addEventListener("click", () => {
  tr[4].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr42.addEventListener("click", () => {
  tr[4].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr43.addEventListener("click", () => {
  tr[4].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr44.addEventListener("click", () => {
  tr[4].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr45.addEventListener("click", () => {
  tr[4].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr46.addEventListener("click", () => {
  tr[4].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr47.addEventListener("click", () => {
  tr[4].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
// Row 5

ktr5.addEventListener("click", () => {
  tr[5].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr51.addEventListener("click", () => {
  tr[5].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr52.addEventListener("click", () => {
  tr[5].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr53.addEventListener("click", () => {
  tr[5].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr54.addEventListener("click", () => {
  tr[5].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr55.addEventListener("click", () => {
  tr[5].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr56.addEventListener("click", () => {
  tr[5].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr57.addEventListener("click", () => {
  tr[5].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr6.addEventListener("click", () => {
  tr[6].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr61.addEventListener("click", () => {
  tr[6].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr62.addEventListener("click", () => {
  tr[6].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr63.addEventListener("click", () => {
  tr[6].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr64.addEventListener("click", () => {
  tr[6].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr65.addEventListener("click", () => {
  tr[6].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr66.addEventListener("click", () => {
  tr[6].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr67.addEventListener("click", () => {
  tr[6].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

// Row 7

ktr7.addEventListener("click", () => {
  tr[7].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr71.addEventListener("click", () => {
  tr[7].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr72.addEventListener("click", () => {
  tr[7].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr73.addEventListener("click", () => {
  tr[7].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr74.addEventListener("click", () => {
  tr[7].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr75.addEventListener("click", () => {
  tr[7].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr76.addEventListener("click", () => {
  tr[7].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr77.addEventListener("click", () => {
  tr[7].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
// Row 8

ktr8.addEventListener("click", () => {
  tr[8].children[1].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});

ktr81.addEventListener("click", () => {
  tr[8].children[2].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr82.addEventListener("click", () => {
  tr[8].children[3].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr83.addEventListener("click", () => {
  tr[8].children[4].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr84.addEventListener("click", () => {
  tr[8].children[5].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr85.addEventListener("click", () => {
  tr[8].children[6].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr86.addEventListener("click", () => {
  tr[8].children[7].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
ktr87.addEventListener("click", () => {
  tr[8].children[8].append(knight);

  cb3.classList.remove("anired");
  knight.classList.remove("kookri");
});
