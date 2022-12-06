import { line, pn, print } from "../utils";

function m1(tomon: number) {
  pn(1);
  print(`Perimetr: ${tomon * 4}`);
  line();
}

function m2(yuza: number) {
  pn(2);
  print(`Yuza: ${yuza ** 2}`);
  line();
}

function m3(a: number, b: number) {
  pn(3);
  let S = a * b;
  let P = 2 * (a + b);
  print(`Yuza: ${S}, Perimetr: ${P}`);
  line();
}

function m4(diametr: number) {
  pn(4);
  let L = Math.PI * diametr;
  // ! butun sondan kiyin olinishi kerak bolgan sonlar soni
  print(`L: ${L.toFixed(3)}`);
  // ! sondan kiyin olinishi kerak bolgan sonlar soni
  print(`L: ${L.toPrecision(3)}`);
  line();
}

function m5(tomon: number) {
  pn(5);
  let V = tomon ** 3;
  let S = 6 * tomon ** 2;
  print(`V: ${V}, S: ${S}`);
  line();
}

function m6(a: number, b: number, c: number) {
  pn(6);
  let V = a * b * c;
  let S = 2 * (a * b + b * c + a * c);
  print(`V: ${V}, S: ${S}`);
  line();
}

function m7(radius: number) {
  pn(7);
  let L = 2 * Math.PI * radius;
  let S = Math.PI * radius ** 2;
  print(`L: ${L.toFixed(3)}, S: ${S.toFixed(3)}`);
  line();
}

function m8(a: number, b: number) {
  pn(8);
  let arifmetik = (a + b) / 2;
  print(`O'rta arifmetik: ${arifmetik}`);
  line();
}

function m9(a: number, b: number) {
  pn(9);
  let geometrik = Math.sqrt(a * b);
  print(`O'rta geometrik: ${geometrik.toFixed(3)}`);
  line();
}

function m10(a: number, b: number) {
  pn(10);
  print(
    `Yig'indi: ${a + b}, Ko'paytma: ${a * b}, A2: ${a ** 2}, B2: ${b ** 2}`
  );
  line();
}
function m11() {
  pn(0);
  line();
}
function m12() {
  pn(0);
  line();
}

function m13() {
  pn(0);
  line();
}
function m14() {
  pn(0);
  line();
}
function m15() {
  pn(0);
  line();
}
function m16() {
  pn(0);
  line();
}
function m17() {
  pn(0);
  line();
}
function m18() {
  pn(0);
  line();
}
function m19() {
  pn(0);
  line();
}
function m20() {
  pn(0);
  line();
}
function m21() {
  pn(0);
  line();
}

function m22() {
  pn(0);
  line();
}
function m23() {
  pn(0);
  line();
}
function m24() {
  pn(0);
  line();
}
function m25() {
  pn(0);
  line();
}
function m26() {
  pn(0);
  line();
}
function m27() {
  pn(0);
  line();
}
function m28() {
  pn(0);
  line();
}
function m29() {
  pn(0);
  line();
}
function m30() {
  pn(0);
  line();
}

function m31() {
  pn(0);
  line();
}
function m32() {
  pn(0);
  line();
}
function m33() {
  pn(0);
  line();
}
function m34() {
  pn(0);
  line();
}
function m35() {
  pn(0);
  line();
}
function m36() {
  pn(0);
  line();
}
function m37() {
  pn(0);
  line();
}
function m38() {
  pn(0);
  line();
}
function m39() {
  pn(0);
  line();
}
function m40() {
  pn(0);
  line();
}

export {
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
  m18,
  m19,
  m20,
  m21,
  m22,
  m23,
  m24,
  m25,
  m26,
  m27,
  m28,
  m29,
  m30,
  m31,
  m32,
  m33,
  m34,
  m35,
  m36,
  m37,
  m38,
  m39,
  m40,
};
