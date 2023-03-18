import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import gymIcon from "../assets/gym.png";
import { useDispatch } from "react-redux";
import { fetchHandler } from "../services";

const ScroolBarCard = ({ item }) => {
  const [selected, setSelected] = useState("all");

  console.log(item === selected);

  const dispatch = useDispatch();

  const cardSelectedHandler = (e) => {
    fetchHandler(item, dispatch);
    setSelected(item);
  };

  useEffect(() => {
    fetchHandler(selected, dispatch);
  }, []);

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
        borderTop: "2px solid #fff",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": {
          borderTop: "2px solid #f06d22",
        },
      }}
    >
      <img src={gymIcon} alt="gymIcon" style={{ width: "70px" }} />
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
