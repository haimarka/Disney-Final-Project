import React from "react";
import Styles from "../CSS/Styles.module.css";

export default function Accessibilty({setAccessibilyList,accessibilyList,setHighlighting,highlighting,setFontIncrease,fontIncrease,setColorReversal,colorReversal,}) {
  return (
    <div>
        <img
          className={Styles.accessibilty}
          onClick={() => {
            setAccessibilyList(!accessibilyList);
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gnome-preferences-desktop-accessibility2.svg/800px-Gnome-preferences-desktop-accessibility2.svg.png"
          alt="accessibility"
          title="accessibility"
        />
        <div
          className={Styles.accessibiltyList}
          style={{ display: accessibilyList ? "none" : "block" }}
        >
          <div>
            <img
              width="30px"
              height="30px"
              onClick={() => {
                setColorReversal(!colorReversal);
              }}
              src={
                colorReversal
                  ? "https://cdn-icons.flaticon.com/png/512/3417/premium/3417806.png?token=exp=1643195019~hmac=a1c544c44f94ae3483ebb640417fc4dd"
                  : "https://cdn-icons.flaticon.com/png/512/3417/premium/3417815.png?token=exp=1643221895~hmac=790391e2c72efbd387d33c623f65e0b8"
              }
              alt="font increse"
            />
            change colors
          </div>
          <div>
            <img
              width="30px"
              height="30px"
              onClick={() => {
                setFontIncrease(!fontIncrease);
              }}
              src={
                fontIncrease
                  ? "https://icons.iconarchive.com/icons/icons8/ios7/512/Editing-Decrease-Font-icon.png"
                  : "https://icon-library.com/images/font-size-icon/font-size-icon-6.jpg"
              }
              alt="font increse"
            />
            increse font size
          </div>
          <div>
            <img
              width="30px"
              height="30px"
              onClick={() => {
                setHighlighting(!highlighting);
              }}
              src={
                highlighting
                  ? "https://cdn-icons-png.flaticon.com/512/389/389203.png"
                  : "https://cdn-icons-png.flaticon.com/512/389/389304.png"
              }
              alt="font increse"
            />
            high lighting links
          </div>
        </div>
    </div>
  );
}

