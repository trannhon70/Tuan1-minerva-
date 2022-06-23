


//interface cho đối tượng 
export interface User{
    username: string;
    password: string ;

}


type AllkeyUser = keyof User;
type NewUser = Pick<User, 'username'>;

const u: Pick<User, 'username'> ={
    username:'asdsa'
}

const u1: Omit<User,'username'>= {
    password:'sadsa'
}

const user: Record<string, string> = {
    username:'nhon',
   

}

// interface cho hàm 
export interface CallbackUser{
    (a: number, b:number): number;
}

const callback: CallbackUser = (a,b) =>1

const handle: CallbackUser = function(){
    return 0;
}

const sum = (a:string, b:number) =>{
    return a + b;
}

const result = callback(1,2)

interface Axios {
    get(url : string):Promise<unknown>;
}

interface CallbackSuccessAxios<T> {
    (value: T): T;
}

type Callbacksuccess = (value: unknown) => unknown;

function callApi(success:CallbackSuccessAxios<ResponeLogin> ){
    const api: Axios = {
        get<ResponeLogin>(url: string) {
            return new Promise<ResponeLogin>(resolve => resolve({
                token:'ádsasa',
                userid: 'sadasd'
            } as unknown as ResponeLogin ));
        }
    }

    api.get('users/login').then((value) =>{
        success(value as ResponeLogin)
    }).catch()
}

interface ResponeLogin {
    token: string;
    userid: string
}


callApi (function(value: ResponeLogin){
    // value.token
    return value;
})

type LocalCallback <T = string> = (value: T) => T;

const local: LocalCallback = () =>'';

type ExampleGeneric = <T>() => T;

type Typetimeout = ReturnType<typeof setTimeout>;


