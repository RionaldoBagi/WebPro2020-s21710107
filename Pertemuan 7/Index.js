//Rionaldo Bagi
//Excercise 1

//JavaScript Conditional

//If else
let NilaiWebpro = 95;
if(NilaiWebpro > 80){
    console.log("Congrats!");
}
else if(NilaiWebpro >= 60 && NilaiWebpro <= 75){
    console.log("Belajar lebih giat lagi")
}
else{
    console.log("Banyak belajar");
}
//Switch Case
let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah);


//JavaScript Loop
//For In Loop
const student = {
    name: "Rionaldo Bagi",
    faculty: "Computer Science",
    nim: 105021710019
};
for(property in student){
    console.log(property, ':', student[property]);
}
//For Of Loop
const film = ["Avengers : Infinity war","Iron man", "Captain America : Civil war", "Avengers : Endgame"];

for (property of film) {
  console.log(property);
}
//While Loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//Do While Loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);
