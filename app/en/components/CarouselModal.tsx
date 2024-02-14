import React from "react";
import clsx from "clsx";
import { styled, Box, Theme } from "@mui/system";
import { Modal } from "@mui/base/Modal";
import { Button } from "@mui/base/Button";
import Image from "next/image";
import Cross from "../../../public/xmark-solid.svg";

interface Props {
  image: string;
  index: number;
}

export default function CarouselModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="relative h-[35vh] lg:h-[45vh] flex-[1_1_0]">
      {/* <TriggerButton
        onClick={handleOpen}
        className="relative block w-full h-full"
      >
        <Image
          src={props.image}
          alt={`Capture d'écran numéro ${props.index + 1} du site `}
          sizes="50vw"
          fill={true}
          className="object-cover object-top"
        />
      </TriggerButton> */}
      <Image
        src={props.image}
        alt={`Screen capture number ${props.index + 1} of the app `}
        sizes="50vw"
        fill={true}
        className="object-cover object-left-top"
      />
      {/* <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: StyledBackdrop }}
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
          <div className="relative block w-full h-full">
            <Image
              src={props.image}
              sizes="100vw"
              alt={`Capture d'écran numéro ${props.index + 1} du site `}
              fill={true}
            />
          </div>
        </Box>
      </StyledModal> */}
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.displayName = "Backdrop";

const blue = {
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
  width: "90%",
  height: "90%",
  borderRadius: "12px",
  padding: "16px 32px 24px 32px",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  overflowY: "scroll",
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === "dark" ? "#000" : "#383838"
  }`,
});

const TriggerButton = styled("button")(
  ({ theme }) => `
  box-sizing: border-box;
  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `,
);
