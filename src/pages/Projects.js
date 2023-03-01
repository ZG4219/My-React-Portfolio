import React from "react";

function Projects() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-bold mb-4">Project 1</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquet commodo nisl, sed interdum ipsum venenatis sit amet.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            View Project
          </a>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-bold mb-4">Project 2</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquet commodo nisl, sed interdum ipsum venenatis sit amet.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            View Project
          </a>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-bold mb-4">Project 3</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquet commodo nisl, sed interdum ipsum venenatis sit amet.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
