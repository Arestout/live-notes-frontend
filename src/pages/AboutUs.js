import React from 'react';
import '../App.css';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  information: {
    marginLeft: theme.spacing(7),
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Box mt={5} className={classes.root}>
        <Typography variant="h5">LiveNote</Typography>
      </Box>
      <Box mt={5} className={classes.information}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          rutrum lorem tincidunt, accumsan nulla id, feugiat mi. Pellentesque ut
          sem elementum, vehicula neque et, gravida nunc. Maecenas vel tellus eu
          nulla malesuada hendrerit. Sed pretium rhoncus risus. Maecenas id
          purus nec nulla pulvinar semper. Morbi gravida neque nec magna tempus
          ultricies. Pellentesque dolor justo, faucibus quis consectetur in,
          posuere eu ex. Praesent interdum felis laoreet bibendum tempor. Nunc
          at arcu consectetur, varius ante a, pulvinar nisl. Phasellus in
          sollicitudin nibh, eu sodales quam. Morbi lacinia fringilla tempor.
          Nulla facilisi.
        </Typography>
      </Box>
      <Box mt={5} className={classes.information}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra,
          lectus at venenatis faucibus, sem sem luctus neque, et tempus lorem
          diam nec quam. Fusce volutpat enim et lectus imperdiet, ut cursus
          justo sagittis. Sed et odio eu quam sollicitudin hendrerit. Etiam
          imperdiet, libero vel eleifend euismod, est sapien maximus dolor, a
          vehicula leo metus ullamcorper diam. Integer at eros hendrerit,
          tristique nunc et, aliquet diam. Sed lobortis mollis quam, eget
          finibus diam dignissim eu. Aenean eu laoreet enim, nec tristique
          lorem. Phasellus posuere ornare posuere. Morbi gravida, lectus vel
          semper consequat, massa orci convallis eros, sed suscipit mauris nisi
          ac lectus. Pellentesque sit amet turpis justo. Nunc non auctor magna.
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography className={classes.information}>
          Proin sed ex a lacus vulputate ultrices. Curabitur sollicitudin
          sodales erat sed dignissim. Nunc ac sem sed ante interdum porta. Ut
          sed quam at lectus volutpat facilisis. Phasellus nec nisl metus.
          Curabitur tristique, enim id porta rhoncus, tellus ligula scelerisque
          lectus, quis sodales metus lorem in purus. Nam non erat sed mauris
          semper luctus sed sit amet leo. Etiam mollis id mi at pretium. Ut
          blandit nulla nec velit congue fringilla. Vivamus laoreet aliquet nunc
          vitae mollis. Morbi eu vestibulum mauris, eget aliquam sem. Etiam
          ornare efficitur commodo. In hac habitasse platea dictumst. Integer ut
          malesuada massa, a pretium lorem. Sed ac eros tristique, egestas massa
          sit amet, rutrum velit. Donec purus lectus, vestibulum at consectetur
          facilisis, commodo in est. Sed consectetur quam sem, aliquam egestas
          turpis tristique sit amet. Vivamus sodales odio non diam venenatis, in
          vestibulum tortor auctor. Nulla ornare nisi eget libero accumsan
          fermentum. Donec id ultricies elit, vitae luctus dui. Ut aliquet
          suscipit sapien vitae maximus. Donec vitae nisi in dui ullamcorper
          auctor a vitae ex. Aenean a commodo lacus, sed tincidunt velit.
        </Typography>
      </Box>
      <Box mt={5}></Box>
    </>
  );
}
