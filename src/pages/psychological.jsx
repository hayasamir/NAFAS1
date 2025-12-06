// import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import HeroSection from "../components/HeroSection";
import PsychologicalSection from "../components/psychologicalsection";
import ThinkingExercises from "../components/thinkingExercises";
import SleepExercises from "../components/sleepExercises";
import EmotionsBox from "../components/emotionsBox";
import MoodSection from "../components/moodsection";
import ABCModel from "../components/abcmodel";
import DailyMessage from "../components/dailymessage"; 

export default function PsychologicalBage() {
return(
   <>
     <Helmet>
                <title>نفس - التاهيل  النفسي</title>
                <meta name="description" content="التاهيل النفسي" />
              </Helmet>
   <HeroSection/>
   <PsychologicalSection />
   <ThinkingExercises />
   <SleepExercises />
   <EmotionsBox />
   <MoodSection />
   <ABCModel />
   <DailyMessage />
   </>
);
 
  
}

