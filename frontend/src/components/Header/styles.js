import { makeStyles } from "@material-ui/core/styles";
import { themes } from '../../themes/index';

export default makeStyles(() => ({
    container:{
        background: themes.palette.primary.main,
        color: 'black',
        marginBottom: 20,
        fontWeight: 'lighter',
        padding: 0,
        borderRadius: '25px',
    }
}))