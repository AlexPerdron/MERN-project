import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../themes/ColorPalette";

export default makeStyles((theme) => ({
	popup: {
		position: "absolute",
		width: "70%",
		height: "60%",
		backgroundColor: themes.palette.primary.main,
		borderRadius: "20px",
		boxShadow: themes.shadows[5],
		padding: themes.spacing(2, 4, 3),
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	typography: {
		marginTop: "10px",
		color: themes.palette.primary.dark,
	},
	form: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		width: "100%",
		marginBottom: "10px",
	},
	textarea: {
		width: "100%",
		marginBottom: "10px",
		borderRadius: "5px",
	},
	doneButton: {
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		backgroundColor: themes.palette.primary.main,
		color: themes.palette.secondary.main,
		"&:hover": {
			backgroundColor: themes.palette.primary.light,
		},
		padding: "5px",
	},
	closeButton: {
		position: "fixed",
        top: theme.spacing(2),
		right: theme.spacing(2),
		backgroundColor: themes.palette.primary.main,
		color: themes.palette.secondary.main,
		"&:hover": {
			backgroundColor: themes.palette.primary.light,
		},
	},
}));
