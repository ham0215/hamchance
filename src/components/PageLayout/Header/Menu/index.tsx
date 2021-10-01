import React, { useRef, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'components/Link';

export default function MenuComponent() {
  const [open, setOpen] = useState<boolean>(false);
  const menuButtonRef = useRef(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
        ref={menuButtonRef}
      >
        <MenuIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={menuButtonRef.current} keepMounted open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href="/blogs">Blogs</Link>
        </MenuItem>
      </Menu>
    </>
  );
}
