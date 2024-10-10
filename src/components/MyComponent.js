import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'minhchien',
        address: 'baria',
        age: 19
    };

    handleClick = (event) => {
        // console.log("my name is", this.state.name)
        console.log(event.target)

        this.setState(
            {
                name: 'chiendz',
                age: Math.floor((Math.random() * 100) + 1)
            }
        )

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