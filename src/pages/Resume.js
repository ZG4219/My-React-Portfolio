import React from "react";

function Resume() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-8">My Resume</h2>
      <a
        href="/path/to/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
