import React from "react";
import Image from "next/image";

export function ProjectCard(props) {
  return (
    <div className="flex flex-col items-center justify-center w-max h-max p-6 rounded-lg border-2 border-roxo relative">
      <span className="text-gray text-base border-b-2 border-b-roxo">
        {props.name}
      </span>
      <div className="flex justify-center items-center gap-4 mt-4">
        <Image
          src={props.src}
          className="w-96 rounded-lg"
          draggable="false"
          alt="project"
        />

        <text className="text-sm text-left text-gray w-60">{props.text}</text>
      </div>

      <div className="mt-4 ">
        <div id="button-containe">
          <div id="allsides-2">
            <button id="button">GITHUB</button>
          </div>
        </div>
      </div>
    </div>
  );
}
