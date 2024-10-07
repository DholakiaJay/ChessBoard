atr1 = document.getElementsByClassName("cb9")[0];
atr11 = document.getElementsByClassName("cb9")[1];
atr12 = document.getElementsByClassName("cb9")[2];
atr13 = document.getElementsByClassName("cb9")[3];
atr14 = document.getElementsByClassName("cb9")[4];
atr15 = document.getElementsByClassName("cb9")[5];
atr16 = document.getElementsByClassName("cb9")[6];
atr17 = document.getElementsByClassName("cb9")[7];

//Row 2
atr2 = document.getElementsByClassName("cb9")[8];
atr21 = document.getElementsByClassName("cb9")[9];
atr22 = document.getElementsByClassName("cb9")[10];
atr23 = document.getElementsByClassName("cb9")[11];
atr24 = document.getElementsByClassName("cb9")[12];
atr25 = document.getElementsByClassName("cb9")[13];
atr26 = document.getElementsByClassName("cb9")[14];
atr27 = document.getElementsByClassName("cb9")[15];
//Row 3
atr3 = document.getElementsByClassName("cb9")[16];
atr31 = document.getElementsByClassName("cb9")[17];
atr32 = document.getElementsByClassName("cb9")[18];
atr33 = document.getElementsByClassName("cb9")[19];
atr34 = document.getElementsByClassName("cb9")[20];
atr35 = document.getElementsByClassName("cb9")[21];
atr36 = document.getElementsByClassName("cb9")[22];
atr37 = document.getElementsByClassName("cb9")[23];
//Row 4
atr4 = document.getElementsByClassName("cb9")[24];
atr41 = document.getElementsByClassName("cb9")[25];
atr42 = document.getElementsByClassName("cb9")[26];
atr43 = document.getElementsByClassName("cb9")[27];
atr44 = document.getElementsByClassName("cb9")[28];
atr45 = document.getElementsByClassName("cb9")[29];
atr46 = document.getElementsByClassName("cb9")[30];
atr47 = document.getElementsByClassName("cb9")[31];
//Row 5
atr5 = document.getElementsByClassName("cb9")[32];
atr51 = document.getElementsByClassName("cb9")[33];
atr52 = document.getElementsByClassName("cb9")[34];
atr53 = document.getElementsByClassName("cb9")[35];
atr54 = document.getElementsByClassName("cb9")[36];
atr55 = document.getElementsByClassName("cb9")[37];
atr56 = document.getElementsByClassName("cb9")[38];
atr57 = document.getElementsByClassName("cb9")[39];
//Row 6
atr6 = document.getElementsByClassName("cb9")[40];
atr61 = document.getElementsByClassName("cb9")[41];
atr62 = document.getElementsByClassName("cb9")[42];
atr63 = document.getElementsByClassName("cb9")[43];
atr64 = document.getElementsByClassName("cb9")[44];
atr65 = document.getElementsByClassName("cb9")[45];
atr66 = document.getElementsByClassName("cb9")[46];
atr67 = document.getElementsByClassName("cb9")[47];
//Row 7
atr7 = document.getElementsByClassName("cb9")[48];
atr71 = document.getElementsByClassName("cb9")[49];
atr72 = document.getElementsByClassName("cb9")[50];
atr73 = document.getElementsByClassName("cb9")[51];
atr74 = document.getElementsByClassName("cb9")[52];
atr75 = document.getElementsByClassName("cb9")[53];
atr76 = document.getElementsByClassName("cb9")[54];
atr77 = document.getElementsByClassName("cb9")[55];
//Row 6
atr8 = document.getElementsByClassName("cb9")[56];
atr81 = document.getElementsByClassName("cb9")[57];
atr82 = document.getElementsByClassName("cb9")[58];
atr83 = document.getElementsByClassName("cb9")[59];
atr84 = document.getElementsByClassName("cb9")[60];
atr85 = document.getElementsByClassName("cb9")[61];
atr86 = document.getElementsByClassName("cb9")[62];
atr87 = document.getElementsByClassName("cb9")[63];

