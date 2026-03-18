//1-masal
let hamyon = 0;

for (let i = 1; i <= 7; i++) {
    if (i === 5) 
        {hamyon += 20000;
    } else if (i === 7) { 
        continue;
    } else {
        hamyon += 10000;
    }
}

console.log("Bir haftada" + hamyon + "olasiz"); 


//2-masala
let juftSon = 0; 
let toqSon = 0;  

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        juftSon += i;
    } else {
        toqSon += i;
    }
}

console.log("Juft sonlar yig'indisi:", juftSon);
console.log("Toq sonlar yig'indisi:", toqSon)

if (juftSon > toqSon) {
    console.log("Juft sonlar yig'indisi katta");
} else if (juftSon < toqSon) {
    console.log("Toq sonlar yig'indisi katta");
} else {
    console.log("Juft va toq sonlar yig'indisi teng");
}

//3-masala
let boshlangichQuvat = 100; 
let level = 0;     
const harLeveluchun = 15; 
const minBatareya = 20; 

while (boshlangichQuvat - harLeveluchun > minBatareya) {
    boshlangichQuvat -= harLeveluchun; 
    level++;                
}

console.log("Oynash mumkin bo'lgan maksimal level:", level);

