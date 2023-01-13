import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ item }) => {
  const { id, snippet } = item;
  const { videoId } = id;
  // console.log(item);
  return (
    <Card
      sx={{
        border: "2px solid red",
        boxShadow: "none",
        // borderRadius: "30px",
        height: 300,
        backgroundColor: "black",
      }}
    >
      <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 140, }}/>
      </Link>

      <CardContent >
        <Link
          style={{ textDecoration: "none" }}
          to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
          <Typography variant="body2" fontWeight="bold" color="white">
            {snippet?.title || demoVideoTitle}
          </Typography>
        </Link>

        <Link
          style={{ textDecoration: "none", display: 'flex' }}
          to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" fontWeight="bold" color="#15d115">
            {snippet?.channelTitle || demoChannelTitle}
            </Typography>
            <CheckCircle
            sx={{fontSize: 15, color: "red", ml: "3px", mt: '0.2rem'}} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
