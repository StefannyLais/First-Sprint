import React, { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import Card from './Card';

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '648px',
    maxWidth: '1053px',  
    overflow: 'hidden',
    
  },
  card: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px 24px',
    gap: '20px',
    width: '1053px',
    height: '80px',
    border: '1px solid #EAECF0',
    boxShadow: '0px 1px 5px rgba(16, 24, 40, 0.02)',
    borderRadius: '8px',
    flex: 'none',
    order: 6,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
  cardGrid: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: '344.33px',
    height: '126px',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    flex: 'none',
    order: 0,
    flexGrow: 1,
  },
  cardGridContainer: {
    maxWidth: 'calc(340.33px * 3 + 48px)',
    overflowX: 'hidden',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, calc(328.33px + 10px))',
    gap: '20px',
    justifyContent: 'flex-start',
    marginBottom: '10px', 
  },
  button: {
    marginTop: '20px',
  },
};

const CardContainer = () => {
  const cardCount = 30;
  const [isGrid, setIsGrid] = useState(false);

  const toggleDisplay = () => {
    setIsGrid((prevState) => !prevState);
  };

  return (
    <Box>
      <Box style={styles.cardContainer}>
        {isGrid ? (
          <div style={styles.cardGridContainer}>
            {Array.from({ length: cardCount }).map((_, index) => (
              <Box key={index} style={styles.cardGrid}>
                <Card />
              </Box>
            ))}
          </div>
        ) : (
          <Stack direction="column" spacing={3}>
            {Array.from({ length: cardCount }).map((_, index) => (
              <Box key={index} style={styles.card}>
                <Card />
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      <Button variant="contained" onClick={toggleDisplay} style={styles.button}>
        Toggle Display
      </Button>
    </Box>
  );
};

export default CardContainer;
