import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../themes/ColorPalette";

export default makeStyles(() => ({
	container: {
		backgroundColor: themes.palette.primary.dark,
		color: themes.palette.secondary.dark,
		justifyContent: "space-between",
		display: "fixed",
		padding: "10px",
		height: "auto",
        borderBottomRightRadius:"10px",
	},
	typography: {
		color: themes.palette.secondary.main,
		fontWeight: "lighter",
		marginTop: "5px",
		padding: "5px",
	},
	button: {
		color: themes.palette.secondary.main,
	},
}));
