bbq1 = document.getElementsByClassName("cb22")[0];
bbq11 = document.getElementsByClassName("cb22")[1];
bbq12 = document.getElementsByClassName("cb22")[2];
bbq13 = document.getElementsByClassName("cb22")[3];
bbq14 = document.getElementsByClassName("cb22")[4];
bbq15 = document.getElementsByClassName("cb22")[5];
bbq16 = document.getElementsByClassName("cb22")[6];
bbq17 = document.getElementsByClassName("cb22")[7];

//Row 2
bbq2 = document.getElementsByClassName("cb22")[8];
bbq21 = document.getElementsByClassName("cb22")[9];
bbq22 = document.getElementsByClassName("cb22")[10];
bbq23 = document.getElementsByClassName("cb22")[11];
bbq24 = document.getElementsByClassName("cb22")[12];
bbq25 = document.getElementsByClassName("cb22")[13];
bbq26 = document.getElementsByClassName("cb22")[14];
bbq27 = document.getElementsByClassName("cb22")[15];
//Row 3
bbq3 = document.getElementsByClassName("cb22")[16];
bbq31 = document.getElementsByClassName("cb22")[17];
bbq32 = document.getElementsByClassName("cb22")[18];
bbq33 = document.getElementsByClassName("cb22")[19];
bbq34 = document.getElementsByClassName("cb22")[20];
bbq35 = document.getElementsByClassName("cb22")[21];
bbq36 = document.getElementsByClassName("cb22")[22];
bbq37 = document.getElementsByClassName("cb22")[23];
//Row 4
bbq4 = document.getElementsByClassName("cb22")[24];
bbq41 = document.getElementsByClassName("cb22")[25];
bbq42 = document.getElementsByClassName("cb22")[26];
bbq43 = document.getElementsByClassName("cb22")[27];
bbq44 = document.getElementsByClassName("cb22")[28];
bbq45 = document.getElementsByClassName("cb22")[29];
bbq46 = document.getElementsByClassName("cb22")[30];
bbq47 = document.getElementsByClassName("cb22")[31];
//Row 5
bbq5 = document.getElementsByClassName("cb22")[32];
bbq51 = document.getElementsByClassName("cb22")[33];
bbq52 = document.getElementsByClassName("cb22")[34];
bbq53 = document.getElementsByClassName("cb22")[35];
bbq54 = document.getElementsByClassName("cb22")[36];
bbq55 = document.getElementsByClassName("cb22")[37];
bbq56 = document.getElementsByClassName("cb22")[38];
bbq57 = document.getElementsByClassName("cb22")[39];
//Row 6
bbq6 = document.getElementsByClassName("cb22")[40];
bbq61 = document.getElementsByClassName("cb22")[41];
bbq62 = document.getElementsByClassName("cb22")[42];
bbq63 = document.getElementsByClassName("cb22")[43];
bbq64 = document.getElementsByClassName("cb22")[44];
bbq65 = document.getElementsByClassName("cb22")[45];
bbq66 = document.getElementsByClassName("cb22")[46];
bbq67 = document.getElementsByClassName("cb22")[47];
//Row 7
bbq7 = document.getElementsByClassName("cb22")[48];
bbq71 = document.getElementsByClassName("cb22")[49];
bbq72 = document.getElementsByClassName("cb22")[50];
bbq73 = document.getElementsByClassName("cb22")[51];
bbq74 = document.getElementsByClassName("cb22")[52];
bbq75 = document.getElementsByClassName("cb22")[53];
bbq76 = document.getElementsByClassName("cb22")[54];
bbq77 = document.getElementsByClassName("cb22")[55];
//Row 6
bbq8 = document.getElementsByClassName("cb22")[56];
bbq81 = document.getElementsByClassName("cb22")[57];
bbq82 = document.getElementsByClassName("cb22")[58];
bbq83 = document.getElementsByClassName("cb22")[59];
bbq84 = document.getElementsByClassName("cb22")[60];
bbq85 = document.getElementsByClassName("cb22")[61];
bbq86 = document.getElementsByClassName("cb22")[62];
bbq87 = document.getElementsByClassName("cb22")[63];

