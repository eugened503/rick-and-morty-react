import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useFormik } from "formik";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStylesCharacterID from "../../utils/styles/stylesCharacterID";
import { CHARACTERS } from "../../utils/constants/constants";
import Grid from "@material-ui/core/Grid";
import useStylesGrid from "../../utils/styles/stylesGrid";
import GridItem from "../GridItem";

export default function Character() {
  const classesID = useStylesGrid();
  const classes = useStylesCharacterID();
  const [id, setID] = useState("");
  const url = "/characters";

  useEffect(() => {
    if (id !== null) {
      setID(JSON.parse(localStorage.getItem("name")));
    }
  }, [id]);

  if (id === null) {
    setID("rick");
  }

  const formik = useFormik({
    initialValues: {
      _id: "",
    },
    onSubmit: (values) => {
      localStorage.setItem("name", JSON.stringify(values._id.toLowerCase()));
      setID(values._id.toLowerCase());
    },
  });
  const fetchCharacter = async (id) => {
    const res = await fetch(`${CHARACTERS}/?name=${id}`);
    return res.json();
  };
  const { data, error } = useQuery(["characterID", id], () =>
    fetchCharacter(id)
  );

  let message;
  if (data === undefined) {
    message = <div>'Loading...'</div>;
  }
  if (data && data.error) {
    message = <div>{data.error}</div>;
  }

  if (data && !data.error) {
    message = (
      <>
        <GridItem data={data} path={url} />
      </>
    );
  }

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Введите имя персонажа
          </Typography>

          <form className={classes.grow} onSubmit={formik.handleSubmit}>
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  id="_id"
                  name="_id"
                  type="text"
                  onChange={formik.handleChange}
                  placeholder="Введите имя"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
          </form>
          {error && <p>Error!</p>}
          {
            <Container className={classesID.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {message}
              </Grid>
            </Container>
          }
        </Container>
      </div>
    </>
  );
}
