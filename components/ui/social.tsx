import React from "react";
import { IconType } from "react-icons";

interface SocialProps {
  icon: IconType;
  link: string;
}

const Social: React.FC<SocialProps> = ({ icon: Icon, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="flex items-center bg-secondary justify-center border p-2 rounded-sm hover:bg-neutral-300 transition-all text-neutral-400">
        <Icon size={25} />
      </div>
    </a>
  );
};

export default Social;
