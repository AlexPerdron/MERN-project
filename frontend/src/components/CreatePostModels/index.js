import React from 'react';
import { Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { modalState$ } from '../../redux/selectors';

export default function CreatePostModels() {
    //Calling API to get data
    const { isShow } = useSelector(modalState$);

    const body = <p>This is the body</p>;
    console.log({isShow});
    return (
        <div>
        <Modal open ={ isShow }>{body}</Modal>
        </div>
        
    )
}

