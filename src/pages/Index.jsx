import React from "react";
import { ChakraProvider, extendTheme, Box, Container, Text, VStack, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Custom theme to include dark mode
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const Home = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Text fontSize="2xl">Welcome to Ved Anandam</Text>
      <Text>This is the home page.</Text>
    </VStack>
  </Container>
);

const Blog = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Text fontSize="2xl">Blog</Text>
      <Text>Read our latest articles.</Text>
    </VStack>
  </Container>
);

const SignIn = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Text fontSize="2xl">Sign In</Text>
      <Text>Please sign in to continue.</Text>
    </VStack>
  </Container>
);

const SignUp = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Text fontSize="2xl">Sign Up</Text>
      <Text>Create a new account.</Text>
    </VStack>
  </Container>
);

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="nav" width="100%" padding={4} display="flex" justifyContent="space-between" alignItems="center" bg={colorMode === "light" ? "gray.100" : "gray.900"}>
      <Text fontSize="xl">Ved Anandam</Text>
      <Box>
        <Button as={Link} to="/" marginRight={4}>
          Home
        </Button>
        <Button as={Link} to="/blog" marginRight={4}>
          Blog
        </Button>
        <Button as={Link} to="/signin" marginRight={4}>
          Sign In
        </Button>
        <Button as={Link} to="/signup" marginRight={4}>
          Sign Up
        </Button>
        <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </Box>
    </Box>
  );
};

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default Index;
