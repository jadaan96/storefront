import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { increment, office } from "../../Store/productReducer";
import { connect } from "react-redux";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { CART } from "../../Store/Actions";
function Product(props) {
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`https://api-js401.herokuapp.com/api/v1/products`)
      .then((data) => {
        props.increment(data.data.results);
        // props.office("food")
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.Cart]);

  const { theProducts, category } = props.Product;
  let rederPrduct = [];

  if (theProducts.length === 0) {
    rederPrduct = category;
  } else {
    rederPrduct = theProducts;
  }

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {rederPrduct.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    category: {card.category}
                  </Typography>
                  <Typography>product Name:{card.name}</Typography>
                  <Typography>price:{card.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      toast({
                        title: "Product Added To Cart Successfully.",
                        description: `${card.name}`,
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                      props.CART(card); // Call the props.CART function here
                    }}
                  >
                    Add To Cart
                  </Button>

                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  Product: state.product,
  Cart: state.cart,
});
const mapDispatchToProps = { increment, office, CART };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
