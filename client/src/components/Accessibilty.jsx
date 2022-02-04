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
                  ? "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-colors-photography-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                  : "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/344/external-colors-photography-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
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

