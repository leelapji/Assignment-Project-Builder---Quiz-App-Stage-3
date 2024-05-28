import React, { useState } from 'react';
import questions from './resources/quizQuestion.json';
import { useHistory } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const history = useHistory();

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleQuit = () => {
        if (window.confirm('Are you sure you want to quit?')) {
        }
    };

    const handleOptionClick = (option) => {
        if (option === questions[currentQuestion].answer) {
            alert('Correct answer');
            setScore(score + 1);
        } else {
            alert('Wrong answer');
        }
    };

    const handleFinish = () => {
        history.push('/result', { score });
    };

    const currentQues = questions[currentQuestion];

    return (
        <div className="quiz-container">
            <h2 className="question">{currentQues.question}</h2>
            <ul className="options">
                <li onClick={() => handleOptionClick(currentQues.optionA)}>{currentQues.optionA}</li>
                <li onClick={() => handleOptionClick(currentQues.optionB)}>{currentQues.optionB}</li>
                <li onClick={() => handleOptionClick(currentQues.optionC)}>{currentQues.optionC}</li>
                <li onClick={() => handleOptionClick(currentQues.optionD)}>{currentQues.optionD}</li>
            </ul>
            <div className="buttons">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
                <button onClick={handleQuit}>Quit</button>
                <button onClick={handleFinish}>Finish</button>
            </div>
        </div>
    );
};

export default Quiz;
