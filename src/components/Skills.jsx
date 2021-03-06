import React from "react";

function Skills() {
  return (
    <div name="skills" className=" bg-[#16161d] text-gray-300">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="py-4">Experience in the following (Not limited to):</p>
        </div>

        <div className="w-full grid grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html"
            />
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="css"
            />
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript"
            />
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="node"
            />
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react"
            />
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="tailwind"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

// react
// javascript
// node
//mysql
//html
//css
