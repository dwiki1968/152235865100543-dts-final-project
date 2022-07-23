import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useAxios } from "../hooks/axioshook";
import FoodCard from "./FoodCard";
import Loading from "./Loading";

const FoodList = () => {
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "/recipes-length/?limit=8",
  });

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          For You
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            boxShadow: "none",
            textTransform: "none",
            height: "60px",
            paddingX: 5,
          }}
        >
          Refresh
        </Button>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {response.results.map((data) => (
          <FoodCard key={data.key} data={data} />
        ))}
      </Box>
    </>
  );
};

export default FoodList;
