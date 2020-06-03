import React from 'react';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contents: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

type Props = {
  keywords: Array<string>;
};

export default (props: Props) => {
  const classes = useStyles();

  const { keywords } = props;
  const chips = keywords.map(keyword => (
    <Chip key={keyword} size="small" label={keyword} />
  ));

  return <CardContent className={classes.contents}>{chips}</CardContent>;
};
