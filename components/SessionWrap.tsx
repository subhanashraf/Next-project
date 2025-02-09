import { SessionProvider } from "next-auth/react"


export  function SessionWraper({children}){
 
    return (
        <SessionProvider >
       {children}
        </SessionProvider>
    )
}