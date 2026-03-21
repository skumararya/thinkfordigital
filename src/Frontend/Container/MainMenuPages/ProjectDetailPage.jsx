import React from 'react'
import { useParams } from "react-router-dom";
import { projects } from '../../Shared/ProjectData';
import ProjectDetail from './ProjectDetail';

const ProjectDetailPage = () => {

     const { slug } = useParams();
          const project = projects.find(p => p.slug === slug);
          if (!project) return <h2>Project Not Found</h2>;
  return <ProjectDetail {...project} />
}

export default ProjectDetailPage
