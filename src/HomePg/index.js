import React, { useState } from "react";
import Header from "../Components/Sudeshna/HeadPart/Common/Header/header";
import Tabs from "../Components/Sudeshna/HeadPart/Common/Tabs/Tabs";
import Delivery from "../Components/Sudeshna/HeadPart/delivery/Delivery";
import DiningOut from "../Components/Sudeshna/HeadPart/diningOut/DiningOut";
import NightLife from "../Components/Sudeshna/HeadPart/nightlife/NightLife";

const Home = () => {

  const [actTab, setActTab] = useState("Delivery")

  return (
    <div>
      <Header />
      <Tabs actTab={actTab} setActTab={setActTab}/>
      {
        getCorrectScreen(actTab)
      }
    </div>
  );
};

const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery />
    case "Dining Out":
       return <DiningOut />
    case "NightLife":
       return <NightLife />
    default:
      return <Delivery />
  }
}

export default Home;