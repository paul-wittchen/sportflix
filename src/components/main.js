import React, {Component} from 'react';
import '../stylesheets/navbar.scss';
import '../stylesheets/main.scss';
import Header from './header';
import Liga from './liga';

export default class Main extends Component {
    render() {
        return(
            <div className='main'>
                <Header/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4331'/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4480'/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4334'/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4346'/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4391'/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4337'/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4339'/>
                <Liga url='https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4639'/>
            </div>
        )
    }
}

