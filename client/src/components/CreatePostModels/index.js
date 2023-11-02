import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Modal, TextField, TextareaAutosize, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';

export default function CreatePostModels() {
    //Calling API to get data
    const { isShow } = useSelector(modalState$);
    const classes = useStyles();

    const body = (
        <div className ={classes.popup} id ="simple-modal-title">
            <IconButton display="flex" variant="contained" className={classes.closeButton}>
                <CloseIcon/>
            </IconButton>
            <Typography display='flex' variant='h6' align='center' className={classes.typography}>
                Create New Post
            </Typography>
            <form noValidate autoComplete='off' className={classes.form}>
                <TextField
                    className={classes.title}   
                    required
                    label ='Title'
                />
                <TextareaAutosize
                    className={classes.textarea}
                    maxRows={15}
                    minRows={10}
                    label ='Content...'
                />
            </form>
            <IconButton variant="contained" className={classes.doneButton}>
                <DoneIcon/>
            </IconButton>
        </div>
    );
    console.log({isShow});
    return (
        <div>
            <Modal open ={ isShow }>{body}</Modal>
        </div>
    )
}

