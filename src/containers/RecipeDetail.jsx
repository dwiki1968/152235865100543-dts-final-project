import { useParams } from "react-router-dom";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Loading from "../components/Loading";
import { useAxios } from "../hooks/axioshook";

const RecipeDetail = () => {
  let { recipeId } = useParams();
  const { response, loading, error } = useAxios({
    method: "GET",
    url: `/recipe/${recipeId}`,
  });

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

  const { author, desc, ingredient, servings, step, thumb, times, title } =
    response.results;
  return (
    <Container
      sx={{
        marginTop: 5,
      }}
    >
      <Stack spacing={5}>
        <Typography variant="h3" fontWeight={600}>
          {title}
        </Typography>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={5}
        >
          <Box>
            <Typography fontWeight="700">{author.user}</Typography>
            <Typography fontWeight="500">{author.datePublished}</Typography>
          </Box>

          <Box>
            <Typography fontWeight="700">Cook Time</Typography>
            <Typography fontWeight="500">{times}</Typography>
          </Box>

          <Box>
            <Typography fontWeight="700">Portion</Typography>
            <Typography fontWeight="500">{servings}</Typography>
          </Box>
        </Stack>

        <Card
          sx={{
            maxWidth: "600px",
            boxShadow: "none",
            borderRadius: "30px",
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
        {/* <Card maxWidth="400px"></Card> */}

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

        <Box>
          <Typography fontWeight={600} variant="h4">
            ingredient
          </Typography>
          <Stack>
            {ingredient.map((item, index) => (
              <Typography
                key={index}
                variant="body"
                fontWeight={400}
                fontSize="16px"
                lineHeight="28px"
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography fontWeight={600} variant="h4">
            Directions
          </Typography>

          <Stack>
            {step.map((item, index) => (
              <Typography
                key={index}
                variant="body"
                fontWeight={400}
                fontSize="16px"
                lineHeight="28px"
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default RecipeDetail;
