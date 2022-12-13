import React from "react";
import Image from "next/image";

export function ProjectCard(props) {
  return (
    <div className="flex flex-col items-center justify-center w-max h-max p-4">
      <Image
        id="color"
        src={props.src}
        className={props.w}
        draggable="false"
        alt="project"
      />
      <span className="text-gray text-xl uppercase">{props.name}</span>
    </div>
  );
}
