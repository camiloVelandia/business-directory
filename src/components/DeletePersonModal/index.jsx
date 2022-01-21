import React from "react";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  startClearActivePerson,
  startDeletePerson,
} from "../../actions/personActions";
import { startCloseDeleteDialog } from "../../actions/uiActions";

const DeletePersonModal = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const dispatch = useDispatch();

  // get state and type for dialog
  const { openDeleteDialog } = useSelector((state) => state.ui);
  const { activePerson } = useSelector((state) => state.people);
  const { personId, name } = activePerson;

  // close dialog
  const handleClose = () => {
    dispatch(startCloseDeleteDialog());
    dispatch(startClearActivePerson());
  };

  // set state and dispatch for api
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startDeletePerson(id, personId));
    dispatch(startCloseDeleteDialog());
    dispatch(startClearActivePerson());
  };

  return (
    <Dialog open={openDeleteDialog} onClose={handleClose}>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <DialogTitle>{t("person.dialog.deleteTitle")}</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            {`${t("person.dialog.deleteText")} ${
              name !== undefined ? name : ""
            }`}{" "}
            ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("buttons.cancel")}</Button>
          <Button type="submit">{t("buttons.delete")}</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeletePersonModal;
