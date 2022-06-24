import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { ChangeEvent, forwardRef, ForwardRefRenderFunction, KeyboardEvent, MouseEvent, useEffect, useImperativeHandle, useState } from "react";
import { SxFormWrapper, SxPageWrapper, SxPaper, Sxtitle } from "./style";

export interface FormRef {
    getValue() : {username: string ; password: string};
    setValue(username?: string, password?: string): void;
    validate(): boolean;
}

export interface FormProps {
    username?: string;
    password?: string;
}

export type ImessageColor = 'error' | 'success' | '';
export type IMessageFied = 'username' | 'password' | '';

export interface IMessage {
    content: string;
    color: ImessageColor;
    field: IMessageFied;
}

const message = (
    content: string,
    field: IMessageFied = '',
    color: ImessageColor = ''
): IMessage => ({ content, color, field });

const getMessage = (message: IMessage, field: IMessageFied) => message.field === field ? message.content : '';
const Form: ForwardRefRenderFunction<FormRef, FormProps> = (props, ref) => {
    const { username = '', password = '' } = props;
    const [TextUserName, setTextUserName] = useState('');
    const [TextPassword, setTextPassword] = useState('');
    const [Message, setMessage] = useState<IMessage>(message(''));

    useEffect(() => {
        username === TextUserName || setTextUserName(username);
        password === TextPassword ||setTextPassword(password);
    }, [username, password])

    useImperativeHandle(ref,() =>({
        getValue: () =>({username: TextUserName.trim(), password: TextPassword}),
        setValue: (username? ,password?)=>{
            username !== undefined && setTextUserName(username);
            password !== undefined && setTextPassword(password);
        },
        validate:() => validate()
    }))

    const changeUserName = (e: ChangeEvent<HTMLInputElement>) => setTextUserName(e.target.value.trim());
    const changePassWord = (e: ChangeEvent<HTMLInputElement>) => setTextPassword(e.target.value);

    const keyupInput = (e: KeyboardEvent<HTMLInputElement>) => e.code === 'Enter' && submitLogin();

    const validate = () => {
        const username = TextUserName.trim();
        if (!username) {
            setMessage(message('Vui lòng nhập tên đăng nhập', 'username', 'error'))
            return false
        };
        if (username.length > 8) {
            setMessage(message('Tên đăng nhập không được vượt quá 8 ký tự', 'username', 'error'))
            return false
        };
        if (username.length < 3) {
            setMessage(message('Tên đăng nhập phải có ít nhất 3 ký tự', 'username', 'error'))
            return false
        };
        if (!TextPassword) {
            setMessage(message('Vui lòng nhập mật khẩu', 'password', 'error'))
            return false
        };
        if (TextPassword.length < 3) {
            setMessage(message('Mật khẩu phải có ít nhất 3 ký tự', 'password', 'error'))
            return false
        };
        if (TextPassword.length > 24) {
            setMessage(message('Mật khẩu không được vượt quá 24 ký tự', 'password', 'error'))
            return false
        };
        setMessage(message(''));
        return true
    }

    const submitLogin = (e?: MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        e?.stopPropagation();
        const valid = validate();
        if (valid) {
            setMessage(message('Đăng nhập thành công ', '', 'error'));
            setTimeout(() => {
                setMessage(message('Đăng nhập thành công ', '', 'success'));
            }, 2000)
        } else {

        }
    }

    console.log(TextUserName, TextPassword, Message);


    return (
        <Paper sx={SxPaper} className="relative">
            <Box className="absolute" sx={SxPageWrapper}>
                <Paper sx={SxFormWrapper} >
                    <Typography variant="h4" component="h4" sx={Sxtitle}>Đăng nhập</Typography>
                    {
                        Message.content && !Message.field &&
                        <Alert severity={Message.color ? Message.color : undefined} sx={{ mb: 2 }} >{Message.content}</Alert>
                    }

                    <Box>
                        <TextField
                            label="tên đăng nhập"
                            variant="outlined"
                            fullWidth
                            value={TextUserName}
                            onChange={changeUserName}
                            onKeyUp={keyupInput}
                            helperText={getMessage(Message, 'username')}
                            error={!!getMessage(Message, 'username')}

                        />
                        <TextField
                            label="mật khẩu"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 2 }}
                            value={TextPassword}
                            onChange={changePassWord}
                            onKeyUp={keyupInput}
                            helperText={getMessage(Message, 'password')}
                            error={!!getMessage(Message, 'password')}

                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                            onClick={submitLogin}
                        >Đăng nhập</Button>
                    </Box>
                </Paper>
            </Box>
        </Paper>
    )
}

export default forwardRef(Form);