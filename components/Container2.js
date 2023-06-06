import { Container, Grid, Drawer } from '@mui/material';
import Navbar from './Navbar';
import Side from './Side';
import CardContainer from './CardContainer';
import { IconButton, InputBase, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';


export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'relative',
        width: '1440px',
        height: '768px',
        overflowY: 'scroll',
      }}
    >
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
        width="1369px"
        height="70px"
        left="71px"
        top="0px"
        bgcolor="#FFFFFF"
        border="1px solid #EAECF0"
        marginLeft="38px"
      >
        <Navbar></Navbar>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="flex-start"
        padding={0}
        position="absolute"
        width="70px"
        height="768px"
        left="0px"
        top="0px"
        borderRight="1px solid #EAECF0"
      >
        <Side></Side>
      </Grid>

      <Grid
        container
        direction="column"
        alignItems="flex-start"
        padding={2}
        gap={8}
        position="absolute"
        width="253px"
        height="calc(100% - 70px)"
        left="71px"
        top="70px"

        borderLeft="1px solid #EAECF0"
      >
      </Grid>

      <Grid
        direction="column"
        alignItems="flex-start"
        padding={4}
        gap={3}
        isolation="isolate"
        width="1117px"
        height="698px"
        left="324px"

        sx={{
          position: 'absolute',
          flex: 'none',
          order: 1,
          flexGrow: 0,
        }}

      >
        <Box
          display="flex"
          alignItems="center"
          padding="10px 14px"
          gap="8px"
          width="221px"
          height="30px"
          borderRadius="5px"
          bgcolor="#F2F4F7"
          flex="none"
          order={0}
          flexGrow={0}
          position="relative"
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Search" sx={{ width: '53px' }} />
        </Box>
        <Box display="flex" alignItems="center">
          <InputAdornment
            position="absolute"
            left="12.5%"
            right="12.5%"
            top="12.5%"
            bottom="12.5%"
            border="1.66667px solid #667085"
          ></InputAdornment>


        </Box>

        <CardContainer />

      </Grid>
      <Box marginLeft="300px" marginTop="40">

      </Box>

    </Container>
  );
}
