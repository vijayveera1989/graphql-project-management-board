import React from "react";
import { GET_PROJECTS } from "../queries/projectQueries.js";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner.jsx";
import ProjectCard from "./ProjectCard.jsx";
function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading)
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  if (error) return <div>Error found</div>;

  return (
    <div>
      {data?.projects?.length > 0 ? (
        <div className="row">
          {data.projects.map((item) => (
            <ProjectCard key={item.id} project={item}></ProjectCard>
          ))}
        </div>
      ) : (
        <p>No Projects available</p>
      )}
    </div>
  );
}

export default Projects;
