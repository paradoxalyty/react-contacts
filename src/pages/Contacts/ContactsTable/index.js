import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {},
});

export const ContactsTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar src={contact.picture.thumbnail} alt="Avatar" />
              </TableCell>
              <TableCell>
                {contact.name.title}. {contact.name.first} {contact.name.last}
              </TableCell>
              <TableCell>
                <Typography>
                  {format(parseISO(contact.dob.date), "iiii, Pp")}
                </Typography>
                <Typography>{contact.dob.age} years </Typography>
              </TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <Typography>{contact.location.country}</Typography>
              </TableCell>
              <TableCell>{contact.nat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};