import React, { Component } from 'react';

class TDTD_ProductList extends Component {
    render() {
        let {renderProduct} = this.props;
        console.log("Products :",renderProduct);

        let fnStatus = (paragram) => {
            if(paragram === 1){
                return 'Acive';
            }
            return "Non - Active";
        }

        let elementProduct = renderProduct.map((item,index)=>{
            return(
                <>
                    <tr key = {index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        {/* <td>{item.status === 1 ? 'Active' : 'Non - Active'}</td> */}
                        <td>{fnStatus(item.status)}</td>
                    </tr>
                </>
            )
        })
        return (
            <div>
                <h2>List Products</h2>
                <table className='table table-border'>
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Status</td>
                    </tr>
                    </thead>
                    <tbody>
                        {elementProduct}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TDTD_ProductList;