import React from 'react'
import Img from "../../assets/img.png";
import Attach from "../../assets/attach.png";

const Input = () => {
  return (
    <div className="input2">
    <input
      type="text"
      placeholder="Type something..."
    />
    <div className="send2">
      <img src={Attach} alt="" />
      <input
        type="file"
        style={{ display: "none" }}
        id="file"
      />
      <label htmlFor="file">
        <img src={Img} alt="" />
      </label>
      <button>Send</button>
    </div>
  </div>
  )
}

export default Input