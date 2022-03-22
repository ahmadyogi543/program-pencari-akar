const getC = (a, b, fA, fB) => ( a*fB - b*fA ) / (fB - fA);

const FalsePosition = (f, a, b, oldC, tolerance) => {
	// nilai awal a, b dan c...
	let newC = getC(a, b, f(a), f(b));

	// cek apakah akar berada pada sisi kiri atau kanan...
	let position = f(a)*f(newC);
	if (position > 0) {
		a = newC;
	}
	else {
		b = newC;
	}

	let err = newC - oldC;
	if (err > tolerance) {
		return FalsePosition(f, a, b, newC, tolerance);
	}
	else {
		return newC;
	}
}

export default FalsePosition;