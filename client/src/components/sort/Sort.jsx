import style from "./Sort.module.scss";
import ClassNames from "classnames";
import {
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowUpwardTwoToneIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import ArrowDownwardTwoToneIcon from "@material-ui/icons/ArrowDownwardTwoTone";
const Sort = ({ filterBy, setFilterBy, typeSort, setTypeSort }) => {
  const buttons = ["All", "Done", "UnDone"];
  return (
    <Grid container spacing={8}>
      <Grid container item alignItems="center" xs>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {buttons.map((item, i) => (
            <Button
              key={i}
              onClick={() => setFilterBy(i + 1)}
              color={filterBy === i + 1 && "secondary"}
              variant="contained"
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
      <Grid item container alignItems="center" xs>
        <Typography>Sort by Date</Typography>
        <IconButton onClick={() => setTypeSort(!typeSort)}>
          {typeSort ? <ArrowDownwardTwoToneIcon /> : <ArrowUpwardTwoToneIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Sort;
