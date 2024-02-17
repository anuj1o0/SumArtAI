import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const WordCount = () => {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(10);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setWordCount(newValue);
  };

  const calculateWordCount = () => {
    const words = inputText.split(/\s+/);
    return words.length;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor: "#f8f8f8" }}>
      <Typography variant="h5" gutterBottom style={{ fontFamily: "Poppins, sans-serif", color: "#333" }}>
        Advanced Filter
      </Typography>
      <Paper elevation={3} style={{ fontFamily: "Poppins, sans-serif", padding: '20px', maxWidth: '400px', margin: 'auto', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: "#fff" }}>
        <Input
          placeholder="Type your text here..."
          multiline
          fullWidth
          rows={1}
          value={inputText}
          onChange={handleInputChange}
          style={{ padding: "15px", marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc', fontFamily: "Poppins, sans-serif" }}
        />
        <Slider
          value={wordCount}
          onChange={handleSliderChange}
          min={100}
          max={999}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value} words`}
        />
        <Typography variant="body1" style={{ marginTop: '20px', fontFamily: "Poppins, sans-serif", color: "#555" }}>
          Selected Word Count: {wordCount}
        </Typography>
        <Typography variant="body1" style={{ color: "#777" }}>
          Actual Word Count: {calculateWordCount()}
        </Typography>
      </Paper>
    </div>
  );
};

export default WordCount;
