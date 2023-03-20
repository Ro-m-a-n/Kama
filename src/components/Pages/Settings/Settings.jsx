import "./Settings.css";
import { useColorMode } from "theme-ui";
import { motion } from "framer-motion";
import { useState } from "react";
/**@jsxImportSource theme-ui */
const Settings = (props) => {
  const [ColorMode, setColorMode] = useColorMode();
  const [themesPositionScaleLight, setThemesPositionScaleLight] = useState(1);
  const [themesPositionScaleGreen, setThemesPositionScaleGreen] = useState(1.2);
  // const [themesPosition, setThemesPosition] = useState("-20%");
  const [themesBorderColorLight, setThemesBorderColorLight] =
    useState("#b8f7c4");
  const [themesBorderColorGreen, setThemesBorderColorGreen] = useState("green");

  return (
    <div className="settings_wrap" sx={{ bg: "primary" }}>
      <h3>Themes</h3>
      <div className="themes">
        <motion.div
          className="themes_light"
          onClick={() => {
            return (
              setColorMode("green"),
              //  setThemesPosition("-20%"),
              setThemesBorderColorLight("green"),
              setThemesBorderColorGreen("#b8f7c4"),
              setThemesPositionScaleLight(1.2),
              setThemesPositionScaleGreen(1)
            );
          }}
          whileHover={{ scale: 1.2, duration: 0.5 }}
          animate={{
            // x: themesPosition,
            scale: themesPositionScaleLight,
            borderColor: themesBorderColorLight,
          }}
        >
          <div className="themes_light__up"></div>
          <div className="themes_light__down"></div>
        </motion.div>
        <motion.div
          className="themes_green"
          onClick={() => {
            return (
              setColorMode("light"),
              //  setThemesPosition("20%"),
              setThemesBorderColorLight("#b8f7c4"),
              setThemesBorderColorGreen("green"),
              setThemesPositionScaleLight(1),
              setThemesPositionScaleGreen(1.2)
            );
          }}
          whileHover={{ scale: 1.2, duration: 0.5 }}
          animate={{
            // x: themesPosition,
            scale: themesPositionScaleGreen,
            borderColor: themesBorderColorGreen,
          }}
        >
          <div className="themes_green__up"></div>
          <div className="themes_green__down"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
