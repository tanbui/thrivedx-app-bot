import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: 12,
    "& .MuiListItem-root": {
      "&:hover": {
        color: "orange"
      },
      "&.MuiListItem-divider": {
        borderBottom: "2px solid rgba(0,0,0,0.1)"
      }
    }
  },
  subheader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    fontSize: 24,
    "&.MuiListSubheader-inset": { marginBottom: 12 } //no space
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "1.2rem"
    }
  }
}));

//const items = ["Dill Pickles", "Sweet Pickles", "Bananas", "Burger", "Hot Dog"];

export default function JobList(props) {
  const classes = useStyles();
  return (
    <List>
      {props.items.map((item, index) => {
        const labelId = `checkbox-list-label-${item}`;
        return (
          <ListItem key={item} role={undefined}>
            <ListItemText
              id={labelId}
              primary={item}
              className={classes.listItemText}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
