//  king

// Row 1
kktr1 = document.getElementsByClassName("cb5")[0];
kktr11 = document.getElementsByClassName("cb5")[1];
kktr12 = document.getElementsByClassName("cb5")[2];
kktr13 = document.getElementsByClassName("cb5")[3];
kktr14 = document.getElementsByClassName("cb5")[4];
kktr15 = document.getElementsByClassName("cb5")[5];
kktr16 = document.getElementsByClassName("cb5")[6];
kktr17 = document.getElementsByClassName("cb5")[7];
//  Row 2
kktr2 = document.getElementsByClassName("cb5")[8];
kktr21 = document.getElementsByClassName("cb5")[9];
kktr22 = document.getElementsByClassName("cb5")[10];
kktr23 = document.getElementsByClassName("cb5")[11];
kktr24 = document.getElementsByClassName("cb5")[12];
kktr25 = document.getElementsByClassName("cb5")[13];
kktr26 = document.getElementsByClassName("cb5")[14];
kktr27 = document.getElementsByClassName("cb5")[15];
//  Row 3
kktr3 = document.getElementsByClassName("cb5")[16];
kktr31 = document.getElementsByClassName("cb5")[17];
kktr32 = document.getElementsByClassName("cb5")[18];
kktr33 = document.getElementsByClassName("cb5")[19];
kktr34 = document.getElementsByClassName("cb5")[20];
kktr35 = document.getElementsByClassName("cb5")[21];
kktr36 = document.getElementsByClassName("cb5")[22];
kktr37 = document.getElementsByClassName("cb5")[23];
//  Row 4
kktr4 = document.getElementsByClassName("cb5")[24];
kktr41 = document.getElementsByClassName("cb5")[25];
kktr42 = document.getElementsByClassName("cb5")[26];
kktr43 = document.getElementsByClassName("cb5")[27];
kktr44 = document.getElementsByClassName("cb5")[28];
kktr45 = document.getElementsByClassName("cb5")[29];
kktr46 = document.getElementsByClassName("cb5")[30];
kktr47 = document.getElementsByClassName("cb5")[31];

// Row 5
kktr5 = document.getElementsByClassName("cb5")[32];
kktr51 = document.getElementsByClassName("cb5")[33];
kktr52 = document.getElementsByClassName("cb5")[34];
kktr53 = document.getElementsByClassName("cb5")[35];
kktr54 = document.getElementsByClassName("cb5")[36];
kktr55 = document.getElementsByClassName("cb5")[37];
kktr56 = document.getElementsByClassName("cb5")[38];
kktr57 = document.getElementsByClassName("cb5")[39];

// Row 6
kktr6 = document.getElementsByClassName("cb5")[40];
kktr61 = document.getElementsByClassName("cb5")[41];
kktr62 = document.getElementsByClassName("cb5")[42];
kktr63 = document.getElementsByClassName("cb5")[43];
kktr64 = document.getElementsByClassName("cb5")[44];
kktr65 = document.getElementsByClassName("cb5")[45];
kktr66 = document.getElementsByClassName("cb5")[46];
kktr67 = document.getElementsByClassName("cb5")[47];

// Row 7
kktr7 = document.getElementsByClassName("cb5")[48];
kktr71 = document.getElementsByClassName("cb5")[49];
kktr72 = document.getElementsByClassName("cb5")[50];
kktr73 = document.getElementsByClassName("cb5")[51];
kktr74 = document.getElementsByClassName("cb5")[52];
kktr75 = document.getElementsByClassName("cb5")[53];
kktr76 = document.getElementsByClassName("cb5")[54];
kktr77 = document.getElementsByClassName("cb5")[55];
// Row 8
// Row 8
kktr8 = document.getElementsByClassName("cb5")[56];
kktr81 = document.getElementsByClassName("cb5")[57];
kktr82 = document.getElementsByClassName("cb5")[58];
kktr83 = document.getElementsByClassName("cb5")[59];
kktr84 = document.getElementsByClassName("cb5")[60];
kktr85 = document.getElementsByClassName("cb5")[61];
kktr86 = document.getElementsByClassName("cb5")[62];
kktr87 = document.getElementsByClassName("cb5")[63];

