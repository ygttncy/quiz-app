/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ data, handleAnswer }) => {
	// Check if 'data' is undefined or null
	if (!data) {
		return <div>Loading question...</div>;
	}

	return (
		<div className="question-container">
			<h2>{data.question}</h2>
			<div className="answers">
				{data.answers.map((answer, index) => (
					<button
						key={index}
						onClick={() => handleAnswer(index === data.correct)}
					>
						{answer}
					</button>
				))}
			</div>
		</div>
	);
};

// Define PropTypes for the component
Question.propTypes = {
	data: PropTypes.shape({
		question: PropTypes.string.isRequired,
		answers: PropTypes.arrayOf(PropTypes.string).isRequired,
		correct: PropTypes.number.isRequired,
	}),
	handleAnswer: PropTypes.func.isRequired,
};

export default Question;
