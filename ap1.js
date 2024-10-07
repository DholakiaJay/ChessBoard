apOne1 = document.getElementsByClassName("cb10")[0];
apOne11 = document.getElementsByClassName("cb10")[1];
apOne12 = document.getElementsByClassName("cb10")[2];
apOne13 = document.getElementsByClassName("cb10")[3];
apOne14 = document.getElementsByClassName("cb10")[4];
apOne15 = document.getElementsByClassName("cb10")[5];
apOne16 = document.getElementsByClassName("cb10")[6];
apOne17 = document.getElementsByClassName("cb10")[7];

//Row 2
apOne2 = document.getElementsByClassName("cb10")[8];
apOne21 = document.getElementsByClassName("cb10")[9];
apOne22 = document.getElementsByClassName("cb10")[10];
apOne23 = document.getElementsByClassName("cb10")[11];
apOne24 = document.getElementsByClassName("cb10")[12];
apOne25 = document.getElementsByClassName("cb10")[13];
apOne26 = document.getElementsByClassName("cb10")[14];
apOne27 = document.getElementsByClassName("cb10")[15];
//Row 3
apOne3 = document.getElementsByClassName("cb10")[16];
apOne31 = document.getElementsByClassName("cb10")[17];
apOne32 = document.getElementsByClassName("cb10")[18];
apOne33 = document.getElementsByClassName("cb10")[19];
apOne34 = document.getElementsByClassName("cb10")[20];
apOne35 = document.getElementsByClassName("cb10")[21];
apOne36 = document.getElementsByClassName("cb10")[22];
apOne37 = document.getElementsByClassName("cb10")[23];
//Row 4
apOne4 = document.getElementsByClassName("cb10")[24];
apOne41 = document.getElementsByClassName("cb10")[25];
apOne42 = document.getElementsByClassName("cb10")[26];
apOne43 = document.getElementsByClassName("cb10")[27];
apOne44 = document.getElementsByClassName("cb10")[28];
apOne45 = document.getElementsByClassName("cb10")[29];
apOne46 = document.getElementsByClassName("cb10")[30];
apOne47 = document.getElementsByClassName("cb10")[31];
//Row 5
apOne5 = document.getElementsByClassName("cb10")[32];
apOne51 = document.getElementsByClassName("cb10")[33];
apOne52 = document.getElementsByClassName("cb10")[34];
apOne53 = document.getElementsByClassName("cb10")[35];
apOne54 = document.getElementsByClassName("cb10")[36];
apOne55 = document.getElementsByClassName("cb10")[37];
apOne56 = document.getElementsByClassName("cb10")[38];
apOne57 = document.getElementsByClassName("cb10")[39];
//Row 6
apOne6 = document.getElementsByClassName("cb10")[40];
apOne61 = document.getElementsByClassName("cb10")[41];
apOne62 = document.getElementsByClassName("cb10")[42];
apOne63 = document.getElementsByClassName("cb10")[43];
apOne64 = document.getElementsByClassName("cb10")[44];
apOne65 = document.getElementsByClassName("cb10")[45];
apOne66 = document.getElementsByClassName("cb10")[46];
apOne67 = document.getElementsByClassName("cb10")[47];
//Row 7
apOne7 = document.getElementsByClassName("cb10")[48];
apOne71 = document.getElementsByClassName("cb10")[49];
apOne72 = document.getElementsByClassName("cb10")[50];
apOne73 = document.getElementsByClassName("cb10")[51];
apOne74 = document.getElementsByClassName("cb10")[52];
apOne75 = document.getElementsByClassName("cb10")[53];
apOne76 = document.getElementsByClassName("cb10")[54];
apOne77 = document.getElementsByClassName("cb10")[55];
//Row 6
apOne8 = document.getElementsByClassName("cb10")[56];
apOne81 = document.getElementsByClassName("cb10")[57];
apOne82 = document.getElementsByClassName("cb10")[58];
apOne83 = document.getElementsByClassName("cb10")[59];
apOne84 = document.getElementsByClassName("cb10")[60];
apOne85 = document.getElementsByClassName("cb10")[61];
apOne86 = document.getElementsByClassName("cb10")[62];
apOne87 = document.getElementsByClassName("cb10")[63];

ap1.onclick = () => {
  ap1.style.cssText = "color:red;";
  ap1.classList.add("kookri");
  cb2.style.cssText = `display:none;`;
  cb3.style.cssText = "display:none;";
  cb4.style.cssText = `display:none;`;
  cb5.style.cssText = `display:none;`;
  cb6.style.cssText = `display:none;`;
  cb7.style.cssText = `display:none;`;
  cb8.style.cssText = `display:none;`;
  cb9.style.cssText = `display:none;`;
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
  cb10.style.cssText = `display:initial;`;
  cb10.classList.add("anired");
};

