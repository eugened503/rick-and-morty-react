import { makeStyles } from "@material-ui/core/styles";

const useStylesGrid = makeStyles((theme) => ({
  appPadding: {
    paddingTop: 30,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default useStylesGrid;
