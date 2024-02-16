import React from "react";
import { Link , useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import  { useState } from 'react';

function Easy() {
    const navigate = useNavigate();
    
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [usedNumbers, setUsedNumbers] = useState([]);
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  function generateRandomNumber() {
    const random = Math.floor(Math.random() * 99) + 1;
    console.log('Generated random number:', random); // Logging the generated random number
    return random;
  }

  function handleInput(event) {
    let inputValue = event.target.value;

    // Enforce length restriction
    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2);
    }
    event.target.value = inputValue;
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      let inputValue = parseInt(event.target.value, 10);

      if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
      } else {
        if (usedNumbers.includes(inputValue)) {
          alert("You've already guessed " + inputValue + ". Try a different number.");
          return;
        }

        if (inputValue === randomNumber) {
          alert("Congratulations! You guessed the correct number: " + inputValue);
          // Reload the current page
          window.location.reload();
        } else {
          alert("Sorry, the number was not correct");
          setDisplayTextIndex(prevIndex => (prevIndex % 10) + 1);

          setUsedNumbers(prevUsedNumbers => [...prevUsedNumbers, inputValue]);
        }
        event.target.value = "";
      }
    }
  }
    return (
        <div className="mode-container">
        <div className="top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="38"
            viewBox="0 0 64 38"
            fill="none"
            className="wifi"
          >
            <path
              d="M16.5517 20.3103V29.4828C16.5517 29.8303 16.3192 30.1636 15.9053 30.4093C15.4915 30.655 14.9301 30.7931 14.3448 30.7931H9.93103C9.34573 30.7931 8.78439 30.655 8.37052 30.4093C7.95665 30.1636 7.72414 29.8303 7.72414 29.4828V20.3103C7.72414 19.9628 7.95665 19.6295 8.37052 19.3838C8.78439 19.1381 9.34573 19 9.93103 19H14.3448C14.9301 19 15.4915 19.1381 15.9053 19.3838C16.3192 19.6295 16.5517 19.9628 16.5517 20.3103Z"
              fill="black"
            />
            <path
              d="M29.7931 17.6896V29.4828C29.7931 29.8303 29.5606 30.1636 29.1467 30.4093C28.7328 30.655 28.1715 30.7931 27.5862 30.7931H23.1724C22.5871 30.7931 22.0258 30.655 21.6119 30.4093C21.198 30.1636 20.9655 29.8303 20.9655 29.4828V17.6896C20.9655 17.3421 21.198 17.0088 21.6119 16.7631C22.0258 16.5174 22.5871 16.3793 23.1724 16.3793H27.5862C28.1715 16.3793 28.7328 16.5174 29.1467 16.7631C29.5606 17.0088 29.7931 17.3421 29.7931 17.6896Z"
              fill="black"
            />
            <path
              d="M43.0345 13.7586V29.4828C43.0345 29.8303 42.802 30.1636 42.3881 30.4093C41.9742 30.655 41.4129 30.7931 40.8276 30.7931H36.4138C35.8285 30.7931 35.2672 30.655 34.8533 30.4093C34.4394 30.1636 34.2069 29.8303 34.2069 29.4828V13.7586C34.2069 13.4111 34.4394 13.0778 34.8533 12.8321C35.2672 12.5863 35.8285 12.4483 36.4138 12.4483H40.8276C41.4129 12.4483 41.9742 12.5863 42.3881 12.8321C42.802 13.0778 43.0345 13.4111 43.0345 13.7586Z"
              fill="black"
            />
            <path
              d="M56.2759 8.51725V29.4828C56.2759 29.8303 56.0434 30.1636 55.6295 30.4093C55.2156 30.6551 54.6543 30.7931 54.069 30.7931H49.6552C49.0699 30.7931 48.5085 30.6551 48.0947 30.4093C47.6808 30.1636 47.4483 29.8303 47.4483 29.4828V8.51725C47.4483 8.16973 47.6808 7.83644 48.0947 7.5907C48.5085 7.34496 49.0699 7.20691 49.6552 7.20691H54.069C54.6543 7.20691 55.2156 7.34496 55.6295 7.5907C56.0434 7.83644 56.2759 8.16973 56.2759 8.51725Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="43"
            viewBox="0 0 49 43"
            fill="none"
            className="top4g"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.42 28.8224C27.8785 28.8224 27.3592 28.6337 26.9763 28.2977C26.5934 27.9617 26.3783 27.506 26.3783 27.0308C26.3783 26.5556 26.5934 26.0999 26.9763 25.7639C27.3592 25.4279 27.8785 25.2391 28.42 25.2391H30.4617C31.0031 25.2391 31.5225 25.4279 31.9053 25.7639C32.2882 26.0999 32.5033 26.5556 32.5033 27.0308V34.1974C32.5033 34.6726 32.2882 35.1283 31.9053 35.4643C31.5225 35.8004 31.0031 35.9891 30.4617 35.9891H26.3783C24.7539 35.9891 23.196 35.4228 22.0473 34.4148C20.8986 33.4068 20.2533 32.0397 20.2533 30.6141V23.4474C20.2533 22.0219 20.8986 20.6548 22.0473 19.6467C23.196 18.6387 24.7539 18.0724 26.3783 18.0724H30.4617C31.0031 18.0724 31.5225 18.2612 31.9053 18.5972C32.2882 18.9332 32.5033 19.3889 32.5033 19.8641C32.5033 20.3393 32.2882 20.795 31.9053 21.131C31.5225 21.467 31.0031 21.6558 30.4617 21.6558H26.3783C25.8368 21.6558 25.3175 21.8445 24.9347 22.1805C24.5518 22.5166 24.3367 22.9723 24.3367 23.4474V30.6141C24.3367 31.0893 24.5518 31.545 24.9347 31.881C25.3175 32.217 25.8368 32.4058 26.3783 32.4058H28.42V28.8224ZM12.0867 25.2391V19.8641C12.0867 19.3889 12.3018 18.9332 12.6847 18.5972C13.0675 18.2612 13.5868 18.0724 14.1283 18.0724C14.6698 18.0724 15.1891 18.2612 15.572 18.5972C15.9549 18.9332 16.17 19.3889 16.17 19.8641V34.1974C16.17 34.6726 15.9549 35.1283 15.572 35.4643C15.1891 35.8004 14.6698 35.9891 14.1283 35.9891C13.5868 35.9891 13.0675 35.8004 12.6847 35.4643C12.3018 35.1283 12.0867 34.6726 12.0867 34.1974V28.8224H5.96167C5.42018 28.8224 4.90088 28.6337 4.51799 28.2977C4.1351 27.9617 3.92 27.506 3.92 27.0308V19.8641C3.92 19.3889 4.1351 18.9332 4.51799 18.5972C4.90088 18.2612 5.42018 18.0724 5.96167 18.0724C6.50315 18.0724 7.02246 18.2612 7.40534 18.5972C7.78823 18.9332 8.00333 19.3889 8.00333 19.8641V25.2391H12.0867Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            className="battery"
          >
            <path
              d="M42.75 0H5.7C4.18827 0 2.73845 0.737498 1.66949 2.05025C0.600534 3.36301 0 5.14348 0 7V28C0 29.8565 0.600534 31.637 1.66949 32.9497C2.73845 34.2625 4.18827 35 5.7 35H42.75C44.2617 35 45.7115 34.2625 46.7805 32.9497C47.8495 31.637 48.45 29.8565 48.45 28V7C48.45 5.14348 47.8495 3.36301 46.7805 2.05025C45.7115 0.737498 44.2617 0 42.75 0ZM42.75 28H5.7V7H42.75V28ZM54.15 10.5C53.3941 10.5 52.6692 10.8687 52.1347 11.5251C51.6003 12.1815 51.3 13.0717 51.3 14V21C51.3 21.9283 51.6003 22.8185 52.1347 23.4749C52.6692 24.1313 53.3941 24.5 54.15 24.5C54.9059 24.5 55.6308 24.1313 56.1653 23.4749C56.6997 22.8185 57 21.9283 57 21V14C57 13.0717 56.6997 12.1815 56.1653 11.5251C55.6308 10.8687 54.9059 10.5 54.15 10.5Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="back-icons" onClick={()=> navigate("/")}>
            <FontAwesomeIcon  icon={faArrowLeft} /> 
        </div>
        <div className="Easy-Mode-BG">
          <div className="Easy-Mode-text"><a>Easy Mode</a></div>
        </div>
        <div className="circle-container">
          <div className="circle-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="f-circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText1"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText2"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText3"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText4"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText5"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
          </div>
          <div className="circle-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="f-circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText6"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText7"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText8"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText9"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              className="circle"
            >
              <ellipse cx="19.5" cy="19" rx="19.5" ry="19" fill="#D9D9D9" />
              <text
                id="displayText10"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="12"
                className="text-circle"
              >
                x
              </text>
            </svg>
          </div>
        </div>
        <div className="warningtext" id="warningtext"></div>
        <div className="input-text">Input Your Number</div>
        <div>
          <input
            type="number"
            className="input-text-box"
            id="textInput"
            onInput={handleInput}
            onKeyDown={handleEnter}
          />
        </div>
        
      </div>
    )
};

export default Easy