apOne1.addEventListener("click", () => {
  tr[1].children[1].append(ap1);
  cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
  
});

apOne11.addEventListener("click", () => {
  tr[1].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne12.addEventListener("click", () => {
  tr[1].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne13.addEventListener("click", () => {
  tr[1].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne14.addEventListener("click", () => {
  tr[1].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne15.addEventListener("click", () => {
  tr[1].children[6].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne16.addEventListener("click", () => {
  tr[1].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne17.addEventListener("click", () => {
  tr[1].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

// Row 2

apOne2.addEventListener("click", () => {
  tr[2].children[1].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

apOne21.addEventListener("click", () => {
  tr[2].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne22.addEventListener("click", () => {
  tr[2].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne23.addEventListener("click", () => {
  tr[2].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne24.addEventListener("click", () => {
  tr[2].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne25.addEventListener("click", () => {
  tr[2].children[6].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne26.addEventListener("click", () => {
  tr[2].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne27.addEventListener("click", () => {
  tr[2].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
// Row 3

apOne3.addEventListener("click", () => {
  tr[3].children[1].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

apOne31.addEventListener("click", () => {
  tr[3].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne32.addEventListener("click", () => {
  tr[3].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne33.addEventListener("click", () => {
  tr[3].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne34.addEventListener("click", () => {
  tr[3].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne35.addEventListener("click", () => {
  tr[3].children[6].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne36.addEventListener("click", () => {
  tr[3].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne37.addEventListener("click", () => {
  tr[3].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
// Row 4

apOne4.addEventListener("click", () => {
  tr[4].children[1].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

apOne41.addEventListener("click", () => {
  tr[4].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne42.addEventListener("click", () => {
  tr[4].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne43.addEventListener("click", () => {
  tr[4].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne44.addEventListener("click", () => {
  tr[4].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne45.addEventListener("click", () => {
  tr[4].children[6].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne46.addEventListener("click", () => {
  tr[4].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne47.addEventListener("click", () => {
  tr[4].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
// Row 5

apOne5.addEventListener("click", () => {
  tr[5].children[1].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

apOne51.addEventListener("click", () => {
  tr[5].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne52.addEventListener("click", () => {
  tr[5].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne53.addEventListener("click", () => {
  tr[5].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne54.addEventListener("click", () => {
  tr[5].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne55.addEventListener("click", () => {
  tr[5].children[6].append(ap1);
});
apOne56.addEventListener("click", () => {
  tr[5].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne57.addEventListener("click", () => {
  tr[5].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
// Row 6

apOne6.addEventListener("click", () => {
  tr[6].children[1].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

apOne61.addEventListener("click", () => {
  tr[6].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne62.addEventListener("click", () => {
  tr[6].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne63.addEventListener("click", () => {
  tr[6].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne64.addEventListener("click", () => {
  tr[6].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne65.addEventListener("click", () => {
  tr[6].children[6].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne66.addEventListener("click", () => {
  tr[6].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne67.addEventListener("click", () => {
  tr[6].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
// Row 7

apOne7.addEventListener("click", () => {
  tr[7].children[1].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

apOne71.addEventListener("click", () => {
  tr[7].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne72.addEventListener("click", () => {
  tr[7].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne73.addEventListener("click", () => {
  tr[7].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne74.addEventListener("click", () => {
  tr[7].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne75.addEventListener("click", () => {
  tr[7].children[6].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne76.addEventListener("click", () => {
  tr[7].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne77.addEventListener("click", () => {
  tr[7].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
// Row 8

apOne8.addEventListener("click", () => {
  tr[8].children[1].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});

apOne81.addEventListener("click", () => {
  tr[8].children[2].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne82.addEventListener("click", () => {
  tr[8].children[3].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne83.addEventListener("click", () => {
  tr[8].children[4].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne84.addEventListener("click", () => {
  tr[8].children[5].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne85.addEventListener("click", () => {
  tr[8].children[6].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne86.addEventListener("click", () => {
  tr[8].children[7].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
apOne87.addEventListener("click", () => {
  tr[8].children[8].append(ap1);
    cb10.classList.remove("anired");
  ap1.classList.remove("kookri");
});
