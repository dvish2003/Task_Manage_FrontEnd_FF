export type User = {
    _id:string,
    name: string;
    email: string;
    password: string;
}


export type UserFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type UserLoginData = {
    email: string;
    password: string;
}