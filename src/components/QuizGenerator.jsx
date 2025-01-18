import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid2 } from '@mui/material';

const QuizGenerator = ({ questionData, onAnswer }) => {
    const [shuffledChoices, setShuffledChoices] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState(null);

    useEffect(() => {
        const shuffled = [...questionData.choices].sort(() => Math.random() - 0.5);
        setShuffledChoices(shuffled);
        setSelectedChoice(null);
    }, [questionData]);

    const handleChoice = (choice, isCorrect) => {
        if (selectedChoice === null) {
            setSelectedChoice(choice);
            setTimeout(() => onAnswer(isCorrect), 1000);
        }
    };

    return (
        <Box textAlign="center">
            <Typography variant="h5" gutterBottom>{questionData.question}</Typography>
            <Grid2 container spacing={2} justifyContent="center">
                {shuffledChoices.map(([text, isCorrect], index) => (
                    <Grid2 item key={index}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor:
                                selectedChoice === text
                                    ? isCorrect
                                        ? 'green'
                                        : 'red'
                                    : selectedChoice !== null && isCorrect
                                    ? 'green'
                                    : '',
                                color: 'white',
                            }}
                            onClick={() => handleChoice(text, isCorrect)}
                            disabled={selectedChoice !== null}
                        >
                            {text}
                        </Button>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default QuizGenerator;