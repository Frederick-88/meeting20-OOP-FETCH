// URL ADALAH TARGET LIBRARY YANG INGIN KITA TUJU, ALAMAT TEMPAT KITA AMBIL BARANG
// TUJUAN URL DIBUAT CONST SUPAYA JADI VARIABEL UNIVERSAL YANG BISA DIPANGGIL DGN ${URL}.

// const URL = 'http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination'

// fetch(`${URL}`)

// .then((respond) =>{
//     return respond.json();
// })

// .then((data) =>{
//     console.log(data);

// })

// .catch((error)=>{
//     console.error(error);
// })

// PAKAI AXIOS. --- EASIER

axios.get('http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination')

    .then((respond) => {
        console.log(respond.data);

        // TAMPILAN HTML
        for (let i = 10; i <= 20; i++) {
            displayISI(respond.data[i]);

        }
    })


    .catch((error) => {
        console.error(error);

    })


const displayISI = (item) => {
    const imgURL= 'http://35.240.201.155:3000'
    let tujuan = document.getElementById("displayHTML")
    let isiHTML =
        `<div class="col-sm-3">

        <div class="card" style="width: 18rem;">
  <img src="${imgURL}/${item.images}" class="card-img-top" alt="..." >
  <div class="card-body">
    <p class="card-text">${item.address}</p>
  </div>
</div>
    
    </div>`

    tujuan.innerHTML += isiHTML
}