import React from 'react';
import '../App.css';
import './Welcome.css';
import { Box, Container, Typography } from '@material-ui/core';

function Welcome() {
  return (
    <>
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <Typography variant="h5" component="h5">
          Привет!
        </Typography>
        <Typography variant="h6" component="h6">
          Наша команда рада приветствовать тебя на нашем портале!
        </Typography>
        <Typography variant="h6" component="h6">
          Почему мы решили создать такой продукт?
        </Typography>
        <Container>
          <Box mt={5}></Box>
          <Typography variant="body2">
            В наше время многие сталкиваются с ощущением незащищенности: камеры
            распознавания лиц, отслеживание трафика, отсутствие личного
            пространства даже в соц.сетях. Это влечет за собой огромное
            количество различных переживаний, с которыми сложно справиться
            самостоятельно. На нашем портале ты сможешь выражать свои мысли,
            чувства, эмоции, не боясь быть узнанным, не опасаясь лишних вопросов
            со стороны знакомых.
          </Typography>
          <Box mt={3}></Box>
          <Typography variant="body2">
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
