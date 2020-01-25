import React, { PureComponent } from 'react';
import Board from 'react-trello';

class BoardView extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {

        const data = {
            lanes: [
              {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '2/2',
                cards: [
                  {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
                  {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
                ]
              },
              {
                id: 'lane2',
                title: 'Completed',
                label: '0/0',
                cards: []
              }
            ]
        }

        return (
            <React.Fragment>
                <p>Board</p>
                <Board data={data} />
            </React.Fragment>
        )
    }
}

export default BoardView