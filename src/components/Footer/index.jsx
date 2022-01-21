import React,{useState} from 'react';
import "./styles.css";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  // change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleClose();
  };
  // open menu language
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  // close menu language
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <footer className="footer">
      <a className="footer__link" href="/">
        Legal
      </a>
      <a className="footer__link" href="/">
        FAQ
      </a>
      <a className="footer__link" href="/">
        {t("footer.support")}
      </a>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage("en")}>En</MenuItem>
        <MenuItem onClick={() => changeLanguage("es")}>Es</MenuItem>
      </Menu>
    </footer>
  );
};

export default Footer;