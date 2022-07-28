import { Restaurant, Timer } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Info from "./Info";
import ListForDetailRecipe from "./ListForDetailRecipe";

const RecipeToPrint = ({ data }) => {
  const { author, desc, ingredient, servings, step, thumb, times, title } =
    data;
  return (
    <>
      <Box
        sx={{
          "@page": {
            size: "auto",
            margin: "15mm 10mm",
          },
        }}
      >
        <Stack spacing={5}>
          {/* Judul Resep */}
          <Typography variant="h3" fontWeight={600}>
            {title}
          </Typography>
          {/* Sekilas Info */}
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={4}
          >
            <Info
              icon={
                <Avatar alt={author.user} src="https://i.pravatar.cc/100" />
              }
              title={author.user}
              content={author.datePublished}
            />

            <Info icon={<Timer />} title="Cook Time" content={times} />
            <Info icon={<Restaurant />} title="Portion" content={servings} />
          </Stack>

          <Card
            sx={{
              maxWidth: "780px",
              boxShadow: "none",
              borderRadius: "0px",
              maxHeight: "440px",
            }}
          >
            <CardMedia
              sx={{
                borderRadius: "0px",
              }}
              component="img"
              image={thumb}
              alt={title}
            />
          </Card>

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

          <Box>
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
        </Stack>
      </Box>
    </>
  );
};

export default RecipeToPrint;
