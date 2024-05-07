import React, { Component } from 'react';
import TDTD_ProductList from './component/TDTD_ProductList';
import TDTD_AddProduct from './component/TDTD_AddProduct';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Cabbage', id: 1, status: 1},
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Iphone', id: 4, status: 1}
      ]
    }
  }
  TDTD_handleSubmit = (paragram) =>{
    console.log("App:",paragram);
    //thêm vào mảng dữ liệu product
    let {products} = this.state;
    products.push(paragram);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Thành Doanh - Render Data - Event Form</h1>
        <hr/>
        <TDTD_ProductList renderProduct = {this.state.products} />
        <hr/>
        <TDTD_AddProduct onSubmit = {this.TDTD_handleSubmit} />
      </div>
    );
  }
}

export default App;