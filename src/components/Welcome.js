import React from 'react';
import '../App.css';
import './Welcome.css';
import 'fontsource-roboto';

import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    color: '#e6e6e6',
    fontFamily: 'Roboto',
  },
});
function Welcome() {
  const classes = useStyles();
  return (
    <>
      <div className="hero-container">
        <Box mt={10}></Box>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <Typography variant="h5" component="h5" className={classes.text}>
          Привет!
        </Typography>
        <Typography variant="h6" component="h6" className={classes.text}>
          Наша команда рада приветствовать тебя на нашем портале!
        </Typography>
        <Typography variant="h6" component="h6" className={classes.text}>
          Почему мы решили создать такой продукт?
        </Typography>
        <Container>
          <Box mt={5}></Box>
          <Typography variant="body2" className={classes.text}>
            В наше время многие сталкиваются с ощущением незащищенности: камеры
            распознавания лиц, отслеживание трафика, отсутствие личного
            пространства даже в соц.сетях. Это влечет за собой огромное
            количество различных переживаний, с которыми сложно справиться
            самостоятельно. На нашем портале ты сможешь выражать свои мысли,
            чувства, эмоции, не боясь быть узнанным, не опасаясь лишних вопросов
            со стороны знакомых.
          </Typography>
          <Box mt={3}></Box>
          <Typography variant="body2" className={classes.text}>
            Условие только одно: не противоречить действующему законодательству.
            Выбирай себе любое имя. Пиши о том, что для тебя важно, делись
            радостями или переживаниями, находи единомышленников! Это твое
            пространство и твоя свобода самовыражения!
          </Typography>
          <Box mt={5}></Box>
        </Container>
      </div>
    </>
  );
}
export default Welcome;
