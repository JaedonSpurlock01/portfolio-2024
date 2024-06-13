import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

const iconStyle = "hover:text-[#4183C4] hover:cursor-pointer transition";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-12 bg-neutral-200 flex flex-col items-center justify-center">
        <div className="max-content-width flex flex-row items-center justify-between">
          <span className="text-neutral-600 font-semibold text-xs px-2 md:px-0">
            © 2024 Jaedon Spurlock
          </span>
          <div className="flex flex-row gap-4 text-neutral-700">
            <a href="https://www.instagram.com/jaedonspurlock" target="_blank">
              <CiInstagram className={iconStyle} size={20} />
            </a>
            <a href="https://github.com/JaedonSpurlock01" target="_blank">
              <FaGithub className={iconStyle} size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaedon-spurlock/"
              target="_blank"
            >
              <FaLinkedin className={iconStyle} size={20} />
            </a>

            <a
              href="https://www.youtube.com/channel/UC_kzjV049b2XQlKe306re5g"
              target="_blank"
            >
              <FaYoutube className={iconStyle} size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
