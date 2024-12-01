import React from 'react'
import {Card, Avatar, CardHeader, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function CardHead() {
 
     const currentDate = new Date();
     const formattedDate = currentDate.toLocaleDateString('en-US', {
         month: 'long',
         day: 'numeric',
         year: 'numeric',
     });
    return (
            <Card sx={{ maxWidth: 595 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
                            D
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={<Typography variant="h5">General Query ChatBot</Typography>}
                    subheader={formattedDate}
                />
            </Card>
    )
}

export default CardHead;




