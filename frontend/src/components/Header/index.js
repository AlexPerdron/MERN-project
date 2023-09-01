import React from 'react';
// import { Image } from '@material-ui/core';
import image from '../../asset/header.jpg'

export default function Header() {
    return (
    <div style={{ backgroundImage: 'url(' + image + ')', backgroundSize: 'auto' }}
    >Background Image
    </div>
    );
    
}