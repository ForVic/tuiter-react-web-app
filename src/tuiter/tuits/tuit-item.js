import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import { RxCross2 } from "react-icons/rx";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <div>
            <img
              width={50}
              height={50}
              className="float-end rounded-circle shadow"
              src={`${tuit.image}`}
              alt=""
            />
          </div>
        </div>
        <div className="col-10">
          @{tuit.handle} . {new Date(tuit.time).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}
          <div>{tuit.tuit}</div>
        </div>
        <div className="col-1">
          <RxCross2 onClick={() => deleteTuitHandler(tuit._id)} />
        </div>
      </div>
      <div className="row">
        <TuitStats tuit={tuit} />
      </div>
    </li>
  );
};
export default TuitItem;
