import { ButtonActions } from "../../components/buttonActions";
import { FaKey } from "react-icons/fa";

const SignInAccount = ({title, accountData, handleSignIn, handleChange}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <h2>{title}</h2>
            <div className="flex flex-col w-fit justify-center items-center gap-2 border-gray-600">
                <input 
                    name="sign-in" 
                    type="text" 
                    value={accountData?.name || ""} 
                    onChange={handleChange} 
                    placeholder="enter-your-name-or-email-address" 
                    className="w-full border border-gray-600 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    name="password" 
                    type="text"
                    value={accountData?.password || ""} 
                    onChange={handleChange} 
                    className="w-full border border-gray-600 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="enter-your-password-here"
                />
                <ButtonActions
                name={title}
                handleActions={handleSignIn}
                buttonColor="black"
                nameColor="white"
                buttonIcon={<FaKey className="text-white"/>}
                />
            </div>
        </div>
    );
};
export default SignInAccount;