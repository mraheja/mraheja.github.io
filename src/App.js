import React, { useState, useEffect, useCallback } from "react";
import { Tooltip } from "react-tooltip";
import mePicture from "./me.jpeg";
import wood1 from "./wood1.jpg";
import wood2 from "./wood2.jpg";
import banana from "./banana.jpg";
import peanut from "./peanut.jpg";
import "./App.css";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

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

function WoodenGiftImages() {
  return (
    <div className="flex flex-col w-[300px]">
      <img alt="wooden-gifts-1" className="py-2" src={wood1} />
      <img alt="wooden-gifts-2" className="py-2" src={wood2} />
    </div>
  );
}

function WoodenGifts() {
  return (
    <>
      <nobr
        data-tooltip-id="my-tooltip"
        className="bg-blue-200 hover:bg-blue-300 cursor-default"
      >
        wooden gifts
      </nobr>
      <Tooltip id="my-tooltip" render={() => <WoodenGiftImages />} />
    </>
  );
}

function BananaImage() {
  return (
    <div className="flex flex-col w-[300px]">
      <img alt="banana-1" className="py-2" src={banana} />
    </div>
  );
}

function Bananas() {
  return (
    <>
      <nobr
        data-tooltip-id="banana-tooltip"
        className="bg-blue-200 hover:bg-blue-300 cursor-default"
      >
        putting bananas in a dishwasher
      </nobr>
      <Tooltip id="banana-tooltip" render={() => <BananaImage />} />
    </>
  );
}

function PeanutButterImage() {
  return (
    <div className="flex flex-col w-[300px]">
      <img alt="peanut-1" className="py-2" src={peanut} />
    </div>
  );
}

function PeanutButter() {
  return (
    <>
      <nobr
        data-tooltip-id="my-tooltip-3"
        className="bg-blue-200 hover:bg-blue-300 cursor-default"
      >
        making peanut butter glow in the dark
      </nobr>
      <Tooltip id="my-tooltip-3" render={() => <PeanutButterImage />} />
    </>
  );
}

function ProjectList({ projects }) {
  return (
    <ul className="list-disc ml-10 mt-2">
      {projects.map((project) => (
        <li key={project.url}>
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
      <a href="https://www.instagram.com/mraheja99/">
        <IoLogoInstagram className={iconClass} />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <>
      <Socials />
      <p className="font-light text-xs text-center mt-1">
        created by: me using codeium
        <br />
        last updated: 10/27/2023
      </p>
      <br />
    </>
  );
}

function Header() {
  const fullImageHeight = 100;
  const topMargin = 80;
  const smallImageHeight = 40;

  const scrollRange = (fullImageHeight - smallImageHeight) * 2;

  const [imageHeight, setImageHeight] = useState(fullImageHeight);

  const handleScroll = useCallback(() => {
    if (window.scrollY > topMargin + scrollRange) {
      setImageHeight(smallImageHeight);
    } else if (window.scrollY > topMargin) {
      setImageHeight(
        smallImageHeight +
          (fullImageHeight - smallImageHeight) *
            (1 - (window.scrollY - topMargin) / scrollRange)
      );
    } else {
      setImageHeight(fullImageHeight);
    }
  }, [topMargin, scrollRange, fullImageHeight, smallImageHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const smallImageDisplayed = imageHeight === smallImageHeight;

  return (
    <div className="flex flex-col justify-center absolute w-[100%] bg-white">
      <div
        id="fullDiv"
        className="flex top-0 bg-opacity-20 justify-center items-center p-4"
        style={{
          flexDirection: smallImageDisplayed ? "row" : "column",
        }}
      >
        <div className="flex justify-center px-7">
          <img
            id="profile-image"
            src={mePicture}
            alt="me"
            className="rounded-full max-h-[100px] m-3"
            style={{ height: imageHeight }}
          />
        </div>
        <div>
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold"> mehul raheja</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-l mt-1 font-light">
              {" "}
              rahejamehul [at] gmail [dot] com
            </h1>
          </div>
        </div>
      </div>
      {smallImageDisplayed && (
        <div className="w-[100%] h-[1px] bg-slate-800 self-center"></div>
      )}
    </div>
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
    <html>
      <head>
        <title>Your Website Name</title>
      </head>
      <div>
        <div className="flex justify-center mt-20 sticky top-0 bg-white w-[100%]">
          <Header />
        </div>

        <br />

        <div className="flex justify-center mt-[230px]">
          <div className="text-lg mx-10 w-[700px]">
            <p>
              hi! i'm mehul and i'm pretty{" "}
              <HoverTip
                text="excited"
                hoverElem="← like geniunely i'm always kinda excited :')"
              />
            </p>
            <br />
            <p>
              currently, i'm tucked away in the suburbs of Mountain View,
              building a coding{" "}
              <em className="text-green-500 font-bold">superpower</em> @{" "}
              <Link url="https://codeium.com" text="Codeium" /> and doing random
              science experiments like <Bananas /> or <PeanutButter />.
              {/* and very inconsistently emailing people about random life updates
            and/or interesting science rabbit holes on{" "}
            <Link
              url="https://forms.gle/6ynpoLgRh9LZnGqT7"
              text="my newsletter"
            /> */}
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
              i get a lot of joy from spreading excitement about computer
              science: one of the most meaningful things i've done was lead the
              machine learning education of{" "}
              <Link url="https://launchpad.berkeley.edu/" text="Launchpad" />{" "}
              for a year. i was also one of the first ciriculum developers for
              competitive programming at{" "}
              <Link url="https://junilearning.com/" text="Juni Learning" /> &
              i've taught multiple camps at{" "}
              <Link url="https://alphastar.academy/" text="AlphaStar Academy" />
              .
            </p>
            <br />
            <p>
              in the past, i've done CI orchestration and low-latency
              optimization for{" "}
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
              <Link
                text="Sky Computing Lab"
                url="https://sky.cs.berkeley.edu/"
              />{" "}
              where i worked on ML infra,
              <Link text="Mesbah Lab" url="https://mesbahlab.com" /> where i
              developed MPC control for plasma systems, and
              <Link text="RAEL" url="https://rael.berkeley.edu/" /> where i
              created energy consumption simulations for electric buses.
            </p>

            <br />

            <div>
              sometimes, i try to make things in real life: my favorite is
              making <WoodenGifts /> for my friends, but i also enjoy making
              t-shirts, mugs, or paper crafts.
            </div>

            <br />

            <p>
              please feel free to reach out! if you're in the area, i'm
              moderately allergic to coffee, but let's grab some matcha or go on
              a walk together {":')"}
            </p>

            <br />
            <Footer />
          </div>
        </div>
      </div>
    </html>
  );
}

export default App;
