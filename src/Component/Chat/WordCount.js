// WordCount.js

import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const WordCount = ({ onWordCountChange }) => {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(100);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    const newWordCount = text.split(/\s+/).length;
    setWordCount(newWordCount);
    onWordCountChange(newWordCount);
  };

  const handleSliderChange = (event, newValue) => {
    setWordCount(newValue);
    onWordCountChange(newValue);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor: "#f8f8f8" }}>
      <Typography variant="h5" gutterBottom style={{ fontFamily: "Poppins, sans-serif", color: "#333" }}>
        Advanced Filter
      </Typography>
      <Paper elevation={3} style={{ fontFamily: "Poppins, sans-serif", padding: '20px', maxWidth: '400px', margin: 'auto', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: "#fff" }}>
        
        <Slider
          value={wordCount}
          onChange={handleSliderChange}
          min={25}
          max={200}
          step={10}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value} words`}
        />
        <Typography variant="body1" style={{ marginTop: '20px', fontFamily: "Poppins, sans-serif", color: "#555" }}>
          Selected Word Count: {wordCount}
        </Typography>
      </Paper>
    </div>
  );
};

export default WordCount;
