// PENGGUNAAN CLASS ITU IBARAT MEMBUAT FUNCTION TEMPLATE DAN UNTUK MENGGUNAKAN FUNCTION TEMPLATENYA INI KITA
// GUNAKAN CONST UNTUK MENGGUNAKAN, JADI FUNCTION YANG ADA ADALAH BEAN DAN METHOD. DENGAN CONST KTA TINGGAL
// INPUT SI BEAN DAN METHOD, LALU KITA BISA BUAT NEWCOFFEE1, NEW COFFEE2 - NEW COFFEE 90 DENGAN FUNCTION TEMPLATE
// YANG ADA.

// MEMANG RULESNYA UNTUK CLASS,CONSTRUCTOR,OBJ,NEW ---- UNTUK MENGGUNAKAN SISTEM/CARA INI.

class Coffee{
    constructor(obj = {}){
        this.bean = obj.bean,
        this.method = obj.method
    }
}
const newCoffee = new Coffee({
    bean: 'Kopi Luwak',
    method: 'Manual Brew'
})

// EXTEND CLASS DIBWAH -------- TUJUAN EXTEND SUPAYA HINDARI BENTROK SAAT REVISI KE2,
// CERITANYA ADALAH TIDAK INGIN MENGGANGGU PROGRESS DAN HASIL DARI YANG PERTAMA, JADI BIAR AMAN KITA GUNAKAN EXTEND

class Cafe extends Coffee{
    constructor(obj={}){
        super(obj)

        this.name = obj.name
    }
}

const detailCafe = new Cafe({
    name: 'SEVENONE',
    // OBJECT ISINYA ADA LEBIH DARI 1.
    // bean: ['Kopi Luwak', 'Robusta'],

    // OBJECT ISINYA ADA OBJECT LAGI.
    bean: ['Kopi Luwak', 'Robusta',{ ukuran:'kecil' }],
    method: 'Manual Brew'
})

console.log(detailCafe);
