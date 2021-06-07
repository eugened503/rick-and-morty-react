import React, { useEffect, useState } from "react";
import { EPISODES } from "../../utils/constants/constants";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStylesGrid from "../../utils/styles/stylesGrid";
import GridItem from "../GridItem";

function Episodes() {
  const [data, setData] = useState("");
  const classes = useStylesGrid();

  useEffect(() => {
    let cleanupFunction = false;
    const fetchData = async () => {
      try {
        const response = await fetch(EPISODES);
        const result = await response.json();
        if (!cleanupFunction) setData(result);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchData();
    return () => (cleanupFunction = true);
  }, []);

  let message;
  if (data === undefined) {
    message = <div>'Loading...'</div>;
  }

  if (data) {
    message = (
      <>
        <GridItem data={data} path={"/episode"}/>
      </>
    );
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {message}
      </Grid>
    </Container>
  );
}

export default Episodes;
