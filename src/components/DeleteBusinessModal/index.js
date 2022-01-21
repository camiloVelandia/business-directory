import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button, 
    Box
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { startClearActiveBusiness, startDeleteBusiness } from '../../actions/businessActions';
import { startCloseDeleteDialog } from '../../actions/uiActions';


const DeleteBusinessModal = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    // get state and type for dialog
    const { openDeleteDialog} = useSelector( state => state.ui );
    const {activeBusiness} = useSelector( state => state.business );
    const { businessId, name} = activeBusiness;

    // close dialog
    const handleClose = () => {
        dispatch( startCloseDeleteDialog());
        dispatch( startClearActiveBusiness());
    };

    // set state and dispatch for api
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startDeleteBusiness(businessId));
    }

    return (
        <Dialog 
            open={openDeleteDialog} 
            onClose={handleClose} 
            >
            <Box component='form' onSubmit={handleSubmit} noValidate>                            
                <DialogTitle>{t('business.dialog.deleteTitle')}</DialogTitle>
                <DialogContent >      
                    <Typography gutterBottom>
                        {`${t('business.dialog.deleteText')} ${name !== undefined ? name : ''}`} ?                    
                    </Typography>                  
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('buttons.cancel')}</Button>
                    <Button type="submit">{t('buttons.remove')}</Button>
                </DialogActions>
            </Box> 
    </Dialog>
    )
}

export default DeleteBusinessModal;