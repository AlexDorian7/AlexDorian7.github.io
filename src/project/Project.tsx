import type { Project_t } from "../types";
import "./Project.css";


function Project({ project }: { project: Project_t }) {
    return (
        <div className="project-base">
            <table>
                <tr>
                    <td>
                        <img className="project-image" src={project.image} alt="Project Image" draggable={false} />
                    </td>
                    <td className="project-left-border">
                        <h1 className="project-name">{project.name}</h1>
                    </td>
                </tr>
            </table>
            <p className="project-bottom-border">{project.description}</p>
            <a href={project.link.href} target="_blank">{project.link.text}</a>
        </div>
    );
}

export default Project;