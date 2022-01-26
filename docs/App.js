import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Text, Button, Modal, Radiobox, Icon} from "atomize";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import { Image, Div, StyleReset, ThemeProvider } from "atomize";

const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

class App extends Component {
  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <Div
            w="100vw"
            textAlign="center"
            p={{y: "1rem" }}
          >
            <Text tag="h1" textSize="display1">
              Mehul Raheja
            </Text>
          </Div>
          <Div
            w="100vw"
            textAlign="center"
            p={{y: "1rem" }}
            flexDir="row"
            justify="center"
            d="flex"
          >
            <p>Overview</p>
            <Div w="3vw"></Div>
            <p>Projects</p>
            <Div w="3vw"></Div>
            <p>Writing</p>
            <Div w="3vw"></Div>
            <p>Resume</p>
          </Div>
          <Div
            textColor="black900"
            minH="70vh"
            w="100vw"
            d="flex"
            flexDir="row"
            justify="center"
            align="right"
            textSize="display2"
            textWeight="500"
            p={{ x: "3rem", y: "2rem" }}
          >
            <Div>
              <h1> About </h1>
              <Text>
                

                Hi, I’m Mehul! I’m currently a junior at UC Berkeley studying Electrical Engineering & Computer Science and minoring in Physics and Math. My interests lie broadly within machine learning, quantum computing, and distributed systems as I continue exploring various career paths. I'm currently searching for academic and industry research opportunities to delve deeper into these fields. I'm also always looking for small, fun <a href="TODO"> meme projects</a> to do so please reach out if you have any ideas! Some past work includes: <br/>
                
                <br/><br/>
                * <a href="https://github.com/mraheja/inflection">Inflection</a><br/>
                * <a href="https://github.com/mraheja/TransitBusSimulation">Transit Bus Simulation</a> <br/>
                * <a href="https://github.com/mraheja/quicktiks">Quicktiks</a> <br/>
                * <a href="https://medium.com/@mehulraheja/storing-images-as-rna-e2296659e335">RNA Image Compression</a> <br/>
                * <a href="https://github.com/mraheja/ShallowSleep">ShallowSleep</a><br/>
                * <a href="https://github.com/mraheja/DubMyProfessor">DubMyProfessor</a><br/>
                <br/><br/>

                I have worked at <a href="https://databricks.com/">Databricks</a>, creating administrative tools to manage cloud clusters, and <a href="https://lucid.co/">Lucid Software</a>, developing front-end software to visualize cloud architectures. I have also contributed to projects at the <a href="https://rael.berkeley.edu/">Renewable and Appropriate Energy Laboratory</a>, advising the approach to creating an electric bus system in Mexico City, and the <a href="https://www.mesbahlab.com/">Mesbah Lab</a>, optimizing MPC-based control of plasma jets in biomedical settings.
                <br/><br/>
                Additionally, I participated a lot in competitive programming and enjoy teaching. I am currently tutoring aspiring <a href="http://www.usaco.org/">USACO</a> students and developing curriculum at <a href="https://junilearning.com/">Juni Learning</a> was previously an instructor at <a href="https://alphastar.academy/">AlphaStar</a>.
                <br/><br/>
                At Berkeley, I am currently involved as a project lead in <a href="https://launchpad.berkeley.edu/">Launchpad</a> and an active member of <a href="https://berkeleyquantum.org/">Quantum Computing @ Berkeley</a>. Previously, I have been involved as an Industrial Relations officer of <a href="https://hkn.eecs.berkeley.edu/">HKN</a>, team lead for <a href="https://chemecar.berkeley.edu/">ChemE Car</a>, analyst for <a href="https://asuc.org/cfo/">ASUC Office of CFO</a>, member of <a href="https://tbp.berkeley.edu/">TBP</a>, and developer in <a href="https://rab.berkeley.edu/">Robotics @ Berkeley</a>.
                <br/><br/>
                Outside of work, I enjoy hiking, reading, and jumping into many random bodies of water. I’m always happy to talk so feel free to reach out through email or any socials!
              </Text>
            </Div>
            <Div w="10vw"></Div>
            <Div>
              <Image src="image.png"/>
            </Div>
            
          </Div>
          

          <Div
            textAlign="center"
          >
            <a href="https://github.com/mraheja"><Icon name="Github" color="black" size="40px"/> </a>
            <a href="https://www.linkedin.com/in/mehulraheja/"><Icon name="Linkedin" color="black" size="40px"/> </a>
            <a href="mailto:mraheja@berkeley.edu"><Icon name="Mail" color="black" size="40px"/> </a>
            <a href="https://www.instagram.com/mraheja99/"><Icon name="Instagram" color="black" size="40px"/> </a>
          </Div>

          
          
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;


/*
import React from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Button,
  Text,
  Icon
} from "react-atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brand800: "#671de1"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div p="1rem" d="flex" flexDir="column">
        <StyleReset />
        <Div d="flex" m={{ b: "4rem" }}>
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="brand800"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="info700"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="success700"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="warning700"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="danger700"
          />
        </Div>

        <Text m={{ b: "0.5rem" }}>Brand Buttons</Text>
        <Div d="flex" m={{ b: "2rem" }}>
          <Div m={{ r: "1rem" }}>
            <Button
              bg="brand800"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "1.5rem" }}
            >
              Submit
            </Button>
            <Button
              bg="brand800"
              rounded="brandRadius"
              h="2.5rem"
              justify="space-between"
              suffix={
                <Icon name="Plus" size="20px" color="white" m={{ l: "2rem" }} />
              }
              m={{ b: "0.5rem" }}
            >
              Follow
            </Button>
            <Button
              bg="brand800"
              shadow="4"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "2rem" }}
              h="3rem"
            >
              Large Button
            </Button>
          </Div>
          <Div m={{ r: "1rem" }}>
            <Button
              bg="white"
              border="1px solid"
              borderColor="brand800"
              textColor="brand800"
              textWeight="600"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "1.5rem" }}
            >
              Submit
            </Button>
            <Button
              bg="white"
              border="1px solid"
              borderColor="brand800"
              textColor="brand800"
              textWeight="600"
              rounded="brandRadius"
              h="2.5rem"
              justify="space-between"
              suffix={
                <Icon
                  name="Plus"
                  size="20px"
                  color="brand800"
                  m={{ l: "2rem" }}
                />
              }
              m={{ b: "0.5rem" }}
            >
              Follow
            </Button>
            <Button
              bg="white"
              border="1px solid"
              borderColor="gray300"
              shadow="4"
              textColor="brand800"
              textWeight="600"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "2rem" }}
              h="3rem"
            >
              Large Button
            </Button>
          </Div>
          <Div>
            <Button
              w="2.5rem"
              bg="brand800"
              m={{ b: "0.5rem" }}
              rounded="brandRadius"
              suffix={<Icon name="Heart" size="20px" color="white" />}
            />
            <Button
              w="2.5rem"
              bg="white"
              border="1px solid"
              borderColor="brand800"
              m={{ b: "0.5rem" }}
              rounded="brandRadius"
              suffix={<Icon name="Edit" size="20px" color="brand800" />}
            />
            <Button
              h="3rem"
              w="3rem"
              bg="white"
              border="1px solid"
              borderColor="gray300"
              shadow="4"
              rounded="brandRadius"
              suffix={<Icon name="HeartSolid" size="20px" color="brand800" />}
            />
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

*/
