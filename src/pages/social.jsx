import { Helmet } from "react-helmet";
import HeroSocial from "../components/herosocial";
import SocialSections from "../components/socialsections";
import SocialSectionstwo from "../components/socialsections2";
import SocialSectionsthree from "../components/socialsections3";
export default function SociallBage(){
    return(
    <>
     <Helmet>
                <title>نفس - التاهيل    الاجتماعي</title>
                <meta name="description" content="تاهيل تعليمي " />
              </Helmet>
              <HeroSocial />
              <SocialSections />
              <SocialSectionstwo />
              <SocialSectionsthree />
              </>
    )}
