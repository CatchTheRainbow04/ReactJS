import React, { Component } from 'react';

class ClassJsxDoanh extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName : "ua ali",
            class : "TFT"
        }
    }
    user = {
        name : "Hehe",
        age : 21
    }
    handleChange = (event) =>{
        this.setState({
            fullName : "yasuo",
            class : "Song dau"
        })
    }
    render() {
        return (
            <div>
                <h2>Class Component Demo</h2>
                {this.user.name} - {this.user.age}
                <br/>
                <h3>
                    {this.props.info} - {this.props.time}
                </h3>
                <br/>
                <h3>
                    State<br/>
                    FullName : {this.state.fullName}<br/>
                    Class : {this.state.class}
                </h3>
                <button onClick={this.handleChange}>Change Name</button>
            </div>
        );
    }
}

export default ClassJsxDoanh;