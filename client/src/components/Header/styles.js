import { makeStyles } from "@material-ui/core/styles";
import { themes } from '../../themes/ColorPalette';

export default makeStyles(() => ({
    container:{
        backgroundColor: themes.palette.secondary.main,
        justifyContent:'space-between',
        display: 'flex',
        padding: '10px',
    },
    typography:{
        color: themes.palette.secondary.temp,
        fontWeight: 'lighter',
        marginTop: 0,
    },
    button:{
        color: themes.palette.secondary.temp,
        marginTop: -10,
    },
    button_typography:{
        marginRight:5,
    },
    logo:{
        display: 'flex',
        maxWidth: '45px',
        height: '45px',
        marginRight: 10,
        marginTop: 2,
        padding: 0,
    }
}))