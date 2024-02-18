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
  const [searchResults, setSearchResults] = useState(null);

  // Define the function to handle word count change
  const handleWordCountChange = (newWordCount) => {
    setWordCount(newWordCount);
  };

  const handleSearch = async () => {
    // try {
    //   // Simulating API call
    //   const response = await fetch('http://192.168.136.130:8000/api/summary', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       query,
    //       length: 800,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Failed to fetch results');
    //   }
      const testResponse = [
        "US stocks traded mixed at the open Thursday, with the GDP data showing a strong 4.9% growth in the third quarter and Nasdaq 100 index declining due to Meta Platforms' latest earnings. However, Treasury yields remained unchanged. This news may suggest more tightening from the Federal Reserve, but the lagged impact of rate hikes and other factors might lead to a restrictive backdrop in Q4. The IRMA trial is a four-arm parallel-group, double-blinded, placebo-controlled, triple-dummy, individually randomised trial in Southern Malawi. The study aims to compare the effectiveness and safety of iron supplements or MNPs (containing iron) given with malaria chemoprevention to malaria chemoprevention alone or placebo on child cognitive development. It also evaluates the effects of iron interventions on anaemia, iron deficiency, and infection risk in children. The trial, set in a rural area with high rates of anaemia and malaria, aims to provide evidence for the functional benefits of iron supplementation in children.",
        [
          {
            "category": "Bitcoin",
            "link": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-nasdaq-gdp-outlook-fed-recession-2023-10",
            "headline": "US stocks trade mixed as traders assess strongest GDP growth since 2021"
          },
          {
            "category": "United States",
            "link": "https://abcnews.go.com/US/wireStory/economic-spotlight-turns-us-jobs-data-markets-roiled-103774160",
            "headline": "Economic spotlight turns to US jobs data as markets are roiled by high rates"
          }
        ]
      ];
      // const results = await response.json();
      // console.log('Results:', results);
      // Update state to show results and handle the results as needed
      setShowResults(true);
      setSearchResults(testResponse); // Store search results in state
    // } catch (error) {
    //   console.error('Error fetching results:', error.message);
    //   // Handle errors, show a message to the user, etc.
    // }
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
              <div className="search-results" id='scrollbar2'>
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
