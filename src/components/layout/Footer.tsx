import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-20">

      <div className="text-center flex justify-center items-center border-t border-gray-400  mt-12 py-6">
        <ul className="flex items-center justify-center flex-wrap gap-5 md:gap-8 group select-none">
           <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ybarbosa0816@gmail.com"
               className="flex gap-2"
            >
              <span>Gmail</span>
              <MdEmail  size={24} />
            </a>
          </li>
          <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/YagoB16"
              className="flex gap-2"
            >
              <span>Github</span>
              <FaGithub size={24} />
            </a>
          </li>
          <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/yago-barbosa-35762b219/"
               className="flex gap-2"
            >
              <span>LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
          </li>
          <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <a
              target="_blank"
              rel="noreferrer"
               href="https://wa.me/5511971824260?text=Ol%C3%A1%2C%20visita%20do%20site%20"
               className="flex gap-2"
            >
              <span>WhatsApp</span>
              <IoLogoWhatsapp size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
