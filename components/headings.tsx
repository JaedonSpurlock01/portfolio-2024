import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-3xl font-semibold text-neutral-700">{children}</h1>
  );
};

export const Subtitle: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-neutral-600">{children}</h2>
  );
};
