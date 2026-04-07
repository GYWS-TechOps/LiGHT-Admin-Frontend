import React from "react";
import IntroSection from "../components/joinUs/IntroSection";
import HelpSection from "../components/joinUs/HelpSection";
import WhoCanJoin from "../components/joinUs/WhoCanJoin";
import WhyJoinRam from "../components/joinUs/WhyJoinRam";
import DifferenceSection from "../components/joinUs/DifferenceSection";
import IncentivesSection from "../components/joinUs/IncentivesSection";
import ToTopButton from "../components/ToTopButton";



const JoinUs = () => {
  return (
    <>
      <IntroSection />
      <HelpSection />
      <WhoCanJoin />
      <WhyJoinRam />
      <DifferenceSection />
      <IncentivesSection />
      <ToTopButton />
    </>
  );
};

export default JoinUs;
