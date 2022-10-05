import React from "react";
import {
  Modal,
  Backdrop,
  Slide,
  Box,
  Typography,
  SxProps,
} from "@mui/material";
import modalbg from "../assets/modalbg.jpg";

type modalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  heading: String;
  subString?: String;
  children: React.ReactNode;
  sx?: SxProps;
};

const style = {
  position: "fixed",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: "auto",
  minWidth: 350,
  height: "auto",
  minHeight: 200,
  bgcolor: "background.paper",
  border: "1px solid black",
  boxShadow: 24,
  paddingInline: 3,
  pt: 2,
  pb: 2,
  borderRadius: 2,
  backgroundImage: `url(${modalbg})`,
};

export default function CustomDialog(props: modalProps) {
  const handleClose = () => {
    props.setModalOpen(false);
  };

  return (
    <Modal
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
      open={props.modalOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props.sx,
      }}
    >
      <Slide in={props.modalOpen}>
        <Box sx={style}>
          <Typography id="custom-modal-title" variant="h5" component="h5">
            {props.heading}
          </Typography>
          <Typography
            id="custom-modal-description"
            component="div"
            variant="subtitle2"
          >
            {props.subString || ""}
          </Typography>
          {props.children}
        </Box>
      </Slide>
    </Modal>
  );
}
