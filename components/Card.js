import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './Card.module.css';
import { Switch } from '@material-ui/core';

const useStyles = makeStyles({
  checkbox: {
  },
});

function Card() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const classes = useStyles();

  return (
    <div className={styles.card}>
      <Checkbox className={styles.checkbox} />
      <div className={styles.firstContainer}>
        <div className={styles.whiteContainer}>
          <div className={styles.textContainer}>
            WorkFlow Name If It Has A
            <br />
            Second Line
          </div>
          <div className={styles.smaller}>
            <img src='/images/Component 2.png' className={styles.Linkedin} />
            <img src='/images/Gmail1.png' className={styles.gmailImage} />
            <img src='/images/asana.png' className={styles.asana} />
            <div className={styles.plusContent}>+4</div>
            
          </div>
          <div className={styles.toggle}>
        </div>
                <Switch className='switch'
                  checked={checked}
                  onChange={handleChange}
                  color="primary"
                  name="mySwitch"
                  inputProps={{ 'aria-label': 'mySwitch' }}
                />
        </div>
      </div>
    </div>
  );
}

export default Card;
