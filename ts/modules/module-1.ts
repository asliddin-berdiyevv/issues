import { line, pn, print } from "../utils";

function o1(tomon: number) {
  pn(1);
  print(`Perimetr: ${tomon * 4}`);
  line();
}

function o2(yuza: number) {
  pn(2);
  print(`Yuza: ${yuza ** 2}`);
  line();
}

function o3(a: number, b: number) {
  pn(3);
  let S = a * b;
  let P = 2 * (a + b);
  print(`Yuza: ${S}, Perimetr: ${P}`);
  line();
}

function o4(diametr: number) {
  pn(4);
  let L = Math.PI * diametr;
  // ! butun sondan kiyin olinishi kerak bolgan sonlar soni
  print(`L: ${L.toFixed(3)}`);
  // ! sondan kiyin olinishi kerak bolgan sonlar soni
  print(`L: ${L.toPrecision(3)}`);
  line();
}

function o5(tomon: number) {
  pn(5);
  let V = tomon ** 3;
  let S = 6 * tomon ** 2;
  print(`V: ${V}, S: ${S}`);
  line();
}

function o6(a: number, b: number, c: number) {
  pn(6);
  let V = a * b * c;
  let S = 2 * (a * b + b * c + a * c);
  print(`V: ${V}, S: ${S}`);
  line();
}

function o7(radius: number) {
  pn(7);
  let L = 2 * Math.PI * radius;
  let S = Math.PI * radius ** 2;
  print(`L: ${L.toFixed(3)}, S: ${S.toFixed(3)}`);
  line();
}

function o8(a: number, b: number) {
  pn(8);
  let arifmetik = (a + b) / 2;
  print(`O'rta arifmetik: ${arifmetik}`);
  line();
}

function o9(a: number, b: number) {
  pn(9);
  let geometrik = Math.sqrt(a * b);
  print(`O'rta geometrik: ${geometrik.toFixed(3)}`);
  line();
}

function o10(a: number, b: number) {
  pn(10);
  print(
    `Yig'indi: ${a + b}, Ko'paytma: ${a * b}, A2: ${a ** 2}, B2: ${b ** 2}`
  );
  line();
}

function o11(a: number, b: number) {
  pn(11);
  print(
    `Yig'indi: ${a + b}, Ko'paytma: ${a * b}, A: ${Math.abs(a)}, B: ${Math.abs(
      b
    )}`
  );
  line();
}

function o12(a: number, b: number) {
  pn(12);
  let gipotenuza = Math.sqrt(a ** 2 + b ** 2);
  let perimetr = a + b + gipotenuza;
  print(
    `Gipotenuza: ${gipotenuza.toFixed(3)}, Perimetr: ${perimetr.toFixed(3)}`
  );
  line();
}

