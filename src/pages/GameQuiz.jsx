import React, { useState } from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";
import QuizGenerator from "../components/QuizGenerator";

const rippleSrc = "./glacier.jpg";

const questions = [
    {
        question:
            "What is the primary goal of Sustainable Development Goal (SDG 6) related to water?",
        choices: [
            [
                "To minimize water contamination through improved water sources",
                1,
            ],
            ["To increase the use of rainwater collection systems only", 0],
            ["To promote bottled water as the main water source", 0],
            ["To replace all water sources with piped water systems", 0],
        ],
    },
    {
        question:
            "Which of the following is considered an improved water source according to the WHO?",
        choices: [
            ["Protected wells and boreholes with hand pumps", 1],
            ["Uncovered wells in rural areas", 0],
            ["Rivers and streams used directly for drinking", 0],
            ["Rainwater collection without proper treatment", 0],
        ],
    },
    {
        question:
            "What percentage of the Earth's total water is accessible for human use?",
        choices: [
            ["Less than 1%", 1],
            ["Around 2.5%", 0],
            ["About 10%", 0],
            ["Over 50%", 0],
        ],
    },
    {
        question: "What does hydrology primarily study?",
        choices: [
            [
                "The occurrence, distribution, movement, and properties of water",
                1,
            ],
            ["The chemical composition of water molecules", 0],
            ["The history of water on Earth", 0],
            ["The uses of water in human civilizations", 0],
        ],
    },
    {
        question:
            "Which stage of the water cycle involves plants releasing water vapor into the atmosphere?",
        choices: [
            ["Transpiration", 1],
            ["Evaporation", 0],
            ["Condensation", 0],
            ["Infiltration", 0],
        ],
    },
    {
        question: "What happens during condensation in the water cycle?",
        choices: [
            ["Water vapor cools and forms tiny droplets to create clouds", 1],
            ["Water turns into vapor due to solar heat", 0],
            ["Water droplets fall to the ground as precipitation", 0],
            ["Water seeps into the soil to replenish groundwater", 0],
        ],
    },
    {
        question:
            "Where is water temporarily stored as part of the water cycle?",
        choices: [
            [
                "In glaciers, polar ice caps, underground aquifers, and reservoirs",
                1,
            ],
            ["In rivers and streams only", 0],
            ["In rain clouds", 0],
            ["In oceans exclusively", 0],
        ],
    },
    {
        question: "What is the approximate area covered by all water on Earth?",
        choices: [
            ["1.386 billion km³", 1],
            ["2.512 million km³", 0],
            ["10.352 billion km³", 0],
            ["502.305 million km³", 0],
        ],
    },
    {
        question:
            "Which climatic factor increases evaporation and transpiration rates?",
        choices: [
            ["Higher temperatures", 1],
            ["Stronger winds", 0],
            ["Increased rainfall", 0],
            ["Colder temperatures", 0],
        ],
    },
    {
        question: "How does urbanization impact hydrology?",
        choices: [
            ["It increases runoff and reduces groundwater recharge", 1],
            ["It decreases surface runoff", 0],
            ["It enhances natural infiltration", 0],
            ["It reduces evaporation rates", 0],
        ],
    },
    {
        question: "What is one major consequence of overusing groundwater?",
        choices: [
            ["Land subsidence and reduced water availability", 1],
            ["Increased rainfall patterns", 0],
            ["Higher rates of evaporation", 0],
            ["Improved aquifer recharge", 0],
        ],
    },
    {
        question: "Why is hydrology important for sustainable development?",
        choices: [
            [
                "It ensures that development projects do not disrupt the water cycle",
                1,
            ],
            ["It prevents all types of water pollution", 0],
            ["It increases the natural flow of rivers", 0],
            ["It completely eliminates flood risks", 0],
        ],
    },
    {
        question:
            "What role do aquatic ecosystems play in regulating the environment?",
        choices: [
            [
                "Regulating global temperatures, carbon cycles, and oxygen levels",
                1,
            ],
            ["Increasing water scarcity and overuse", 0],
            ["Causing eutrophication", 0],
            ["Decreasing biodiversity in terrestrial ecosystems", 0],
        ],
    },
    {
        question:
            "What is a major consequence of excessive groundwater extraction?",
        choices: [
            [
                "Land subsidence and reduced water availability for ecosystems",
                1,
            ],
            ["Improved agricultural yield", 0],
            ["Increased river flow", 0],
            ["Enhanced biodiversity", 0],
        ],
    },
    {
        question: "What is eutrophication caused by?",
        choices: [
            ["Agricultural runoff containing pesticides and fertilizers", 1],
            ["Melting glaciers and rising sea levels", 0],
            ["Excessive groundwater extraction", 0],
            ["Deforestation and desertification", 0],
        ],
    },
    {
        question: "How does climate change influence water availability?",
        choices: [
            [
                "It increases evaporation rates and alters precipitation patterns",
                1,
            ],
            ["It improves groundwater recharge", 0],
            ["It prevents extreme weather events", 0],
            ["It reduces the frequency of droughts and floods", 0],
        ],
    },
    {
        question:
            "What is one consequence of glacial melting due to climate change?",
        choices: [
            ["Rising sea levels threatening coastal ecosystems", 1],
            ["Improved freshwater availability", 0],
            ["Decreased evaporation rates", 0],
            ["Increased biodiversity in arid regions", 0],
        ],
    },
    {
        question: "How does prolonged drought impact vegetation?",
        choices: [
            ["It increases desertification risks in arid regions", 1],
            ["It enhances carbon sequestration", 0],
            ["It reduces soil erosion", 0],
            ["It boosts agricultural productivity", 0],
        ],
    },
    {
        question: "What is one environmental effect of floods?",
        choices: [
            ["Displacement of terrestrial and aquatic species", 1],
            ["Reduced water contamination", 0],
            ["Increased agricultural productivity", 0],
            ["Enhanced topsoil fertility", 0],
        ],
    },
    {
        question:
            "What type of pollution is caused by untreated sewage and urban runoff?",
        choices: [
            ["Degradation of water quality", 1],
            ["Plastic pollution in oceans", 0],
            ["Increased biodiversity in aquatic ecosystems", 0],
            ["Carbon cycle disruption", 0],
        ],
    },
    {
        question:
            "What happens when animals migrate in search of water during droughts?",
        choices: [
            ["Ecosystem imbalances occur", 1],
            ["Desertification decreases", 0],
            ["Vegetation thrives", 0],
            ["Carbon sequestration increases", 0],
        ],
    },
    {
        question: "How does vegetation loss impact carbon sequestration?",
        choices: [
            ["It reduces the Earth's capacity to absorb atmospheric carbon", 1],
            ["It improves soil fertility", 0],
            ["It enhances groundwater recharge", 0],
            ["It increases water availability", 0],
        ],
    },
    {
        question: "What is the primary role of water in hydropower generation?",
        choices: [
            [
                "Storing and releasing water to generate electricity through turbines",
                1,
            ],
            ["Cooling nuclear reactors", 0],
            ["Desalinating saltwater into freshwater", 0],
            ["Distributing water for agricultural purposes", 0],
        ],
    },
    {
        question:
            "What is one environmental consideration associated with hydropower?",
        choices: [
            ["Flooding large areas and disrupting aquatic habitats", 1],
            ["Thermal pollution of water bodies", 0],
            ["High energy consumption for desalination", 0],
            ["Excessive evaporation of water", 0],
        ],
    },
    {
        question: "Why is desalination considered an energy-intensive process?",
        choices: [
            [
                "It requires significant electricity to convert saltwater into freshwater",
                1,
            ],
            ["It relies heavily on thermal pollution to treat water", 0],
            ["It extracts water from deep aquifers", 0],
            ["It uses wind energy for pumping water", 0],
        ],
    },
    {
        question:
            "What challenge does water scarcity pose to energy production?",
        choices: [
            ["Reduced availability of water for cooling power plants", 1],
            ["Increased demand for untreated sewage in energy systems", 0],
            ["Enhanced production of renewable energy", 0],
            ["Higher precipitation levels reduce energy generation", 0],
        ],
    },
    {
        question: "How does climate change impact hydropower generation?",
        choices: [
            [
                "It alters rainfall patterns, causing floods or droughts that affect water availability",
                1,
            ],
            ["It improves the efficiency of turbines in hydropower plants", 0],
            ["It reduces the need for renewable energy sources", 0],
            [
                "It increases water levels globally, enhancing hydropower capacity",
                0,
            ],
        ],
    },
    {
        question:
            "What is one proposed solution for balancing the water-energy nexus sustainably?",
        choices: [
            [
                "Integrating renewable energy sources with advanced desalination technologies",
                1,
            ],
            ["Replacing hydropower with fossil fuel energy production", 0],
            ["Increasing water extraction from deep aquifers", 0],
            ["Eliminating water treatment processes in urban areas", 0],
        ],
    },
];

const GameQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setStartTime(Date.now());
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
            setEndTime(Date.now());
        }
    };

    const handleRetry = () => {
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        setStartTime(null);
        setEndTime(null);
    };

    return (
        <>
            <div
                style={{
                    background: `url(${rippleSrc})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container
                    style={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Stack
                        sx={{
                            backgroundColor: "rgba(240, 240, 240, 0.7)",
                            p: 5,
                        }}
                    >
                        {!quizStarted ? (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleStartQuiz}
                            >
                                Start Quiz
                            </Button>
                        ) : !showResult ? (
                            <QuizGenerator
                                questionData={questions[currentQuestionIndex]}
                                onAnswer={handleAnswer}
                            />
                        ) : (
                            <Box textAlign="center">
                                <Typography variant="h4">
                                    Quiz Completed!
                                </Typography>
                                <Typography variant="h6">
                                    Your Score: {score}/{questions.length}
                                </Typography>
                                {startTime && endTime && (
                                    <Typography variant="h6">
                                        Time Taken:{" "}
                                        {((endTime - startTime) / 1000).toFixed(
                                            2
                                        )}{" "}
                                        seconds
                                    </Typography>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleRetry}
                                >
                                    Try Again
                                </Button>
                            </Box>
                        )}
                    </Stack>
                </Container>
            </div>
        </>
    );
};

export default GameQuiz;
