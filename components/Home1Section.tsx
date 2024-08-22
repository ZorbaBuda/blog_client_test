
import FlatButton from "./FlatButton"
import dict from '@/dict.json'
import parser from 'html-react-parser'

 const homeIntro1 = {
  title: `Una visió holística`,
  text1: `La salut integral fa referència a un enfocament holístic del benestar que abasta no només la salut física, sinó també la mental, emocional i social. Implica tenir cura del teu cos a través d'una bona alimentació, exercici regular i descans adequat, però també és important prestar atenció a la teva salut emocional i mental, cosa que inclou gestionar l'estrès, mantenir relacions saludables i buscar suport quan ho necessitis.`,
  text2: `T'agradaria saber més sobre algun aspecte específic de la salut integral?`,
  linkText: "Més sobre mi",
  link: "/about",
};



export default function Home1Section() {
  return (
    <div className="section-light bg-white">
      <div className="subcontainer-md flex-col-reverse lg:flex-row">
      
        <div className=" flex flex-col  ">
         
          <h1 className="h3 text-green2">{dict.home1.title}</h1>
            
         <div className="prose-custom-xl text-[#292929]">
          
    <p className="font-semibold">{parser(dict.home1.text)}</p>
          
            </div>
            <FlatButton categoryName={dict.home1.linkText} selected={false} slug={homeIntro1.link} />
        </div>
        </div>
    </div>
  )
}
