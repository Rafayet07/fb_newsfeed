import {Avatar,CardContent,Typography} from "@material-ui/core"
const Comment=(props)=>{
  return(
<div>
            <CardContent style={{display: 'flex'}}>
                <Avatar alt="Avatar" src={ props.proPic } />
                <Typography variant="body2" color="textPrimary" component="p" style={{padding: '10px', marginLeft: '5px', backgroundColor: '#edebe4', borderRadius: '20px'}}>
                    { props.body }
                </Typography>
            </CardContent>
    </div>
)
}
export default Comment;
