import "./Settings.css";
import { useColorMode } from "theme-ui";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


/**@jsxImportSource theme-ui */
const Settings = (props) => {
  const [ColorMode, setColorMode] = useColorMode("green");
  const [themesPositionScaleLight, setThemesPositionScaleLight] = useState();
  const [themesPositionScaleGreen, setThemesPositionScaleGreen] = useState();
  const [themesBorderColorLight, setThemesBorderColorLight] =
    useState("#b8f7c4");
  const [themesBorderColorGreen, setThemesBorderColorGreen] = useState("green");

  useEffect(() => {
    if (ColorMode === "green") {
      return (
        setThemesPositionScaleLight(1),
        setThemesPositionScaleGreen(1.2),
        setThemesBorderColorLight("#b8f7c4"),
        setThemesBorderColorGreen("green")
      );
    } else {
      return (
        setThemesPositionScaleLight(1.2),
        setThemesPositionScaleGreen(1),
        setThemesBorderColorLight("green"),
        setThemesBorderColorGreen("#b8f7c4")
      );
    }
  }, [ColorMode]);

  return (
    <div className="settings_wrap" sx={{ bg: "primary" }}>
      <h3>Themes</h3>
      <div className="themes">
        <motion.div
          className="themes_light"
          onClick={() => setColorMode("light")}
          whileHover={{ scale: 1.2, duration: 0.5 }}
          animate={{
            scale: themesPositionScaleLight,
            borderColor: themesBorderColorLight,
          }}
        >
          <div className="themes_light__up"></div>
          <div className="themes_light__down"></div>
        </motion.div>
        <motion.div
          className="themes_green"
          onClick={() => setColorMode("green")}
          whileHover={{ scale: 1.2, duration: 0.5 }}
          animate={{
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
