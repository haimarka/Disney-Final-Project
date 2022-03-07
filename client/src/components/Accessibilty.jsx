import React from "react";
import Styles from "../CSS/Styles.module.css";

export default function Accessibilty({ accessibilty, setAccessibility }) {
  const { colorReversal, fontIncrease, highlighting, hidden } = accessibilty;

  const setHidden = () => setAccessibility({...accessibilty, hidden: !hidden });
  const setFontIncrease = () => setAccessibility({...accessibilty, fontIncrease: !fontIncrease });
  const setHighlighting = () => setAccessibility({...accessibilty, highlighting: !highlighting });
  const setColorReversal = () => setAccessibility({...accessibilty, colorReversal: !colorReversal });

  return (
    <div>
        <img
          className={Styles.accessibilty}
          onClick={setHidden}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gnome-preferences-desktop-accessibility2.svg/800px-Gnome-preferences-desktop-accessibility2.svg.png"
          alt="accessibility"
          title="accessibility"
        />
        <div
          className={Styles.accessibiltyList}
          style={{ display: hidden ? "none" : "block" }}
        >
          <div>
            <img
              className={Styles.accessibiltyItem}
              onClick={setColorReversal}
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
              className={Styles.accessibiltyItem}
              onClick={setFontIncrease}
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
              className={Styles.accessibiltyItem}
              onClick={setHighlighting}
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

