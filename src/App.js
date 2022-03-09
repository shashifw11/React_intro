import logo from './logo.svg';
import './App.css';
import React from "react" ;

function App() { 
   const items = [{heading : "Mobile Operating System",list1 : "Android" , list2 : "Blackberry" , list3 : "iPhone" , list4 : "windows"},
                  {heading : "Mobile Manufactures",list1 : "Samsung" , list2 : "HTC" , list3 : "Micromax" , list4 : "Apple"}] ;
  return (
    <div className="App">
       {items.map((e)=>{
         return (
              <ListItem heading = {e.heading} list1 = {e.list1} list2 = {e.list2} list3 = {e.list3} list4 = {e.list4}/>
              )
       })}
    </div> 
    );  
} 
function ListItem({heading,list1,list2,list3,list4}){ 
  return(
  <div>
   <h1>{heading}</h1> 
    <ul>
      <li>{list1}</li>
      <li>{list2}</li>
      <li>{list3}</li>
      <li>{list4}</li>
    </ul>
    </div>
   )
}

export default App;
