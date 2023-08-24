import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Cross from "../../public/xmark-solid.svg";
import Image from "next/image";
import RectangleGris from "../../public/rectangle-gris.png";
import { Carousel } from "./Carousel";

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
  p: 4,
  outline: 0,
  overflowY: "scroll",
};

interface Data {
  title: string;
  images: string[];
  date: string;
  lienGithub: string;
  description: string;
  competences: string;
  problemes: string;
}

interface Props {
  data: Data;
}

export default function BasicModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <article className="mx-auto w-[83%] mb-[3rem]">
      <Button onClick={handleOpen} className="w-[100%]">
        <Image className="w-[100%]" src={RectangleGris} alt="Projet" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose}>
            <Image src={Cross} alt="Fermer la fenêtre" width={30} height={40} />
          </Button>
          <Carousel/>

          <Image
            src={props.data.images[0]}
            alt="Lien vers la page github de Lucas Petit - Le Tirilly"
            className=""
            width={1000}
            height={1000}
          />
          <h3 id="modal-modal-title">{props.data.title}</h3>
          <p>
            <time>{props.data.date}</time>
          </p>
          <p>{props.data.lienGithub}</p>
          <p>{props.data.competences}</p>
          <p id="modal-modal-description">{props.data.description}</p>
          <p>{props.data.problemes}</p>
        </Box>
      </Modal>
    </article>
  );
}
