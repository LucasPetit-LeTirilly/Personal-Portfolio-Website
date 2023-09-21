import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Link from "next/link";
import CollapseMenuLogo from "../../../public/bars-solid.svg";

type Anchor = "top" | "left" | "bottom" | "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const linkIds = [
    "#recent-project",
    "#skills",
    "#contact",
    process.env.NEXT_PUBLIC_WEBSITE_FRENCH_URL,
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Recent Projects", "Skills", "Contact", "In French"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Link href={linkIds[index]}>
                  <ListItemText primary={text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ),
        )}
      </List>
    </Box>
  );

  return (
    <div className="sm:hidden">
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Image
              src={CollapseMenuLogo}
              alt="Open the navigation bar"
              width={40}
              height={45}
            />
          </Button>
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
