import React from "react";
import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ item, marginTop }) => {
  // console.log(item);
  return (
    <Box
    sx={{ boxShadow: "none",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '330px',
    margin: 'auto',
    marginTop
    }}>
      <Link to={`/channel/${item?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "red",
          }}
        >
          <CardMedia
            image={
              item?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={item?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: "2px",
              border: "5px solid blue",
            }}
          />
          <Typography variant="h6">
            {item?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: "red", ml: "5px" }} />
          </Typography>
          {item?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(item?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>)}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
