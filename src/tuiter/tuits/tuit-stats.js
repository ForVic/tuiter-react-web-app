import { AiFillHeart } from 'react-icons/ai';
import {FiShare, FiHeart} from 'react-icons/fi'
import {FaRegComments, FaRetweet} from 'react-icons/fa'

const TuitStats = ({tuit}) => {
  const stats = tuit
  return (
    <li className="list-group-item">
      <div className="row mr-3">
        <div className="col-3">
        <FaRegComments/>{" " + stats.replies}
        </div>
        <div className="col-3">
          <FaRetweet/>{" " + stats.retuits}
        </div>
        <div className="col-3">
          {
           tuit.liked === true ? <AiFillHeart/> : <FiHeart/> 
          }
          {" " + stats.likes}
        </div>
        <div className="col-3">
          <FiShare/>
        </div>
      </div>
    </li>
  );
};

export default TuitStats;
