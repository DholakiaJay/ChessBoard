//  knight2

// Row 1
k2tr1 = document.getElementsByClassName("cb8")[0];
k2tr11 = document.getElementsByClassName("cb8")[1];
k2tr12 = document.getElementsByClassName("cb8")[2];
k2tr13 = document.getElementsByClassName("cb8")[3];
k2tr14 = document.getElementsByClassName("cb8")[4];
k2tr15 = document.getElementsByClassName("cb8")[5];
k2tr16 = document.getElementsByClassName("cb8")[6];
k2tr17 = document.getElementsByClassName("cb8")[7];
//  Row 2
k2tr2 = document.getElementsByClassName("cb8")[8];
k2tr21 = document.getElementsByClassName("cb8")[9];
k2tr22 = document.getElementsByClassName("cb8")[10];
k2tr23 = document.getElementsByClassName("cb8")[11];
k2tr24 = document.getElementsByClassName("cb8")[12];
k2tr25 = document.getElementsByClassName("cb8")[13];
k2tr26 = document.getElementsByClassName("cb8")[14];
k2tr27 = document.getElementsByClassName("cb8")[15];
//  Row 3
k2tr3 = document.getElementsByClassName("cb8")[16];
k2tr31 = document.getElementsByClassName("cb8")[17];
k2tr32 = document.getElementsByClassName("cb8")[18];
k2tr33 = document.getElementsByClassName("cb8")[19];
k2tr34 = document.getElementsByClassName("cb8")[20];
k2tr35 = document.getElementsByClassName("cb8")[21];
k2tr36 = document.getElementsByClassName("cb8")[22];
k2tr37 = document.getElementsByClassName("cb8")[23];
//  Row 4
k2tr4 = document.getElementsByClassName("cb8")[24];
k2tr41 = document.getElementsByClassName("cb8")[25];
k2tr42 = document.getElementsByClassName("cb8")[26];
k2tr43 = document.getElementsByClassName("cb8")[27];
k2tr44 = document.getElementsByClassName("cb8")[28];
k2tr45 = document.getElementsByClassName("cb8")[29];
k2tr46 = document.getElementsByClassName("cb8")[30];
k2tr47 = document.getElementsByClassName("cb8")[31];

// Row 5
k2tr5 = document.getElementsByClassName("cb8")[32];
k2tr51 = document.getElementsByClassName("cb8")[33];
k2tr52 = document.getElementsByClassName("cb8")[34];
k2tr53 = document.getElementsByClassName("cb8")[35];
k2tr54 = document.getElementsByClassName("cb8")[36];
k2tr55 = document.getElementsByClassName("cb8")[37];
k2tr56 = document.getElementsByClassName("cb8")[38];
k2tr57 = document.getElementsByClassName("cb8")[39];

// Row 6
k2tr6 = document.getElementsByClassName("cb8")[40];
k2tr61 = document.getElementsByClassName("cb8")[41];
k2tr62 = document.getElementsByClassName("cb8")[42];
k2tr63 = document.getElementsByClassName("cb8")[43];
k2tr64 = document.getElementsByClassName("cb8")[44];
k2tr65 = document.getElementsByClassName("cb8")[45];
k2tr66 = document.getElementsByClassName("cb8")[46];
k2tr67 = document.getElementsByClassName("cb8")[47];

// Row 7
k2tr7 = document.getElementsByClassName("cb8")[48];
k2tr71 = document.getElementsByClassName("cb8")[49];
k2tr72 = document.getElementsByClassName("cb8")[50];
k2tr73 = document.getElementsByClassName("cb8")[51];
k2tr74 = document.getElementsByClassName("cb8")[52];
k2tr75 = document.getElementsByClassName("cb8")[53];
k2tr76 = document.getElementsByClassName("cb8")[54];
k2tr77 = document.getElementsByClassName("cb8")[55];
// Row 8
// Row 8
k2tr8 = document.getElementsByClassName("cb8")[56];
k2tr81 = document.getElementsByClassName("cb8")[57];
k2tr82 = document.getElementsByClassName("cb8")[58];
k2tr83 = document.getElementsByClassName("cb8")[59];
k2tr84 = document.getElementsByClassName("cb8")[60];
k2tr85 = document.getElementsByClassName("cb8")[61];
k2tr86 = document.getElementsByClassName("cb8")[62];
k2tr87 = document.getElementsByClassName("cb8")[63];

