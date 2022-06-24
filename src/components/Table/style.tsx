import {SxProps, Theme} from '@mui/system';

export const SxPaper: SxProps<Theme> = {
    height:'100vh',
    width:'100vw',
    bgcolor:'secondary.main'
}

export const SxPageWrapper: SxProps<Theme>={
    left:'37%',
    top:'25%'
}

export const SxFormWrapper: SxProps<Theme> = {
    width:'400px',
    height:'500px',
    maxWidth:'calc(100vh - 3rem',
    maxHeight:'calc(100vh - 3rem'
}

export const Sxtitle: SxProps<Theme> ={
    textAlign:'center',
    py:2
}