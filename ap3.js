apThree1 = document.getElementsByClassName("cb12")[0];
apThree11 = document.getElementsByClassName("cb12")[1];
apThree12 = document.getElementsByClassName("cb12")[2];
apThree13 = document.getElementsByClassName("cb12")[3];
apThree14 = document.getElementsByClassName("cb12")[4];
apThree15 = document.getElementsByClassName("cb12")[5];
apThree16 = document.getElementsByClassName("cb12")[6];
apThree17 = document.getElementsByClassName("cb12")[7];

//Row 2
apThree2 = document.getElementsByClassName("cb12")[8];
apThree21 = document.getElementsByClassName("cb12")[9];
apThree22 = document.getElementsByClassName("cb12")[10];
apThree23 = document.getElementsByClassName("cb12")[11];
apThree24 = document.getElementsByClassName("cb12")[12];
apThree25 = document.getElementsByClassName("cb12")[13];
apThree26 = document.getElementsByClassName("cb12")[14];
apThree27 = document.getElementsByClassName("cb12")[15];
//Row 3
apThree3 = document.getElementsByClassName("cb12")[16];
apThree31 = document.getElementsByClassName("cb12")[17];
apThree32 = document.getElementsByClassName("cb12")[18];
apThree33 = document.getElementsByClassName("cb12")[19];
apThree34 = document.getElementsByClassName("cb12")[20];
apThree35 = document.getElementsByClassName("cb12")[21];
apThree36 = document.getElementsByClassName("cb12")[22];
apThree37 = document.getElementsByClassName("cb12")[23];
//Row 4
apThree4 = document.getElementsByClassName("cb12")[24];
apThree41 = document.getElementsByClassName("cb12")[25];
apThree42 = document.getElementsByClassName("cb12")[26];
apThree43 = document.getElementsByClassName("cb12")[27];
apThree44 = document.getElementsByClassName("cb12")[28];
apThree45 = document.getElementsByClassName("cb12")[29];
apThree46 = document.getElementsByClassName("cb12")[30];
apThree47 = document.getElementsByClassName("cb12")[31];
//Row 5
apThree5 = document.getElementsByClassName("cb12")[32];
apThree51 = document.getElementsByClassName("cb12")[33];
apThree52 = document.getElementsByClassName("cb12")[34];
apThree53 = document.getElementsByClassName("cb12")[35];
apThree54 = document.getElementsByClassName("cb12")[36];
apThree55 = document.getElementsByClassName("cb12")[37];
apThree56 = document.getElementsByClassName("cb12")[38];
apThree57 = document.getElementsByClassName("cb12")[39];
//Row 6
apThree6 = document.getElementsByClassName("cb12")[40];
apThree61 = document.getElementsByClassName("cb12")[41];
apThree62 = document.getElementsByClassName("cb12")[42];
apThree63 = document.getElementsByClassName("cb12")[43];
apThree64 = document.getElementsByClassName("cb12")[44];
apThree65 = document.getElementsByClassName("cb12")[45];
apThree66 = document.getElementsByClassName("cb12")[46];
apThree67 = document.getElementsByClassName("cb12")[47];
//Row 7
apThree7 = document.getElementsByClassName("cb12")[48];
apThree71 = document.getElementsByClassName("cb12")[49];
apThree72 = document.getElementsByClassName("cb12")[50];
apThree73 = document.getElementsByClassName("cb12")[51];
apThree74 = document.getElementsByClassName("cb12")[52];
apThree75 = document.getElementsByClassName("cb12")[53];
apThree76 = document.getElementsByClassName("cb12")[54];
apThree77 = document.getElementsByClassName("cb12")[55];
//Row 6
apThree8 = document.getElementsByClassName("cb12")[56];
apThree81 = document.getElementsByClassName("cb12")[57];
apThree82 = document.getElementsByClassName("cb12")[58];
apThree83 = document.getElementsByClassName("cb12")[59];
apThree84 = document.getElementsByClassName("cb12")[60];
apThree85 = document.getElementsByClassName("cb12")[61];
apThree86 = document.getElementsByClassName("cb12")[62];
apThree87 = document.getElementsByClassName("cb12")[63];

