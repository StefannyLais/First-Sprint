import React from 'react';
import { makeStyles } from '@mui/styles';
import { Checkbox, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

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
    width: '102px',
    height: '40px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    marginLeft: 'auto',
    background: 'pink',
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
  smallerComponent: {
    position:'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '110px', 
    height: '32px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    justifyContent:'space-between',
    border: '1.5px solid lightGrey',
    background:'pink'
    
  },
  

  
},)

  


const Card = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Checkbox className={classes.checkbox} />
      {/* <div className={classes.blueContainer}>
        <div className={classes.whiteContainer}>
          <div className={classes.textContainer}>
            WorkFlow Name If It Has A
            <br />
            Second Line
          </div>
          
          <div className={classes.smallerComponent}>
  
      
    </div>
        </div>
        <div className={classes.toggleContainer}>
        
        </div>
      </div> */}
    </div>
  );
};

export default Card;
