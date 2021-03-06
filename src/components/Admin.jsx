import React from "react";
import UnregisteredVolunteerList from "./AdminPageComponents/UnregisteredVolunteersList";
import AddressesTable from "./AdminPageComponents/AddressesTable";
import NewAddress from "./AdminPageComponents/NewAddress";
import MatchingTable from "./AdminPageComponents/MatchingsTable";
import RegisteredVolunteersTable from "./AdminPageComponents/ApprovedVolunteersTable";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ResetMatchingsTable from './AdminPageComponents/ResetMatchingsTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Admin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="טבלת כתובות" {...a11yProps(0)} />
          <Tab label="טבלת מתנדבים" {...a11yProps(1)} />
          <Tab label="טבלת שיבוצים שבועית" {...a11yProps(2)} />
          <Tab label="הוספת כתובת חדשה" {...a11yProps(3)} />
          <Tab label="אישור מתנדבים חדשים" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <Grid item xs={1}/>
          <Grid item xs={10}>
              <AddressesTable />
          </Grid>
          <Grid item xs={1}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid item xs={1}/>
        <Grid item xs={10}>
            <RegisteredVolunteersTable />
        </Grid>
        <Grid item xs={1}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid item xs={1}/>
        <Grid item xs={10}>
          <MatchingTable  /><br/>
          <ResetMatchingsTable />
        </Grid>
        <Grid item xs={1}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid item xs={1}/>
        <Grid item xs={4}>
            <NewAddress />
        </Grid>
        <Grid item xs={7}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid item xs={1}/>
        <Grid item xs={2}>
          <UnregisteredVolunteerList />
        </Grid>
        <Grid item xs={9}/>
      </TabPanel>
    </div>
  );
}

export default Admin; 