function o13(r1: number, r2: number) {
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

function o14(l: number) {
  pn(14);
  let r = l / (2 * Math.PI);
  let s = Math.PI * r ** 2;
  print(`Radius: ${r.toFixed(3)}, Yuzi: ${s.toFixed(3)}`);
  line();
}

function o15(s: number) {
  pn(15);
  let r = Math.sqrt(s / Math.PI).toFixed(3);
  print(`Diametr: ${Number(r) * 2}, Radius: ${r}`);
  line();
}

function o16(x1: number, x2: number) {
  pn(16);
  print(`L: ${Math.abs(x2 - x1)}`);
  line();
}

function o17(a: number, b: number, c: number) {
  pn(17);
  let ac = Math.abs(Math.abs(a) - Math.abs(c));
  let bc = Math.abs(Math.abs(b) - Math.abs(c));
  print(`AC: ${ac}, BC: ${bc}, Yig'indi: ${ac + bc}`);
  line();
}

function o18(a: number, b: number, c: number) {
  pn(18);
  let ac = Math.abs(Math.abs(a) - Math.abs(c));
  let bc = Math.abs(Math.abs(b) - Math.abs(c));
  print(`AC * BC = ${ac * bc}`);
  line();
}

function o19(x1: number, y1: number, x2: number, y2: number) {
  pn(19);
  let a = Math.abs(Math.abs(x1) - Math.abs(x2));
  let b = Math.abs(Math.abs(y1) - Math.abs(y2));
  let perimetr = 2 * (a + b);
  let yuza = a * b;
  print(`Perimetr: ${perimetr}, Yuza: ${yuza}`);
  line();
}

function o20(x1: number, y1: number, x2: number, y2: number) {
  pn(20);
  let s = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  print(`L: ${s.toFixed(3)}`);
  line();
}

function o21(
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
  print(`S: ${yuza.toFixed(3)}, P: ${p.toFixed(3)}`);
  line();
}

function o22(a: number, b: number) {
  pn(22);
  let x = a;
  a = b;
  b = x;
  print(`A: ${a}, B: ${b}`);
  line();
}

function o23(a: number, b: number, c: number) {
  pn(23);
  let x = a;
  a = b;
  b = c;
  c = x;
  print(`A: ${a}, B: ${b}, C: ${c}`);
  line();
}

function o24(a: number, b: number, c: number) {
  pn(24);
  let x = a;
  a = c;
  c = b;
  b = x;
  print(`A: ${a}, B: ${b}, C: ${c}`);
  line();
}

function o25(x: number) {
  pn(25);
  let y = 3 * x ** 6 - 6 * x ** 2 - 7;
  print(`y = ${y}`);
  line();
}

function o26(x: number) {
  pn(26);
  let y = 3 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
  print(`Y: ${y}`);
  line();
}

function o27(a: number) {
  pn(27);
  print(`A2: ${a ** 2}, A4: ${a ** 4}, A8: ${a ** 8},`);
  line();
}

function o28(a: number) {
  pn(28);
  print(
    `A2: ${a ** 2}, A3: ${a ** 3}, A5: ${a ** 5}, A10: ${a ** 10}, A15: ${
      a ** 15
    }`
  );
  line();
}

function o29(alfa: number) {
  pn(29);
  let rad = alfa * (Math.PI / 180);
  print(`Radian: ${rad.toFixed(4)}`);
  line();
}

function o30(rad: number) {
  pn(30);
  let gra = rad * (180 / Math.PI);
  print(`G: ${gra}`);
  line();
}

function o31(Tem: number) {
  pn(31);
  let Tc = (Tem - 32) * (5 / 9);
  print(`Tc: ${Tc.toFixed(3)}`);
  line();
}

function o32(Tem: number) {
  pn(32);
  let Tf = Tem / (9 / 5) + 32;
  print(`Tf: ${Tf.toFixed(3)}`);
  line();
}

function o33(Xkg: number, Asom: number, Ykg: number) {
  pn(33);
  let Ysom = (Ykg * Asom) / Xkg;
  let kg1Som = (1 * Asom) / Xkg;
  print(`1 kg som: ${kg1Som}, Y kg som: ${Ysom}`);
  line();
}

function o34(Xkg: number, Xsom: number, Ykg: number, Ysom: number) {
  pn(34);
  let X1kg = Xsom / Xkg;
  let Y1kg = Ysom / Ykg;
  print(`So'm: ${Math.abs(Y1kg - X1kg)}`);
  line();
}

function o35(vq: number, vo: number, T1: number, T2: number) {
  pn(35);
  let v1 = vq + vo;
  let v2 = vq - vo;
  let vu = (v1 * T1 + v2 * T2) / (T1 + T2);
  let s = (vu * (T1 + T2)) / 2;
  print(`S: ${s}`);
  line();
}

function o36(v1: number, v2: number, s: number, t: number) {
  pn(36);
  let s2 = (v1 + v2) * t;
  print(`S: ${s + s2}`);
  line();
}

function o37(v1: number, v2: number, s: number, t: number) {
  pn(37);
  let s2 = (v1 + v2) * t;
  print(`S: ${s - s2}`);
  line();
}

function o38(a: number, b: number) {
  pn(38);
  let x = -b / a;
  print(`X: ${x}`);
  line();
}

function o39(a: number, b: number, c: number) {
  pn(39);
  let msg = "";
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    msg = `X1: ${x1.toFixed(3)}, X2: ${x2.toFixed(3)}`;
  } else {
    msg = "Diskriminant noldan kichik son";
  }
  print(msg);
  line();
}

function o40(
  a1: number,
  b1: number,
  c1: number,
  a2: number,
  b2: number,
  c2: number
) {
  pn(40);
  let d = a1 * b2 - a2 * b1;
  let x = (c1 * b2 - c2 * b1) / d;
  let y = (a1 * c2 - a2 * c1) / d;
  print(`X: ${x}, Y: ${y}`);
  line();
}

export {
  o1,
  o2,
  o3,
  o4,
  o5,
  o6,
  o7,
  o8,
  o9,
  o10,
  o11,
  o12,
  o13,
  o14,
  o15,
  o16,
  o17,
  o18,
  o19,
  o20,
  o21,
  o22,
  o23,
  o24,
  o25,
  o26,
  o27,
  o28,
  o29,
  o30,
  o31,
  o32,
  o33,
  o34,
  o35,
  o36,
  o37,
  o38,
  o39,
  o40,
};
