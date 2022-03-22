// function helper untuk menghitung nilai x_n
const getXn = (xNm2, xNm1, fxNm2, fxNm1) => xNm1 - ((fxNm1 * (xNm1 - xNm2))/(fxNm1 - fxNm2));

// Info penting!!!
// xNm2 => x_n-2
// XNm1 => x_n-1

const Secant = (f, xNm2, xNm1, tolerance) => {
	// dapatkan nilai xn
	const xN = getXn(xNm2, xNm1, f(xNm2), f(xNm1));
	
	// dapatkan galat
	let err = Math.abs(xN - xNm1);
	if (err > tolerance) {
		return Secant(f, xNm1, xN, tolerance);
	}
	else {
		return xN;
	}
}

export default Secant;