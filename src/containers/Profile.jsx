import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Profile = () => {
  return (
    <>
      <Container
        sx={{
          paddingY: 5,
        }}
      >
        <Typography variant="h3">Maaf,</Typography>
        <Typography variant="body">
          Halaman ini masih dalam pengembangan. 🔨
        </Typography>
      </Container>
    </>
  );
};

export default Profile;
