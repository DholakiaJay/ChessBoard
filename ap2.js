apTwo1 = document.getElementsByClassName("cb11")[0];
apTwo11 = document.getElementsByClassName("cb11")[1];
apTwo12 = document.getElementsByClassName("cb11")[2];
apTwo13 = document.getElementsByClassName("cb11")[3];
apTwo14 = document.getElementsByClassName("cb11")[4];
apTwo15 = document.getElementsByClassName("cb11")[5];
apTwo16 = document.getElementsByClassName("cb11")[6];
apTwo17 = document.getElementsByClassName("cb11")[7];

//Row 2
apTwo2 = document.getElementsByClassName("cb11")[8];
apTwo21 = document.getElementsByClassName("cb11")[9];
apTwo22 = document.getElementsByClassName("cb11")[10];
apTwo23 = document.getElementsByClassName("cb11")[11];
apTwo24 = document.getElementsByClassName("cb11")[12];
apTwo25 = document.getElementsByClassName("cb11")[13];
apTwo26 = document.getElementsByClassName("cb11")[14];
apTwo27 = document.getElementsByClassName("cb11")[15];
//Row 3
apTwo3 = document.getElementsByClassName("cb11")[16];
apTwo31 = document.getElementsByClassName("cb11")[17];
apTwo32 = document.getElementsByClassName("cb11")[18];
apTwo33 = document.getElementsByClassName("cb11")[19];
apTwo34 = document.getElementsByClassName("cb11")[20];
apTwo35 = document.getElementsByClassName("cb11")[21];
apTwo36 = document.getElementsByClassName("cb11")[22];
apTwo37 = document.getElementsByClassName("cb11")[23];
//Row 4
apTwo4 = document.getElementsByClassName("cb11")[24];
apTwo41 = document.getElementsByClassName("cb11")[25];
apTwo42 = document.getElementsByClassName("cb11")[26];
apTwo43 = document.getElementsByClassName("cb11")[27];
apTwo44 = document.getElementsByClassName("cb11")[28];
apTwo45 = document.getElementsByClassName("cb11")[29];
apTwo46 = document.getElementsByClassName("cb11")[30];
apTwo47 = document.getElementsByClassName("cb11")[31];
//Row 5
apTwo5 = document.getElementsByClassName("cb11")[32];
apTwo51 = document.getElementsByClassName("cb11")[33];
apTwo52 = document.getElementsByClassName("cb11")[34];
apTwo53 = document.getElementsByClassName("cb11")[35];
apTwo54 = document.getElementsByClassName("cb11")[36];
apTwo55 = document.getElementsByClassName("cb11")[37];
apTwo56 = document.getElementsByClassName("cb11")[38];
apTwo57 = document.getElementsByClassName("cb11")[39];
//Row 6
apTwo6 = document.getElementsByClassName("cb11")[40];
apTwo61 = document.getElementsByClassName("cb11")[41];
apTwo62 = document.getElementsByClassName("cb11")[42];
apTwo63 = document.getElementsByClassName("cb11")[43];
apTwo64 = document.getElementsByClassName("cb11")[44];
apTwo65 = document.getElementsByClassName("cb11")[45];
apTwo66 = document.getElementsByClassName("cb11")[46];
apTwo67 = document.getElementsByClassName("cb11")[47];
//Row 7
apTwo7 = document.getElementsByClassName("cb11")[48];
apTwo71 = document.getElementsByClassName("cb11")[49];
apTwo72 = document.getElementsByClassName("cb11")[50];
apTwo73 = document.getElementsByClassName("cb11")[51];
apTwo74 = document.getElementsByClassName("cb11")[52];
apTwo75 = document.getElementsByClassName("cb11")[53];
apTwo76 = document.getElementsByClassName("cb11")[54];
apTwo77 = document.getElementsByClassName("cb11")[55];
//Row 6
apTwo8 = document.getElementsByClassName("cb11")[56];
apTwo81 = document.getElementsByClassName("cb11")[57];
apTwo82 = document.getElementsByClassName("cb11")[58];
apTwo83 = document.getElementsByClassName("cb11")[59];
apTwo84 = document.getElementsByClassName("cb11")[60];
apTwo85 = document.getElementsByClassName("cb11")[61];
apTwo86 = document.getElementsByClassName("cb11")[62];
apTwo87 = document.getElementsByClassName("cb11")[63];

ap2.onclick = () => {
  ap2.style.cssText = "color:red;";
  ap2.classList.add('kookri');
  cb2.style.cssText = `display:none;`;
  cb3.style.cssText = "display:none;";
  cb4.style.cssText = `display:none;`;
  cb5.style.cssText = `display:none;`;
  cb6.style.cssText = `display:none;`;
  cb7.style.cssText = `display:none;`;
  cb8.style.cssText = `display:none;`;
  cb9.style.cssText = `display:none;`;
  cb10.style.cssText = `display:none;`;
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
  cb11.style.cssText = `display:initial;`;
  cb11.classList.add('anired');
};

