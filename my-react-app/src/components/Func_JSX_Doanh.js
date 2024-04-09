import React from 'react';

function FuncJsxDoanh(props) {
    const user = {
        name : "Doanh",
        age : 20
    }
    return (
        <div>
            <h2>Function Component Demo</h2>
            <p>
                Welcome {user.name} . Your age is {user.age} .
            </p>
            <hr/>
                <h3>
                    Props:
                    <br/> FullName: {props.fullName}
                    <br/> Age : {props.age}
                </h3>
        </div>
    );
}

export default FuncJsxDoanh;