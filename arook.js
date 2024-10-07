ptr1 = document.getElementsByClassName("cb2")[0];
ptr11 = document.getElementsByClassName("cb2")[1];
ptr12 = document.getElementsByClassName("cb2")[2];
ptr13 = document.getElementsByClassName("cb2")[3];
ptr14 = document.getElementsByClassName("cb2")[4];
ptr15 = document.getElementsByClassName("cb2")[5];
ptr16 = document.getElementsByClassName("cb2")[6];
ptr17 = document.getElementsByClassName("cb2")[7];

//Row 2
ptr2 = document.getElementsByClassName("cb2")[8];
ptr21 = document.getElementsByClassName("cb2")[9];
ptr22 = document.getElementsByClassName("cb2")[10];
ptr23 = document.getElementsByClassName("cb2")[11];
ptr24 = document.getElementsByClassName("cb2")[12];
ptr25 = document.getElementsByClassName("cb2")[13];
ptr26 = document.getElementsByClassName("cb2")[14];
ptr27 = document.getElementsByClassName("cb2")[15];
//Row 3
ptr3 = document.getElementsByClassName("cb2")[16];
ptr31 = document.getElementsByClassName("cb2")[17];
ptr32 = document.getElementsByClassName("cb2")[18];
ptr33 = document.getElementsByClassName("cb2")[19];
ptr34 = document.getElementsByClassName("cb2")[20];
ptr35 = document.getElementsByClassName("cb2")[21];
ptr36 = document.getElementsByClassName("cb2")[22];
ptr37 = document.getElementsByClassName("cb2")[23];
//Row 4
ptr4 = document.getElementsByClassName("cb2")[24];
ptr41 = document.getElementsByClassName("cb2")[25];
ptr42 = document.getElementsByClassName("cb2")[26];
ptr43 = document.getElementsByClassName("cb2")[27];
ptr44 = document.getElementsByClassName("cb2")[28];
ptr45 = document.getElementsByClassName("cb2")[29];
ptr46 = document.getElementsByClassName("cb2")[30];
ptr47 = document.getElementsByClassName("cb2")[31];
//Row 5
ptr5 = document.getElementsByClassName("cb2")[32];
ptr51 = document.getElementsByClassName("cb2")[33];
ptr52 = document.getElementsByClassName("cb2")[34];
ptr53 = document.getElementsByClassName("cb2")[35];
ptr54 = document.getElementsByClassName("cb2")[36];
ptr55 = document.getElementsByClassName("cb2")[37];
ptr56 = document.getElementsByClassName("cb2")[38];
ptr57 = document.getElementsByClassName("cb2")[39];
//Row 6
ptr6 = document.getElementsByClassName("cb2")[40];
ptr61 = document.getElementsByClassName("cb2")[41];
ptr62 = document.getElementsByClassName("cb2")[42];
ptr63 = document.getElementsByClassName("cb2")[43];
ptr64 = document.getElementsByClassName("cb2")[44];
ptr65 = document.getElementsByClassName("cb2")[45];
ptr66 = document.getElementsByClassName("cb2")[46];
ptr67 = document.getElementsByClassName("cb2")[47];
//Row 7
ptr7 = document.getElementsByClassName("cb2")[48];
ptr71 = document.getElementsByClassName("cb2")[49];
ptr72 = document.getElementsByClassName("cb2")[50];
ptr73 = document.getElementsByClassName("cb2")[51];
ptr74 = document.getElementsByClassName("cb2")[52];
ptr75 = document.getElementsByClassName("cb2")[53];
ptr76 = document.getElementsByClassName("cb2")[54];
ptr77 = document.getElementsByClassName("cb2")[55];
//Row 6
ptr8 = document.getElementsByClassName("cb2")[56];
ptr81 = document.getElementsByClassName("cb2")[57];
ptr82 = document.getElementsByClassName("cb2")[58];
ptr83 = document.getElementsByClassName("cb2")[59];
ptr84 = document.getElementsByClassName("cb2")[60];
ptr85 = document.getElementsByClassName("cb2")[61];
ptr86 = document.getElementsByClassName("cb2")[62];
ptr87 = document.getElementsByClassName("cb2")[63];

