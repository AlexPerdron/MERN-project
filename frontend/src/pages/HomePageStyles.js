import { makeStyles } from '@material-ui/core/styles';

import { themes } from '../themes/index';
import background from '../asset/background.jpg';

export default makeStyles((theme) =>({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: themes.palette.primary.main,
    },
    container:{
        backgroundColor: 'blue',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
    }
}))