import { line, pn, print } from "../utils";

function i1(l: number) {
  pn(1);
  print(`Count: ${Math.floor(l / 100)}`);
  line();
}

function i2(m: number) {
  pn(2);
  print(`Count: ${Math.floor(m / 1000)}`);
  line();
}

function i3(b: number) {
  pn(3);
  print(`kb: ${Math.floor(b / 1024)}`);
  line();
}

function i4(a: number, b: number) {
  pn(4);
  print(`${Math.floor(a / b)} marta`);
  line();
}

function i5(a: number, b: number) {
  pn(5);
  let count = Math.floor(a / b);
  let x = a - count * b;
  print(`${count}, Ortiqcha: ${x}`);
  line();
}

function i6(n: number) {
  pn(6);
  print(`O'nlik: ${Math.floor(n / 10)}, Birlik: ${n % 10}`);
  line();
}

function i7(n: number) {
  pn(7);
  let sum = Math.floor(n / 10) + (n % 10);
  print(`Yig'indi: ${sum}`);
  line();
}

function i8(n: number) {
  pn(8);
  let bir = n % 10;
  let on = Math.floor(n / 10);
  print(`Yangi son: ${bir * 10 + on}`);
  line();
}

function i9(n: number) {
  pn(9);
  let yuz = Math.floor(n / 100);
  print(`Yuzlik: ${yuz}`);
  line();
}

function i10(n: number) {
  pn(10);
  let bir = n % 10;
  let on = Math.floor((n % 100) / 10);
  print(`Birlik: ${bir}, O'nlik: ${on}`);
  line();
}

function i11(n: number) {
  pn(11);
  let bir = n % 10;
  let on = Math.floor((n % 100) / 10);
  let yuz = Math.floor(n / 100);
  let sum = bir + on + yuz;
  print(`Y: ${sum}`);
  line();
}

function i12(n: number) {
  pn(12);
  let bir = n % 10;
  let on = Math.floor((n % 100) / 10);
  let yuz = Math.floor(n / 100);
  print(`N: ${bir * 100 + on * 10 + yuz}`);
  line();
}

function i13(n: number) {
  pn(13);
  let on = n % 100;
  let yuz = Math.floor(n / 100);
  print(`N: ${on * 10 + yuz}`);
  line();
}

function i14(n: number) {
  pn(14);
  let bir = n % 10;
  let yuz = Math.floor(n / 10);
  print(`N: ${bir * 100 + yuz}`);
  line();
}

function i15(n: number) {
  pn(15);
  let bir = n % 10;
  let on = Math.floor((n % 100) / 10);
  let yuz = Math.floor(n / 100);
  print(`N: ${on * 100 + yuz * 10 + bir}`);
  line();
}

function i16(n: number) {
  pn(16);
  let bir = n % 10;
  let on = Math.floor((n % 100) / 10);
  let yuz = Math.floor(n / 100);
  print(`N: ${yuz * 100 + bir * 10 + on}`);
  line();
}

function i17(n: number) {
  pn(17);
  print(`Yuzlik: ${Math.floor((n % 1000) / 100)}`);
  line();
}

function i18(n: number) {
  pn(18);
  print(`Minglik: ${(n / 1000).toPrecision(1)}`);
  line();
}

function i19(s: number) {
  pn(19);
  print(`M: ${Math.floor(s / 60)}`);
  line();
}

function i20(s: number) {
  pn(20);
  print(`H: ${Math.floor(s / 3600)}`);
  line();
}

function i21() {
  pn(0);
  print(``);
  line();
}

function i22() {
  pn(0);
  print(``);
  line();
}

function i23() {
  pn(0);
  print(``);
  line();
}

function i24() {
  pn(0);
  print(``);
  line();
}

function i25() {
  pn(0);
  print(``);
  line();
}

function i26() {
  pn(0);
  print(``);
  line();
}

function i27() {
  pn(0);
  print(``);
  line();
}

function i28() {
  pn(0);
  print(``);
  line();
}

function i29() {
  pn(0);
  print(``);
  line();
}

function i30() {
  pn(0);
  print(``);
  line();
}

export {
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
  i22,
  i23,
  i24,
  i25,
  i26,
  i27,
  i28,
  i29,
  i30,
};
