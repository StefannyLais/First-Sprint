import React from 'react';
import { makeStyles } from '@mui/styles';
import { Checkbox, Button, Box } from '@mui/material';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '20px',
    width: '1005px',
    height: '40px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
  checkbox: {
    boxSizing: 'border-box',
    width: '20px',
    height: '20px',
    background: '#FFFFFF',
    border: '1.5px solid #D0D5DD',
    borderRadius: '6px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
  blueContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    width: '965px',
    height: '40px',
    flex: 'none',
    order: 1,
    flexGrow: 1,
  },
  whiteContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    width: '316.8px',
    height: '34px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    background: 'pink',
  },
  toggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    marginLeft: 'auto',
    background: 'green',
    width: '102px', 
    height: '40px'
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '206.8px',
    height: '34px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '17px',
    textTransform: 'capitalize',
    color: '#101828',
  },
  socialComponent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '110px',
    height: '32px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    justifyContent: 'space-between',
    border: '1.5px solid lightGrey',
    backgroundColor: 'red',
  },
  socialItem: {
    width: '25%', 
    flex:'nome',
    order:0,
  },
  linkedin: {
    position: 'relative',
    width: '20px',
    height: '100%',
    backgroundColor:'green'
  },
  
  gmail: {
    position: 'relative',
    backgroundColor: '#FFFFFF', 
    width: '23px',
    height: '23px',
    marginLeft:'2px',
    border: '0.5px solid #EAECF0',
    borderRadius: '50%',
    transition: 'transform 0.3s',
    
  },
  
  asana: {
    position: 'relative',
    width: '27.5px',
    height: '100%', 
  },
  plus: {
    position: 'relative',
    backgroundColor: 'blue',
    width: '27.5px',
    height: '100%',
  },
});

const Card = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Checkbox className={classes.checkbox} />
      <div className={classes.blueContainer}>
        <div className={classes.whiteContainer}>
          <div className={classes.textContainer}>
            WorkFlow Name If It Has A
            <br />
            Second Line
          </div>
          <div className={classes.smallerComponent}>
          <Box className={classes.socialComponent}>
          <Box className={`${classes.socialItem} ${classes.linkedin}`}>
  <img
    src="/images/bgLi.png"
    alt="Background Image"
    style={{
      position: 'absolute',
      top: '6.25%',
      bottom: '6.25%',
      background: '#1275B1',
      borderRadius: '56px',
      width: '28px',
      transition: 'transform 0.2s',
    }}
    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.3)')}
    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
  />
  <img
    src="/images/linked_in.png"
    alt="LinkedIn Image"
    style={{
      position: 'absolute',
      left: '27%',
      top: '25%',
      bottom: '31.25%',
      width: '14px',
      height: '13px',
    }}
  />
</Box>

      <Box className={`${classes.socialItem} ${classes.gmail}`}>
      <img
                  src="/images/gmail.png"
                  alt="Gmail Image"
                  style={{
                    position: 'absolute',
                    top:'25%',
                    right:'18%', 
                    width:'14px'  
                  }}
                  />
      </Box>
      <Box className={`${classes.socialItem} ${classes.asana}`}>









      </Box>
      <Box className={`${classes.socialItem} ${classes.plus}`}></Box>
    </Box>
          </div>
        </div>
        <div className={classes.toggleContainer}>
          {/* Content of the toggleContainer */}
        </div>
      </div>
    </div>
  );
};

export default Card;
