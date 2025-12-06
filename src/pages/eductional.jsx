import { Helmet } from "react-helmet";
import HeroEductional from "../components/heroeductional";
import EdectionalSections from "../components/eductionalesctions";
export default function EDuctionalBage(){
    return(
    <>
     <Helmet>
                <title>نفس - التاهيل    التعليمي</title>
                <meta name="description" content="تاهيل تعليمي " />
              </Helmet>
    <HeroEductional />
    <EdectionalSections>
         <li>التكرار المتباعد</li>
                  <li>الربط الذهني</li>
                  <li>الخرائط الذهنية</li>
                  <li>التعلم النشط</li>
    </EdectionalSections>

    </>
    );
}