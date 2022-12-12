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

function m11(a: number, b: number) {
  pn(11);
  print(
    `Yig'indi: ${a + b}, Ko'paytma: ${a * b}, A: ${Math.abs(a)}, B: ${Math.abs(
      b
    )}`
  );
  line();
}

function m12(a: number, b: number) {
  pn(12);
  let gipotenuza = Math.sqrt(a ** 2 + b ** 2);
  let perimetr = a + b + gipotenuza;
  print(
    `Gipotenuza: ${gipotenuza.toFixed(3)}, Perimetr: ${perimetr.toFixed(3)}`
  );
  line();
}

function m13(r1: number, r2: number) {
  pn(13);
  if (r1 > r2) {
    let s1 = Math.PI * r1;
    let s2 = Math.PI * r2;
    let s3 = s1 - s2;
    print(`S1: ${s1.toFixed(3)}, S2: ${s2.toFixed(3)}, S3: ${s3.toFixed(3)}`);
  } else {
    print("radius 1 katta bo'lishi kerak");
  }
  line();
}

function m14(l: number) {
  pn(14);
  let r = l / (2 * Math.PI);
  let s = Math.PI * r ** 2;
  print(`Radius: ${r.toFixed(3)}, Yuzi: ${s.toFixed(3)}`);
  line();
}

function m15(s: number) {
  pn(15);
  let r = Math.sqrt(s * Math.PI).toFixed(3);
  print(`Diametr: ${Number(r) * 2}, Radius: ${r}`);
  line();
}

function m16(x1: number, x2: number) {
  pn(16);
  print(`L: ${Math.abs(x2 - x1)}`);
  line();
}

function m17(a: number, b: number, c: number) {
  pn(17);
  let s = Math.abs(a) + Math.abs(b) + Math.abs(c);
  let ac = Math.abs(Math.abs(a) - Math.abs(c));
  let bc = Math.abs(Math.abs(b) - Math.abs(c));
  print(`AC: ${ac}, BC: ${bc}, Yig'indi: ${s}`);
  line();
}

function m18(a: number, b: number, c: number) {
  pn(18);
  let ac = Math.abs(Math.abs(a) - Math.abs(c));
  let bc = Math.abs(Math.abs(b) - Math.abs(c));
  print(`AC * BC = ${ac * bc}`);
  line();
}

function m19(x1: number, y1: number, x2: number, y2: number) {
  pn(19);
  let a = Math.abs(Math.abs(x1) - Math.abs(x2));
  let b = Math.abs(Math.abs(y1) - Math.abs(y2));
  let perimetr = 2 * (a + b);
  let yuza = a * b;
  print(`Perimetr: ${perimetr}, Yuza: ${yuza}`);
  line();
}

function m20(x1: number, y1: number, x2: number, y2: number) {
  pn(20);
  let s = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  print(`L: ${s.toFixed(3)}`);
  line();
}

function m21(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number
) {
  pn(21);
  let a = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let b = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);
  let c = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
  let p = (a + b + c) / 2;
  let yuza = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  print(`S: ${yuza}, P: ${p}`)
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
