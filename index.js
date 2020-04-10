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

// EXTEND CLASS DIBWAH -------- TUJUAN EXTEND SUPAYA HINDARI BENTROK

class Cafe extends Coffee{
    constructor(obj={}){
        super(obj)

        this.name = obj.name
    }
}

const detailCafe = new Cafe({
    name: 'SEVENONE',
    bean: ['Kopi Luwak', 'Robusta'],
    method: 'Manual Brew'
})

console.log(detailCafe);
