import React, { Component } from 'react';
import '../stylesheets/lastMatches.scss'

export default class HomeTeamMatches extends Component{
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${this.props.teamId}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    data: result.results
                })
            })
    }

    win = (x) => {
        if (((x.intHomeScore > x.intAwayScore) && (this.props.teamId === x.idHomeTeam)) ||
            ((x.intHomeScore < x.intAwayScore) && (this.props.teamId !== x.idHomeTeam))) {
                return ( 
                    <p className='result green'>W</p> 
                )
        } else if (((x.intHomeScore > x.intAwayScore) && (this.props.teamId !== x.idHomeTeam)) ||
            ((x.intHomeScore < x.intAwayScore) && (this.props.teamId === x.idHomeTeam))){
            return ( 
                <p className='result red'>L</p> 
            )
        } else if (x.intHomeScore === x.intAwayScore) {
            return ( 
                <p className='result orange'>D</p>
            )
        }
    }

    render(){
        return(
            <div className='matchesResults d-flex justify-content-center'>
                {this.state.data.map(item => (
                    this.win(item)
                ))}
            </div>
        )
    }
}