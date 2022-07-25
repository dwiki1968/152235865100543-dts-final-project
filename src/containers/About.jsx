import { Box, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            minHeight: "100px",
            padding: 5,
            borderRadius: "30px",
            background:
              " linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
            marginY: 5,
          }}
        >
          <Stack spacing={1}>
            <Typography>
              <strong>Resepku</strong> merupakan project yang dikembangkan dalam
              rangka memenuhi syarat kelulusan course react js yang diadakan
              oleh Kominfo yaitu{" "}
              <Link href="https://digitalent.kominfo.go.id/">digitalent</Link>.
              Mohon do'a kawan-kawan agar saya bisa lulus course ini ya 😁.
            </Typography>
            <Typography>
              Kunjungi github kami di{" "}
              <Link href="https://github.com/dwiki1968">@dwiki1968</Link>
            </Typography>
            <Typography>Special Thanks to 😘: </Typography>
            <Typography>
              API Provider --{" "}
              <Link href="https://github.com/tomorisakura/unofficial-masakapahariini-api">
                @tomorisakura
              </Link>
            </Typography>
            <Typography>
              UI Design Provider --{" "}
              <Link href="https://www.flowbase.co/">flowbase.co</Link>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default About;
