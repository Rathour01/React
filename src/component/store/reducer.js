
const tech =[
    {id:1, name : 'Discover Software-Driven Innovation' , src : require('../../image/img1.webp'), likeC : 0, dislikeC : 0},
    {id:2, name : 'APEX Data Storage Services', src :  require('../../image/img2.webp') , likeC : 2, dislikeC : 0},
    {id:3, name : 'APEX Cloud Services', src :  require('../../image/img3.webp') , likeC : 0, dislikeC : 0},
    {id:4, name : 'PowerStore', src :  require('../../image/img4.webp') , likeC : 0, dislikeC : 0},
  ];

const CountReducer = (state = tech,
    action={} )=>{
        switch(action.type){
          case "like" :     
            return state.map(d =>{
                if(d.id === action.obj.id)
                    return {...action.obj};
                return {...d};
            });
        
          case "dislike" :
            return state.map(d1 =>{
                if(d1.id === action.obj.id)
                    return {...action.obj};
                return {...d1};
            });
 
          default:
            return state;
        }
    };

    export default CountReducer;