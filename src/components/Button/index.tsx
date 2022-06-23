import { FC, MouseEvent } from "react";

export interface ButtonProps {
    variant?: 'success' | 'primary' | 'secondary';
    // children : string;
    onClick ?(e: MouseEvent<HTMLButtonElement>): void;
}

const Button: FC<ButtonProps> = props =>{
     const {children, variant='secondary', onClick} = props;
    return <button className={ 'bg-' + variant } onClick={ onClick} >{children} </button>
}

export default Button;