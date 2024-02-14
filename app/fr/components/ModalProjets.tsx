import * as React from "react";
import clsx from "clsx";
import { styled, Box, Theme } from "@mui/system";
import { Modal } from "@mui/base/Modal";
import { Button } from "@mui/base/Button";
import Cross from "../../../public/xmark-solid.svg";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "./Carousel";

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

export default function NestedModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <article className="mx-auto w-[83%] mb-[3rem] lg:w-[44vw] z-10 border-light-brown border-[1px]">
      <TriggerButton
        onClick={handleOpen}
        className="relative w-[100%] h-[150px] lg:h-[300px] bg-light-brown normal-case drop-shadow-[5px_4px_4px_rgba(0,0,0,0.25)] rounded-none"
      >
        <span
          className="text-white block font-koho font-normal text-2xl absolute top-[50%] left-[50%] -translate-x-[50%]
        -translate-y-[50%]"
        >
          {props.data.title}
        </span>
        <span className="text-white block font-koho font-normal text-base absolute bottom-[5%] right-[3%]">
          Cliquez pour afficher les détails
        </span>
        <Image
          src={props.data.images[0]}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          alt={props.data.title}
          className="hover:opacity-0 object-cover object-top"
        />
      </TriggerButton>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            className="relative w-full flex justify-end"
          >
            <Image src={Cross} alt="Fermer la fenêtre" width={30} height={40} />
          </Button>
          <div className="lg:flex">
            <Carousel images={props.data.images} />
            <div className="lg:ml-5">
              <h3
                id="modal-modal-title"
                className="font-koho text-2xl font-normal text-center mt-4"
              >
                {props.data.title}
              </h3>
              <p className="font-koho text-xl font-normal text-center mt-1 mb-4">
                <time>{props.data.date}</time>
              </p>
              <Link
                href={props.data.lienGithub}
                rel="noopener noreferrer"
                target="_blank"
                className="underline font-bold text-light-brown"
              >
                Lien vers le dépôt Github
              </Link>
              <p className="mt-4 font-koho text-2xl font-normal">
                Compétences acquises :
              </p>
              <p className="text-base font-koho font-normal mt-2">
                {props.data.competences}
              </p>
            </div>
          </div>
          <div className="lg:flex gap-5">
            <div className="flex-[1_1_0]">
              <p className="font-koho text-2xl font-normal mt-2">
                Description :
              </p>
              <p
                id="modal-modal-description"
                className="text-base font-koho font-normal mt-2"
              >
                {props.data.description}
              </p>
            </div>
            <div className="flex-[1_1_0]">
              <p className="font-koho text-2xl font-normal mt-2">Enjeux :</p>
              <p className="text-base font-koho font-normal mt-2">
                {props.data.problemes}
              </p>
            </div>
          </div>
        </Box>
      </StyledModal>
    </article>
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
