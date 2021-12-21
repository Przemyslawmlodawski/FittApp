import "../../App.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../navBar/Navbar";
import React, { useState } from 'react'
import { dataObjone, dataObjThree, dataObjTwo, dataObjFour } from "../DataSection/Data";
import MainSection from "../MainSection/index";
import DataSection from "../DataSection/index.js";
import Services from "../Services";
import Footer from "../Footer";
function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <MainSection></MainSection>
      <DataSection {...dataObjone}></DataSection>
      <DataSection {...dataObjTwo}></DataSection>
      <DataSection {...dataObjThree}></DataSection>
      <DataSection {...dataObjFour}></DataSection>
      <Services></Services>
      <Footer />
    </>
  );
}

export default Home;
