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
            setMessage(message('Vui l??ng nh???p t??n ????ng nh???p', 'username', 'error'))
            return false
        };
        if (username.length > 8) {
            setMessage(message('T??n ????ng nh???p kh??ng ???????c v?????t qu?? 8 k?? t???', 'username', 'error'))
            return false
        };
        if (username.length < 3) {
            setMessage(message('T??n ????ng nh???p ph???i c?? ??t nh???t 3 k?? t???', 'username', 'error'))
            return false
        };
        if (!TextPassword) {
            setMessage(message('Vui l??ng nh???p m???t kh???u', 'password', 'error'))
            return false
        };
        if (TextPassword.length < 3) {
            setMessage(message('M???t kh???u ph???i c?? ??t nh???t 3 k?? t???', 'password', 'error'))
            return false
        };
        if (TextPassword.length > 24) {
            setMessage(message('M???t kh???u kh??ng ???????c v?????t qu?? 24 k?? t???', 'password', 'error'))
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
            setMessage(message('????ng nh???p th??nh c??ng ', '', 'error'));
            setTimeout(() => {
                setMessage(message('????ng nh???p th??nh c??ng ', '', 'success'));
            }, 2000)
        } else {

        }
    }

    console.log(TextUserName, TextPassword, Message);


    return (
        <Paper sx={SxPaper} className="relative">
            <Box className="absolute" sx={SxPageWrapper}>
                <Paper sx={SxFormWrapper} >
                    <Typography variant="h4" component="h4" sx={Sxtitle}>????ng nh???p</Typography>
                    {
                        Message.content && !Message.field &&
                        <Alert severity={Message.color ? Message.color : undefined} sx={{ mb: 2 }} >{Message.content}</Alert>
                    }

                    <Box>
                        <TextField
                            label="t??n ????ng nh???p"
                            variant="outlined"
                            fullWidth
                            value={TextUserName}
                            onChange={changeUserName}
                            onKeyUp={keyupInput}
                            helperText={getMessage(Message, 'username')}
                            error={!!getMessage(Message, 'username')}

                        />
                        <TextField
                            label="m???t kh???u"
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
                        >????ng nh???p</Button>
                    </Box>
                </Paper>
            </Box>
        </Paper>
    )
}

export default forwardRef(Form);