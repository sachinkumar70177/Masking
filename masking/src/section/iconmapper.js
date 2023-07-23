import styled from "./icon.module.css";
import { FaInfoCircle, FaCheckCircle, FaUsers, FaAt, FaVirus, FaSun, FaComments, FaDollarSign, FaStar, FaFlask, FaBiohazard, FaGlobe, FaExternalLinkAlt, FaUserMd, FaPlane, FaUniversity, FaSchool, FaSmile, FaHandsHelping } from "react-icons/fa";

const renderIcon = (iconName) => {
  switch (iconName) {
    case "InfoIcon":
      return <FaInfoCircle className={styled.cssicon}/>;
    case "ShieldCheckIcon":
      return <FaCheckCircle className={styled.cssicon}/>;
    case "CheckCircleIcon":
      return <FaUsers className={styled.cssicon}/>;
    case "AtSignIcon":
      return <FaAt className={styled.cssicon}/>;
    case "VirusIcon":
      return <FaVirus className={styled.cssicon}/>;
    case "SunIcon":
      return <FaSun className={styled.cssicon}/>;
    case "ChatIcon":
      return <FaComments className={styled.cssicon}/>;
    case "DollarIcon":
      return <FaDollarSign className={styled.cssicon}/>;
    case "StarIcon":
      return <FaStar className={styled.cssicon}/>;
    case "TestTubeIcon":
      return <FaFlask className={styled.cssicon}/>;
    case "BiohazardIcon":
      return <FaBiohazard className={styled.cssicon}/>;
    case "GlobeIcon":
      return <FaGlobe className={styled.cssicon}/>;
    case "ExternalLinkIcon":
      return <FaExternalLinkAlt className={styled.cssicon}/>;
    case "NurseIcon":
      return <FaUserMd className={styled.cssicon}/>;
    case "AirplaneIcon":
      return <FaPlane className={styled.cssicon}/>;
    case "MuseumIcon":
      return <FaUniversity className={styled.cssicon}/>;
    case "SchoolIcon":
      return <FaSchool className={styled.cssicon}/>;
    case "HappinessIcon":
      return <FaSmile className={styled.cssicon}/>;
    case "HandsHelpingIcon":
      return <FaHandsHelping className={styled.cssicon}/>;
      case "PeopleIcon":
        return <FaUsers className={styled.cssicon}/>;
    default:
      return null;
  }
};

export default renderIcon
