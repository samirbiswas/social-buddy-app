import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PostInfo.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostInfo = (props) => {
    const {id, title} = props.post;

    const classes = useStyles();
    
    return (
        
    <Card className={classes.root}>
        <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <h3>Post Id : {id}</h3>
                </Typography>
                <Typography variant="body2" component="p">
                <h5>Post Title: <span>{title}</span> </h5>
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

