import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import gymIcon from "../assets/icons/gym.png";
import { useDispatch } from "react-redux";
import { fetchHandler } from "../services";

const ScroolBarCard = ({ item }) => {
  const [selected, setSelected] = useState("all");

  const dispatch = useDispatch();

  const cardSelectedHandler = () => {
    setSelected(item);
    fetchHandler(item, dispatch);
  };

  // useEffect(() => {
  //   fetchHandler(selected, dispatch);
  // }, []);

  return (
    <Stack
      onClick={cardSelectedHandler}
      type="button"
      alignItems={"center"}
      justifyContent="center"
      sx={{
        boxShadow: 1,
        mx: "auto",
        p: "20px",
        backgroundColor: "#fff",
        width: {
          xs: "200px",
          //   sm: "200px",
          //   md: "200px",
          lg: "250px",
          xl: "270px",
        },
        height: {
          xs: "200px",
          //   sm: "200px",
          //   md: "200px",
          lg: "250px",
          xl: "270px",
        },
        borderTop: "2px solid ",

        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": {
          borderTop: "2px solid #FF2625",
        },
        borderTopColor: selected !== item ? "#FFF" : "#FF2625",
      }}
    >
      <img src={gymIcon} alt="gymIcon" style={{ width: "40px" }} />
      <Typography
        fontWeight="bold"
        fontSize="20px"
        color="#3a1212"
        textTransform="capitalize"
        mt="15px"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default ScroolBarCard;
