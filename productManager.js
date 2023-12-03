class ProductManager {
    constructor() {
        this.products = []
    }
    getProducts() {
        return this.products
    }
    addProduct(product) {
        if (!product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock) {
            return 'Hay que llenar todos los campos de productos'
        }

        const result = this.products.find(prod => prod.code === product.code)
        if (result) {
            return 'El codigo corresponde a un producto ya utilizado hay que cambiarlo'
        }

        if (this.products.lenght === 0) {
            product.id = 1
            this.products.push( product )

        } else {
            product.id = this.products.length + 1
            this.products.push( product )
        }

        return 'producto agregado al carrito'
    }

    getProductById(pid) {
        const result = this.products.find(prod => prod.id === pid)
        if (!result) {
            return 'el producto no existe'
        }
        return result
    }
}

const products = new ProductManager()
console.log(products.addProduct({ title: 'Superman el Nuevo Mundo', description: 'lorem', price: 4500, thumbnail: 'imagen', stock: 75, code: 'abc123' }))
console.log(products.addProduct({ title: 'Batman la broma asesina', description: 'lorem', price: 5000, thumbnail: 'imagen', stock: 75, code: 'abc124' }))
console.log(products.addProduct({ title: 'Civil War parte 1', description: 'lorem', price: 3200, thumbnail: 'imagen', stock: 75, code: 'abc125' }))
console.log(products.addProduct({ title: 'Deadpool Clasico Vol. 3', description: 'lorem', price: 7000, thumbnail: 'imagen', stock: 75, code: 'abc126' }))
console.log(products.getProductById())