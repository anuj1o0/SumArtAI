import React, { useState } from 'react';
import './Chat.css';
import ChatbotEmbed from './ChatbotEmbed';
import WordCount from './WordCount'; // Import the WordCount component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader'; 
import Navbar from "../Home/Navbar";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Chat = () => {
  const [query, setQuery] = useState('');
  const [wordCount, setWordCount] = useState(100); // Default word count
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // Define the function to handle word count change
  const handleWordCountChange = (newWordCount) => {
    setWordCount(newWordCount);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      // Simulating API call
      const response = await fetch('http://127.0.0.1:8080/api/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          length: wordCount,
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
    }finally {
      setLoading(false); // Set loading to false when the fetch is complete
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
              {loading && (
              <div className="loading-spinner">
                <ClipLoader css={override} size={75} color={'#36D7B7'} loading={loading} />
              </div>
            )}
              {showResults && (
              <div className="search-results" id='scrollbar2'>
                {searchResults ? (
                  <div className='show-sum'>
                    <h3>Summary:</h3>
                    <div>{searchResults[0]}</div>
                    <h3>Related Articles:</h3>
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
        <WordCount onWordCountChange={handleWordCountChange} />
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
