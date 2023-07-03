import React, { useState, useEffect } from 'react';

function SpeechToText() {
    const [transcript, setTranscript] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const recognition = new window.webkitSpeechRecognition();
  
    useEffect(() => {
      // Set the language for speech recognition (e.g., 'en-US')
      recognition.lang = 'en-US';
  
      // Set the continuous property to enable continuous speech recognition
      recognition.continuous = true;
  
      // Event listener for receiving speech recognition results
      recognition.onresult = event => {
        const result = event.results[event.results.length - 1][0].transcript;
        setTranscript(result);
      };
  
      // Event listener for handling speech recognition errors
      recognition.onerror = event => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
      };
  
      return () => {
        // Clean up the recognition object
        recognition.stop();
        recognition.onresult = null;
        recognition.onerror = null;
      };
    }, []);
  
    // Function to handle the speech recognition start/stop
    const handleSpeechRecognition = () => {
      if (!isRecording) {
        setIsRecording(true);
        recognition.start();
      } else {
        setIsRecording(false);
        recognition.stop();
      }
    };
  
    return (
      <div>
        <button onClick={handleSpeechRecognition}>{isRecording ? 'Stop' : 'Start'} Speech Recognition</button>
        <p>Transcript: {transcript}</p>
      </div>
    );
  }
  
  export default SpeechToText;
