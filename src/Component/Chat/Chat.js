import React, { useState } from 'react';
import './Chat.css';
import ChatbotEmbed from './ChatbotEmbed';
import WordCount from './WordCount'; // Import the WordCount component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'; 
import Navbar from "../Home/Navbar";


const Chat = () => {
  const [query, setQuery] = useState('');
  const [wordCount, setWordCount] = useState(100); // Default word count
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState(null); // New state to store search results

  const handleSearch = async () => {
    try {
      // Simulating API call
      const response = await fetch('http://192.168.85.110:8000/api/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          length: 100,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }

      const results = await response.json();
      console.log('Results:', results);
      // Update state to show results and handle the results as needed
      setShowResults(true);
      setSearchResults(results); // Store search results in state
    } catch (error) {
      console.error('Error fetching results:', error.message);
      // Handle errors, show a message to the user, etc.
    }
  };

  return (
    <div className='Chat'>
      <Navbar/>
      <div className="search-container">
        <div className="search-cont-1">
            <div className='search-bar'>
              <input
                type="text"
                placeholder="Type your query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faPaperPlane} style={{height:"30px"}} /> 
              </button>

            </div>
              <div className='response'>
              {showResults && (
              <div className="search-results">
                {searchResults ? (
                  <div className='show-sum'>
                    <h3>Summary:</h3>
                    <div>{searchResults[0]}</div>
                    <h3>Related Headlines:</h3>
                    <ul>
                      {searchResults[1].map((item, index) => (
                        <li key={index}>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <strong>{item.headline}</strong> ({item.category})
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>No results found.</p>
                )}
              </div>
            )}
              </div>
      {/* <div className='menu'>
        <div className='menu-items'>
        <i class="fa-sharp fa-solid fa-arrow-right-from-bracket" style={{margin:"5px"}}></i>
          Logout
        </div>
        <div className='menu-items-1'>
        <i class="fa-solid fa-house-user" style={{margin:"5px"}}></i>      
        Home
        </div>
      </div> */}
      
        
      </div>

      <div className='sidebar'>
        
        <div className='filter'>
          <WordCount setWordCount={setWordCount} />
        </div>
        { showResults &&
          <div className='side-bot'>
            <p className='bot-trig'>Want to Know More About Article?</p>
            <p className='bot-trig-1'>Click below to chat more!</p>
             <ChatbotEmbed />
          </div>
        }
      </div>
    </div>
    </div>
  );
};

export default Chat;
