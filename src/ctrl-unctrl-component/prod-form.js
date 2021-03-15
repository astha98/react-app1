// To show the working of the Un-Controlled Component
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class ProductForm extends Component {

    addNewProduct = (event) => {
        console.log("Adding product");
        const pname = this.refs.pname.value;
        const pprice = this.refs.pname.value;
        const pic = this.refs.pname.value;

        const product = {pname, pprice, pic};
        console.log(product);
        // event.preventDefault();

        // this.refs.pname.value = '';
        // this.refs.pprice.value = '';
        // this.refs.pic.value = '';
    }

    render() {
        return (
            <div className="container">
                <h3> Product Entry Form </h3>
                <form className="form" onSubmit={this.addNewProduct}>

                    <div className="form-group row">
                        <label htmlFor="product-name" className="control-label col-md-4">Product Name</label>
                            <div className="col-md-8">
                                <input type="text" ref="pname" className="form-control"/>
                            </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="product-price" className="control-label col-md-4">Product Price</label>
                            <div className="col-md-8">
                                <input type="text" ref="price" className="form-control"/>
                            </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="product-pic" className="control-label col-md-4">Product Picture</label>
                            <div className="col-md-8">
                                <input type="text" ref="pic" className="form-control"/>
                            </div>
                    </div>

                    <button className="btn btn-danger">Submit</button>

                </form>
                </div>
        );
    }
}

export default ProductForm;