arook2.onclick = () => {
  arook2.style.cssText = "color:red;";
  arook2.classList.add('kookri');
  cb2.style.cssText = `display:none;`;
  cb3.style.cssText = "display:none;";
  cb4.style.cssText = `display:none;`;
  cb5.style.cssText = `display:none;`;
  cb6.style.cssText = `display:none;`;
  cb7.style.cssText = `display:none;`;
  cb8.style.cssText = `display:none;`;
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
  cb9.style.cssText = `display:initial;`;
  cb9.classList.add('anired');
};

atr1.addEventListener("click", () => {
  tr[1].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr11.addEventListener("click", () => {
  tr[1].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr12.addEventListener("click", () => {
  tr[1].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr13.addEventListener("click", () => {
  tr[1].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr14.addEventListener("click", () => {
  tr[1].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr15.addEventListener("click", () => {
  tr[1].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr16.addEventListener("click", () => {
  tr[1].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr17.addEventListener("click", () => {
  tr[1].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

// Row 2

atr2.addEventListener("click", () => {
  tr[2].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr21.addEventListener("click", () => {
  tr[2].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr22.addEventListener("click", () => {
  tr[2].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr23.addEventListener("click", () => {
  tr[2].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr24.addEventListener("click", () => {
  tr[2].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr25.addEventListener("click", () => {
  tr[2].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr26.addEventListener("click", () => {
  tr[2].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr27.addEventListener("click", () => {
  tr[2].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
// Row 3

atr3.addEventListener("click", () => {
  tr[3].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr31.addEventListener("click", () => {
  tr[3].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr32.addEventListener("click", () => {
  tr[3].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr33.addEventListener("click", () => {
  tr[3].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr34.addEventListener("click", () => {
  tr[3].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr35.addEventListener("click", () => {
  tr[3].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr36.addEventListener("click", () => {
  tr[3].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr37.addEventListener("click", () => {
  tr[3].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
// Row 4

atr4.addEventListener("click", () => {
  tr[4].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr41.addEventListener("click", () => {
  tr[4].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr42.addEventListener("click", () => {
  tr[4].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr43.addEventListener("click", () => {
  tr[4].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr44.addEventListener("click", () => {
  tr[4].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr45.addEventListener("click", () => {
  tr[4].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr46.addEventListener("click", () => {
  tr[4].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr47.addEventListener("click", () => {
  tr[4].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
// Row 5

atr5.addEventListener("click", () => {
  tr[5].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr51.addEventListener("click", () => {
  tr[5].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr52.addEventListener("click", () => {
  tr[5].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr53.addEventListener("click", () => {
  tr[5].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr54.addEventListener("click", () => {
  tr[5].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr55.addEventListener("click", () => {
  tr[5].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr56.addEventListener("click", () => {
  tr[5].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr57.addEventListener("click", () => {
  tr[5].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
// Row 6

atr6.addEventListener("click", () => {
  tr[6].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr61.addEventListener("click", () => {
  tr[6].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr62.addEventListener("click", () => {
  tr[6].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr63.addEventListener("click", () => {
  tr[6].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr64.addEventListener("click", () => {
  tr[6].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr65.addEventListener("click", () => {
  tr[6].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr66.addEventListener("click", () => {
  tr[6].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr67.addEventListener("click", () => {
  tr[6].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
// Row 7

atr7.addEventListener("click", () => {
  tr[7].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr71.addEventListener("click", () => {
  tr[7].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr72.addEventListener("click", () => {
  tr[7].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr73.addEventListener("click", () => {
  tr[7].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr74.addEventListener("click", () => {
  tr[7].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr75.addEventListener("click", () => {
  tr[7].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr76.addEventListener("click", () => {
  tr[7].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr77.addEventListener("click", () => {
  tr[7].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
// Row 8

atr8.addEventListener("click", () => {
  tr[8].children[1].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});

atr81.addEventListener("click", () => {
  tr[8].children[2].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr82.addEventListener("click", () => {
  tr[8].children[3].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr83.addEventListener("click", () => {
  tr[8].children[4].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr84.addEventListener("click", () => {
  tr[8].children[5].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr85.addEventListener("click", () => {
  tr[8].children[6].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr86.addEventListener("click", () => {
  tr[8].children[7].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
atr87.addEventListener("click", () => {
  tr[8].children[8].append(arook2);
  cb9.classList.remove('anired');
  arook2.classList.remove('kookri');
});
