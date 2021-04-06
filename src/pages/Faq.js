import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: theme.palette.text.primary,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function Faq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h5">Часто задаваемые вопросы:</Typography>
      <Box component="span" m={3} />
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Я не хочу регистрироваться. могу ли я использовать LiveNote без
            регистрации?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Наш сервис предназначен для того, чтобы Вы могли обрести личное
            пространство, в котором Вас никто не потревожит. Чтобы это стало
            возможным, регистрация в нашем сервисе обязательна, работа с
            сервисом без регистрации невозможна.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Кто может зарегистрироваться в LiveNote?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Зарегистрироваться в нашем сервисе может любой человек, у которого
            есть доступ к сети Интернет и e-mail.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Есть ли какие-то требования к паролю?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Да, пароль должен содержать не менее 6 символов, при создании пароля
            обязательно использовать один из этих спец.символов: !@#$%^&*_+-=
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Я зарегистрировался (-ась), как попасть в систему?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Перейдите по ссылке{' '}
            <a
              href="https://silly-almeida-04589c.netlify.app/sign-in"
              className={classes.link}
            >
              https://silly-almeida-04589c.netlify.app/sign-in
            </a>
            , введите e-mail и пароль, указанные при регистрации и нажмите на
            кнопку &#34;Войти&#34;
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            Как зарегистрироваться в вашем сервисе?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Для регистрации необходимо перейти по ссылке{' '}
            <a
              href="https://silly-almeida-04589c.netlify.app/sign-up"
              className={classes.link}
            >
              https://silly-almeida-04589c.netlify.app/sign-up
            </a>{' '}
            и в соответствующих полях указать:
            <li>ваше имя</li>
            <li>выбранный логин, под которым вы будете создавать записи</li>
            <li>
              e-mail, к которому у вас есть доступ (необходим для восстановления
              пароля)
            </li>
            <li>пароль</li>
            <li>повторить пароль</li>
            <li>дату вашего рождения</li>
            <li>
              поставить галочку в чекбоксе &#34;Я согласен/согласна с политикой
              конфиденциальности&#34;
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>
            Как опубликовать запись?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            При переходе по кнопке &#34;Создать запись&#34; Вам необходимо
            придумать название записи, заполнить поле &#34;Текст&#34;. При
            желании вы можете добавить изображение (картинку или фотографию).
            Обратите внимание! До момента публикации вы не увидите, что
            изображение прикреплено. Также нужно выбрать категорию (актуально
            для открытых записей) и сделать запись открытой или закрытой
            (зависит от Вашего желания). При необходимости вы всегда сможете
            отредактировать свою запись позже.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>
            Есть ли какие-то ограничения к загружаемым картинкам?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Да, к записи можно загрузить только файлы в следующих форматах: jpg,
            png. Вес файла не должен превышать 600кб
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className={classes.heading}>
            Что такое открытая и закрытая запись? Какую выбрать?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Если Вы хотите, чтобы другие пользователи имели возможность находить
            вашу запись, читать, оценивать и комментировать. отмечайте запись
            как открытую. Если Вы хотите скрыть запись от остальных
            пользователей, пожалуйста, не ставьте галочку в чекбокс &#34;Сделать
            запись открытой&#34;
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography className={classes.heading}>Другая проблема?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Если у вас есть вопросы, возникли проблемы или имеются
            конструктивные пожелания — напишите нам{' '}
            <a href="support@livenote.com" className={classes.link}>
              support@livenote.com
            </a>
            . Мы обязательно прочтем ваше сообщение и ответим ответим в
            ближайшее время на вашу почту.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box component="span" m={3} />
    </Container>
  );
}
