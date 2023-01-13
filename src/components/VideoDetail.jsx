import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();

  // console.log(videoDetail)
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setRelatedVideos(data.items);
      }
    );
  }, [id]);
  // return}

  if (!videoDetail?.snippet) {
    return "Loading";
  }
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} >
        <Box>
          <Box sx={{ width: "100%", position: {xs: "fixed", sm: "fixed", md: "sticky"}, top: "86px", backgroundColor: {xs: 'black'} }}>
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              // width= {{xs:"100%", sm: "100%", md: "500px"}} continue here
            />
            <Typography variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#15d115" }}
              py={1}
              px={2}
            >
              <Link
                to={`/channel/${videoDetail?.snippet?.channelId}`}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <Typography
                  color="#15d115"
                  variant={{ sm: "subtitle", md: "h6" }}
                >
                  {videoDetail?.snippet?.channelTitle}
                </Typography>
                <CheckCircle
                  sx={{ fontSize: "15px", color: "red", ml: "5px", mt: "3px" }}
                />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1">
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1">
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          </Box>
        <Box px={2} paddingTop={{xs: "500px", sm: "500px", md: "0px"}}>
          <Videos videos={relatedVideos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
