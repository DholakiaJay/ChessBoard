//  bishop22

// Row 1
b2tr1 = document.getElementsByClassName("cb7")[0];
b2tr11 = document.getElementsByClassName("cb7")[1];
b2tr12 = document.getElementsByClassName("cb7")[2];
b2tr13 = document.getElementsByClassName("cb7")[3];
b2tr14 = document.getElementsByClassName("cb7")[4];
b2tr15 = document.getElementsByClassName("cb7")[5];
b2tr16 = document.getElementsByClassName("cb7")[6];
b2tr17 = document.getElementsByClassName("cb7")[7];
//  Row 2
b2tr2 = document.getElementsByClassName("cb7")[8];
b2tr21 = document.getElementsByClassName("cb7")[9];
b2tr22 = document.getElementsByClassName("cb7")[10];
b2tr23 = document.getElementsByClassName("cb7")[11];
b2tr24 = document.getElementsByClassName("cb7")[12];
b2tr25 = document.getElementsByClassName("cb7")[13];
b2tr26 = document.getElementsByClassName("cb7")[14];
b2tr27 = document.getElementsByClassName("cb7")[15];
//  Row 3
b2tr3 = document.getElementsByClassName("cb7")[16];
b2tr31 = document.getElementsByClassName("cb7")[17];
b2tr32 = document.getElementsByClassName("cb7")[18];
b2tr33 = document.getElementsByClassName("cb7")[19];
b2tr34 = document.getElementsByClassName("cb7")[20];
b2tr35 = document.getElementsByClassName("cb7")[21];
b2tr36 = document.getElementsByClassName("cb7")[22];
b2tr37 = document.getElementsByClassName("cb7")[23];
//  Row 4
b2tr4 = document.getElementsByClassName("cb7")[24];
b2tr41 = document.getElementsByClassName("cb7")[25];
b2tr42 = document.getElementsByClassName("cb7")[26];
b2tr43 = document.getElementsByClassName("cb7")[27];
b2tr44 = document.getElementsByClassName("cb7")[28];
b2tr45 = document.getElementsByClassName("cb7")[29];
b2tr46 = document.getElementsByClassName("cb7")[30];
b2tr47 = document.getElementsByClassName("cb7")[31];

// Row 5
b2tr5 = document.getElementsByClassName("cb7")[32];
b2tr51 = document.getElementsByClassName("cb7")[33];
b2tr52 = document.getElementsByClassName("cb7")[34];
b2tr53 = document.getElementsByClassName("cb7")[35];
b2tr54 = document.getElementsByClassName("cb7")[36];
b2tr55 = document.getElementsByClassName("cb7")[37];
b2tr56 = document.getElementsByClassName("cb7")[38];
b2tr57 = document.getElementsByClassName("cb7")[39];

// Row 6
b2tr6 = document.getElementsByClassName("cb7")[40];
b2tr61 = document.getElementsByClassName("cb7")[41];
b2tr62 = document.getElementsByClassName("cb7")[42];
b2tr63 = document.getElementsByClassName("cb7")[43];
b2tr64 = document.getElementsByClassName("cb7")[44];
b2tr65 = document.getElementsByClassName("cb7")[45];
b2tr66 = document.getElementsByClassName("cb7")[46];
b2tr67 = document.getElementsByClassName("cb7")[47];

// Row 7
b2tr7 = document.getElementsByClassName("cb7")[48];
b2tr71 = document.getElementsByClassName("cb7")[49];
b2tr72 = document.getElementsByClassName("cb7")[50];
b2tr73 = document.getElementsByClassName("cb7")[51];
b2tr74 = document.getElementsByClassName("cb7")[52];
b2tr75 = document.getElementsByClassName("cb7")[53];
b2tr76 = document.getElementsByClassName("cb7")[54];
b2tr77 = document.getElementsByClassName("cb7")[55];
// Row 8
// Row 8
b2tr8 = document.getElementsByClassName("cb7")[56];
b2tr81 = document.getElementsByClassName("cb7")[57];
b2tr82 = document.getElementsByClassName("cb7")[58];
b2tr83 = document.getElementsByClassName("cb7")[59];
b2tr84 = document.getElementsByClassName("cb7")[60];
b2tr85 = document.getElementsByClassName("cb7")[61];
b2tr86 = document.getElementsByClassName("cb7")[62];
b2tr87 = document.getElementsByClassName("cb7")[63];

