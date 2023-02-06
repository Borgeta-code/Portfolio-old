import React from "react";
import Image from "next/image";

export function ProjectCard(props) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
      <Image
        src={props.src}
        id="project"
        className="rounded-lg"
        draggable="false"
        alt="projeto"
      />

      <div id="project" className="flex flex-col gap-3">
        <h1 className="text-gray text-lg font-medium uppercase">
          <span className="text-roxo text-xl font-bold"> | </span>
          {props.name}
        </h1>

        <span className="text-gray text-sm">
          {props.description}, tecnologias:
          <span className="text-roxo text-sm font-bold"> {props.techs}</span>.
        </span>

        <div className="flex gap-4">
          {props.demo ? (
            <a
              className="text-gray text-sm border-b-2 border-b-roxo "
              target="_blank"
              rel="noopener noreferrer"
              href={props.demo}
            >
              Demo
            </a>
          ) : (
            ""
          )}
          <a
            className="text-gray text-sm border-b-2 border-b-roxo"
            target="_blank"
            rel="noopener noreferrer"
            href={props.git}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
//
