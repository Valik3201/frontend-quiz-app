import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";

import Layout from "../components/Layout";
import { Container, Flex } from "../styles/GlobalStyles";
import {
  NavBar,
  SwitchButton,
  Body,
  Heading,
  SubPara,
  Para,
  Content,
} from "../styles/homeStyles";

const Home2 = () => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Layout>
      <NavBar>
        <Container fluid>
          <Flex center></Flex>
        </Container>
      </NavBar>
      <Body>
        <Container>
          <Heading>Hello</Heading>
          <SubPara>
            What's up! Toggle the switch above to change the theme
          </SubPara>
          <Content>
            <Container>
              <Flex center column>
                <Heading>Article</Heading>
                <Para>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                  pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                  ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                  Omnis totam, beatae dicta fugit praesentium fugiat dolores
                  laborum, officiis, labore aperiam tempore! Debitis, provident!
                  Rem, exercitationem enim?
                </Para>
              </Flex>
            </Container>
          </Content>
        </Container>
      </Body>
    </Layout>
  );
};

export default Home2;
