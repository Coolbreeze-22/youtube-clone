import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  // console.log(channelDetail, channelVideos);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromApi(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );

        setChannelVideos(videosData?.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResults();
  }, [id]);

  // below is the simple and precise way of fetching or getRatingUtilityClass. And above is same thing but more standard as try and catch were added
  // useEffect(() => {
  //   const fetchResults = async () => {

  //     const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

  //     setChannelDetail(data?.items[0]);

  //     const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

  //     setChannelVideos(videosData?.items);
  //   };

  //   fetchResults();
  // }, [id]);

  // useEffect(() => {
  //   fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
  //     setChannelDetail(data?.items[0]);
  //   });

  //   fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
  //     (data) => {
  //       setChannelVideos(data?.items);
  //     }
  //   );
  // }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            height: "300px",
            width: "100%",
          }}
        />

        <ChannelCard item={channelDetail} marginTop="-110px" />
      </Box>

      <div>ChannelDetail {id}</div>

      <Box p={5}>
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
