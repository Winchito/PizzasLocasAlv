export interface User {
    uid: string | null;
    nombre: string;
    email: string;
    password: string;
    emailVerified: boolean;
    perfil: 'administrador' | 'usuario'
 }