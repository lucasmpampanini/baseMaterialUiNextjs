import React from 'react'
import { Box, Paper, Container, Button, Tab, Tabs, Grid, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


export default function Index(props) {
  const [value, setValue] = React.useState(0);



  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };


  return (
    <div>
      <Paper>
        <Grid 
        container 
        xs={12}

        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
              
            </Grid>
            <Grid item xs={3}>
              <MenuIcon />
            </Grid>

        </Grid>
      </Paper>
    </div>
  )
}



{/* <Box  m={1} p={2} >
  <Paper >
  <Grid
    container
    direction="row"
  >   
      <Box m={1} p={2} flexGrow={1}>
        
      </Box>
      <Box  m={1} p={2} flexGrow={2}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <Box m={1} p={2} >
          <Button variant="contained" color="primary">Orçamento</Button>

        </Box>

    </Grid>
  </Paper>
</Box> */}