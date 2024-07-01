import React from "react";
import { IconType } from "react-icons";

interface SocialProps {
  icon: IconType;
  link: string;
}

const Social: React.FC<SocialProps> = ({ icon: Icon, link }) => {
  return (
    <a href={link} target="_blank">
      <div
        className="flex items-center bg-neutral-50 dark:bg-primary-foreground justify-center
        border p-2 rounded-sm hover:text-[#4183C4] transition-all text-foreground/90"
      >
        <Icon size={25} />
      </div>
    </a>
  );
};

export default Social;
