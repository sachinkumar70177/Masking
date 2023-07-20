import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Home from "../page/Home";
import Ourstory from "../page/Ourstory";
import Community from "../page/Community";
import Ourmission from "../page/OurMission";
import About from "../page/About";
import Login from "../page/Login";


function AllRoutes() {
 

  return (
    <Container maxW="container.xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ourmission" element={<Ourmission />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* add all the routes here */}
    </Container>
  );
}

export default AllRoutes;