arook.onclick = () => {
  arook.style.cssText = "color:red;";
  arook.classList.add("kookri");
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
  cb2.style.cssText = `display:initial;`;
  cb2.classList.add("anired");
};

ptr1.addEventListener("click", () => {
  tr[1].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr11.addEventListener("click", () => {
  tr[1].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr12.addEventListener("click", () => {
  tr[1].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr13.addEventListener("click", () => {
  tr[1].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr14.addEventListener("click", () => {
  tr[1].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr15.addEventListener("click", () => {
  tr[1].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr16.addEventListener("click", () => {
  tr[1].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr17.addEventListener("click", () => {
  tr[1].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

// Row 2

ptr2.addEventListener("click", () => {
  tr[2].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr21.addEventListener("click", () => {
  tr[2].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr22.addEventListener("click", () => {
  tr[2].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr23.addEventListener("click", () => {
  tr[2].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr24.addEventListener("click", () => {
  tr[2].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr25.addEventListener("click", () => {
  tr[2].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr26.addEventListener("click", () => {
  tr[2].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr27.addEventListener("click", () => {
  tr[2].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
// Row 3

ptr3.addEventListener("click", () => {
  tr[3].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr31.addEventListener("click", () => {
  tr[3].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr32.addEventListener("click", () => {
  tr[3].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr33.addEventListener("click", () => {
  tr[3].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr34.addEventListener("click", () => {
  tr[3].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr35.addEventListener("click", () => {
  tr[3].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr36.addEventListener("click", () => {
  tr[3].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr37.addEventListener("click", () => {
  tr[3].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
// Row 4

ptr4.addEventListener("click", () => {
  tr[4].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr41.addEventListener("click", () => {
  tr[4].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr42.addEventListener("click", () => {
  tr[4].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr43.addEventListener("click", () => {
  tr[4].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr44.addEventListener("click", () => {
  tr[4].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr45.addEventListener("click", () => {
  tr[4].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr46.addEventListener("click", () => {
  tr[4].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr47.addEventListener("click", () => {
  tr[4].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
// Row 5

ptr5.addEventListener("click", () => {
  tr[5].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr51.addEventListener("click", () => {
  tr[5].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr52.addEventListener("click", () => {
  tr[5].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr53.addEventListener("click", () => {
  tr[5].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr54.addEventListener("click", () => {
  tr[5].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr55.addEventListener("click", () => {
  tr[5].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr56.addEventListener("click", () => {
  tr[5].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr57.addEventListener("click", () => {
  tr[5].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
// Row 6

ptr6.addEventListener("click", () => {
  tr[6].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr61.addEventListener("click", () => {
  tr[6].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr62.addEventListener("click", () => {
  tr[6].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr63.addEventListener("click", () => {
  tr[6].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr64.addEventListener("click", () => {
  tr[6].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr65.addEventListener("click", () => {
  tr[6].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr66.addEventListener("click", () => {
  tr[6].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr67.addEventListener("click", () => {
  tr[6].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
// Row 7

ptr7.addEventListener("click", () => {
  tr[7].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr71.addEventListener("click", () => {
  tr[7].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr72.addEventListener("click", () => {
  tr[7].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr73.addEventListener("click", () => {
  tr[7].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr74.addEventListener("click", () => {
  tr[7].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr75.addEventListener("click", () => {
  tr[7].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr76.addEventListener("click", () => {
  tr[7].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr77.addEventListener("click", () => {
  tr[7].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
// Row 8

ptr8.addEventListener("click", () => {
  tr[8].children[1].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});

ptr81.addEventListener("click", () => {
  tr[8].children[2].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr82.addEventListener("click", () => {
  tr[8].children[3].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr83.addEventListener("click", () => {
  tr[8].children[4].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr84.addEventListener("click", () => {
  tr[8].children[5].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr85.addEventListener("click", () => {
  tr[8].children[6].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr86.addEventListener("click", () => {
  tr[8].children[7].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
ptr87.addEventListener("click", () => {
  tr[8].children[8].append(arook);
  cb2.classList.remove("anired");
  arook.classList.remove("kookri");
});
