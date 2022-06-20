import React from "react";
import Tech from './Tech';
import "../design/home.css";
import { useSelector } from "react-redux/es/exports";


const Home = () =>
{
  const data= useSelector((state) => {
    return state;
  })

  return (
    <div>
      <h2>DELL Home Page</h2> 
      <div className="main">        
        {data.map(d =>(      
            <Tech data={d}
                  key={d.id}/>           
        ))}
      </div>
    </div>
  );
}


export default Home;



