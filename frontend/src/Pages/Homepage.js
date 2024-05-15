import {
  Box,
  Container,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Text,
  Tab,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      {/* Use flexbox utility to center content */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="white"
        rounded="lg"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        // Set height to ensure vertical centering
        // h="200px"
      >
        <Text fontSize="4xl" fontFamily="Works Sans">
          Hawdi-chat
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        m="40px 0 15px 0"
        color={"black"}
        borderRadius="lg"
        borderWidth="1px"
        // Set height to ensure vertical centering
        // h="200px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
