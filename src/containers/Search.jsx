import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FoodList from "../components/FoodList";

const Search = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            minHeight: "100px",
            padding: 10,
            borderRadius: "30px",
            background:
              " linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
            marginY: 5,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h3" fontWeight={600}>
              Cari Resep
            </Typography>
            <Typography variant="body">
              Masukkan kata kunci masakan untuk mencari resep yang anda
              inginkan.
            </Typography>
            <Stack spacing={2} direction="row">
              <TextField
                sx={{
                  minWidth: "400px",
                }}
              />
              <Button variant="contained">Submit</Button>
            </Stack>
          </Stack>
        </Box>

        <FoodList />
      </Container>
    </>
  );
};

export default Search;
