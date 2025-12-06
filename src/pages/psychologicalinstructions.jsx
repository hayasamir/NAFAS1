import { Helmet } from "react-helmet";
import HeroInstructions from "../components/heroinstruction";
import Instructions from "../components/instructions";
export default function PsychologicalInstructions(){
    return(
        <>
          <Helmet>
                <title>نفس - ارشادات   هامة</title>
                <meta name="description" content="ارشادات هامة " />
              </Helmet>
              <HeroInstructions />
              <Instructions />
        </>
    )
}