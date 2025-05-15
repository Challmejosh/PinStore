
import { auth, signIn, signOut } from "@/auth";


const Authentication = async () => {
    const session = (await auth())
    return ( 
        <form action={async()=>{
            "use server"
            if(!session){
                await signIn("Google")
            }else{
                await signOut()
            }
        }} className="w-full cursor-pointer text-xs flex flex-col items-start justify-center ">
            <button className="w-full cursor-pointer text-xs flex flex-col items-start justify-center" type="submit">
                <p className="">{session?"Sign out": "Sign in"}</p>
                <p className="font-semibold">Account</p>
            </button>
        </form>
     );
}
 
export default Authentication;