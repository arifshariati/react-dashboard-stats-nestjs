import React, {useState, useEffect } from 'react';
import Axios from 'axios';



// components 
import { DashboardCard, RePieChart } from './components';

// MUI 
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
      margin: 'auto',
      marginTop:'1rem',
      maxWidth:'90%'
  }
}));

const piData = [];
const endPoint = 'http://localhost:4000/stats/all';
function App() {

  const classes = useStyles();
  const [total, setTotal]=useState({});
  const [male, setMale]=useState({});
  const [female, setFemale]=useState({});
  
  

  useEffect(() => {
    (
      async () => {
        let maleArray = [];
        let femaleArray = [];
        maleArray.push(`gender=male`);
        femaleArray.push(`gender=female`);

        try{
          // get all stats
          Axios.get(endPoint)
          .then(response =>{
            setTotal(response.data);
          })
          .catch(err => {
            console.log('Axios Error = ', err);
          });

          // get male
          Axios.get(`${endPoint}?${maleArray.join('^')}`)
          .then(response =>{
            setMale(response.data);
            piData.push({
              name:"Male",
              value: response.data.count
            });
          })
          .catch(err => {
            console.log('Axios Error = ', err);
          });

          // get female
          Axios.get(`${endPoint}?${femaleArray.join('^')}`)
          .then(response =>{
            setFemale(response.data);
            piData.push({
              name:"Female",
              value: response.data.count
            });
          })
          .catch(err => {
            console.log('Axios Error = ', err);
          });
        }
        catch(e){
          console.log(e);
        }
      }
    )()
  },[]);
  
  return (
    <div className={classes.mainContainer}>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={3} xs={3}>
          <DashboardCard 
            total={true} 
            header={"Total"}
            data={total} 
          />
        </Grid>
      <Grid item xl={4} lg={4} md={4} sm={3} xs={3}>
        <DashboardCard 
            total={false} 
            header={"Male"}
            data={male} 
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={3} xs={3}>
        <DashboardCard 
            total={false} 
            header={"Female"}
            data={female} 
          />
        </Grid>
      </Grid>

      {
        piData && piData.length >0 && (
          <Grid container spacing={2}>
            <RePieChart data={piData} />
          </Grid>
        )
      }
      
    </div>
  );
}

export default App;
