import React from "react";
import './index.css';

const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row mr-3">
     <div className="col-3">
       <img className="rounded-circle" height={48} width={48} src={require(`./images/${who.avatarIcon}`)}/>
     </div>
     <div className="col-7">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;