import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import PostList from '../components/PostList';
import Header from '../components/Header'
import CreatePostModels from '../components/CreatePostModels';
import useStyles from './HomePageStyles';
import { showModal } from '../redux/actions';


export default function HomePage() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const openCreatePostModal = React.useCallback(()=>{
        dispatch(showModal())
    },[dispatch])

    return (
        <Container maxWidth='l00vw' className={classes.container}>
            <Header />
            <PostList margin='15px' />
            <CreatePostModels />
            <Fab 
                className={classes.fab} onClick={openCreatePostModal}>
                <AddIcon />
            </Fab>
        </Container>
    )
}