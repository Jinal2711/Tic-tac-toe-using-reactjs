import React from 'react';
import { Popup } from "reactjs-popup";

export default function PopupBox() {
  return (
    <div>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    </div>
  )
}
