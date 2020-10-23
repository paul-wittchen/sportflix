import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import '../stylesheets/header.scss';
import leagues from'../javascript/typed';
import Typed from 'typed.js';

export default class Header extends Component {

    componentDidMount() {
        const options = {
          strings: leagues,
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
          cursorChar: "|",
        };
        this.typed = new Typed(this.words, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return(
            <div className='header'>
                <img className='headerLogo' src={require('../img/sportflix-logo.png')} alt="Logo"/>
                <Jumbotron>
                    <p className='jumboTitleTyped'>
                        <span style={{ whiteSpace: "pre" }} ref={(words) => {this.words = words;}}/>
                    </p>
                    <p className='jumboDesc'>
                        Browse through different sports and see all details of the event! <br/>
                        See where, when and how you can watch the game! <br/> <br/>
                        Enjoy your game!
                    </p>
                    <Row className='leagues justify-content-center'>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/cl.png')} alt=""/>
                        </Col>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/ligue1.png')} alt=""/>
                        </Col>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/mls.png')} alt=""/>
                        </Col>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/bl.png')} alt=""/>
                        </Col>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/3bl.png')} alt=""/>
                        </Col>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/nfl.png')} alt=""/>
                        </Col>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/lig.png')} alt=""/>
                        </Col>
                        <Col lg={1} md={1} sm={1}>
                            <img className='jumboLogo' src={require('../img/ere.png')} alt=""/>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}
