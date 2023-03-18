import React from "react";
import { Stack, Typography, Box } from "@mui/material";

import badyPartImg from "../assets/body-part.png";
import targetImg from "../assets/target.png";
import equipmentImg from "../assets/equipment.png";

const Detail = ({ bodyPart, equipment, gifUrl, name, target }) => {
  const items = [
    { id: 1, img: badyPartImg, text: bodyPart },
    { id: 2, img: equipmentImg, text: equipment },
    { id: 3, img: targetImg, text: target },
  ];

  return (
    <Stack
      sx={{
        flexDirection: {
          lg: "row",
        },

        p: "20px",
        alignItems: "center",
        gap: {
          lg: "120px",
          xs: "20px",
        },
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-img" />
      <Stack gap="20px">
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: { lg: "40px", xs: "26px" },
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: { lg: "22px", xs: "20px" },
          }}
          variant="h6"
        >
          Exercise strengthens the body. {name}, One of the best {target}{" "}
          exercises. Help you improve your mood and health
        </Typography>
        <Box>
          {items.map(({ id, img, text }) => {
            return (
              <Stack
                key={id}
                direction="row"
                my="30px"
                alignItems="center"
                gap="20px"
              >
                <img src={img} alt={text} className="detail-imgs" />
                <Typography fontSize="20px" textTransform="capitalize">
                  {text}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Detail;
