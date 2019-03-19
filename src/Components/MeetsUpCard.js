import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
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
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
            Ngawesome meetup and epen
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            14 Maret 2019
        </Typography>
        <Typography component="p">
            Haha
          <br />
          {'----'}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
           Ketemulah, sebelum ketemu itu dilarang
        </Typography>
        <Typography gutterBottom variant="subtitle1">
            Haha
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);