import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 'auto',
    width:'50%',
    marginTop:20,
    boxShadow: 'inset -3px -6px 54px -19px rgba(17,0,255,0.68)'

  },
 
  title: {
    fontSize: 15,
    color:'blue',
  },
  title2:{
    fontSize: 20,
  },
  pos: {
    marginBottom: 10,
  },
});

const PostInfo = (props) => {
    const {id, title} = props.post;

    const classes = useStyles();
    
    return (
        
    <Card className={classes.root}>
        <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post Id : {id}
                </Typography>
                <Typography variant="body2" component="p" className={classes.title2}>
                    Post Title: {title} 
                </Typography>
        </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary">
                    <Link to={`/post/${id}`}>Details Here</Link>
                </Button>
            </CardActions>
    </Card>
  
  );
        
      
};

export default PostInfo;

