import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10  pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Benjamin Mulamisini
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href} target="irgendwas">
                {" "}
                <img src={info.img} alt="icons" width={20} height={20} />{" "}
              </a>
            </div>
          ))}
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          <div className=" cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg">
            <a href="impressum">Impressum</a>
          </div>
          <div className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg">
            <a
              href="../../../../Datenschutzerklaerung.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz
            </a>
          </div>
          <div className=" cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg ">
            <a href="agbs">AGB´S</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
