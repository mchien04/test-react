import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'minhchien',
        address: 'baria'
    };

    handleClick(event) {
        // console.log("muhaha")
        console.log(event.target)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
                <button onClick={this.handleClick}>click</button>

            </div>
        );
    }
}

export default MyComponent;