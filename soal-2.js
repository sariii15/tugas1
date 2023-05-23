const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const makananKesukaan = ["tikus","wortel","padi"];
let tamp = "";
const data =()=> [...hewanBuas,...hewanJinak];


const pemetaanHewan =  (hewan, makanan) =>{
    const hasilPemetaan = {};
  
    for (let j = 0; j < hewan.length; j++) {
      hasilPemetaan[hewan[j]] = makanan[j];
    }
  
    return hasilPemetaan;
  }

console.log(pemetaanHewan(hewanJinak,makananKesukaan));
setTimeout(() => {
    console.log(data());
}, 5000);