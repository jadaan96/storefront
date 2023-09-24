import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./details.css";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import {CART}from "../../Store/cartReducer.store"

function DetailsPage() {

    
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
        
  }, [product.cart]);
  console.log(product);
  const { id } = useParams();
  const productDetails = product.product.category.filter(
    (item) => item._id === id
  );
  const categoryProduct = product.product.category.filter(
    (item) => item.category === productDetails[0].category
  );
  console.log(categoryProduct, "product details");

  return (
    <div className="main-div">
      <Card className="details-dev" maxW="sm">
        <CardBody>
          <Heading
            fontFamily={"serif"}
            size="xl"
            display={"flex"}
            justifyContent={"center"}
            margin={"5px"}
            fontSize={"30px"}
          >
            {productDetails[0].name}
          </Heading>
          <Image
            height={"250px"}
            src={`https://source.unsplash.com/random?${productDetails[0].name}`}
            alt="Product"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text>in Stock: {productDetails[0].inStock}</Text>
            <Text color="blue.600" fontSize="2xl">
              Price: {productDetails[0].price}$
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              className="DButton"
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                dispatch(CART(productDetails[0]));
              }}
            >
              Buy now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <h1>Related Items</h1>
      <div className="related">
        {categoryProduct.map((item) => (
          <Card className="details-dev" maxW="sm" key={item._id}>
            <CardBody>
              <Heading
                fontFamily={"serif"}
                size="xl"
                display={"flex"}
                justifyContent={"center"}
                margin={"5px"}
                fontSize={"30px"}
              >
                {item.name}
              </Heading>
              <Image
                height={"250px"}
                src={`https://source.unsplash.com/random?${item.name}`}
                alt="Related Product"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text>in Stock: {item.inStock}</Text>
                <Text color="blue.600" fontSize="2xl">
                  Price: {item.price}$
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button className="DButton" variant="solid" colorScheme="blue" onClick={()=>{
                                    dispatch(CART(item));

                }}>
                  Buy now
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;
