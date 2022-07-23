import { PlayCircleFilled, Restaurant, Timer } from "@mui/icons-material";
import {
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

const HeroBanner = () => {
  return (
    <>
      <Card
        sx={{
          marginY: 5,
          boxShadow: "none",
          background: "#E7FAFE",
          borderRadius: "30px",
          minHeight: "500px",
          display: "flex",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", padding: 5 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Stack spacing={3}>
              <Typography variant="h2" fontWeight="600">
                Spicy delicious chicken wings
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip icon={<Timer />} label="1 Jam" />
                <Chip icon={<Restaurant />} label="8 Porsi" />
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
              <Box>
                <Typography fontWeight="700">Dwiki Krisna</Typography>
                <Typography fontWeight="500">15 March 2022</Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ height: "60px", textTransform: "none", paddingX: 5 }}
                endIcon={<PlayCircleFilled />}
              >
                View Recipes
              </Button>
            </Stack>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "50%" }}
          image="https://www.masakapahariini.com/wp-content/uploads/2022/03/salted-egg-chicken-752x440.jpg"
          alt="Live from space album cover"
        />
      </Card>
    </>
  );
};

export default HeroBanner;
