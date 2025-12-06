import { Helmet } from "react-helmet";
import HeroAudio from "../components/heroaudio"
import AudioResources from "../components/audio";

export default function PsychologicalAudio() {
return(
   <>
    <Helmet>
                <title>نفس - موارد  صوتية</title>
                <meta name="description" content="موارد صوتية " />
              </Helmet>
   <HeroAudio />
   <AudioResources />
   </>
)}