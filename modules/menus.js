// import semua modules
import prompt from "./prompt.js";
import Bisection from "../methods/Bisection.js";
import FalsePosition from "../methods/FalsePosition.js";
import NewtonRaphson from "../methods/NewtonRaphson.js";
import Secant from "../methods/Secant.js";

// import semua function yang akan digunakan pada metode pencarian akar
import {f, g} from "./functions.js";

// -- <utilities> --
export const header = () => {
	console.clear();
	console.log("===========================================");
	console.log("++ Program Pencari Akar - Metode Numerik ++");
	console.log("===========================================\n");
}

export const printMessage = (msg) => {
	header();
	console.log(msg + "\n");
	prompt("Tekan enter untuk lanjut...");
}
// -- <utilities> --


// -- <menus> --
const calcRoot = (f) => {
	header();
	console.log("Silahkan pilih metode yang akan digunakan: ");
	console.log("1. Bagi Dua");
	console.log("2. Posisi Palsu");
	console.log("3. Newton-Raphson");
	console.log("4. Secant\n");

	let ans = prompt(":> ");
	let a, b, tolerance, x, x1, x2, result;
	switch(ans) {
		case "1":
			header();
			a = parseFloat(prompt("Masukan selang kiri: "));
			b = parseFloat(prompt("Masukan selang kanan: "));
			tolerance = parseFloat(prompt("Masukan nilai toleransi: "));

			result = Bisection(f, a, b, tolerance);
			console.log("\nAkar penyelesaiannya adalah: " + result + "\n");
			prompt("Tekan enter untuk lanjut...");
			break;
		case "2":
			header();
			a = parseFloat(prompt("Masukan selang kiri: "));
			b = parseFloat(prompt("Masukan selang kanan: "));
			tolerance = parseFloat(prompt("Masukan nilai toleransi: "));

			result =  FalsePosition(f, a, b, 0, tolerance);
			console.log("\nAkar penyelesaiannya adalah: " + result + "\n");
			prompt("Tekan enter untuk lanjut...");
			break;
		case "3":
			header();
			x = parseFloat(prompt("Masukan tebakan awal: "));
			tolerance = parseFloat(prompt("Masukan nilai toleransi: "));

			result = NewtonRaphson(f, x, tolerance);
			console.log("\nAkar penyelesaiannya adalah: " + result + "\n");
			prompt("Tekan enter untuk lanjut...");
			break;
		case "4":
			header();
			x1 = parseFloat(prompt("Masukan tebakan awal: "));
			x2 = parseFloat(prompt("Masukan tebakan berikutnya: "));
			tolerance = parseFloat(prompt("Masukan nilai toleransi: "));

			result = Secant(f, x2, x1, tolerance);
			console.log("\nAkar penyelesaiannya adalah: " + result + "\n");
			prompt("Tekan enter untuk lanjut...");
			break;
		default:
			printMessage("Masukan pilihan yang benar!");
	}
}

export const findRoot = () => {
	header();
	console.log("Silahkan pilih fungsi yang akan dicari akarnya: ");
	console.log("1. f(x) = 2cos(x) - e^(-0.5x)")
	console.log("2. f(x) = 3sin(x) - x^2 + 1\n");

	let ans = prompt(":> ");
	switch(ans) {
		case "1":
			calcRoot(f);
			break;
		case "2":
			calcRoot(g);				
			break;
		default:
			printMessage("Masukan pilihan yang benar!");
	}
}

export const listFandM = () => {
	header();
	console.log("Daftar fungsi: ");
	console.log("1. f(x) = 2cos(x) - e^(-0.5x)")
	console.log("2. f(x) = 3sin(x) - x^2 + 1\n");

	console.log("Daftar metode: ");
	console.log("- Bagi Dua");
	console.log("- Posisi Palsu");
	console.log("- Newton-Raphson");
	console.log("- Secant\n");
	prompt("Tekan enter untuk lanjut...");
}

export const about = () => {
	header();
	console.log(" +++ Tentang Program +++");
	console.log("---------------------------");
	console.log(`Program pencari akar digunakan untuk mencari akar dari suatu persamaan kuadrat, non-linear dan yang lainnya.`);
	console.log(`Program ini ditulis dengan menggunakan bahasa pemrograman JavaScript.\n`);
	console.log("Author: Ahmad Yogi(1910131210011)\n");
	prompt("Tekan enter untuk lanjut...");
}
// -- <menus> --