import { AiFillHeart } from 'react-icons/ai';
import {FiShare, FiHeart} from 'react-icons/fi'
import {FaRegComments, FaRetweet} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { updateTuit } from '../reducers/tuits-reducer';

const TuitStats = ({tuit}) => {

  const dispatch = useDispatch();
  const likeChangeHandler = (id, visible) => {
    let incr = visible ? 1 : -1
    dispatch(updateTuit({...tuit, ...{likes: tuit.likes+incr, liked: visible}}, id));
  };
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
           tuit.liked === true ? <AiFillHeart onClick={() => likeChangeHandler(tuit._id, false)}/> : <FiHeart onClick={() => likeChangeHandler(tuit._id, true)}/> 
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
