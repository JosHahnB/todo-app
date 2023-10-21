import { useContext } from 'react';
import { Button, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { GlobalContext } from '../../App';

const index = ({ incomplete }) => {
  const { toggleAppTheme, appTheme } = useContext(GlobalContext);

  const handleThemeClick = () => {
    localStorage.setItem('theme', appTheme === 'light' ? 'dark' : 'light');
    toggleAppTheme();
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
    }}>
      <h1 data-testid="todo-h1">
        To Do List: {incomplete.length} items pending
      </h1>
      <Button onClick={handleThemeClick}>
        {appTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </Box>
  );
};

export default index;
