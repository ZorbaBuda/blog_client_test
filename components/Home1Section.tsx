import FlatButton from "./FlatButton";
import dict from "@/dict.json";
import parse from "html-react-parser";

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
      <div className="subcontainer-md flex flex-col gap-10">
        <div className="   ">
          <h1 className="h3 text-green2">{dict.home1.title}</h1>

          <div className="prose-custom ">
            <div className="">{parse(dict.home1.text)}</div>
          </div>
          <FlatButton
            categoryName={dict.home1.linkText}
            selected={false}
            slug={homeIntro1.link}
          />
        </div>

        <div className="prose-custom">
          <p>Well, this is edited!</p>
          <p></p>
          <blockquote>
            <p>
              <strong>
                What if I told you that even though you're at this point, now
                might be the best time?
              </strong>
            </p>
          </blockquote>
          <p>
            <strong>
              <em>
                There is a reason for this to be so. Now I'll tell you what it
                is.
              </em>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
