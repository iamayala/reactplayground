import React, { useState, useEffect, useContext } from 'react'
import { MoodContext } from './App';
import './App.css';

// "https://jsonplaceholder.typicode.com/posts/1/comments"

export default function JediTraining({ props }) {


  const mood = useContext(MoodContext)

  const [ list, setList ] = useState([])

  useEffect(() => {
    fetchFromApi()
  }, [])
  

  const addComponent = () => {
    setList([...list, {id: list.length + 1}])
  }

  const deleteComponent = (item) => {
    let newList = list
    let arr = newList.filter(x => x.id !== item.id)
    setList(arr)
  }

  const fetchFromApi = async() => {
    try {
      const value = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
      const response = await value.json()
      console.log(response);
      setList(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="JediStyling">
      <div className="JediDiv">
        <button
        onClick={() => addComponent()}
        className="JediButton">Add Component</button>


        <div 
            onClick={() => alert({mood})}
            className="JediComponent">
              <h3 style={{ textTransform: "capitalize" }}>{mood}</h3>
        </div>

        


        {/* { list.map((item, index) => {
          return (
            <div 
            key={index}
            onClick={() => deleteComponent(item)}
            className="JediComponent">
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </div>
          )
        })} */}
        
      </div>
    </div>
  )
}
