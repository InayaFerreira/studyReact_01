// 1 - var, let e const
/*
var x = 10
var y = 15

if(y >10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5 
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++){
    console.log(i)
}

console.log(i)

function logName(){
    const name = 'João'
    console.log(name)
}

const name = 'Pedro'

logName()

console.log(name)

// 2 arrow function 
const sum = function sum(a, b) {
    return a + b 
}

const arrowSum = (a, b) => {
    return a + b
}

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return 'Olá' + ' ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting("Matheus"))
console.log(greeting())

const testeArrow = () => console.log("testou!")

testeArrow()

const user = {
    name: "Theo",
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(this)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log('Username: ' + this.name)
        }, 700)
    },
}

user.sayUserName()
user.sayUserNameArrow()

// 3 Filter 
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: 'Matheus', available: true },
    { name: 'Pedro', available: false },
    { name: 'João', available: false },
    { name: 'Marcos', available: true }
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)
console.log(availableUsers, notAvailableUsers)

// 4 Map
const products = [
    { name: 'Camisa', price: 10.99, category: 'Roupas'},
    { name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    { name: 'Fogão', price: 400, category: 'Eletro'},
    { name: 'Calça Jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }else{
        product.onSale = false
    }
})

console.log(products) 

// 5 Template Literals
const userName = 'Matheus'
const age = 30

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`) // Jeito novo 
console.log("O nome do usuário é " + userName + " e ele tem " + age + " anos.") // Jeito antigo 


// 6 Destructuring 

const fruits = ["Maça", "Laranja", "Mamão"]
const [f1, f2, f3] = fruits

console.log(f1)
console.log(f3)

const productsDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productsDetails

console.log(`O nome do produto é ${productName}, custa ${price}, pertence a categoria ${productCategory} e possui a cor ${color}`)
*/
// 7 Spread Operador 
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 100000, price: 49000, wheels: 4}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)

// 8 Classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price 
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola v", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product("Tenis Verde", 120)

console.log(tenis.productWithDiscount(20))


// 9 Herança 

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, [
    'Preto',
    'Azul',
    'Verde',
])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()















