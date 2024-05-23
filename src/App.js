import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CuisineMenu from './CuisineMenu';
import { Cuisine_Data,Example_Data } from './data';
import TabButton from './TabButton';
import { useState } from 'react';


function App() {
  const [selectedItem,setSelectedItem]=useState();
  const handleSelect=(selectItem)=>{
setSelectedItem(selectItem);

  }
  return (
    <div className='App'>
      <header>  <Header /></header>
<main>
  <section className='cuisineMenu'>
    <ul>
  {/* <CuisineMenu {...Cuisine_Data[0]}/>
  <CuisineMenu {...Cuisine_Data[1]}/>
  <CuisineMenu {...Cuisine_Data[2]}/>
  <CuisineMenu {...Cuisine_Data[3]}/> */}
  {Cuisine_Data.map((cuisine_item)=><CuisineMenu {...cuisine_item} />)}
  </ul>
  </section>
  <section className='examples'>
  
    <menu>
   
      <TabButton onSelect={()=>{handleSelect("Italian_Indulgence")}} isSelected={selectedItem==="Italian_Indulgence"}>Italian Indulgence</TabButton>
      <TabButton onSelect={()=>{handleSelect("Asian_Fusion")}} isSelected={selectedItem==="Asian_Fusion"}>Asian Fusion</TabButton>
      <TabButton onSelect={()=>{handleSelect("Mediterranean_Marvels")}} isSelected={selectedItem==="Mediterranean_Marvels"}>Mediterranean Marvels</TabButton>

      <TabButton onSelect={()=>{handleSelect("American_Classics")}} isSelected={selectedItem==="American_Classics"}>American Classics</TabButton>

    
    </menu>
    {!selectedItem?   <div className='example-data'>Please Select an Item</div>:
    <div className='example-data'>
      <p><h4>{Example_Data[selectedItem].title}</h4></p>
      <p>{Example_Data[selectedItem].items.map((item)=><li>{item}</li>)}</p>
    </div>
}
  </section>

</main>
    </div>
  );
}

export default App;