bqueen.onclick = () => {
  bqueen.style.cssText = "color:blue;";
  bqueen.classList.add("kookri");

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
  cb22.style.cssText = `display:initial;`;
  cb22.classList.add("aniblue");
};

bbq1.addEventListener("click", () => {
  tr[1].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq11.addEventListener("click", () => {
  tr[1].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq12.addEventListener("click", () => {
  tr[1].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq13.addEventListener("click", () => {
  tr[1].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq14.addEventListener("click", () => {
  tr[1].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq15.addEventListener("click", () => {
  tr[1].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq16.addEventListener("click", () => {
  tr[1].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq17.addEventListener("click", () => {
  tr[1].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

// Row 2

bbq2.addEventListener("click", () => {
  tr[2].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq21.addEventListener("click", () => {
  tr[2].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq22.addEventListener("click", () => {
  tr[2].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq23.addEventListener("click", () => {
  tr[2].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq24.addEventListener("click", () => {
  tr[2].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq25.addEventListener("click", () => {
  tr[2].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq26.addEventListener("click", () => {
  tr[2].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq27.addEventListener("click", () => {
  tr[2].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
// Row 3

bbq3.addEventListener("click", () => {
  tr[3].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq31.addEventListener("click", () => {
  tr[3].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq32.addEventListener("click", () => {
  tr[3].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq33.addEventListener("click", () => {
  tr[3].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq34.addEventListener("click", () => {
  tr[3].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq35.addEventListener("click", () => {
  tr[3].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq36.addEventListener("click", () => {
  tr[3].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq37.addEventListener("click", () => {
  tr[3].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
// Row 4

bbq4.addEventListener("click", () => {
  tr[4].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq41.addEventListener("click", () => {
  tr[4].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq42.addEventListener("click", () => {
  tr[4].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq43.addEventListener("click", () => {
  tr[4].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq44.addEventListener("click", () => {
  tr[4].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq45.addEventListener("click", () => {
  tr[4].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq46.addEventListener("click", () => {
  tr[4].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq47.addEventListener("click", () => {
  tr[4].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
// Row 5

bbq5.addEventListener("click", () => {
  tr[5].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq51.addEventListener("click", () => {
  tr[5].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq52.addEventListener("click", () => {
  tr[5].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq53.addEventListener("click", () => {
  tr[5].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq54.addEventListener("click", () => {
  tr[5].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq55.addEventListener("click", () => {
  tr[5].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq56.addEventListener("click", () => {
  tr[5].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq57.addEventListener("click", () => {
  tr[5].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
// Row 6

bbq6.addEventListener("click", () => {
  tr[6].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq61.addEventListener("click", () => {
  tr[6].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq62.addEventListener("click", () => {
  tr[6].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq63.addEventListener("click", () => {
  tr[6].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq64.addEventListener("click", () => {
  tr[6].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq65.addEventListener("click", () => {
  tr[6].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq66.addEventListener("click", () => {
  tr[6].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq67.addEventListener("click", () => {
  tr[6].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
// Row 7

bbq7.addEventListener("click", () => {
  tr[7].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq71.addEventListener("click", () => {
  tr[7].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq72.addEventListener("click", () => {
  tr[7].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq73.addEventListener("click", () => {
  tr[7].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq74.addEventListener("click", () => {
  tr[7].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq75.addEventListener("click", () => {
  tr[7].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq76.addEventListener("click", () => {
  tr[7].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq77.addEventListener("click", () => {
  tr[7].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
// Row 8

bbq8.addEventListener("click", () => {
  tr[8].children[1].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});

bbq81.addEventListener("click", () => {
  tr[8].children[2].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq82.addEventListener("click", () => {
  tr[8].children[3].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq83.addEventListener("click", () => {
  tr[8].children[4].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq84.addEventListener("click", () => {
  tr[8].children[5].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq85.addEventListener("click", () => {
  tr[8].children[6].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq86.addEventListener("click", () => {
  tr[8].children[7].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
bbq87.addEventListener("click", () => {
  tr[8].children[8].append(bqueen);

  cb22.classList.remove("aniblue");
  bqueen.classList.remove("kookri");
});
