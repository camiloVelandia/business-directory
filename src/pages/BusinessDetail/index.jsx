import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Container,
  Table,
  TableCell,
  TableRow,
  TableBody,
  IconButton
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  startOpenDeleteDialog,
  startOpenDialog,
  startOpenEditDialog,
} from "../../actions/uiActions";
import { startActivePerson, startGetPeople } from "../../actions/personActions";
import { startGetABusiness } from "../../actions/businessActions";
import BoardHeader from "../../components/BoardHeader";
import  CreatePerson  from "../../components/CreatePersonModal";
import  DeletePerson  from "../../components/DeletePersonModal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const BusinessDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const dispatch = useDispatch();
  // get active business
  const { activeBusiness } = useSelector((state) => state.business);
  const { name } = activeBusiness;
  // get error state
  const { error } = useSelector((state) => state.error);
  // load filter person by business id
  useEffect(() => {
    const getActiveBusiness = () => dispatch(startGetABusiness(id));
    getActiveBusiness();
    const getPeople = () => dispatch(startGetPeople(id));
    getPeople();
  }, [dispatch, id]);
  // get list of people from the state
  const { persons } = useSelector((state) => state.people.people);
  // create person
  const handleCreatePerson = () => {
    dispatch(startOpenDialog());
  };
  // delete person
  const handleDelete = (person) => {
    dispatch(startActivePerson(person));
    dispatch(startOpenDeleteDialog());
  };
  // edit person
  const handleEdit = (person) => {
    dispatch(startActivePerson(person));
    dispatch(startOpenEditDialog());
  };

  return (
    <>
      <Container maxWidth="lg">
        {error ? (
          <div>{t("error.server")}</div>
        ) : (
          <>
            <BoardHeader
              title={name}
              handleCallback={handleCreatePerson}
              textButton={t("buttons.createPerson")}
            />
            <Table aria-label="simple table">
              <TableBody>
                {persons === undefined || persons.length === 0 ? (
                  <div>{t("error.noItems")}</div>
                ) : (
                  persons.map((person, index) => (
                    <TableRow
                      key={index}
                      className="animate__animated animate__fadeIn"
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="cursor"
                      >
                        {person.name}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className="cursor"
                      >
                        {person.role}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDelete(person)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEdit(person)}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </>
        )}
      </Container>

      <CreatePerson />
      <DeletePerson />
    </>
  );
};

export default BusinessDetails;
