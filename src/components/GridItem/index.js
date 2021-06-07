import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import useStylesGrid from "../../utils/styles/stylesGrid";

function GridItem({ data, path }) {
  const history = useHistory();
  const classes = useStylesGrid();

  return (
    <>
      {data.results.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            {card.image && (
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title="Image title"
              />
            )}

            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.name}
              </Typography>
              {card.status && <Typography>Статус: {card.status}</Typography>}
              {card.gender && <Typography>Пол: {card.gender}</Typography>}
              {card.air_date && (
                <Typography>Дата выхода: {card.air_date}</Typography>
              )}
              {card.type && <Typography>Тип: {card.type}</Typography>}
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => history.push(`${path}/${card.id}`)}
              >
                Подробнее
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default GridItem;
