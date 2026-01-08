import type { Project_t } from "../types";
import "./Project.css";


function Project({ project }: { project: Project_t }) {
    return (
        <div className="project-base">
            <table>
                <tr>
                    <td>
                        {project.image !== null ? <img className="project-image" src={project.image} alt="Project Image" draggable={false} /> : <></>}
                    </td>
                    <td className="project-left-border">
                        <h3 className="project-name">{project.name}</h3>
                    </td>
                </tr>
            </table>
            <p className="project-bottom-border">{project.description}</p>
            {project.link.map(l => {
                return (<a className="project-link" href={l.href} target="_blank">{l.text}</a>)
            })}
        </div>
    );
}

export default Project;