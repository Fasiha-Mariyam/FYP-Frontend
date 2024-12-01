import React from 'react';
import backgroundImage from '../../assets/images/backgroundimg.jpg';
import { useMediaQuery } from '@mui/material';

const BackgroundImage = () => {
    const is900Less = useMediaQuery("(max-width:900px)");

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: is900Less ? '90vh' : '70vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    return <div style={backgroundStyle}></div>;
};

export default BackgroundImage;
