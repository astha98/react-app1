// To show the working of the Controlled Component
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ProductForm extends Component {
  state = {
    pname: "",
    price: "",
    contact: "",
    email: "",
    pic: "",
    formError: {
      name: "Product Name is Required",
      price: "Product Price is Required",
      contact: "Customer Phone is Required",
      email: " Customer Email is Required",
      pic: "Product Picture is Required",
    },
    errorMessages: null,
  };

  // Whenever a change occur, tfHandler is called
  tfHandler = (evt) => {
    // this.setState({ [evt.target.name]: evt.target.value });
    /*
        let name = evt.target.name;
        let value = evt.target.value;
    */
    let { name, value } = evt.target;
    let { formError } = this.state;

    switch (name) {
      case "pname":
        if (!value || value.length === 0) {
          formError.name = "Product Name is required";
        } else if (value.length < 3 || value.length > 20) {
          formError.name = " Name should be between 3 and 20 charaacters";
        } else {
          formError.name = "";
        }
        break;

      case "price":
        if (!value || value.length === 0) {
          formError.price = "Price is Required";
        } else if (!value.match(/^\d{2,4}$/)) {
          formError.price = "Please price between 2 and 4 digits";
        } else {
          formError.price = "";
        }
        break;

      case "contact":
        if (!value || value.length === 0) {
          formError.contact = "Contact is Required";
        } else if (!value.match(/^\d{10,12}$/)) {
          formError.contact = "Please enter a valid contact number";
        } else {
          formError.contact = "";
        }
        break;

      case "email":
        if (!value || value.length === 0) {
          formError.emmail = "Customer Email is Required";
        } else if (
          !value.match(
            /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+[^a-zA-Z0-9]{1}[com|in]{2,3}$/
          )
        ) {
          formError.email = "Please enter a valid email Address";
        } else {
          formError.email = "";
        }
        break;

      case "pic":
        if (!value || value.length === 0) {
          formError.pic = "Picture is Required";
        } else if (value.length < 3) {
          formError.pic = "Please enter a valid URL";
        } else {
          formError.pic = "";
        }
        break;

      default:
        break;
    }
    this.setState({ [name]: value , formError}); // Finally, update in the form
  };

  validateForm = (formErrors) => {
    let valid = true;
    Object.values(formErrors).forEach(
      err => valid = valid && err.length === 0);
    return valid;
  };

  //Submit Handler
  addNewProduct = (event) => {
    console.log(" Submit Handler called ");
    event.preventDefault();
    let { formError } = this.state;
    if (this.validateForm(formError)) {
      alert("Form Submitted !");
    } else {
      let errorMessages = Object.values(formError).map((err, idx) =>
        err.length === 0 ? null : <li key={idx}>{err}</li>
      );
      this.setState({ errorMessages });
    }
  };

  render() {
    return (
      <div className="container">
        <pre>{JSON.stringify(this.state, null, 3)}</pre>

        <h3> Product Entry Form </h3>
        <form className="form" onSubmit={this.addNewProduct}>
          <div className="form-group row">
            <label htmlFor="product-name" className="control-label col-md-4">
              Product Name
            </label>
            <div className="col-md-8">
              <input
                type="text"
                onChange={this.tfHandler}
                name="pname"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="product-price" className="control-label col-md-4">
              Product Price
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="price"
                onChange={this.tfHandler}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="customer-contact"
              className="control-label col-md-4"
            >
              Customer Contact
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="contact"
                onChange={this.tfHandler}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="customer-email" className="control-label col-md-4">
              Customer Email
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="email"
                onChange={this.tfHandler}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="product-pic" className="control-label col-md-4">
              Product Picture
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="pic"
                onChange={this.tfHandler}
                className="form-control"
              />
            </div>
          </div>

          <button className="btn btn-danger">Submit</button>
        </form>
        <hr/>
        <ul>
            {this.state.errorMessages}
        </ul>
      </div>
    );
  }
}

export default ProductForm;
