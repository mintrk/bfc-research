// type module augmentation
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-aut/jwt";
import { Token } from "typescript";

declare module "next-auth" {
  interface Session {
    expires?: unknown;
    tk: string;
  }

  interface User extends DefaultUser {
    tk: string;
    role: string;
    expired: Date;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    tk: string;
    role: string;
    access: Token;
  }
}
