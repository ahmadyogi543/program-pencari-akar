const Bisection = (f, a, b, tolerance) => {
	// nilai awal a, b dan t...
	let t = (a + b)/2;

	// cek apakah akar berada pada sisi kiri atau kanan...
	let position = f(a)*f(t);
	if (position > 0) {
		a = t;
	}
	else {
		b = t;
	}

	let err = Math.abs(a - b);
	if (err > tolerance) {
		return Bisection(f, a, b, tolerance);
	}
	else {
		return t;
	}
}

export default Bisection;