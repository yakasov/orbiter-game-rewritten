/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

"use strict";

/*
 * Nothing in here can require other files!!!
 * This gets load first (after break_eternity.js)
 */

const UPDATELOOPINTERVAL = 20;
const ECONOMYDIVISOR = 1000 / UPDATELOOPINTERVAL;
const SAVEGAMEINTERVAL = 10000;
const EXCLUDEDTABS = [0, 9, 10];
let currentTab = 1;
let currentElement = "";

let elementsTabUnlocked = false;
let period2Unlocked = false;

function f(n, decimals = 2) {
  if (typeof n === "string" || !n) return n;
  if (n.lt(1e3)) return n.toFixed(decimals);

  const ns = n.toString();

  function getLength(nn) {
    return nn.toString()
      .split(".")[0].length;
  }

  if (n.lt(1e6)) {
    const half1 = ns.slice(0, getLength(ns) - 3);
    const half2 = ns.slice(getLength(ns) - 3, getLength(ns));
    return `${half1},${half2}`;
  } else if (n.lt(1e9)) {
    const half1 = ns.slice(0, getLength(ns) - 6);
    const half2 = ns.slice(getLength(ns) - 6, getLength(ns) - 3);
    const half3 = ns.slice(getLength(ns) - 3, getLength(ns));
    return `${half1},${half2},${half3}`;
  }
  return `${ns[0]}.${ns[1]}${ns[2]}e${getLength(n) - 1}`;
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
