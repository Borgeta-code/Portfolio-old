import React from "react";
import Image from "next/image";

export function ProjectCard(props) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
          Aplicação web desenvolvida com {""}
          <span className="text-roxo text-sm font-bold">
            {props.description}
          </span>
          .
        </span>

        <div className="flex gap-4">
          <a
            className="text-gray text-sm border-b-2 border-b-roxo "
            target="_blank"
            rel="noopener noreferrer"
            href={props.demo}
          >
            Demo
          </a>
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
