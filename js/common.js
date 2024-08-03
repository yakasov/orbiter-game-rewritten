const updateLoopInterval = 50;
const economyDivisor = 1000 / updateLoopInterval;
const saveGameInterval = 10000;
let currentTab = 1;

function f(n, decimals = 2) {
  if (typeof n == "string" || !n) return n;
  if (n.lte(1e3)) return n.toFixed(decimals);

  const ns = n.toString();

  function getLength(n) {
    return n.toString().split(".")[0].length;
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
  } else {
    return `${ns[0]}.${ns[1]}${ns[2]}e${getLength(n) - 1}`;
  }
}
