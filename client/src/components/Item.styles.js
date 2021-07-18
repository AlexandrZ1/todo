import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  container:{
    margin: "15px 0"
  },
  input: {
    width:"100%",
 },
 text:{
     flexGrow:"1",
     padding:"0 5px 0 0"
 }
}));

export default useStyles;
