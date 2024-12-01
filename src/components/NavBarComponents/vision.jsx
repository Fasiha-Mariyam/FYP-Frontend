import React from 'react';
import { Container, Grid, Typography, CardContent } from '@mui/material';
import './vision.css';
import image from '../../assets/images/image3.jpeg';

function OurVisionPage() {
    return (
        <Container maxWidth="lg" sx={{ padding: 0 , margin:0}}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="h3" className="green-heading underline" style={{ fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center', marginTop: '30px' }}>
                        Our Vision
                    </Typography>
                </Grid>
                <Grid container spacing={0} sx={{ alignItems: 'flex-start', justifyContent: 'space-between', padding: '20px' }}>
                    
                    {/* Content Grid Item */}
                    <Grid item xs={12} sm={6}>
                        <CardContent>
                            <Typography variant="h5" className="animated-heading" style={{ fontFamily: 'Roboto', marginBottom: '10px' }}>
                            Vision Statement
                            </Typography>
                            <Typography variant="body1">
                            Our vision for the Duet Smart Transport Project is to revolutionize campus transportation at Duet University by leveraging innovative technology and sustainable practices. We aspire to create a future where every member of the Duet community can enjoy seamless, efficient, and environmentally friendly mobility solutions.<br/><br/>
                        At Duet University, our vision for the future of campus transportation is one of seamless connectivity and enhanced accessibility. We envision a campus where every student, faculty member, and visitor can navigate our vast grounds with ease and efficiency, free from the constraints of traditional transportation hassles.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={image} alt="Duet Smart Travel " style={{ width: '100%', height: '100%', objectFit: 'contained' }} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default OurVisionPage;