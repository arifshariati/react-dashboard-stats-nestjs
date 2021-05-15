import React from 'react'
import numeral from 'numeral';
// MUI  
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '0rem',
        background: 'linear-gradient(to left bottom, #ffa000, #ffd54f)',
        borderRadius:'1rem',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 5px'
    },
    gridContainer: {
        padding:'1rem',
        minHeight:'10rem',
        maxHeight:'10rem',
    },
    title: {
        fontWeight:'bold',
        color: theme.palette.primary.dark
    },
    per:{
        color: theme.palette.text.secondary
    },
    count:{
        fontSize:'2rem',
        fontWeight:'bold'
    },
    countGrid:{
        alignSelf:'center'
    }
}));

const DashboardCard = ({total, header, data}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container className={classes.gridContainer}>
                <Grid item xls={12} lg={12} md={12} sm={12} xl={12}>
                    <Grid container justify={'space-between'}>
                        <Typography className={classes.title}>{header}</Typography>
                        {
                            !total && (
                                <Typography className={classes.per}>{data.per} %</Typography>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xls={12} lg={12} md={12} sm={12} xl={12} className={classes.countGrid}>
                    <Typography className={classes.count}>{numeral(data.count).format('0,0')}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DashboardCard;
