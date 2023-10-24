import Todo from './Components/Todo/index.jsx';
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkMode } from './themes/darkMode.js';
import { lightMode } from './themes/lightMode.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Settings from './Components/Settings/settings.jsx';

export const GlobalContext = createContext(null);

const App = () => {
  const [appTheme, setAppTheme] = useState('light');

  const [displayCount, setCount] = useState(3);
  const [hideCompleted, setShowHide] = useState('show');

  useEffect(() => {
    const mode = localStorage.getItem('theme');
    setAppTheme(mode);
  }, []);

  // const perPage = localStorage.getItem('itemCount');
  // setCount(perPage);

  // const cleanUp = localStorage.getItem('choice');
  // setShowHide(cleanUp);

  return (
    <GlobalContext.Provider
      value={{
        initialCount: displayCount,
        hideComplete: false,
        sortWord: 'difficulty',
        
        toggleAppTheme: () =>
          setAppTheme(appTheme === 'light' ? 'dark' : 'light'),
        appTheme,

        changeCount: (number) => setCount(number),

        toggleShowHide: () => setShowHide(!hideCompleted),
        hideCompleted,
      }}
    >
      <ThemeProvider theme={appTheme === 'light' ? lightMode : darkMode}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </BrowserRouter>{' '}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
export default App;
