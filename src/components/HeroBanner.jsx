import { PlayCircleFilled, Restaurant, Timer } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useAxios } from "../hooks/axioshook";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

const HeroBanner = () => {
  const navigate = useNavigate();
  const { response, loading, error } = useAxios("/recipes-length/?limit=1");

  if (loading) {
    return <></>;
  }

  if (error) {
    return (
      <Container
        sx={{
          paddingY: 5,
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </Container>
    );
  }

  // console.log(response.results);
  const { title, key, portion, thumb, times } = response.results[0];
  return (
    <>
      <Card
        sx={{
          marginY: 5,
          boxShadow: "none",
          background: "#E7FAFE",
          borderRadius: "30px",
          // minHeight: "500px",
          display: "flex",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", padding: 5 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Stack spacing={3}>
              <Typography variant="h3" fontWeight="600">
                {title.replace("Resep", "").split(",")[0]}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {title.replace("Resep", "").split(",")[1]}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip icon={<Timer />} label={times} />
                <Chip icon={<Restaurant />} label={portion} />
              </Stack>
            </Stack>
          </CardContent>
          <CardActions>
            <Stack
              sx={{ width: "100%", paddingX: 1 }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="contained"
                sx={{ height: "60px", textTransform: "none", paddingX: 5 }}
                endIcon={<PlayCircleFilled />}
                onClick={() => {
                  navigate(`recipes/${key}`);
                }}
              >
                View Recipes
              </Button>
            </Stack>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "50%" }}
          image={thumb}
          alt={key}
        />
      </Card>
    </>
  );
};

export default HeroBanner;
