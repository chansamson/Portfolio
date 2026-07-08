const projects = [
  {
    id: 1,
    year: 2026,
    project: "Car Window Tint Near Me",
    madeAt: "IBX Digital",
    builtWith: ["Landing Pages", "WordPress", "Bricks", "ACF"],
    link: "www.car-window-tint-near-me.com",
    url: "https://car-window-tint-near-me.com/",
  },
  {
    id: 2,
    year: 2026,
    project: "Home and Office Window Tinting",
    madeAt: "IBX Digital",
    builtWith: ["Landing Pages", "WordPress", "Elementor", "ACF"],
    link: "www.homeandofficewindowtinting.com",
    url: "https://homeandofficewindowtinting.com/",
  },
  {
    id: 3,
    year: 2026,
    project: "Ceramic Coating Services",
    madeAt: "IBX Digital",
    builtWith: ["Landing Pages", "WordPress", "Elementor", "ACF"],
    link: "www.ceramic-coating.services",
    url: "https://ceramic-coating.services/",
  },
];

const ProjectsTable = () => {
  const projectList = projects.map((project) => (
    <tr key={project.id}>
      <td>{project.year}</td>
      <td>{project.project}</td>
      <td>{project.madeAt}</td>
      <td>
        <ul className="flex flex-wrap gap-2">
          {project.builtWith.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </td>
      <td>
        <a href={project.url} target="_blank">
          {project.link}
        </a>
      </td>
    </tr>
  ));

  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th>Year</th>
          <th>Project</th>
          <th>Made at</th>
          <th>Built with</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>{projectList}</tbody>
    </table>
  );
};

export default function Page() {
  return (
    <div>
      <p className="text-left">Christian Samson</p>
      <h1 className="text-left">All Projects</h1>
      <ProjectsTable />
    </div>
  );
}
