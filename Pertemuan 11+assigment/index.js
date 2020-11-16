// Rewind about function
function Greetings() {
    return "Hai, Good Morning and Have a beautiful day :)";
};
console.log(Greetings());


/*
    ARROW FUNCTION
*/

// Fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2, bilangan3) => {
    const hasil =  bilangan1 + bilangan2 + bilangan3;
    return hasil;
};
console.log(operasiPenjumlahan(4, 4, 2));

// Fungsi w/o parameter
const Cars = () => {
    const mobil = ["BMW", "Ferrari", "Bugatti"];
    return mobil[Math.floor(Math.random()*(mobil.length))];
}
console.log(Cars()); // Output: -Random-

/*
    Implicit Return Value
*/
/*
function greeting(nama) {
    return `Hi ${nama}`;
}
console.log(greeting('Einstein'));
*/

// Disingkat menggunakan arrow function
const greeting = (nama) => `Hi ${nama}`;
console.log(greeting('Rionaldo Bagi'));

/*
    Syntax arrow function untuk implicit return value::
    const namaFungsi = () => nilaiReturn;
*/

// Assignment
const yearUntilRetirement = (birthYear = 2000, currentYear = 2020, firstName) => {
    let age = currentYear - birthYear;
    let retirement = 70 - age;
    if(retirement > 0 ){
        console.log(`${firstName} retired in ${retirement} years`);
    }else{
        console.log(`${firstName} is already retired.`);
    }
}

console.log(yearUntilRetirement(1999, 2020, "Rionaldo Bagi"));