ap3.onclick = () => {
  ap3.style.cssText = "color:red;";
  ap3.classList.add('kookri');
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
  cb12.style.cssText = `display:initial;`;
  cb12.classList.add('anired');
};

apThree1.addEventListener("click", () => {
  tr[1].children[1].append(ap3);
  cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree11.addEventListener("click", () => {
  tr[1].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree12.addEventListener("click", () => {
  tr[1].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree13.addEventListener("click", () => {
  tr[1].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree14.addEventListener("click", () => {
  tr[1].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree15.addEventListener("click", () => {
  tr[1].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree16.addEventListener("click", () => {
  tr[1].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree17.addEventListener("click", () => {
  tr[1].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

// Row 2

apThree2.addEventListener("click", () => {
  tr[2].children[1].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree21.addEventListener("click", () => {
  tr[2].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree22.addEventListener("click", () => {
  tr[2].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree23.addEventListener("click", () => {
  tr[2].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree24.addEventListener("click", () => {
  tr[2].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree25.addEventListener("click", () => {
  tr[2].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree26.addEventListener("click", () => {
  tr[2].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree27.addEventListener("click", () => {
  tr[2].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
// Row 3

apThree3.addEventListener("click", () => {
  tr[3].children[1].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree31.addEventListener("click", () => {
  tr[3].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree32.addEventListener("click", () => {
  tr[3].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree33.addEventListener("click", () => {
  tr[3].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree34.addEventListener("click", () => {
  tr[3].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree35.addEventListener("click", () => {
  tr[3].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree36.addEventListener("click", () => {
  tr[3].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree37.addEventListener("click", () => {
  tr[3].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
// Row 4

apThree4.addEventListener("click", () => {
  tr[4].children[1].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree41.addEventListener("click", () => {
  tr[4].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree42.addEventListener("click", () => {
  tr[4].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree43.addEventListener("click", () => {
  tr[4].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree44.addEventListener("click", () => {
  tr[4].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree45.addEventListener("click", () => {
  tr[4].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree46.addEventListener("click", () => {
  tr[4].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree47.addEventListener("click", () => {
  tr[4].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
// Row 5

apThree5.addEventListener("click", () => {
  tr[5].children[1].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree51.addEventListener("click", () => {
  tr[5].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree52.addEventListener("click", () => {
  tr[5].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree53.addEventListener("click", () => {
  tr[5].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree54.addEventListener("click", () => {
  tr[5].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree55.addEventListener("click", () => {
  tr[5].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree56.addEventListener("click", () => {
  tr[5].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree57.addEventListener("click", () => {
  tr[5].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
// Row 6

apThree6.addEventListener("click", () => {
  tr[6].children[1].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree61.addEventListener("click", () => {
  tr[6].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree62.addEventListener("click", () => {
  tr[6].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree63.addEventListener("click", () => {
  tr[6].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree64.addEventListener("click", () => {
  tr[6].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree65.addEventListener("click", () => {
  tr[6].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree66.addEventListener("click", () => {
  tr[6].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree67.addEventListener("click", () => {
  tr[6].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
// Row 7

apThree7.addEventListener("click", () => {
  tr[7].children[1].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree71.addEventListener("click", () => {
  tr[7].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree72.addEventListener("click", () => {
  tr[7].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree73.addEventListener("click", () => {
  tr[7].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree74.addEventListener("click", () => {
  tr[7].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree75.addEventListener("click", () => {
  tr[7].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree76.addEventListener("click", () => {
  tr[7].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree77.addEventListener("click", () => {
  tr[7].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
// Row 8

apThree8.addEventListener("click", () => {
  tr[8].children[1].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});

apThree81.addEventListener("click", () => {
  tr[8].children[2].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree82.addEventListener("click", () => {
  tr[8].children[3].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree83.addEventListener("click", () => {
  tr[8].children[4].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree84.addEventListener("click", () => {
  tr[8].children[5].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree85.addEventListener("click", () => {
  tr[8].children[6].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree86.addEventListener("click", () => {
  tr[8].children[7].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
apThree87.addEventListener("click", () => {
  tr[8].children[8].append(ap3);
   cb12.classList.remove('anired');
  ap3.classList.remove('kookri');
});
