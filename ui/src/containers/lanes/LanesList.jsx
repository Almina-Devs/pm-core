import React, { PureComponent } from 'react'
import { get } from '../../api/core';
import { Table } from 'reactstrap';
import moment from 'moment';

class LanesList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            lanes : []
        }
    }

    componentDidMount() {
        get('lanes').then((res) => {
            this.setState({ lanes : res.data });
        });  
    }

    render() {

        let { lanes } = this.state;

        return (
            <React.Fragment>
            <p>lanes</p>
                <div className="div-container__medium">
                    <Table>
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>label</th>
                            <th>project</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lanes.map(lane => {
                                    return <tr key={lane.id}>
                                        <td>{lane.id}</td>
                                        <td>{lane.title}</td>
                                        <td>{lane.label}</td>
                                        <td>{lane.project_id}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>         
            </React.Fragment> 
        )
    }
}

export default LanesList