import React from 'react';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Header from '../components/Header';
import PostList from '../components/PostList';
import useStyles from './HomePageStyles';

export default function HomePage() {
    const classes = useStyles();

    return ( 
        <Container maxWidth='lg' >
            <Header />
            <PostList />
            <Fab 
                color ='red'className={classes.fab}>
                <AddIcon />
            </Fab>
        </Container>
        )
}