import ButtonActions from "../../components/buttonActions";
import { useAccountSignInForm } from "../../hooks/useAccountSignInForm";

const SignInAccount = ()=> {
    const {signInAccData, isLoading, error, handleChange,handleSignIn} = useAccountSignInForm();
    return (
        <div className="flex flex-col w-full justify-center items-center gap-2">
            <h2>{"vii-account"}</h2>
            <p className="text-sm text-gray-600">{"manage-your-vii-account"}</p>
            <div className="flex flex-col w-80  justify-center items-center gap-2 border-gray-600">
                <input 
                    name="userName" 
                    type="text" 
                    value={signInAccData?.userName || ""} 
                    onChange={handleChange} 
                    placeholder="enter-your-name-or-email-address" 
                    className="w-full border border-gray-600 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    name="password" 
                    type="text"
                    value={signInAccData?.password || ""} 
                    onChange={handleChange} 
                    className="w-full border border-gray-600 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="enter-your-password-here"
                />
                <ButtonActions
                name={"sign-in"}
                handleActions={handleSignIn}
                buttonBgColor="bg-white"
                nameColor="text-black hover:text-white"
                />
            </div>
        </div>
    );
};
export default SignInAccount;