// function helper
const e = (n) => Math.exp(n);
const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);

// list of functions
export const f = (x) => 2*cos(x) - e(-0.5*x);
export const g = (x) => 3*sin(x) - x**2 + 1;