import React, { Component } from "react";

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentData: {
        id: "",
        category: "",
        price: "",
        qty: "",
        name: ""
      },
      isUpdateMode: false,
      isOpen: false,
      currentObjIndex: 0,
      data: [
        {
          id: 1,
          category: "Sporting Goods",
          price: "49.99",
          qty: 12,
          name: "football"
        },
        {
          id: 2,
          category: "Sporting Goods",
          price: "9.99",
          qty: 15,
          name: "baseball"
        },
        {
          id: 3,
          category: "Sporting Goods",
          price: "29.99",
          qty: 14,
          name: "basketball"
        },
        {
          id: 4,
          category: "Electronics",
          price: "99.99",
          qty: 34,
          name: "iPod Touch"
        },
        {
          id: 5,
          category: "Electronics",
          price: "399.99",
          qty: 12,
          name: "iPhone 5"
        },
        {
          id: 6,
          category: "Electronics",
          price: "199.99",
          qty: 23,
          name: "nexus 7"
        }
      ]
    };
  }

  handleUpdate = (
    e,
    i = this.state.currentObjIndex,
    data = this.state.currentData
  ) => {
    e.preventDefault();
    this.state.data.splice(i, 1, data);
    this.setState({ isOpen: false });
  };

  handleAddEvent = evt => {
    this.setState({ isOpen: true, currentData: {} });
  };

  handleMe = j => {
    console.log(j);
  };

  onSubmit = e => {
    e.preventDefault();

    this.state.data.push(this.state.currentData);
    this.setState({ isOpen: false });
  };

  onChangeInput = e => {
    this.setState({
      currentData: {
        ...this.state.currentData,
        [e.target.name]: e.target.value
      }
    });
  };

  editRow = i => {
    let spacificObj = this.state.data[i];
    this.setState({
      currentData: spacificObj,
      isOpen: true,
      isUpdateMode: true,
      currentObjIndex: i
    });
  };

  deleteRow = i => {
    console.log(i);
    this.state.data.splice(i, 1);
    this.setState({});
  };

  render() {
    let tableRowData = this.state.data.map((ele, index) => {
      return (
        <tr key={index}>
          <td>
            <span>
              <button
                onClick={() => this.editRow(index)}
                className="btn-primary"
              >
                Edit
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  this.deleteRow(index);
                }}
                className="btn-danger"
              >
                Delete
              </button>
            </span>
          </td>
          <td>{ele.name}</td>
          <td>{ele.price}</td>
          <td>{ele.qty}</td>
          <td>{ele.category}</td>
        </tr>
      );
    });
    return (
      <div className="container">
        <div
          className={`table-container ${this.state.isOpen ? "openform" : ""}`}
        >
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Action</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>{tableRowData}</tbody>
          </table>
          {/* <button onClick={this.handleMe.bind(null, 2)}>Click</button>*/}
        </div>
        <div>
          <button
            type="button"
            onClick={this.handleAddEvent}
            className="btn btn-success pull-right"
          >
            Add
          </button>
        </div>

        {this.state.isOpen ? (
          <div className="UserInput">
            <form>
              <div className="form-group">
                <label for="name">Name :</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  value={this.state.currentData.name}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="form-group">
                <label for="price">Price :</label>
                <input
                  className="form-control"
                  id="price"
                  name="price"
                  value={this.state.currentData.price}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="form-group">
                <label for="qty">Quantity :</label>
                <input
                  className="form-control"
                  id="qty"
                  name="qty"
                  value={this.state.currentData.qty}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="form-group">
                <label for="category">Category :</label>
                <input
                  className="form-control"
                  id="category"
                  name="category"
                  value={this.state.currentData.category}
                  onChange={this.onChangeInput}
                />
              </div>
              {this.state.isUpdateMode ? (
                <button className="btn-primary" onClick={this.handleUpdate}>
                  Update
                </button>
              ) : (
                <button className="btn-primary" onClick={this.onSubmit}>
                  Submit
                </button>
              )}
            </form>
          </div>
        ) : (
          " "
        )}
      </div>
    );
  }
}

export default TableComponent;
