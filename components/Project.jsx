import React from "react";
import { ProjectCard } from "./ProjectCard";
import dev from "../public/photo-1525373698358-041e3a460346.avif";

export function Project() {
  return (
    <div className="flex justify-center items-center gap-6 ">
      <ProjectCard src={dev} w="w-24 mb-4" />
    </div>
  );
}
