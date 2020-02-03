import React, { Component } from 'react'
import Board from '@lourenci/react-kanban'
import { get } from '../../api/core';

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

    handleCardDragEnd = (evt) => {

      console.log('end', evt);

    }
    
    render() {

        let { board } = this.state;
        
        return (
            <div>
                {board &&
                  <Board initialBoard={board} onCardDragEnd={this.handleCardDragEnd} />
                }
                
            </div>
        )
    }
}
