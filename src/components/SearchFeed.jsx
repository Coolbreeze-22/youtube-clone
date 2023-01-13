import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components";

const SearchFeed = ( {selectedCategory, setSelectedCategory} ) => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" }
      }}>
      <Box
        sx={{ 
          borderRight: "1px solid red",
          px: { xs: 0, md: 2 },
          height: '100%'
        }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="Copyright" variant="body2" sx={{ mt: 1.5, color: "white" }} >
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
          Search results for: <span style={{ color: "red" }}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;