import { makeStyles, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useContacts } from "./useContacts";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
  })
);

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  if (contacts.isLoading) {
    return <div>...loading</div>;
  }

  if (contacts.isError) {
    return <div>...error</div>;
  }

  console.log(contacts.data[0].location.country);

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div>Contacts {contacts.data[0].name.first}</div>
        </Grid>
      </Grid>
    </Container>
  );
};