knight2.onclick = () => {
  knight2.style.cssText = "color:red;";
  knight2.classList.add("kookri");
  cb2.style.cssText = "display:none;";
  cb3.style.cssText = `display:none;`;
  cb4.style.cssText = `display:none;`;
  cb5.style.cssText = `display:none;`;
  cb6.style.cssText = `display:none;`;
  cb7.style.cssText = `display:none;`;
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
  cb8.style.cssText = `display:initial;`;
  cb8.classList.add("anired");
};

// knight2
k2tr1.addEventListener("click", () => {
  tr[1].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr11.addEventListener("click", () => {
  tr[1].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr12.addEventListener("click", () => {
  tr[1].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr13.addEventListener("click", () => {
  tr[1].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr14.addEventListener("click", () => {
  tr[1].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr15.addEventListener("click", () => {
  tr[1].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr16.addEventListener("click", () => {
  tr[1].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr17.addEventListener("click", () => {
  tr[1].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
// Row 2
k2tr2.addEventListener("click", () => {
  tr[2].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr21.addEventListener("click", () => {
  tr[2].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr22.addEventListener("click", () => {
  tr[2].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr23.addEventListener("click", () => {
  tr[2].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr24.addEventListener("click", () => {
  tr[2].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr25.addEventListener("click", () => {
  tr[2].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr26.addEventListener("click", () => {
  tr[2].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr27.addEventListener("click", () => {
  tr[2].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
// Row 3

k2tr3.addEventListener("click", () => {
  tr[3].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr31.addEventListener("click", () => {
  tr[3].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr32.addEventListener("click", () => {
  tr[3].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr33.addEventListener("click", () => {
  tr[3].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr34.addEventListener("click", () => {
  tr[3].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr35.addEventListener("click", () => {
  tr[3].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr36.addEventListener("click", () => {
  tr[3].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr37.addEventListener("click", () => {
  tr[3].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
// Row 4

k2tr4.addEventListener("click", () => {
  tr[4].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr41.addEventListener("click", () => {
  tr[4].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr42.addEventListener("click", () => {
  tr[4].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr43.addEventListener("click", () => {
  tr[4].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr44.addEventListener("click", () => {
  tr[4].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr45.addEventListener("click", () => {
  tr[4].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr46.addEventListener("click", () => {
  tr[4].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr47.addEventListener("click", () => {
  tr[4].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
// Row 5

k2tr5.addEventListener("click", () => {
  tr[5].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr51.addEventListener("click", () => {
  tr[5].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr52.addEventListener("click", () => {
  tr[5].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr53.addEventListener("click", () => {
  tr[5].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr54.addEventListener("click", () => {
  tr[5].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr55.addEventListener("click", () => {
  tr[5].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr56.addEventListener("click", () => {
  tr[5].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr57.addEventListener("click", () => {
  tr[5].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr6.addEventListener("click", () => {
  tr[6].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr61.addEventListener("click", () => {
  tr[6].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr62.addEventListener("click", () => {
  tr[6].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr63.addEventListener("click", () => {
  tr[6].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr64.addEventListener("click", () => {
  tr[6].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr65.addEventListener("click", () => {
  tr[6].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr66.addEventListener("click", () => {
  tr[6].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr67.addEventListener("click", () => {
  tr[6].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

// Row 7

k2tr7.addEventListener("click", () => {
  tr[7].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr71.addEventListener("click", () => {
  tr[7].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr72.addEventListener("click", () => {
  tr[7].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr73.addEventListener("click", () => {
  tr[7].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr74.addEventListener("click", () => {
  tr[7].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr75.addEventListener("click", () => {
  tr[7].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr76.addEventListener("click", () => {
  tr[7].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr77.addEventListener("click", () => {
  tr[7].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
// Row 8

k2tr8.addEventListener("click", () => {
  tr[8].children[1].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});

k2tr81.addEventListener("click", () => {
  tr[8].children[2].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr82.addEventListener("click", () => {
  tr[8].children[3].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr83.addEventListener("click", () => {
  tr[8].children[4].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr84.addEventListener("click", () => {
  tr[8].children[5].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr85.addEventListener("click", () => {
  tr[8].children[6].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr86.addEventListener("click", () => {
  tr[8].children[7].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
k2tr87.addEventListener("click", () => {
  tr[8].children[8].append(knight2);

  cb8.classList.remove("anired");
  knight2.classList.remove("kookri");
});
