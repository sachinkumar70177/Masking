import React, { useState } from "react";
import {
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Text
} from "@chakra-ui/react";
import image from "../Routes/Image/MaSk.jpg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // Perform your login logic here.
    // For demonstration purposes, let's assume the login is successful
    // if the email and password are both non-empty.
    if (email.trim() === "" || password.trim() === "") {
      // Login failed
      toast({
        title: "Login Failed",
        description: "Please enter a valid email and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      // Login succeeded
      toast({
        title: "Login Successful",
        description: `Welcome back, ${email}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Perform any other actions after successful login
    }
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
    //   bgGradient="linear(to bottom right, #38B2AC, #3182ce)"
    >
      {/* Content */}
      <VStack
        spacing={4}
        p={8}
        borderWidth={1}
        borderRadius="md"
      
        bg="rgba(255, 255, 255, 0.8)" // Transparent white background
        w="40%"
      >
        <img
          src={image}
          alt="Masking Logo"
      
          mb={6}
        />
         </VStack>
         <VStack>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" size="lg" onClick={handleLogin}>
          Login
        </Button>
        <Text textAlign="center" mt={4}>
          <a href="#">Forgot Password?</a>
        </Text>
      </VStack>
    </Flex>
  );
};

export default Login;
