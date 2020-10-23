import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../stylesheets/generateCard.scss'
import CardModal from './modal';

export default class GenerateCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }    

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return(
            <>
                <Card className="card text-white" 
                    onClick={this.openModal}
                    key={this.props.img}>
                    <Card.Img src={this.props.img} alt={this.props.alt} className='cardImg'/>
                </Card>
                <CardModal
                    img={this.props.img}
                    alt={this.props.alt}
                    key={this.props.homeTeamId}
                    homeTeam={this.props.homeTeam}
                    awayTeam={this.props.awayTeam}
                    date={this.props.date}
                    time={this.props.time}
                    round={this.props.round}
                    homeTeamId={this.props.homeTeamId}
                    awayTeamId={this.props.awayTeamId}
                    closeModal={this.closeModal}
                    open={this.state.isOpen}
                />
            </>
        )
    }
}

