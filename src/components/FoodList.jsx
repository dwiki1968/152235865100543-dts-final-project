import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useAxios } from "../hooks/axioshook";
import FoodCard from "./FoodCard";
import Loading from "./Loading";

const FoodList = () => {
  const { response, loading, error, fetchData } = useAxios(
    "/recipes-length/?limit=9"
  );

  const handleRefreshData = () => {
    fetchData(`/recipes-length/?limit=9`);
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return <>eror ya</>;
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
          onClick={handleRefreshData}
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
