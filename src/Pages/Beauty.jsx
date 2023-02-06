import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/appReducer/action";
import "../Styles/Products.css";
import { Box, Grid, Select, Skeleton, SkeletonText } from "@chakra-ui/react";
import { SingleProductCard } from "../Components/ProductPageComponents/SingleProductCard";
import { BeautyCarousel } from "../Components/ProductPageComponents/BeautyCarousel";
import Footer from "./FooterPage";

const Beauty = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.appReducer.allProducts);
  const loading = useSelector((store) => store.appReducer.isLoadingAllProduct);

  const filterHandle = (value) => {
    dispatch(getAllProducts(value))
    console.log(value);
  }

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [products.length, dispatch]);


  if (loading) {
    return (
      <Grid
        w={{
          base: "100%",
          md: "90%",
          lg: "80%",
        }}
        m="auto"
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap="5"
        p="5"
        pt="10%"
      >
        {new Array(20).fill(0).map((e, i) => (
          <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
            <Skeleton size="10" h="180px" />
            <SkeletonText
              w="80%"
              m="auto"
              mb="20px"
              mt="4"
              noOfLines={4}
              spacing="2"
            />
          </Box>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <div className="ProductContainer">
        <section>
          <BeautyCarousel />
        </section>
        <section>
          <div className="sidebarAtProductPage">
            <Box display="flex" margin="auto" marginTop="0%" width="90%" flexDirection="column">

              <Box display="flex" flexDirection="column" justifyContent="left">
                <Box fontWeight="bold" marginTop="7%">Filter</Box>
                <Select
                  placeholder="Price ₹"
                  fontWeight="500"
                  fontSize={{ base: "70%", sm: "70%", md: "70%", lg: "80%", xl: "90%" }}
                  padding="0.1%"
                  onChange={(e) => filterHandle(e.target.value)}
                >
                  <option value="price_low=0&&price_high=300">Below 300</option>
                  <option value="price_low=300&&price_high=600">300 - 600</option>
                  <option value="price_low=600&&price_high=1000">600 - 1000</option>
                  <option value="price_low=1000&&price_high=1500">1000 - 1500</option>
                  <option value="price_low=1500&&price_high=2000">1500 - 2000</option>
                  <option value="price_low=2000&&price_high=5000">2000 - 5000</option>
                </Select>
                <Select
                  fontWeight="500"
                  fontSize={{ base: "70%", sm: "70%", md: "70%", lg: "80%", xl: "90%" }}
                  padding="0.1%"
                  onChange={(e) => filterHandle(e.target.value)}
                >
                  <option value="">Popularity</option>
                  <option value="asc" >Price-Low to High</option>
                  <option value="desc"  >Price-High to Low</option>
                </Select>
              </Box>
            </Box>
          </div>
          {
            products.length > 0 &&
            <div className="mainBoxAtProductPage">
              {
                products
                  .filter((item) => item.category === "beauty")
                  .map((ele) => {
                    return (
                      <SingleProductCard
                        key={ele._id}
                        id={ele._id}
                        brand={ele.brand}
                        name={ele.name}
                        mrp={ele.mrp}
                        price={ele.price}
                        quantity={ele.quantity}
                        weight={ele.weight}
                        category={ele.category}
                        ImgSrc={ele.ImgSrc}
                        sasta={ele.sasta}
                        packet={ele.packet}
                        isavailable={ele.isavailable}
                        offers={ele.offers}
                      />
                    );
                  })
              }
            </div>
          }
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export { Beauty };
