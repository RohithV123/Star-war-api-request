import './App.css';
// import Item from './MyItem';
import React from 'react';
import { useState } from 'react';


class StarWars extends React.Component{
constructor(){
  super()
  this.state={
    loadedCharacter:false,
    name:null,
    height:null,
    homeworld:null,

    films:[],

  }
}

  getNewCharacter(){
    console.log("Its working")
     const randNum=Math.round(Math.random()*82)
    const url=`https://swapi.dev/api/people/${randNum}/`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        name:data.name,
        height:data.height,
        homeworld:data.homeworld,
        films:data.films,
        loadedCharacter:true,
        
      
  
      })
      
    })
    
  }
  render(){
    return(
      <div>
      {
        this.state.loadedCharacter &&

      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.height} cm</p>
        <p><a href={this.state.homeworld}>Homeworld</a>
</p>
        <ul>
          {
          this.state.films.map(film=>
             <li>{film}</li>
          )
  }
        </ul>
        
      </div>
      }
      <button type="button" className="btn" onClick={()=>this.getNewCharacter()} >Randomize Character</button>
      </div>
    )
  }
}
// function Somebutton(){
// const [count,setCount]=useState(0)

//   function Action(){
//     setCount(count+1)
//   }
//   return(
    

//     // <button onClick={Action} >clicked {count} times</button>
    
//   )
// }





function MyButton(){
  return(
    <button  onClick={clickMe}>I'm a button</button>

  )
}

function clickMe(){
  console.log("I clicked button")
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Item name="Rohith" /> */}
       {/* <Item name="Namitha"/> */}
       {/* <Item name="Mohitha"/> */}

<StarWars/>
{/* <MyButton/> */}
  {/* <Somebutton/>
  <Somebutton/> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
