import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Cards from './Components/NextCard'
import MeetsUpCard from './Components/MeetsUpCard'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Prgrf from './Reusable/Prgrf'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>

        <header >
            <Cards/>  
        </header>
    
        <Typography gutterBottom variant="subtitle1" >
            Ketemuan selanjutnya
        </Typography>
  
        <MeetsUpCard/>
  
        <Typography gutterBottom variant="subtitle1" >
            Tentang pertemuan
        </Typography>
    
        <Card >
          <CardContent>
            <Typography component="p">
                lorem ipsum 
            </Typography>
          </CardContent>
        </Card>
    
        <Card >
          <CardContent>
            <Prgrf
              content="Lorem"
            />
          </CardContent>
        </Card>

        <Typography gutterBottom variant="subtitle1" >
            Members
        </Typography>
      
        <Cards/>  

        <Typography gutterBottom variant="subtitle1" >
            Pertemuan Lawas
        </Typography>
     
        <Divider light />

        <Typography component="h2">
            Copyright Ngadi
        </Typography>
      </div>
    );
  }
}

export default App;