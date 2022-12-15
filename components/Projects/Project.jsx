import React from "react";
import { ProjectCard } from "./ProjectCard";

export function Project() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <ProjectCard
        name="Agendamento de Salas e Recursos"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu nibh metus. Nulla eleifend erat quis posuere dignissim."
      />
    </div>
  );
}
