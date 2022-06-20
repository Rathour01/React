import React, { useState } from "react";
import likeimg from '../image/like.jfif';
import dislikeimg from '../image/dislike.jfif';
import '../design/Tech.css';

const Tech = (props) =>
{
  const[like, setLike] = useState(props.data.likeC);
  const[dislike, setDislike] = useState(props.data.dislikeC);

  const changeLike = () => {
    setLike(like +1);
  };

  const changeDisLike = () => {
    setDislike(dislike +1);
  };

  return (
    <div className="row" >
      <img src ={props.data.src} alt="techimg" height = {300} width = {430}/>
      <h3>{props.data.id}. {props.data.name } </h3>
      <div className="likes">
        <img src={likeimg} onClick={changeLike} alt="imgg" className="imgg" />
        {like}
        <img src={dislikeimg} onClick={changeDisLike} alt="imgg" className="imgg"/>
        {dislike}
      </div>
    </div>
  );

}

export default Tech;


/* <div className="row" key={index}> () => setDislike(dislike+1)
                  <img src={d.src} alt='imag' height={300} width= {430}/>
                  <h3>{d.id}. {d.name } </h3>
                  <div className="li">
                    {/* <img src={like} alt="imgg" className="imgg" onClick={() => setLike(d.like+1)}>Like {d.like}</img> */
                    // <button onClick={()=>setLike((parseInt(d.like)+1))}>Like {like}</button
                    // <button onClick={()=>setDislike(dislike+1)}>Dislike {dislike}</button>
                    // {/* <img src={dislike} alt="imgg" className="imgg"/> */}
                  // </div>
              // </div> */}