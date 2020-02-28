import React, { Component } from 'react'
import Board from '@lourenci/react-kanban'
import { get, put } from '../../api/core';

const YourCard = () => {
    return (
        <div>hi</div>
    )
}

export default class componentName extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            board : {
              lanes : []
            },   
        }

    }
    
    componentDidMount() {
        get('boards').then( res => {
            let { board } = this.state;
            board.lanes = res.data;
            this.setState({ board });
        });
    }

    handleCardDragEnd = (data) => {
        data.lanes.forEach( lane => {
            lane.cards.forEach( card => {
                let data = {
                    id : card.id,
                    title : card.title,
                    lane_id : lane.id
                };
                put(`stories/${card.id}`, data).then( res => { } ).catch( 
                    err => {
                        console.log(err);
                });
            });
        });

    }
    
    render() {

        let { board } = this.state;
        
        return (
            <div>
                {board &&
                  <Board initialBoard={board} onCardDragEnd={this.handleCardDragEnd} 
                  renderCard={({ content }, { removeCard, dragging }) => (
                    <YourCard dragging={dragging}>
                      {content}
                      <button type="button" onClick={removeCard}>Remove Card</button>
                    </YourCard>
                  )}
                  
                  />
                }
                
            </div>
        )
    }

}
