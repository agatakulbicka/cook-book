import React, {Component} from 'react';
import ProductList from "./ProductList"

class ProductBook extends Component {
    constructor() {
        super();

        this.state = {
            products: [
                {
                    name: "mleko",
                    editMode: false,
                    newName: ''
                },
                {
                    name: "masło",
                    editMode: false,
                    newName: ''
                },
                {
                    name: "jajko",
                    editMode: false,
                    newName: ''
                },
                {
                    name: "sól",
                    editMode: false,
                    newName: ''
                }
            ],
            newProduct: ""
        };
    }

    setNewProduct = (event) => {
        const productName = event.currentTarget.value;
        this.setState({
            newProductName: productName
        });
    };

    addProduct = () => {
        this.setState(state => ({
            products: [...state.products, {
                name: state.newProductName,
                editMode: false
            }]
        }));
    };

    removeProduct = (elementToRemove) => {
        this.setState(state => ({
            products: state.products.filter(element => element !== elementToRemove)
        }));
    };

    switchProductEdition = (selectedProduct) => {
        this.setState(state => ({
            products: state.products.map(product => {
                return product === selectedProduct ?
                    {...product, editMode: !selectedProduct.editMode} :
                    product;
            })
        }));
    };

    updateProduct = (productToUpdate) => {
        this.setState(state => ({
            products: state.products.map(product => {
                return product === productToUpdate ?
                    {...product, editMode: false, name: productToUpdate.newName} :
                    product;
            })
        }));
    };

    setNewName = (productToSetName, newName) => {
        this.setState(state => ({
            products: state.products.map(product => {
                return product === productToSetName ?
                    {...product, newName: newName} :
                    product;
            })
        }));
    };

    render() {
        return (
            <div>
                <input onChange={this.setNewProduct}/>
                <button onClick={this.addProduct}>Dodaj produkt</button>
                <ProductList
                    products={this.state.products}
                    removeProduct={this.removeProduct}
                    switchProductEdition={this.switchProductEdition}
                    updateProduct={this.updateProduct}
                    setNewName={this.setNewName}
                />
            </div>
        );
    }
}

export default ProductBook;