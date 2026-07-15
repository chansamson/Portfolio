import { createLazyFileRoute } from "@tanstack/react-router";
import { ProjectsTable } from "../components/ProjectsTable";
import { FooterCopyright } from "../components/Footer";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:pt-24">
        <p className="group mb-2 items-center font-semibold leading-tight text-teal-300 text-left">
          Christian Samson
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl text-left">
          All Projects
        </h1>
        <ProjectsTable />
        <FooterCopyright />
      </div>
    </div>
  );
}
