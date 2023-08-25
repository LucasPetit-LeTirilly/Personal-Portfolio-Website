import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import Cross from "../../public/xmark-solid.svg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  pl: "50px",
  pr: "40px",
  pt: 0,
  pb: 8,
};

interface Props {
  image: string;
  index: number;
}

export default function CarouselModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="h-[35vh] lg:h-[45vh]">
      <Button onClick={handleOpen} className="w-full h-full">
        <Image
          src={props.image}
          alt={`Capture d'écran numéro ${props.index} du site `}
          fill={true}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            className="w-full flex justify-end z-10"
          >
            <Image
              src={Cross}
              alt={"Fermeture de la fenêtre de zoom sur l'image"}
              width={30}
              height={40}
            />
          </Button>
          <div className="relative w-full h-full">
            <Image
              src={props.image}
              alt={`Capture d'écran numéro ${props.index} du site `}
              fill={true}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
