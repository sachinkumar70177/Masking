import React, { useState } from "react";
import {
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Text,
  Grid,
} from "@chakra-ui/react";
import {Authcontext} from "../Auth/Authcontext"
import { useContext } from "react";
import image from "../Routes/Image/MaSk.jpg";
import style from "./LoginPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { LockIcon, UserIcon } from "@chakra-ui/react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth ,setisauth,mail} = useContext(Authcontext);
  const toast = useToast();
const nav=useNavigate()
  const handleLogin = () => {
    const obj = { email, password };
    console.log(obj)
    axios
      .post(`https://reqres.in/api/users`,
        obj
      )
      .then((response) => {
      
        if (response.status === 201) {
        
          setisauth(true)
         nav(`/`)
          toast({
            title: "Login Successful",
            description: `Welcome back, ${email}!`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          // Perform any other actions after successful login
        } else {
          // Login failed
          toast({
            title: "Login Failed",
            description: "Invalid email or password.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
      
        
        //   setisauth(true)
        //  nav(`/`)
      });

    // Perform any other actions after successful login
  };

  return (
    <Grid className={style.grid}>
      {/* Content */}

      <div>
        <div className={style.icon}>
          <span>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </span>
          <span>
            <FontAwesomeIcon icon={faGooglePlusSquare} />
          </span>
        </div>
        <div className={style.div}></div>
        <VStack className={style.VStack}>
          <h2 className={style.h2}>Log In</h2>
          <FormControl id="email" className={style.FormControl}>
            <FormLabel>Email</FormLabel>

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" className={style.FormControl}>
            <FormLabel>Password</FormLabel>

            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            type="submit"
            size="lg"
            className={style.Button}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Text textAlign="center">
            <a className={style.textCenter} href="#">
              Forgot Password?
            </a>
          </Text>
        </VStack>
      </div>
    </Grid>
  );
};

export default Login;