king.onclick = () => {
  king.style.cssText = "color:red;";
  king.classList.add("kookri");
  cb2.style.cssText = "display:none;";
  cb3.style.cssText = `display:none;`;
  cb4.style.cssText = `display:none;`;
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
  cb5.style.cssText = `display:initial;`;
  cb5.classList.add("anired");
};

// king
kktr1.addEventListener("click", () => {
  tr[1].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr11.addEventListener("click", () => {
  tr[1].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr12.addEventListener("click", () => {
  tr[1].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr13.addEventListener("click", () => {
  tr[1].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr14.addEventListener("click", () => {
  tr[1].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr15.addEventListener("click", () => {
  tr[1].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr16.addEventListener("click", () => {
  tr[1].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr17.addEventListener("click", () => {
  tr[1].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
// Row 2
kktr2.addEventListener("click", () => {
  tr[2].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr21.addEventListener("click", () => {
  tr[2].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr22.addEventListener("click", () => {
  tr[2].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr23.addEventListener("click", () => {
  tr[2].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr24.addEventListener("click", () => {
  tr[2].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr25.addEventListener("click", () => {
  tr[2].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr26.addEventListener("click", () => {
  tr[2].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr27.addEventListener("click", () => {
  tr[2].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
// Row 3

kktr3.addEventListener("click", () => {
  tr[3].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr31.addEventListener("click", () => {
  tr[3].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr32.addEventListener("click", () => {
  tr[3].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr33.addEventListener("click", () => {
  tr[3].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr34.addEventListener("click", () => {
  tr[3].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr35.addEventListener("click", () => {
  tr[3].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr36.addEventListener("click", () => {
  tr[3].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr37.addEventListener("click", () => {
  tr[3].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
// Row 4

kktr4.addEventListener("click", () => {
  tr[4].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr41.addEventListener("click", () => {
  tr[4].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr42.addEventListener("click", () => {
  tr[4].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr43.addEventListener("click", () => {
  tr[4].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr44.addEventListener("click", () => {
  tr[4].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr45.addEventListener("click", () => {
  tr[4].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr46.addEventListener("click", () => {
  tr[4].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr47.addEventListener("click", () => {
  tr[4].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
// Row 5

kktr5.addEventListener("click", () => {
  tr[5].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr51.addEventListener("click", () => {
  tr[5].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr52.addEventListener("click", () => {
  tr[5].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr53.addEventListener("click", () => {
  tr[5].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr54.addEventListener("click", () => {
  tr[5].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr55.addEventListener("click", () => {
  tr[5].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr56.addEventListener("click", () => {
  tr[5].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr57.addEventListener("click", () => {
  tr[5].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr6.addEventListener("click", () => {
  tr[6].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr61.addEventListener("click", () => {
  tr[6].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr62.addEventListener("click", () => {
  tr[6].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr63.addEventListener("click", () => {
  tr[6].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr64.addEventListener("click", () => {
  tr[6].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr65.addEventListener("click", () => {
  tr[6].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr66.addEventListener("click", () => {
  tr[6].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr67.addEventListener("click", () => {
  tr[6].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

// Row 7

kktr7.addEventListener("click", () => {
  tr[7].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr71.addEventListener("click", () => {
  tr[7].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr72.addEventListener("click", () => {
  tr[7].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr73.addEventListener("click", () => {
  tr[7].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr74.addEventListener("click", () => {
  tr[7].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr75.addEventListener("click", () => {
  tr[7].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr76.addEventListener("click", () => {
  tr[7].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr77.addEventListener("click", () => {
  tr[7].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
// Row 8

kktr8.addEventListener("click", () => {
  tr[8].children[1].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});

kktr81.addEventListener("click", () => {
  tr[8].children[2].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr82.addEventListener("click", () => {
  tr[8].children[3].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr83.addEventListener("click", () => {
  tr[8].children[4].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr84.addEventListener("click", () => {
  tr[8].children[5].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr85.addEventListener("click", () => {
  tr[8].children[6].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr86.addEventListener("click", () => {
  tr[8].children[7].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
kktr87.addEventListener("click", () => {
  tr[8].children[8].append(king);

  cb5.classList.remove("anired");
  king.classList.remove("kookri");
});
