import { useParams } from "react-router-dom";

import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Loading from "../components/Loading";
import { useAxios } from "../hooks/axioshook";
import Info from "../components/Info";
import { Restaurant, Timer } from "@mui/icons-material";
import ListForDetailRecipe from "../components/ListForDetailRecipe";
import OtherRecipes from "../components/OtherRecipes";

const RecipeDetail = () => {
  let { recipeId } = useParams();

  const { response, loading, error } = useAxios(`/recipe/${recipeId}`);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </>
    );
  }

  const { author, desc, ingredient, servings, step, thumb, times, title } =
    response.results;
  return (
    <Container
      sx={{
        marginTop: 5,
      }}
    >
      <Stack spacing={5}>
        {/* Judul Resep */}
        <Typography variant="h3" fontWeight={600}>
          {title}
        </Typography>

        {/* Sekilas Info */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Info
            icon={<Avatar alt={author.user} src="https://i.pravatar.cc/100" />}
            title={author.user}
            content={author.datePublished}
          />

          <Info icon={<Timer />} title="Cook Time" content={times} />
          <Info icon={<Restaurant />} title="Portion" content={servings} />
        </Stack>

        {/* Thumb  */}
        {/* <Grid container>
          <Grid item xs={8}> */}
        <Card
          sx={{
            maxWidth: "600px",
            boxShadow: "none",
            borderRadius: "30px",
            paddingRight: 5,
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "30px",
            }}
            component="img"
            image={thumb}
            alt="resep-sate-kambing-bumbu-kacang-kurma"
          />
        </Card>
        {/* </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                background: "#E7FAFE",
                height: "100%",
                borderRadius: "30px",
                boxShadow: "none",
              }}
            ></Card>
          </Grid>
        </Grid> */}

        <Box>
          <Typography
            variant="body"
            fontWeight={400}
            fontSize="16px"
            lineHeight="28px"
          >
            {desc}
          </Typography>
        </Box>

        {/* Bahan  */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            sx={{
              marginBottom: 5,
            }}
          >
            <Box
              sx={{
                paddingRight: 5,
              }}
            >
              <Box>
                <Typography
                  fontWeight={600}
                  variant="h4"
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Ingredient
                </Typography>
                <ListForDetailRecipe data={ingredient} />
              </Box>

              {/* Langkah */}
              <Box
                sx={{
                  marginTop: 5,
                }}
              >
                <Typography
                  fontWeight={600}
                  variant="h4"
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Directions
                </Typography>
                <ListForDetailRecipe data={step} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography
              fontWeight={600}
              variant="h4"
              sx={{
                marginBottom: 3,
              }}
            >
              Other Recipe
            </Typography>
            <OtherRecipes />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default RecipeDetail;
