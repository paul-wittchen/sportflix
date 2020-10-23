import React, { Component } from 'react';
import { Modal, Row, Col, Card } from 'react-bootstrap';
import HomeTeamMatches from './homeTeamMatches';
import AwayTeamMatches from './awayTeamMatches';

export default class CardModal extends Component {
    render() {
        return(
            <Modal size='lg' show={this.props.open} onHide={this.props.closeModal} key={this.props.homeTeamId}>
                <Modal.Body>
                    <img className='modalImage' src={this.props.img} alt=""/>
                    <p className='modalTitle'>{this.props.homeTeam} - {this.props.awayTeam}</p>
                    <p className='modalRound'>Matchday: {this.props.round}</p>
                    <Row>
                        <Col>
                            <Card.Text className='modalDate'>
                                <i className="far fa-calendar-alt"></i> {this.props.date.slice(8,10)}.{this.props.date.slice(5,7)}.{this.props.date.slice(0,4)}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className='modalTime'>                            
                                <i className="far fa-clock"></i> {this.props.time.slice(0, 5)} GMT
                            </Card.Text>
                        </Col>
                    </Row>
                    
                    <div className='modalMatchesContainer'>
                        <p className='modalLastMatchesTitle'>Last 5 matches</p>
                        <Row>
                            <Col>
                                <HomeTeamMatches teamId={this.props.homeTeamId}/>
                            </Col>
                            <Col>
                                <AwayTeamMatches teamId={this.props.awayTeamId}/>
                            </Col>
                        </Row>
                    </div>
                    
                    <Row className='modalLinks'>
                        <Col>
                            <p className='modalLinksDesc'>Watch on</p>
                            <a target='_blank' href="https://www.sky.de/sport" rel="noopener noreferrer">
                                <img className='modalActions' src="https://yt3.ggpht.com/a/AATXAJxfZ0OI-luNxDo8tUZzUfSKD6lbfMd4KLHx7uyQUw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                            </a>
                        </Col>
                        <Col>
                            <p className='modalLinksDesc'>Watch on</p>
                            <a target='_blank' href="https://www.dazn.com/" rel="noopener noreferrer">
                                <img className='modalActions' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DAZN_logo.svg/1200px-DAZN_logo.svg.png" alt=""/>
                            </a>
                        </Col>
                        <Col>
                            <p className='modalLinksDesc'>Bet on</p>
                            <a target='_blank' href="https://sports.tipico.de/de" rel="noopener noreferrer">
                                <img className='modalActions' src="https://s3-eu-west-1.amazonaws.com/kittyglitter-production/brand/squarelogo/tipico/77838310881d688ad96b84d9d5c7de88.jpeg" alt=""/>
                            </a>
                        </Col>
                    </Row>
                    <div className='modalBtnContainer'>
                        <button className='modalClose' onClick={this.props.closeModal}>Close</button>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}