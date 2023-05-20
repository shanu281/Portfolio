import React, { useState } from "react";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import {ImCross} from "react-icons/im"

const NavMobile = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // //Framer motion variants
  // const circleVariants = {
  //   hidden: {
  //     scale: 0,
  //   },
  //   visible: {
  //     scale: 180,
  //     transition: {
  //       type: "spting",
  //       stiffness: 160,
  //       damping: 60,
  //     },
  //   },
  // };
  // const ulVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delay: 0.1,
  //     },
  //   },
  // };
  // return (
  //   <nav className="relative">
  //     {/* Menu Icons  */}
  //     <div className="cursor-pointer text-white ">
  //       <HiMenuAlt3 className="w-8 h-8" />
  //     </div>
  //     {/* Circle  */}
  //     <motion.div
  //       variants={circleVariants}
  //       initial="hidden"
  //       animate={isOpen ? "visible" : "hidden"}
  //       className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
  //     ></motion.div>
  //     {/* Menu List  */}
  //     <motion.ul
  //      variants={ulVariants}
  //      initial="hidden"
  //      animate={isOpen ? 'visible' : ""}
  //      className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`} 
  //     >
  //       {/* Close icon  */}
  //       <div onClick={setIsOpen(false)}
  //       className="cursor-pointer asolute top-8 right-8"
  //       >
  //         < ImCross className= "w-8 h-8" />
  //       </div>
  //     </motion.ul>
  //   </nav>
  // );
};

export default NavMobile;
