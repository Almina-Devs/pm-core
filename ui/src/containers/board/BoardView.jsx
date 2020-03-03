import React, { Component } from 'react';
import { CustomCard } from './CustomCard';
import Board from '@lourenci/react-kanban';
import { get, put } from '../../api/core';

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
            <div className="div-container__large">
                {board &&
                  <Board initialBoard={board} onCardDragEnd={this.handleCardDragEnd} 
                    renderCard={({ content }, { removeCard, dragging, card }) => {
                        
                        return ( 
                            <React.Fragment>
                                <CustomCard id={content.id}
                                    title={content.title}
                                    description={content.description}
                                />
                            </React.Fragment>
                        )
                    }}
                  />
                }
            </div>
        )
    }

}
