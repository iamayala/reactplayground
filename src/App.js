import JediTraining from './JediTraining';
import './App.css';
import YodiTemple from './YodiTemple';
import { createContext } from 'react';
import { moods } from './Context';
import ObiWanCanCode from './ObiWanCanCode';

export const MoodContext = createContext(moods)

function App() {
  return (
    <MoodContext.Provider value={moods.sad}>
      {/* <JediTraining /> */}
      <ObiWanCanCode/>
    </MoodContext.Provider>
  );
}

export default App;
