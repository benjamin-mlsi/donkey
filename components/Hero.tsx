import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-1/6 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.3]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            BMchatAi
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Mehr Kunden. Mehr Zeit."
            className=" text-center text-[40px] sm:text-[35px] md:text-5xl lg:text-6xl xl:text-7xl"
          />  
          <TextGenerateEffect
          className="text-center text-[40px] sm:text-[35px] md:text-5xl lg:text-6xl xl:text-7xl"
            words="Mit Ai Chatbots."
          />       

          <p className="text-center my-4 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Automatisierte Lösungen für moderne Unternehmen
          </p>

          <a href="demo">
            <MagicButton
              title="JA DAS WILL ICH!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

         <h1 className="heading m-24 py-24">
       <span className="text-purple"> Support</span> ist entscheidend...
      </h1>
                 
      <h1 className="heading ">
            ...Doch du hast nur begrenzt Zeit, dich um jeden einzelnen  Kunden zu kümmern.
            Warum nicht <span className="text-purple">effizienter</span> arbeiten?            
      </h1>

        </div>
      </div>
    </div>
    
  );
};

export default Hero;
