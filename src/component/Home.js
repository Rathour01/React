import React from "react";
import Tech from './Tech';
import "../design/home.css";

function Home()
{


  const data =[
    {id:1, name : 'Discover Software-Driven Innovation' , src : require('../image/img1.webp'), likeC : 0, dislikeC : 0},
    {id:2, name : 'APEX Data Storage Services', src :  require('../image/img2.webp') , likeC : 2, dislikeC : 0},
    {id:3, name : 'APEX Cloud Services', src :  require('../image/img3.webp') , likeC : 0, dislikeC : 0},
    {id:4, name : 'PowerStore', src :  require('../image/img4.webp') , likeC : 0, dislikeC : 0},
  ];

  return (
    <div>
      <h2>DELL Home Page</h2> 
      <div className="main">        
        {data.map(d =>(      
            <Tech data={d} key={d.id}/>           
        ))}
      </div>
    </div>
  );
}
export default Home;



