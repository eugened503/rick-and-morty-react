import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("value", newValue);
  };

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("value")));
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Главная" {...a11yProps(0)} to="/" component={Link} />
          <Tab
            label="Эпизоды"
            {...a11yProps(1)}
            to="/episodes"
            component={Link}
          />
          <Tab
            label="Локации"
            {...a11yProps(2)}
            to="/locations"
            component={Link}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
export default Navigation;
