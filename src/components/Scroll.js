import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { FixedSizeList } from "react-window";
import Divider from "@mui/material/Divider";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Collapse, Container } from "@mui/material";

function Row(props) {
  const { index } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <ListItem
      key={index}
      component="li"
      disablePadding
      onClick={() => setExpanded((prev) => !prev)}
      sx={{
        flexDirection: "column",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <FolderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={`Product List  ${index + 1}`} />
      </ListItemButton>
      {expanded && (
        <Collapse
          in={expanded}
          sx={{
            background: "rgb(240, 240, 239);",
          }}
        >
          <ul>
            {Array.from({ length: 5 }).map((_, i) => (
              <ListItemButton key={i}>
                <ListItemText primary={`Product List  ${index + 1}`} />
              </ListItemButton>
            ))}
          </ul>
        </Collapse>
      )}
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <>
      <Box>
        {Array.from({ length: 1000 }).map((_, i) => (
          <Row key={i} index={i} />
        ))}
      </Box>
      <Divider />

      {/* <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <AddCircleOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton> */}
    </>
  );
}
