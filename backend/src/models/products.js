const Products = {

    products: [
        { id: 1, nombre: 'Articulo_1', precio: 2000, origen: 'China', stock: 1000 },
        { id: 2, nombre: 'Articulo_2', precio: 1500, origen: 'China', stock: 100 },
        { id: 3, nombre: 'Articulo_3', precio: 3000, origen: 'China', stock: 50 },
        { id: 4, nombre: 'Articulo_4', precio: 1000, origen: 'Japon', stock: 250 },
        { id: 5, nombre: 'Articulo_5', precio: 1500, origen: 'China', stock: 100 },
        { id: 6, nombre: 'Articulo_6', precio: 2000, origen: 'China', stock: 10 },
        { id: 7, nombre: 'Articulo_7', precio: 5000, origen: 'EEUU', stock: 569 },
        { id: 8, nombre: 'Articulo_8', precio: 3500, origen: 'Japon', stock: 2 },
        { id: 9, nombre: 'Articulo_9', precio: 7500, origen: 'Chile', stock: 230 }
    ],

    getOne: async function(id) {
        try {
            return new Promise((resolve, reject) => {
                    const product = this.products.filter(list => list.id == id)
                    if (product.length != 0) {
                        resolve(product)
                    } else {
                        reject('Producto no encontrado')
                    }
                })
                .then(product => product)
                .catch(err => err)
        } catch (error) {
            return new Promise((reject) => { reject('Error de conexion') })
        }
    },
    allProducts: async function() {
        try {
            return new Promise((resolve, reject) => {
                    if (this.products) {
                        resolve(this.products)
                    } else {
                        reject('No hay registros')
                    }
                })
                .then(product => product)
                .catch(err => err)
        } catch (error) {
            return new Promise((reject) => { reject('Error de conexion') })
        }
    }
}


module.exports = Products;