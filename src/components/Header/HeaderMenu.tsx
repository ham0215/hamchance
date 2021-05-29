import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const MenuButton = styled(IconButton)`
  margin-right: 2px;
`;

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const menuButtonRef = useRef(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} ref={menuButtonRef}>
        <MenuIcon />
      </MenuButton>
      <Menu id="simple-menu" anchorEl={menuButtonRef.current} keepMounted open={open} onClose={handleClose}>
        <MenuItem component={Link} to="/devtips" onClick={handleClose}>
          システム開発Tips集
        </MenuItem>
        <MenuItem component={Link} to="/blogs" onClick={handleClose}>
          Blogs
        </MenuItem>
      </Menu>
    </div>
  );
}
