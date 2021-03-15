import React, { Component } from "react";

import "./app-section.css";

class AppSection extends Component {
  render() {
    return (
      <div class="app-section">
        <div class="app-section1">
          <div class="image">
            <img src="" alt="Product-image" />
          </div>
        </div>
        <div class="app-section2">
          <table id="price-table">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Notebook</td>
              <td>Rs. 40</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Table</td>
              <td>Rs. 900</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Chair</td>
              <td>Rs. 400</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default AppSection;
