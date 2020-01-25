import React, { PureComponent } from 'react'
import { getHi } from '../api/core';

class Test extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message : '',
        }
    }

    componentDidMount() {
        getHi().then((res) => {
            console.log(res.data);
            this.setState({ message : res.data });
        });
    }

    render() {
        return (
            <React.Fragment>
                <p>from test: { this.state.message }</p>
            </React.Fragment>
        )
    }
}

export default Test