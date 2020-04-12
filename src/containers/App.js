import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import TabList from '../components/TabList';
import Home from '../components/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart)

// import {setSearchField} from '../acions'
// const mapStateToProps = state => {
//     return{
//         searchfield: state.
//     }
// }

class App extends Component {
    // we have App component that have 2 state
    // which is robots & searchfield
    // constructor to declare the state
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        //fetch data from Online REST API 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.username.toLowerCase().includes(searchfield.toLowerCase())
        })
        //clourse
        return (!robots.length) ? <h1 style={{ height: 'vh' }} className=''>LOADING</h1> :
            (<div className='contrainer '>

                <div className='Patchy'>
                    <h3 >Robotfriends</h3>
                </div>

                <TabList className="">
                    <div label="Home" className="tab-content">
                        <div className=' ' >
                            <Home />
                        </div>
                    </div>
                    <div label="Robots" className="tab-content" >

                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll >
                            <CardList robots={filteredRobots} />
                        </Scroll>

                    </div>

                </TabList>

                <footer
                    className='myfooter center'><hr></hr>
                    {<FontAwesomeIcon icon={faHeart} />} | Nuch Phromsorn © {(new Date().getFullYear())}
                </footer>
            </div>)
    }
}

export default App;