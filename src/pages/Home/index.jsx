import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  startOpenDeleteDialog,
  startOpenDialog,
  startOpenEditDialog,
} from "../../actions/uiActions";
import {
  startActiveBusiness,
  startGetBusiness,
} from "../../actions/businessActions";
import CreateBusinnesModal from "../../components/CreateBusinnesModal";
import  DeleteBusinessModal  from "../../components/DeleteBusinessModal";
import BoardHeader from "../../components/BoardHeader";

const Home = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  let history = useHistory();

  // get business list from the state
  const { business } = useSelector((state) => state.business);
  // get error state
  const { error } = useSelector((state) => state.error);

  useEffect(() => {
    const getBusiness = () => dispatch(startGetBusiness());
    getBusiness();
  }, [dispatch]);

  // set and go to detail business
  const handleDetailBusiness = (item) => {
    history.push(`/business/${item.businessId}`);
    dispatch(startActiveBusiness(item));
  };

  // open dialog and create an empty object for new business
  const handleCreateBusiness = () => {
    dispatch(startOpenDialog());
  };

  // set and edit active business
  const handleEditBusiness = (item) => {
    dispatch(startActiveBusiness(item));
    dispatch(startOpenEditDialog());
  };

  // delete active business
  const handleDeleteBusiness = (item) => {
    dispatch(startActiveBusiness(item));
    dispatch(startOpenDeleteDialog());
  };

  return (
    <>
      <Container maxWidth="lg">
        {error ? (
          <div>{t("error.server")}</div>
        ) : (
          <>
            <BoardHeader
              handleCallback={handleCreateBusiness}
              textButton={t("buttons.createBusiness")}
            />
            <TableContainer
              component={Paper}
              className="animate__animated animate__fadeIn"
            >
              {business === null || business.length === 0 ? (
                <div>{t("error.noItems")}</div>
              ) : (
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">
                        {t("business.table.name")}
                      </TableCell>
                      <TableCell align="right">
                        {t("business.table.actions")}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {business.map((item, index) => (
                      <TableRow
                        key={index}
                        className="animate__animated animate__fadeIn"
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          onClick={() => handleDetailBusiness(item)}
                          className="cursor"
                        >
                          {item.name}
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            aria-label="delete"
                            onClick={() => handleDeleteBusiness(item)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton
                            aria-label="edit"
                            onClick={() => handleEditBusiness(item)}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
          </>
        )}
      </Container>
      <CreateBusinnesModal />
      <DeleteBusinessModal />
    </>
  );
};

export default Home;
