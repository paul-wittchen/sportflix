import React, { Component } from 'react';
import { Row, Spinner, Col } from 'react-bootstrap';
import GenerateCard from './generateCard';
import '../stylesheets/liga.scss';

export default class Liga extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            scroll: 1,
            data: []
        }
    }

    componentDidMount(){
        fetch(this.props.url)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoading: false,
                    data: result.events
                })
            })
    }

    plusOne = () => { this.setState({ scroll: this.state.scroll + 1 })}
    minusOne = () => { this.setState({ scroll: this.state.scroll - 1 })}

    render() {
        if (this.state.isLoading) {
            return(
                <Spinner animation="grow" variant="light" />
            )
        } else {
            if (this.state.scroll === 1) {
                return(
                    <div className='leagueContainer'>
                        <Row>
                            <Col md={4}><p className='leagueTitle'>{this.state.data[0].strLeague}</p></Col>
                            <Col md={{ span: 4, offset: 4 }} className='arrows'>
                                <i className="fas fa-chevron-right fa-2x" onClick={this.plusOne}></i>
                                <i className="fas fa-chevron-left fa-2x"></i>
                            </Col>
                        </Row>
                        <Row lg={6} md={4} sm={2} className='leagueCards'>
                            {this.state.data.slice(0,6).map(item => (
                                <GenerateCard
                                    img={item.strThumb}
                                    key={item.strThumb}
                                    alt={item.strEvent}
                                    homeTeam={item.strHomeTeam}
                                    awayTeam={item.strAwayTeam}
                                    date={item.dateEvent}
                                    time={item.strTime}
                                    comp={item.strLeague}
                                    round={item.intRound}
                                    homeTeamId={item.idHomeTeam}
                                    awayTeamId={item.idAwayTeam}
                                />
                            ))}
                        </Row>
                    </div>
                )
            } else if (this.state.scroll === 2) {
                return(
                    <div className='leagueContainer'>
                        <Row className='test1'>
                            <Col lg={4}><p className='leagueTitle'>{this.state.data[0].strLeague}</p></Col>
                            <Col lg={{ span: 4, offset: 4 }}>
                                <i className="fas fa-chevron-right fa-2x" onClick={this.plusOne}></i>
                                <i className="fas fa-chevron-left fa-2x" onClick={this.minusOne}></i>
                            </Col>
                        </Row>
                        <Row lg={6} md={4} sm={2} className='leagueCards'>
                            {this.state.data.slice(7,13).map(item => (
                                <GenerateCard
                                    img={item.strThumb}
                                    key={item.strThumb}
                                    alt={item.strEvent}
                                    homeTeam={item.strHomeTeam}
                                    awayTeam={item.strAwayTeam}
                                    date={item.dateEvent}
                                    time={item.strTime}
                                    comp={item.strLeague}
                                    round={item.intRound}
                                    homeTeamId={item.idHomeTeam}
                                    awayTeamId={item.idAwayTeam}
                                />
                            ))}
                        </Row>
                    </div>
                )
            } else {
                return(
                    <div className='leagueContainer'>
                        <Row>
                            <Col md={4}><p className='leagueTitle'>{this.state.data[0].strLeague}</p></Col>
                            <Col md={{ span: 4, offset: 4 }}>
                                <i className="fas fa-chevron-right fa-2x"></i>
                                <i className="fas fa-chevron-left fa-2x" onClick={this.minusOne}></i>
                            </Col>
                        </Row>
                        <Row lg={6} md={4} sm={2} className='leagueCards'>
                            {this.state.data.slice(14,20).map(item => (
                                <GenerateCard
                                    img={item.strThumb}
                                    key={item.strThumb}
                                    alt={item.strEvent}
                                    homeTeam={item.strHomeTeam}
                                    awayTeam={item.strAwayTeam}
                                    date={item.dateEvent}
                                    time={item.strTime}
                                    comp={item.strLeague}
                                    round={item.intRound}
                                    homeTeamId={item.idHomeTeam}
                                    awayTeamId={item.idAwayTeam}
                                />
                            ))}
                        </Row>
                    </div>
                )
            }
        }
    }
}