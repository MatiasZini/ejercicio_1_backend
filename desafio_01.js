const generarId = (() => {
    let contador = 0;

    return () => {
        contador++
        return contador
    }
}) ();

class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => {
        console.log("Productos disponibles: ", this.products);
    }

    addProduct = (title, description, price, thumbnail, code, stock, id) => {
        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: "".concat(generarId())
        };
        this.products.push(newProduct)
    }
    getProductById = () => {
    
    }
}

const productos = new ProductManager();

productos.getProducts();
productos.addProduct("Campera", "Cuerina sintetica", 500, "no image", 100, 5, "")
productos.getProducts();