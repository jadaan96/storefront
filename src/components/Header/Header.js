import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CART_REMOVE } from "../../Store/cartReducer.store";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // Maintain a separate state for item quantities
  const [itemQuantities, setItemQuantities] = useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleQuantityChange = (itemId, change) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + change,
    }));
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)} Remove this line to prevent closing on click
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {product.cart.cart.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DeleteIcon
                  onClick={() => {
                    dispatch(CART_REMOVE(item));
                  }}
                  style={{ cursor: "pointer", color: "tomato" }}
                />
              </ListItemIcon>
              <ListItemText sx={{ width: "101px" }} primary={item.name} />
              <ListItemIcon>
                <Button
                  onClick={() => handleQuantityChange(item._id, -1)}
                  startIcon={<RemoveIcon />}
                  size="small"
                  disabled={(itemQuantities[item._id] || 0) === 0}
                />
                {itemQuantities[item._id] || 0}
                <Button
                  onClick={() => handleQuantityChange(item._id, 1)}
                  startIcon={<AddIcon />}
                  size="small"
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
        <Link to={"/checkout"} >
          <Button onClick={() => {}}>CheckOut</Button>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "80%",
            }}
          >
            <CameraIcon sx={{ marginRight: 1 }} />
            <Typography variant="h6" color="inherit" noWrap>
              jadaan Store
            </Typography>
          </div>
          <ShoppingCartIcon
            sx={{ marginRight: 2, cursor: "pointer" }}
            onClick={toggleDrawer("right", true)}
          />
          <Typography variant="h6" color="inherit" noWrap>
            {product.cart.cart.length}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}

export default Header;
