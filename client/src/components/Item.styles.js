import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    margin: "15px 0",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
  },
  text: {
    flexGrow: "1",
    padding: "0 5px",
  },
  success: {
    color: theme.palette.success.main,
  },
  delete: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
