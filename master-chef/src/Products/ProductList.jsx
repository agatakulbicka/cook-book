import React, {Component} from 'react';

class ProductList extends Component {

    constructor(props){
        super(props)
    }

    renderProductList = (products) => {
        return products.map(this.renderProduct)
    };

    setNewName = (event, productToSetName) => {
        const newName = event.target.value;
        this.props.setNewName(productToSetName, newName);
    };

    renderProduct = (product) => {
        return product.editMode ? (
            <div>
                <input
                    type="text"
                    onChange={(event) => this.setNewName(event, product)}
                    value={product.newName}
                />
                <button onClick={() => this.props.removeProduct(product)}>Usuń</button>
                <button onClick={() => this.props.updateProduct(product)}>Zapisz</button>
                <button onClick={() => this.props.switchProductEdition(product)}>Anuluj edycję</button>
            </div>
        ) : (
            <div>
                <li key={product.name}>{product.name}</li>
                <button onClick={() => this.props.removeProduct(product)}>Usuń</button>
                <button onClick={() => this.props.switchProductEdition(product)}>Edytuj</button>
            </div>
        )
    };

    render() {
        const shouldRenderProductList = this.props.products.length > 0;

        return shouldRenderProductList ? (
            <ul>
                {this.renderProductList(this.props.products)}
            </ul>
        ) : (
            <p>Brak produktów</p>
        );
    }
}

export default ProductList;