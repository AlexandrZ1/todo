import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  main: {
    width: "550px",
    height: "620px",
    padding: "35px 0",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  list:{
    width:"80%",
    height:"60%"
  },
  head:{
    flex:"0 0 15%"
  },
  pagination:{
  flexGrow:"1",
  display:"flex",
  alignItems:"center"
  }
}));

export default useStyles;
