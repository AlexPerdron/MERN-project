import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/Header';
import PostList from '../components/PostList';
import Signin from '../components/Signin';
import NavBar from '../components/NavBar';

export default function HomePage() {
   return ( 
    <Container maxWidth='lg' className={{}}>
        <Header />
        <NavBar />
        <Signin />
    </Container>
    )
}