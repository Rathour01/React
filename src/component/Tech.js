import React from "react";
import likeimg from '../image/like.jfif';
import dislikeimg from '../image/dislike.jfif';
import '../design/Tech.css';
import {useDispatch} from "react-redux";

const Tech = (props) =>
{
  const dispatch =useDispatch();
  const handleLike = () => {
    dispatch({type : 'like',  
              obj: {...props.data, likeC:props.data.likeC+1}});
  };
  const handleDislike = () => {
    dispatch({type : 'dislike', 
              obj: {...props.data, dislikeC:props.data.dislikeC+1}});
  };

  return (
    
    <div className="row" >
      <img src ={props.data.src} alt="techimg" height = {300} width = {430}/>
      <h3>{props.data.id}. {props.data.name } </h3>
      <div className="likes">
        <img src={likeimg} onClick={handleLike} alt="imgg" className="imgg" />
        {props.data.likeC}
        <img src={dislikeimg} onClick={handleDislike} alt="imgg" className="imgg"/>
        {props.data.dislikeC}
      </div>
    </div>
  )
};


export default Tech;