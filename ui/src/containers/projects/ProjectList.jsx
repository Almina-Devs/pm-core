import React, { PureComponent } from 'react'
import { get } from '../../api/core';

class ProjectList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount() {
        get('\projects').then((res) => {
            console.log(res.data);
        });  
    }

    render() {
        return (
            <p>projects</p>
        )
    }
}

export default ProjectList