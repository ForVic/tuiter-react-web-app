import React, { useState } from "react";
import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { BiBold, BiItalic } from "react-icons/bi";
import { createTuitThunk } from "./services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const tuitClickHandler = () => {
    console.log(currentUser);
    if (currentUser != null) {
      const newTuit = {
        tuit: whatsHappening,
        handle: currentUser.username,
        image: "https://imageio.forbes.com/specials-images/imageserve/6425eb0dbe1e3271c38ad239/0x0.jpg?format=jpg&width=1200"
      };
      dispatch(createTuitThunk(newTuit));
      setWhatsHappening("");

      console.log(whatsHappening);
    } else {
      alert("Login to tuit!");
    }
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img
          src={require("./who-to-follow-list/images/nasa.png")}
          width={60}
          alt=""
        />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <AiOutlineFileGif className="me-3" />
            <MdFormatListBulleted className="me-3" />
            <BsEmojiSmile className="me-3" />
            <TbCalendarStats className="me-3" />
            <HiOutlineLocationMarker className="me-3" />
            <BiBold className="me-3" />
            <BiItalic className="me-3" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
