import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
function App() {
  return (
    <div className='App'>
       <IdCard 
     lastName='Lomu'
     firtName='Jonah'
     gender='Male'
     height={196}
     birth={"1975-05-12"}
     picture='./jonahLomu.jpeg'/>

     <IdCard
     lastName='Mat'
     firstName='VS'
     gender='male'
     height={184.5}
     birth={"1789-07-14"}
     picture=''
    />
    <Greetings lang="sw" children=' Mat'/>
    <Greetings lang="fr" chidren=' Jonah'/>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
</div>
  )
}

export default App;