bishop2.onclick = () => {
  bishop2.style.cssText = "color:red;";
  bishop2.classList.add("kookri");
  cb2.style.cssText = "display:none;";
  cb3.style.cssText = `display:none;`;
  cb4.style.cssText = `display:none;`;
  cb5.style.cssText = `display:none;`;
  cb6.style.cssText = `display:none;`;
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
  cb7.style.cssText = `display:initial;`;
  cb7.classList.add("anired");
};

// bishop2
b2tr1.addEventListener("click", () => {
  tr[1].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr11.addEventListener("click", () => {
  tr[1].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr12.addEventListener("click", () => {
  tr[1].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr13.addEventListener("click", () => {
  tr[1].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr14.addEventListener("click", () => {
  tr[1].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr15.addEventListener("click", () => {
  tr[1].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr16.addEventListener("click", () => {
  tr[1].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr17.addEventListener("click", () => {
  tr[1].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
// Row 2
b2tr2.addEventListener("click", () => {
  tr[2].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr21.addEventListener("click", () => {
  tr[2].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr22.addEventListener("click", () => {
  tr[2].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr23.addEventListener("click", () => {
  tr[2].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr24.addEventListener("click", () => {
  tr[2].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr25.addEventListener("click", () => {
  tr[2].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr26.addEventListener("click", () => {
  tr[2].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr27.addEventListener("click", () => {
  tr[2].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
// Row 3

b2tr3.addEventListener("click", () => {
  tr[3].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr31.addEventListener("click", () => {
  tr[3].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr32.addEventListener("click", () => {
  tr[3].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr33.addEventListener("click", () => {
  tr[3].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr34.addEventListener("click", () => {
  tr[3].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr35.addEventListener("click", () => {
  tr[3].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr36.addEventListener("click", () => {
  tr[3].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr37.addEventListener("click", () => {
  tr[3].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
// Row 4

b2tr4.addEventListener("click", () => {
  tr[4].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr41.addEventListener("click", () => {
  tr[4].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr42.addEventListener("click", () => {
  tr[4].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr43.addEventListener("click", () => {
  tr[4].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr44.addEventListener("click", () => {
  tr[4].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr45.addEventListener("click", () => {
  tr[4].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr46.addEventListener("click", () => {
  tr[4].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr47.addEventListener("click", () => {
  tr[4].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
// Row 5

b2tr5.addEventListener("click", () => {
  tr[5].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr51.addEventListener("click", () => {
  tr[5].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr52.addEventListener("click", () => {
  tr[5].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr53.addEventListener("click", () => {
  tr[5].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr54.addEventListener("click", () => {
  tr[5].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr55.addEventListener("click", () => {
  tr[5].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr56.addEventListener("click", () => {
  tr[5].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr57.addEventListener("click", () => {
  tr[5].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr6.addEventListener("click", () => {
  tr[6].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr61.addEventListener("click", () => {
  tr[6].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr62.addEventListener("click", () => {
  tr[6].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr63.addEventListener("click", () => {
  tr[6].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr64.addEventListener("click", () => {
  tr[6].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr65.addEventListener("click", () => {
  tr[6].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr66.addEventListener("click", () => {
  tr[6].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr67.addEventListener("click", () => {
  tr[6].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

// Row 7

b2tr7.addEventListener("click", () => {
  tr[7].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr71.addEventListener("click", () => {
  tr[7].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr72.addEventListener("click", () => {
  tr[7].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr73.addEventListener("click", () => {
  tr[7].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr74.addEventListener("click", () => {
  tr[7].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr75.addEventListener("click", () => {
  tr[7].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr76.addEventListener("click", () => {
  tr[7].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr77.addEventListener("click", () => {
  tr[7].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
// Row 8

b2tr8.addEventListener("click", () => {
  tr[8].children[1].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});

b2tr81.addEventListener("click", () => {
  tr[8].children[2].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr82.addEventListener("click", () => {
  tr[8].children[3].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr83.addEventListener("click", () => {
  tr[8].children[4].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr84.addEventListener("click", () => {
  tr[8].children[5].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr85.addEventListener("click", () => {
  tr[8].children[6].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr86.addEventListener("click", () => {
  tr[8].children[7].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
b2tr87.addEventListener("click", () => {
  tr[8].children[8].append(bishop2);
  cb7.classList.remove("anired");
  bishop2.classList.remove("kookri");
});
