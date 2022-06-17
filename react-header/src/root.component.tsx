import React, { useState, useEffect } from "react";
  
export default function Root(props) {

let simpsons = [];
let [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserData();
    }, []);
  
    var gitHubUrl = `https://thesimpsonsquoteapi.glitch.me/quotes?count=10&character`;
  
    const getUserData = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        if (jsonData && jsonData.message !== "Not Found") {
            jsonData.forEach(element => {
              simpsons.push(element);
            }
            );
            setUserData(simpsons);
        }
    };

    return (
      <div>
        <h1>Listar simpsons</h1>
        {userData.map(element => (
          <li key={element.character}>
            <h2>
              <strong>Nombre: </strong>
              {element.character}
            </h2>
            <img src={element.image}>
            </img>
          </li>
        ))}
      </div>
    );
}

 
