import React from "react";
import VolunteerList from "./VolunteerList";
import AddressList from "./AddressList";
import RegisteredVolunteerList from "./ApprovedVolunteersList";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Admin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{textAlign:'center'}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>איזור ניהול</Paper>
        </Grid>
        <Grid item xs={6}>
            <AddressList />
        </Grid>
        <Grid item xs={6}>
            <RegisteredVolunteerList />
        </Grid>
        <Grid item xs={3}>
          <VolunteerList />
        </Grid>
        <Grid item xs={3}>
            <VolunteerList />
        </Grid>
        <Grid item xs={3}>
            <VolunteerList />
        </Grid>
        <Grid item xs={3}>
            <VolunteerList />
        </Grid>
      </Grid>
    </div>
  );
}



// function Admin() {
//   return (
//       <div>
//         <VolunteerList />
//       </div>
    
//   );
// }


export default Admin;