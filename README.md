# Nexzi Voice Assistant - README

## Introduction
Nexzi is a voice-activated personal assistant designed with a unique Nigerian twist, offering both practical functionality and cultural relevance. Built using Python, this assistant combines speech recognition, text-to-speech conversion, and various APIs to provide a wide range of services from answering questions to controlling media playback—all with authentic Nigerian pidgin responses.

## Key Features

### 1. **Voice Interaction**
- **Speech Recognition**: Uses Google's speech recognition API to understand spoken commands
- **Text-to-Speech**: Converts responses to audible speech using pyttsx3
- **Nigerian Pidgin**: Responds in authentic Nigerian English and pidgin for a localized experience

### 2. **Core Functionalities**
- **Web Navigation**: Opens YouTube, Google, and other websites on command
- **Media Control**: Plays songs/videos directly from YouTube
- **Information Retrieval**: Provides Wikipedia summaries for people and concepts
- **Time Services**: Gives current time (including "Naija time") and day information
- **Productivity Tools**: Simple calculator and reminder functions

### 3. **Nigerian Context Features**
- Localized responses about Nigerian topics:
  - NEPA (power) status updates
  - Lagos traffic reports
  - Current fuel prices
- Nigerian proverbs and humor
- Pidgin English interactions

### 4. **Entertainment**
- Tells jokes using pyjokes library
- Shares Nigerian proverbs and sayings
- Engaging conversational style

## Technical Implementation

### Dependencies
The project utilizes several Python packages:
- `pyttsx3` for text-to-speech conversion
- `SpeechRecognition` for voice input
- `pywhatkit` for YouTube integration
- `wikipedia` for information retrieval
- `pyjokes` for humor
- `yfinance` (installed but not currently implemented)
- `pyaudio` for audio processing

### Key Components
1. **Voice Processing**:
   - `transform()` function handles speech-to-text conversion
   - `speaking()` function manages text-to-speech output

2. **Core Logic**:
   - `querying()` function contains the main decision logic
   - Handles over 20 different command types with contextual responses

3. **Cultural Localization**:
   - Nigerian pidgin responses throughout
   - Local references (NEPA, Lagos traffic, etc.)
   - Culturally appropriate humor and proverbs

## Setup Instructions

1. **Prerequisites**:
   - Python 3.x installed
   - Microphone hardware
   - Internet connection (for speech recognition and web services)

2. **Installation**:
   ```bash
   pip install pyttsx3 SpeechRecognition pywhatkit pyjokes wikipedia pyaudio
   ```

3. **Execution**:
   - Run the Jupyter notebook or convert to Python script
   - Call `querying()` function to start the assistant

## Usage Examples

1. **Basic Commands**:
   - "Hello Nexzi" - Greets the user in Nigerian pidgin
   - "What time is it?" - Gives current Naija time
   - "Tell me a joke" - Shares a humorous line

2. **Web Services**:
   - "Open YouTube" - Launches YouTube in default browser
   - "Play Burna Boy" - Plays Burna Boy songs on YouTube

3. **Local Information**:
   - "Check if NEPA light available" - Gives humorous power status
   - "Fuel price" - Provides current petrol price estimate

4. **Information**:
   - "Who is Wole Soyinka" - Gives Wikipedia summary
   - "What is Afrobeat" - Explains musical genre

## Future Enhancements

1. **Extended Nigerian Context**:
   - Add more local proverbs and sayings
   - Include current exchange rates
   - Integrate Nigerian news updates

2. **Advanced Features**:
   - Implement yfinance for stock prices
   - Add Nigerian food recipes
   - Include local weather reports

3. **Improved Interaction**:
   - Conversation memory for context
   - Learning user preferences
   - Multi-language support (Yoruba, Igbo, Hausa)

## Conclusion
Nexzi represents more than just a voice assistant—it's a culturally adapted digital companion that understands the Nigerian context. By combining practical functionality with local flavor, it offers users both utility and entertainment while maintaining the distinctive character of Nigerian communication styles.

Whether you need information, entertainment, or just a familiar voice to interact with, Nexzi provides a uniquely Nigerian digital assistant experience.
