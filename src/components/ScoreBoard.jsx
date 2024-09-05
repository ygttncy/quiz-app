/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = ({ score, total }) => {
  return (
    <div className="score-board">
      <p>Score: {score} / {total}</p>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ScoreBoard;
