import React from "react";
import { Grid } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos }) => {
  // console.log(videos)
  
  if (!videos?.length) {
    return "Loading";
  }

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {videos.map((item, i) => {
        return (
          <Grid key={i} item xs={10} sm={6} md={3} lg={3} xl={2.4}>
            {item.id.videoId && <VideoCard item={item} />}
            {item.id.channelId && <ChannelCard item={item} />}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Videos;
