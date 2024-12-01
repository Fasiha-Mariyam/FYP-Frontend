
import React, { useState } from 'react'
// import ChatTop from './ChatTop';

import Box from '@mui/material/Box';
import CardHead from './CardHead';
import Messeges from './Messeges';
import GeneratedMsg from './GeneratedMsg';

function ChatContainer() {

    return (
        <>
            <Box
                sx={{
                    width: 500,
                    height: '93vh',
                    backgroundColor: 'rgb(85, 173, 109)',
                    padding: 2,
                    borderRadius: 4,
                }}
            >
                <CardHead />
                <GeneratedMsg/>
                <Messeges />
            </Box>
        </>
    )
}

export default ChatContainer;
