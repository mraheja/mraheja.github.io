import React, { useState } from "react";
import mePicture from "./me.jpeg";
import "./App.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Link({ url, text }) {
  return (
    <a className="text-blue-500 hover:text-blue-800" href={url}>
      <nobr> {text} ↗</nobr>
    </a>
  );
}

function HoverTip({ text, hoverElem: hoverText }) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <span>
      <nobr
        className="bg-blue-200 hover:bg-blue-300 cursor-default"
        onMouseOver={onHover}
        onMouseOut={onHover}
      >
        {text}
      </nobr>{" "}
      <span className="text-blue-500 italic">{hover ? hoverText : ""}</span>
    </span>
  );
}

function ProjectList({ projects }) {
  return (
    <ul className="list-disc ml-10 mt-2">
      {projects.map((project) => (
        <li>
          <Link url={project.url} text={project.name} />
        </li>
      ))}
    </ul>
  );
}

function Socials() {
  const iconClass = "h-8 w-8";
  return (
    <div className="flex flex-row justify-center">
      <a href="https://github.com/mraheja">
        <IoLogoGithub className={iconClass} />
      </a>
      <a href="https://www.linkedin.com/in/mehulraheja">
        <IoLogoLinkedin className={iconClass} />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <>
      <Socials />
      <p className="font-light text-xs text-center mt-1">
        created by: me
        <br />
        last updated: 10/18/2023
      </p>
      <br />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="flex justify-center">
        <img src={mePicture} alt="me" className="rounded-full" width="100" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl mt-3 font-bold"> mehul raheja</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-l mb-10 mt-1 font-light">
          {" "}
          rahejamehul [at] gmail [dot] com
        </h1>
      </div>
    </>
  );
}

function App() {
  const cool_projects = [
    {
      name: "SkyPilot",
      url: "https://github.com/skypilot-org/skypilot",
    },
    {
      name: "PyTorch Optimem",
      url: "https://github.com/callaunchpad/pytorch-optimem",
    },
    {
      name: "Quantum Autoencoders",
      url: "https://drive.google.com/file/d/19vsLohMSUKsp28s5iZD8NjNYI2ygsE_c/view?usp=sharing",
    },
    {
      name: "Inflection",
      url: "https://github.com/callaunchpad/inflection",
    },
    {
      name: "RNA Image Compression",
      url: "https://medium.com/@mehulraheja/storing-images-as-rna-e2296659e335",
    },
  ];

  const fun_projects = [
    {
      name: "QuickTiks",
      url: "https://github.com/mraheja/quicktiks",
    },
    {
      name: "Paintair",
      url: "https://github.com/neild0/paintair",
    },
    {
      name: "DubMyProfessor",
      url: "https://github.com/mraheja/DubMyProfessor",
    },
    {
      name: "COV-IDentify",
      url: "https://github.com/mraheja/COV-IDentify",
    },
    {
      name: "Despasirito",
      url: "https://github.com/mraheja/despasirito",
    },
  ];

  return (
    <div className="flex justify-center mt-20">
      <div className="text-lg mx-10 w-[700px]">
        <div>
          <Header />
        </div>

        <p>
          hi! i'm mehul and i'm pretty{" "}
          <HoverTip
            text="excited"
            hoverElem="← like geniunely i'm always kinda excited :')"
          />
        </p>
        <br />
        <p>
          currently, i'm tucked away in the suburbs of Mountain View, building a
          coding <em className="text-green-500 font-bold">superpower</em> @{" "}
          <Link url="https://codeium.com" text="Codeium" /> and occasionally
          emailing people about random life updates and/or interesting science
          rabbit holes on{" "}
          <Link
            url="https://forms.gle/6ynpoLgRh9LZnGqT7"
            text="my newsletter"
          />
          .
        </p>
        <br />
        <div>
          sometimes i work on cool projects like:
          <ProjectList projects={cool_projects} />
        </div>
        <br />
        <div>
          but i also just meme around and do things like:
          <ProjectList projects={fun_projects} />
        </div>
        <br />
        <p>
          i get a lot of joy from spreading excitement about computer science:
          one of the most meaningful things i've done was lead the machine
          learning education of{" "}
          <Link url="https://launchpad.berkeley.edu/" text="Launchpad" /> for a
          year. i was also one of the first ciriculum developers for competitive
          programming at{" "}
          <Link url="https://junilearning.com/" text="Juni Learning" /> & i've
          taught multiple camps at{" "}
          <Link url="https://alphastar.academy/" text="AlphaStar Academy" />.
        </p>
        <br />
        <p>
          in the past, i've done CI orchestration and low-latency optimization
          for{" "}
          <Link
            text="Citadel Securities"
            url="https://www.citadelsecurities.com/"
          />{" "}
          , built full-stack cluster management tools for{" "}
          <Link text="Databricks" url="https://databricks.com/" />
          , and developed the front-end for cloud visualization software at
          <Link text="LucidScale" url="https://lucidscale.com/" />.
        </p>
        <br />
        <p>
          i've also volunteered at the
          <Link text="Sky Computing Lab" /> where I worked on ML infra,
          <Link text="Mesbah Lab" link="mesbahlab.com" /> where I developed MPC
          control for plasma systems, and
          <Link text="RAEL" link="https://rael.berkeley.edu/" /> where I created
          energy consumption simulations for electric buses.
        </p>

        <br />

        <p>
          especially if you're in mountain view, please feel free to reach out!
          i'm moderately allergic to coffee, but we could grab some matcha or go
          a walk together {":')"}
        </p>

        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
