import React, { PureComponent } from 'react';
import Board from 'react-trello';
import { get } from '../../api/core';

class BoardView extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : null,
            stories : [],
        }
    }

    componentDidMount() {
        get('lanes').then(res => {
            let data = {
                lanes : res.data
            }
            this.setState({ data });
        });

        get('stories').then(res => {
          this.setState({ stories : res.data });
        })
    }

    render() {

        let { data, stories } = this.state;

        console.log(stories)
        
        if(data) {
            data.lanes[0].cards = stories;
        }

        return (
            <React.Fragment>
                <p>Board</p>
                {data && stories &&
                  <Board data={data ? data : []} style={{backgroundColor: 'white'}} />
                }
                
            </React.Fragment>
        )
    }
}

export default BoardView