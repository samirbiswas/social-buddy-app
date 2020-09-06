import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 'auto',
    width:'50%',
    marginTop:5,
    border:'1px solid blue'
    
  },
 
  title: {
    fontSize: 15,
    color:'dodgerblue'
  },

  title2:{
    fontSize: 15,
    
  },
  pos: {
    marginBottom: 10,
  },
});
const UserComments = (props) => {
    const {name,body,email} = props.comments;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Name : {name}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Email : {email}
                </Typography>
                <Typography variant="body2" component="p" className={classes.title2}>
                        Comments: {body} 
                </Typography>
        </CardContent>
            
    </Card>
    );
};

export default UserComments;