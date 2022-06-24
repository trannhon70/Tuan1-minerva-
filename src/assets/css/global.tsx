import { makeStyles } from "@mui/styles";


const globalStyle = makeStyles(() =>(
    {
        '@global' : {
            '*':{
                boxSizing:'border-box'
            }
        }
    }
))
export default globalStyle