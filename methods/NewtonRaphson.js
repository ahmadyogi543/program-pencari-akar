const d = (f) => {
	let h = 0.001;
	return (x) => (f(x + h) - f(x - h)) / (2 * h);
}

const NewtonRhapson = (f, x, tolerance) => {
	// dapatkan nilai baru x
	const newX = x - (f(x)/d(f)(x));
	
	// hitung selisih dari x baru dan x lama
	let diff = Math.abs(newX - x);

	if (diff > tolerance) {
		return NewtonRhapson(f, newX, tolerance);
	}
	else {
		return newX;
	}
}

export default NewtonRhapson;