apTwo1.addEventListener("click", () => {
  tr[1].children[1].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo11.addEventListener("click", () => {
  tr[1].children[2].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo12.addEventListener("click", () => {
  tr[1].children[3].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo13.addEventListener("click", () => {
  tr[1].children[4].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo14.addEventListener("click", () => {
  tr[1].children[5].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo15.addEventListener("click", () => {
  tr[1].children[6].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo16.addEventListener("click", () => {
  tr[1].children[7].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo17.addEventListener("click", () => {
  tr[1].children[8].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

// Row 2

apTwo2.addEventListener("click", () => {
  tr[2].children[1].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo21.addEventListener("click", () => {
  tr[2].children[2].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo22.addEventListener("click", () => {
  tr[2].children[3].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo23.addEventListener("click", () => {
  tr[2].children[4].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo24.addEventListener("click", () => {
  tr[2].children[5].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo25.addEventListener("click", () => {
  tr[2].children[6].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo26.addEventListener("click", () => {
  tr[2].children[7].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo27.addEventListener("click", () => {
  tr[2].children[8].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
// Row 3

apTwo3.addEventListener("click", () => {
  tr[3].children[1].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo31.addEventListener("click", () => {
  tr[3].children[2].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo32.addEventListener("click", () => {
  tr[3].children[3].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo33.addEventListener("click", () => {
  tr[3].children[4].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo34.addEventListener("click", () => {
  tr[3].children[5].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo35.addEventListener("click", () => {
  tr[3].children[6].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo36.addEventListener("click", () => {
  tr[3].children[7].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo37.addEventListener("click", () => {
  tr[3].children[8].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
// Row 4

apTwo4.addEventListener("click", () => {
  tr[4].children[1].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo41.addEventListener("click", () => {
  tr[4].children[2].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo42.addEventListener("click", () => {
  tr[4].children[3].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo43.addEventListener("click", () => {
  tr[4].children[4].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo44.addEventListener("click", () => {
  tr[4].children[5].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo45.addEventListener("click", () => {
  tr[4].children[6].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo46.addEventListener("click", () => {
  tr[4].children[7].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo47.addEventListener("click", () => {
  tr[4].children[8].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
// Row 5

apTwo5.addEventListener("click", () => {
  tr[5].children[1].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo51.addEventListener("click", () => {
  tr[5].children[2].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo52.addEventListener("click", () => {
  tr[5].children[3].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo53.addEventListener("click", () => {
  tr[5].children[4].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo54.addEventListener("click", () => {
  tr[5].children[5].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo55.addEventListener("click", () => {
  tr[5].children[6].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo56.addEventListener("click", () => {
  tr[5].children[7].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo57.addEventListener("click", () => {
  tr[5].children[8].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
// Row 6

apTwo6.addEventListener("click", () => {
  tr[6].children[1].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo61.addEventListener("click", () => {
  tr[6].children[2].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo62.addEventListener("click", () => {
  tr[6].children[3].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo63.addEventListener("click", () => {
  tr[6].children[4].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo64.addEventListener("click", () => {
  tr[6].children[5].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo65.addEventListener("click", () => {
  tr[6].children[6].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo66.addEventListener("click", () => {
  tr[6].children[7].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo67.addEventListener("click", () => {
  tr[6].children[8].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
// Row 7

apTwo7.addEventListener("click", () => {
  tr[7].children[1].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo71.addEventListener("click", () => {
  tr[7].children[2].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo72.addEventListener("click", () => {
  tr[7].children[3].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo73.addEventListener("click", () => {
  tr[7].children[4].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo74.addEventListener("click", () => {
  tr[7].children[5].append(ap2);
  cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo75.addEventListener("click", () => {
  tr[7].children[6].append(ap2);
});
apTwo76.addEventListener("click", () => {
  tr[7].children[7].append(ap2);
cb11.classList.remove('anired');
ap2.classList.remove('kookri');
});
apTwo77.addEventListener("click", () => {
  tr[7].children[8].append(ap2);
cb11.classList.remove('anired');
ap2.classList.remove('kookri');
});
// Row 8

apTwo8.addEventListener("click", () => {
  tr[8].children[1].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});

apTwo81.addEventListener("click", () => {
  tr[8].children[2].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo82.addEventListener("click", () => {
  tr[8].children[3].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo83.addEventListener("click", () => {
  tr[8].children[4].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo84.addEventListener("click", () => {
  tr[8].children[5].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo85.addEventListener("click", () => {
  tr[8].children[6].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo86.addEventListener("click", () => {
  tr[8].children[7].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
apTwo87.addEventListener("click", () => {
  tr[8].children[8].append(ap2);
  
cb11.classList.remove('anired');
  ap2.classList.remove('kookri');
});
