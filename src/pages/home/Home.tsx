import { Typography } from "@mui/material";
import React, { useState } from "react";
import HomeNavbar from "./HomeNavbar";
import { HomeBackground, HomeCenterPart, LinkPart } from "./HomeStyling";
import Grid from "@mui/material/Unstable_Grid2";
import SignInModal from "./SignInModal";

export default function Home() {
  const [openSignInModal, setOpenSignInModal] = useState<boolean>(false);

  const onSignIn = (values: object) => {};

  return (
    <>
      <HomeBackground>
        <HomeNavbar onLoginClick={() => setOpenSignInModal(true)} />
        <HomeCenterPart>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ flex: 1, height: "100%" }}
            direction="row"
          >
            <Grid
              xs={6}
              sx={{
                height: "100%",
                backgroundColor: "yellow",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                component="div"
                sx={{
                  textAlign: "right",
                  color: "#80cbc4",
                  height: "auto",
                }}
              >
                {"AN\nUNUSUALL\nMEDIA"}
              </Typography>
            </Grid>
            <Grid xs={5}>
              <Typography
                variant="h6"
                component="div"
                justifyContent="center"
                alignItems="center"
                sx={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  height: "60%",
                  textAlign: "center",
                  paddingBottom: 3,
                  color: "yellow",
                }}
              >
                Have you ever thought to see others post without following. Like
                without any connections. Then this is the place.
              </Typography>
            </Grid>
            <Grid xs={1}>
              <LinkPart>Who created this ?</LinkPart>
              <LinkPart marginTop="30px">Why created this ?</LinkPart>
            </Grid>
          </Grid>
        </HomeCenterPart>
      </HomeBackground>
      <SignInModal
        modalOpen={openSignInModal}
        setModalOpen={setOpenSignInModal}
        onSubmit={onSignIn}
      />
    </>
  );
}
