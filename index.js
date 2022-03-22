// import hal yang penting
import prompt from "./modules/prompt.js";
import {header, printMessage, findRoot, listFandM, about} from "./modules/menus.js";

// main function
const main = () => {
	let run = true;

	while (run) {
		header();
		console.log("Silahkan pilih menu berikut: ");
		console.log("1. Mulai cari akar")
		console.log("2. Daftar fungsi dan metode");
		console.log("3. Tentang")
		console.log("4. Keluar\n")

		let ans = prompt(":> ");
		switch(ans) {
			case "1":
				findRoot();
				break;
			case "2":
				listFandM();
				break;
			case "3":
				about();
				break;
			case "4":
				run = false;
				console.clear();
				break;
			default:
				printMessage("Masukan pilihan yang benar!");
		}
	}
}

// jalankan main function
main();