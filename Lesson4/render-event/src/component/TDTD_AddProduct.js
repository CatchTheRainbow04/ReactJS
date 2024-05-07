import React, { Component } from 'react';

class TDTD_AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            title:'',
            status:'',
        }
    }

    TDTD_handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    TDTD_handleClick = (ev)=>{
        ev.preventDefault();
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div>
                <h2>Add New Product</h2>
                <form>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">ID</span>
                    <input
                        type="text"
                        className="form-control"
                        name = 'id'
                        value={this.state.id}
                        onChange={this.TDTD_handleChange}
                    />
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Title</span>
                    <input
                        type="text"
                        className="form-control"
                        name = 'title'
                        value={this.state.title}
                        onChange={this.TDTD_handleChange}
                    />
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Status</span>
                    <input
                        type="text"
                        className="form-control"
                        name = 'status'
                        value={this.state.status}
                        onChange={this.TDTD_handleChange}
                    />
                    </div>
                    <button onClick={this.TDTD_handleClick}>Submit</button>
                </form>              
            </div>
        );
    }
}

export default TDTD_AddProduct;