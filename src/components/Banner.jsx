import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Banner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: `url(hokusai.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: 4,
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" gutterBottom bgcolor={"black"}>
                    Welcome to Our Platform
                </Typography>
                <Typography variant="h6" component="p" gutterBottom bgcolor={"black"}>
                    Discover amazing features and improve your experience with us.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 3 }}
                >
                    Get Started
                </Button>
            </Container>
        </Box>
    );
};

export default Banner;
