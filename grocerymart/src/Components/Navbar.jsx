import {
  Box,
  Flex,
  Input,
  Image,
} from "@chakra-ui/react";
import logo from "../Assets/redCart.png";
import cart from "../Assets/cart.jpg";
import user from "../Assets/user.png";
import SignUp from "../Modal/SignUp";
import Login from "../Modal/Login";
import { ProductsMenu } from "../Menu/ProductsMenu";
import { CategoryMenu } from "../Menu/CategoryMenu";
import  MobileScreenMenu  from "../Drawer/MobileScreenMenu";
import { Link } from "react-router-dom";
import { ProfileMenu } from "../Menu/ProfileMenu";

export default function Navbar() {

  return (
    <Box width="100%" margin="auto">
      <Flex
        paddingRight="2%"
        paddingLeft="2%"
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
        alignItems="center"
        height="auto"
      >
        <Box width={{ base: "30%", sm: "25%", md: "20%", lg: "15%" }}>
          <Image width="100%" src={logo} alt="logo" />
        </Box>
        <Box
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          width={{ base: "40%", sm: "50%", md: "60%", lg: "60%" }}
        >
          <Flex width="100%" alignItems="center">
            <Box
              marginRight="3%"
              width={{ base: "0%", sm: "40%", md: "30%", lg: "30%" }}
            >
              <Flex
                justifyContent="space-around"
                alignItems="center"
                flexDirection="row"
                width={{ base: "0%", sm: "100%", md: "100%", lg: "100%" }}
              >
                <Flex
                  justifyContent="space-around"
                  alignItems="center"
                  width={{ base: "0%", sm: "100%", md: "100%", lg: "100%" }}
                  display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }}
                >
                  <Box
                    fontSize={{
                      base: "70%",
                      sm: "70%",
                      md: "100%",
                      lg: "120%",
                    }}
                  >
                    <ProductsMenu/>
                  </Box>
                  <Box
                    fontSize={{
                      base: "70%",
                      sm: "70%",
                      md: "100%",
                      lg: "120%",
                    }}
                  >
                    <CategoryMenu/>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Box
              display={{ base: "none", sm: "block", md: "block", lg: "block" }}
              width={{ base: "90%", sm: "57%", md: "60%", lg: "60%" }}
            >
              <Input
                marginTop="5%"
                marginBottom="5%"
                variant="outline"
                placeholder="Search"
                size={{ base: "sm", sm: "md", md: "md", lg: "lg" }}
              />
            </Box>
          </Flex>
        </Box>
        <Box width={{ base: "40%", sm: "30%", md: "20%", lg: "20%" }}>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box>
              <Login/>
            </Box>
            <Box>
              <SignUp/>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex
        flexDirection="row"
        paddingRight="2%"
        paddingLeft="2%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="block" width="10%">
          <Box
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <MobileScreenMenu/>
          </Box>
        </Box>
        <Box width={{ base: "30%", sm: "20%", md: "12%", lg: "10%" }}>
          <Flex
            flexDirection="row"
            alignItems="center"
            width="100%"
            border="1px solid blue"
            bg={"blue.400"}
            borderRadius="10px"
            justifyContent="space-around"
          >
            <Box width="30%">
              <Link to="/cart">
              <Image
                margin="3%"
                borderRadius="50%"
                width="100%"
                src={cart}
                alt="Cart"
              />
              </Link>
            </Box>
            <Box width="30%">
              <ProfileMenu/>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
