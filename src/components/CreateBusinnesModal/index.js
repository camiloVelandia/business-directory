import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button, 
    Box
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {  startClearActiveBusiness, startUpdateBusiness } from '../../actions/businessActions';
import { startCreateBusiness } from '../../actions/businessActions';
import { startCloseDialog, startCloseEditDialog } from '../../actions/uiActions';

// new business object
const newBusiness = {
    name: ''
};


const CreateBusinessModal = () => {
    const { t } = useTranslation();
    
    const dispatch = useDispatch();
    // get state and type for dialog
    const {openCreateDialog, openEditDialog} = useSelector( state => state.ui );
    // get active business
    const {activeBusiness} = useSelector( state => state.business );
    // error form
    const [formError, setFormError] = useState(false);
        
    // state for business form
    const [formBusiness, setFormBusiness] = useState(newBusiness);
    const {name} =  formBusiness;   
    
    useEffect(() => {     
        // if is edit type assing the active business      
        if (openEditDialog) {
            setFormBusiness(activeBusiness);        
        }else{
            setFormBusiness(newBusiness);
        }
    }, [activeBusiness, openEditDialog])

    // listening input text change
    const handleInputChange = ({ target }) => { 
        setFormError(false);       
        setFormBusiness({
            ...formBusiness,
            [target.name]: target.value
        });             
    }

    // close dialogs depends of type
    const handleClose = () => {
        setFormError(false);     
        if (openEditDialog) {
            dispatch( startCloseEditDialog());
        }else{
            dispatch( startCloseDialog());
        }
        setFormBusiness(newBusiness);
        dispatch( startClearActiveBusiness());
    };

    // set state and dispatch for api
    const handleSubmit = (e) => {
        e.preventDefault(); 
        //check type of submit
        if (openEditDialog) {
            // update business
            setFormBusiness({
                ...formBusiness
            });
            dispatch( startUpdateBusiness(formBusiness) );
        }else{
            // validate is null or empty
            if (name.trim() === '') {
                setFormError(true);
                return;
            }
            
            // create business
            setFormError(false);
            setFormBusiness({
                ...formBusiness
            });       
            dispatch( startCreateBusiness(formBusiness)); 
        }
        // reset form
        resetForm();
    } 

    const resetForm = () => {
        setFormError(false);
        setFormBusiness(newBusiness);
    }
    

    return (
        <Dialog open={openCreateDialog || openEditDialog} onClose={handleClose}>
            <Box component='form' onSubmit={handleSubmit} noValidate>                            
                <DialogTitle>{openCreateDialog ? t('business.dialog.createTitle') : t('business.dialog.editTitle')}</DialogTitle>
                <DialogContent >                         
                    <TextField
                        error={formError}
                        margin="dense"
                        label={t('business.dialog.placeholderName')}
                        type="text"
                        fullWidth
                        name='name'
                        variant="outlined"
                        helperText={formError ? "Name is required.": ''}
                        value={name}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('buttons.cancel')}</Button>
                    <Button type="submit">{openCreateDialog ? t('buttons.create') : t('buttons.save')}</Button>
                </DialogActions>
            </Box> 
      </Dialog>
    )
}

export default CreateBusinessModal;