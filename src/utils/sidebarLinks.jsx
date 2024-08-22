import {HiOutlinePencilAlt} from "react-icons/hi";
import {AiOutlineHome} from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";

const links = [
    {
        text: "home",
        path: "./",
        icon: <AiOutlineHome/>

    },
    {
        text: "blog", 
        path: "blog", 
        icon: <HiOutlinePencilAlt/>
    },
    {
        text: "projects", 
        path: "projects", 
        icon: <FaProjectDiagram />
    },

];

export default links;