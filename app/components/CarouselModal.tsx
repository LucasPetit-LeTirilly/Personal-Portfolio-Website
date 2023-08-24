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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
    <div>
      <Button onClick={handleOpen}>
        <Image
          src={props.image}
          alt={`Capture d'écran numéro ${props.index} du site `}
          width={100}
          height={100}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose}>
            <Image
              src={Cross}
              alt={"Fermeture de la fenêtre de zoom sur l'image"}
              width={30}
              height={40}
            />
          </Button>
          <Image
            src={props.image}
            alt={`Capture d'écran numéro ${props.index} du site `}
            width={500}
            height={500}
          />
        </Box>
      </Modal>
    </div>
  );
}
