
let AngleA = 65;
let AngleB = 100;
let AngleC = 10;

let sumOfAngles = AngleA + AngleB + AngleC;

let Positives = AngleA > 0 && AngleB > 0 && AngleC > 0;

if(Positives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}