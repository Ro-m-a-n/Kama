import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import HeaderContainer from "./../../Header/HeaderContainer";
const AnimatedSquare = () => {
  return (
    <nav className="nav_grid__wrap">
      <motion.div
        className="grid_area__a flex_center"
        whileHover={{ scale: 1.1, backgroundColor: "#1f3847" }}
        whileTap={{ scale: 0.9, backgroundColor: "#709dc5" }}
        transition={{ duration: 0.5 }}
      >
        <NavLink to="/profile" className='NavbarLink'>Profile</NavLink>
      </motion.div>

      <motion.div
        className="grid_area__e "
        whileHover={{ scale: 1.1, backgroundColor: "#686fa5" }}
        whileTap={{ scale: 0.9, backgroundColor: "#789fca" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="grid_area__b "
        whileHover={{ scale: 1.1, backgroundColor: "#565d91" }}
        whileTap={{ scale: 0.9, backgroundColor: "#80a1cd" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="grid_area__d"
        whileHover={{ scale: 1.1, backgroundColor: "#464f7d" }}
        whileTap={{ scale: 0.9, backgroundColor: "#88a2d0" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="grid_area__f flex_center"
        whileHover={{ scale: 1.1, backgroundColor: "#38436b" }}
        whileTap={{ scale: 0.9, backgroundColor: "#90a3d1" }}
        transition={{ duration: 0.5 }}
      >
        <NavLink to="/news" className='NavbarLink'>News</NavLink>
      </motion.div>
      <motion.div
        className="grid_area__g flex_center"
        whileHover={{ scale: 1.1, backgroundColor: "#2b3b5b" }}
        whileTap={{ scale: 0.9, backgroundColor: "#98a5d3" }}
        transition={{ duration: 0.5 }}
      >
        <NavLink to="/messages" className='NavbarLink'>Messages</NavLink>
      </motion.div>
      <motion.div
        className="grid_area__k flex_center"
        whileHover={{ scale: 1.1, backgroundColor: "#22374e" }}
        whileTap={{ scale: 0.9, backgroundColor: "#a0a7d6" }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <NavLink to="/users" className='NavbarLink'>Users</NavLink>
      </motion.div>
      <motion.div
        className="grid_area__l"
        whileHover={{ scale: 1.1, backgroundColor: "#1f3847" }}
        whileTap={{ scale: 0.9, backgroundColor: "#b5aedb" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="grid_area__t"
        whileHover={{ scale: 1.1, backgroundColor: "#203d47" }}
        whileTap={{ scale: 0.9, backgroundColor: "#c1b3dd" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="grid_area__r"
        whileHover={{ scale: 1.1, backgroundColor: "#26474e" }}
        whileTap={{ scale: 0.9, backgroundColor: "#ddbfda" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="grid_area__z flex_center"
        whileHover={{ scale: 1.1, backgroundColor: "#2e5559" }}
        whileTap={{ scale: 0.9, backgroundColor: "#e5c1d0" }}
        transition={{ duration: 0.5 }}
      >
        <NavLink to="/settings" className='NavbarLink'>Settings</NavLink>
      </motion.div>
      <motion.div
        className="grid_area__i flex_center"
        whileHover={{ scale: 1.02, backgroundColor: "#396667" }}
        whileTap={{ scale: 0.9, backgroundColor: "#dbac9e" }}
        transition={{ duration: 0.5 }}
      >
        <HeaderContainer />
      </motion.div>
    </nav>
  );
};
export default AnimatedSquare;
