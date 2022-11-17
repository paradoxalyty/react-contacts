import PropTypes from "prop-types";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import { NATIONALITY_HUMAN_NAME } from "../../../constants/Nationality";

const useStyles = makeStyles((theme) =>
  createStyles({
    fieldsContainer: {
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(2),
      },
    },
    fieldGender: {
      minWidth: 120,
    },
    fieldNationality: {
      minWidth: 140,
    },
  })
);

export const ContactsFilters = ({ filters, updateFilter, clearFilters }) => {
  const classes = useStyles();

  const handleChangeFilter = (event) => {
    updateFilter(event.target.name, event.target.value);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" className={classes.fieldsContainer}>
        <TextField
          name="fullname"
          label="Fullname"
          variant="outlined"
          value={filters.fullname}
          onChange={handleChangeFilter}
        />
        <FormControl variant="outlined" className={classes.fieldGender}>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            lebelId="gender"
            name="gender"
            label="Gender"
            value={filters.gender}
            onChange={handleChangeFilter}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.fieldNationality}>
          <InputLabel id="nationality">Nationality</InputLabel>
          <Select
            lebelId="nationality"
            name="nationality"
            label="Nationality"
            value={filters.nationality}
            onChange={handleChangeFilter}
          >
            <MenuItem value="all">All</MenuItem>
            {Object.entries(NATIONALITY_HUMAN_NAME).map(([key, name]) => (
              <MenuItem value={key} key={key}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button size="small" startIcon={<ClearIcon />} onClick={clearFilters}>
        Clear
      </Button>
    </Box>
  );
};

ContactsFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};
