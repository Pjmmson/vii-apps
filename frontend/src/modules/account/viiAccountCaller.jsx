import CreateViiAccount from "./createViiAccount";
import SignInAccount from "./signInViiAccount";
const ViiAccountCaller = ({title, accountData, handleChange, handleSignIn, handleCreate, handleClicks }) => {
    const isCreate = title === "create" ? true : false;
    const isSignIn = title === "sign-in" ? true : false;
    return (
        <div className="flex flex-col min-h-full min-w-full">
            <div className="flex flex-row justify-between p-2">
                <h4 className="font-bold text-lg">{"Vii account"}</h4>
                <div className="flex flex-row justify-between gap-4">
                    <h6 className="text-xs cursor-pointer hover:text-blue-500" onClick={() => handleClicks('sign-in')}>{"Sign in"}</h6>
                    <h6 className="text-xs cursor-pointer hover:text-blue-500" onClick={() => handleClicks('create')}>{"Create Your Vii Account"}</h6>
                </div>
            </div>
            <div className="flex flex-col">
                {isCreate ? (
                    <CreateViiAccount title={title} accountData={accountData} handleChange={handleChange}/>
                ) : isSignIn ? (
                    <SignInAccount title={title} handleSignIn={handleSignIn} handleChange={handleChange}/>
                ) : ""}
            </div>
            
        </div>
    );
};
export default ViiAccountCaller;