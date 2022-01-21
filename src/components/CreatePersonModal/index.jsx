import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  startCloseDialog,
  startCloseEditDialog,
} from "../../actions/uiActions";
import {
  startClearActivePerson,
  startCreatePerson,
  startUpdatePerson,
} from "../../actions/personActions";

// new person object
const initialState = {
  name: "",
  role: "",
  phone: "",
  email: "",
  join_date: "",
};

const CreatePersonModal = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const dispatch = useDispatch();
  // get state and type for dialog
  const { openCreateDialog, openEditDialog } = useSelector((state) => state.ui);
  // get active person
  const { activePerson } = useSelector((state) => state.people);
  // state for person form
  const [formPerson, setFormPerson] = useState(initialState);
  const { name, role, email, phone, join_date } = formPerson;
  // error form
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    // if is edit type assing the active person
    if (openEditDialog) {
      setFormPerson(activePerson);
    } else {
      setFormPerson(initialState);
    }
  }, [activePerson, openEditDialog]);

  // listening input text change
  const handleInputChange = ({ target }) => {
    setFormError(false);
    setFormPerson({
      ...formPerson,
      [target.name]: target.value,
    });
  };

  // close dialog
  const handleClose = () => {
    if (openEditDialog) {
      dispatch(startCloseEditDialog());
    } else {
      dispatch(startCloseDialog());
    }
    resetForm();
    dispatch(startClearActivePerson());
  };

  // set state and dispatch for api
  const handleSubmit = (e) => {
    e.preventDefault();
    //check type of submit
    if (openEditDialog) {
      // validate is null or empty
      if (name.trim() === "" || role.trim() === "" || phone.trim() === "") {
        setFormError(true);
        return;
      }
      // update person
      setFormPerson({
        ...formPerson,
      });
      console.log(formPerson);
      dispatch(startUpdatePerson(id, formPerson));
    } else {
      // validate is null or empty
      if (name.trim() === "" || role.trim() === "" || phone.trim() === "") {
        setFormError(true);
        return;
      }
      // validate email

      // create person
      setFormError(false);
      setFormPerson({
        ...formPerson,
      });

      dispatch(startCreatePerson(id, formPerson));
    }

    resetForm();
  };

  const resetForm = () => {
    setFormError(false);
    setFormPerson(initialState);
  };

  return (
    <Dialog open={openCreateDialog || openEditDialog} onClose={handleClose}>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <DialogTitle>
          {openCreateDialog
            ? `${t("person.dialog.createTitle")}`
            : `${t("person.dialog.editTitle")}`}
        </DialogTitle>
        <DialogContent>
          <TextField
            error={formError}
            margin="dense"
            label={t("person.dialog.placeholderName")}
            type="text"
            fullWidth
            name="name"
            variant="outlined"
            value={name}
            onChange={handleInputChange}
          />
          <TextField
            error={formError}
            margin="dense"
            label={t("person.dialog.placeholderJob")}
            type="text"
            fullWidth
            name="role"
            variant="outlined"
            value={role}
            onChange={handleInputChange}
          />

          <TextField
            error={formError}
            margin="dense"
            label={t("person.dialog.placeholderEmail")}
            type="email"
            name="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={handleInputChange}
          />

          <TextField
            error={formError}
            margin="dense"
            label={t("person.dialog.placeholderPhone")}
            type="tel"
            name="phone"
            fullWidth
            variant="outlined"
            value={phone}
            onChange={handleInputChange}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={t("person.dialog.placeholderDate")}
              name="join_date"
              value={join_date}
              onChange={(parsedate) => {
                const join_date = format(parsedate, "yyyy-MM-dd");
                setFormPerson({ ...formPerson, join_date });
              }}
              format="yyyy-MM-dd"
              renderInput={(params) => (
                <TextField fullWidth error={formError} {...params} />
              )}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("buttons.cancel")}</Button>
          <Button type="submit">
            {openCreateDialog
              ? `${t("buttons.create")}`
              : `${t("buttons.save")}`}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CreatePersonModal;
