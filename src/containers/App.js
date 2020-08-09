import React, { Component } from 'react'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import Searchbox from '../components/Searchbox'
import ErrorBoudry from '../components/ErrorBoudry'
import './App.css'
 

class  App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchField:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(res => {
            res.json()
            .then(users=>this.setState({robots:users}))
        })
    }

    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
            
            
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1 className='tc'>Loading...</h1>
        }else{
            return (
                <div className = 'tc'>
                    <h1 className='f2'>Robo Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}></Searchbox>
                    <Scroll>
                        <ErrorBoudry>
                        <CardList robots={filteredRobots}></CardList>
                        </ErrorBoudry>
                   
                    </Scroll>
                     
                </div>
               
            )     
        }
        
    }
   
}

export default App