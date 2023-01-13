import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = ({ selectedCategory, setSelectedCategory }) => {

  const [videos, setVideos] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("CoolBreeze");
  
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid red",
          px: { xs: 0, md: 2 },
          height: "100%",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="Copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          Copyright 2022 CoolBreeze
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "red" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
