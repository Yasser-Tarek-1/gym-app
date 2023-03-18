import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const Videos = ({ videos, name }) => {
  return (
    <Box
      p="20px"
      sx={{
        margin: {
          lg: "70px 0",
          xs: "20px 0",
        },
      }}
    >
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: "bold",
          fontSize: { lg: "40px", xs: "26px" },
        }}
      >
        Watch <span style={{ color: "#f06d22" }}>{name || "Gym"}</span> Exercise
        Videos
      </Typography>
      {videos.length ? (
        <Stack
          mt="50px"
          flexWrap="wrap"
          alignItems="center"
          flexDirection="row"
          sx={{
            gap: "50px",
          }}
        >
          {videos
            ?.slice(0, 5)
            .map(
              (
                { video: { videoId, thumbnails, title, channelName } },
                idex
              ) => {
                return (
                  <a
                    key={idex}
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={thumbnails[0].url} alt={title} />
                    <Typography
                      sx={{ fontWeight: "bold", mt: "10px", color: "#000" }}
                    >
                      {title}
                    </Typography>
                    <Typography sx={{ color: "#000", fontSize: "12px" }}>
                      {channelName}
                    </Typography>
                  </a>
                );
              }
            )}
        </Stack>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Videos;
