import React, { useState } from 'react';
import { Box, Button, } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Card from './Card';
import { TextField, IconButton, Grid } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useGrid } from "../hooks/gridMode";
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import VerticalTabs from './VerticalTab';

import styles from './home.module.css'

const Home = () => {
  const { gridMode, setGridMode } = useGrid()

  return (
    <div
      className={styles.container}
    >

      <Sidebar />

      <div className={styles.container__content}>
        <Navbar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}>
          <VerticalTabs />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '24px',
              isolation: 'isolate',
              width: '100%',
              padding: '32px',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0',
                isolation: 'isolate',
                width: '100%',
                height: '100%',

              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 0 10px',
                  gap: '24px',
                  height: '50px',
                  width: '100%',
                }}  >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '10px 14px',
                    gap: '8px',
                    maxWidth: '200px',
                    background: '#F2F4F7',
                    borderRadius: '5px',
                  }}
                >
                  <img src="/images/InputTop.png" alt="Input Top" />
                  <TextField
                    label="Search"
                    variant="standard"
                    size="small"
                    InputProps={{ disableUnderline: true }}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 0,
                    width: '263.88px',
                    height: '40px',
                  }}>

                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '12px',
                    width: '182px',
                    height: '40px',
                  }}>
                    <span style={{

                      height: '27px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '26px',
                      color: '#475467'
                    }}>1-50 of 224</span>
                  </Box>

                  <Box sx={{ width: '80px', display: 'flex', alignItems: 'flex-start', padding: 0 }}><Box sx={{ padding: 0 }}>
                    <IconButton sx={{ padding: '10px' }}>
                      <NavigateBeforeOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                    </IconButton></Box>
                    <Box >
                      <IconButton sx={{ padding: '10px' }}>
                        <NavigateNextOutlinedIcon sx={{ width: '20px', height: '20px' }} />
                      </IconButton></Box>
                  </Box>


                  <Box sx={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '2.58809px',
                    gap: '2.59px',
                    width: '69.88px',
                    height: '38px',

                    borderRadius: '5px',
                  }}>
                    <Box sx={{
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '2.58809px',
                      gap: '2.59px',
                      width: '69.88px',
                      height: '38px',
                      border: '1.03897px solid #F2F4F7 ',
                      borderRadius: '5px',
                      background: '#F2F4F7',

                    }}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '7.31174px 10.4676px',
                          gap: '3.31px',
                          width: '9px',
                          height: '17.82px',
                          background: gridMode ? '#FFFFFF' : '',
                          boxShadow: '0px 1.03897px 3.1169px rgba(16, 24, 40, 0.1), 0px 1.03897px 2.07793px rgba(16, 24, 40, 0.06)', borderRadius: '3.63697px',
                        }}>
                        <IconButton onClick={() => setGridMode(prev => !prev)}>
                          <GridViewIcon sx={{ width: '20px', height: '20px', color: '#475467' }} />
                        </IconButton>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '8.31174px 12.4676px', gap: '8.31px', width: '7.06px', height: '17.82px', background: gridMode ? '' : '#FFFFFF', borderRadius: '3.63697px',
                        }}
                      > <IconButton onClick={() => setGridMode(prev => !prev)}>
                          <MenuOutlinedIcon sx={{ color: '#475467' }} />
                        </IconButton></Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '10px 0px 0px',
                  gap: '10px',
                  width: '100%',
                }}
              ><Card gridMode={gridMode} />
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Home;
