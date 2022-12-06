/**
 * @func print
 * @param {string | number} text - Print text to write console
 */
function print(text: string | number) {
  console.log(text);
}

/**
 * @func pn
 * @param {number} N - Print N-issie to write console
 */
function pn(N: number) {
  console.log(`${N}-masala`);
}

/**
 * @func line - Print line to write console
 */
function line() {
  console.log("* -------------------------- *\n");
}

export { line, pn, print };
