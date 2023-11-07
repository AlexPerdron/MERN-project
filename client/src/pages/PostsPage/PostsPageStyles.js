import { makeStyles } from "@material-ui/core/styles";

import { themes } from "../../themes/ColorPalette";

export default makeStyles((theme) => ({
	fab: {
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		backgroundColor: themes.palette.primary.light,
		color: themes.palette.secondary.dark,
	},
	container: {
		backgroundColor: themes.palette.primary.light,
		justifyContent: "space-between",
		display: "flex",
		padding: "10px",
	},
}));
