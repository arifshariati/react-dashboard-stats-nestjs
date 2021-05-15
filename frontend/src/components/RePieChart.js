import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

// MUI 
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '0rem',
        borderRadius:'1rem',
        background: 'linear-gradient(to left bottom, #f9f9f9, #FFF)',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 5px',
        margin:'0.5rem',
        marginTop:'3rem'
    },
    mainContainer:{
        width:'500px',
        height:'600px',
    },
    title:{
        marginTop:'1rem',
        fontWeight:'bold',
    }
}));
const RePieChart = ({data}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container justify="center" className={classes.mainContainer}>
                <Typography variant={'h5'} className={classes.title}>Gender Chart</Typography>
                <ResponsiveContainer className={classes.rContainer}>
                    <PieChart width={800} height={400}>
                        <Pie
                            data={data}
                            cx={'50%'}
                            cy={'50%'}
                            innerRadius={110}
                            outerRadius={150}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            nameKey="name"
                            label
                            labelLine
                        >
                            {data.map((entry, index) => (

                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend verticalAlign="bottom" height={100}/>
                    </PieChart>
                </ResponsiveContainer>
            </Grid>
        </Paper>
    )
}

export default RePieChart;
