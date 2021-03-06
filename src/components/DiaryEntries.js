import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Tooltip,
  Button,
  Avatar,
  Typography,
} from '@material-ui/core';

function DiaryEntries(props) {
  return (
    <div style={{ margin: '20px 0' }}>
      <ul>
        {props.entries.map((entry) => {
          return (
            <ExpansionPanel key={entry.id} style={{ margin: '5px 0' }}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Avatar>LN</Avatar>
                <Typography>
                  <h2
                    style={{
                      margin: '0 25px',
                    }}
                  >
                    {entry.title}
                  </h2>
                </Typography>
              </ExpansionPanelSummary>
              <p
                style={{
                  textAlign: 'left',
                  margin: '10px 50px',
                  overflow: 'auto',
                  height: '100px',
                }}
              >
                <Typography>{entry.description}</Typography>
              </p>
              <p
                style={{ textAlign: 'right', margin: '10px', fontSize: '14px' }}
              >
                {'Создано:'}
                {entry.date}
              </p>
              <Tooltip title="Удалить эту запись">
                <Button
                  style={{
                    backgroundColor: '#f71450',
                    color: '#fff',
                    width: '80px',
                    fontWeight: 'bold',
                    margin: '20px',
                  }}
                  variant="contained"
                  // color="secondary"
                  onClick={() => props.deleteDiaryEntry(entry.id)}
                >
                  Удалить
                </Button>
              </Tooltip>
            </ExpansionPanel>
          );
        })}
      </ul>
    </div>
  );
}

export default DiaryEntries;
