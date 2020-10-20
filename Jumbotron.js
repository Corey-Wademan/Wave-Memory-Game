import React from 'react'

export const Jumbotron = (props) => {
    return (
        <div className='jumbotron jumbtron-fluid'>
            <div className='container'>{props.children}
                <header>
                <h1>Memory Game</h1>
                <p>Try to reach 12 points by clicking on images but not ones that you already have clicked! ;)</p>
                <h4>Score: {props.currentScore}</h4>
                <h4>Top Score:<span className='topscore'> {props.topScore}</span></h4>
                </header>
            </div>
        </div>
    )
}
