import React from 'react'
import { CardContent, Typography, Card, CardActionArea} from '@mui/material';

function GeneratedMsg() {
  return (
    <Card sx={{ maxWidth: 265 , marginTop:2}}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Hello, How can I Assist you?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GeneratedMsg;
