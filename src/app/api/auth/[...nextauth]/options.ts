import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        token: { label: "Token", type: "text" },
      },
      async authorize(credentials) {
        console.log("[next-auth] calling api ");
        try {
          const res = await fetch(`http://127.0.0.1:4000/testlogin`, {
            method: "POST",
            body: JSON.stringify({
              token: credentials?.token,
            }),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();
          if (res.ok && user) {
            console.log("[next-auth] user : ", user);
            return user;
          } else {
            return null;
          }
        } catch (error: any) {
          console.log("Error : ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.tk = user.tk;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      console.log("[next-auth] Token : ", token.tk);
      if (token) {
        session = {
          tk: token.tk,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
};
