import ButtonActions from "../../components/buttonActions";
import CreateViiAccount from "./createViiAccount";
import SignInAccount from "./signInViiAccount";
const ViiAccountCaller = ({ title, handleClicks }) => {
  const isCreate = title === "create" ? true : false;
  const isSignIn = title === "sign-in" ? true : false;
  return (
    <div className="flex flex-col min-h-full min-w-full gap-2">
      <div className="flex flex-row justify-between p-2">
        <a
        href="/account/main"
        className="inline-block hover:cursor-pointer"
        >
            <h4 className="font-bold text-lg">{"Vii account"}</h4>
        </a>
        <div className="flex flex-row justify-between gap-4">
          <h6
            className="text-xs cursor-pointer hover:text-blue-500"
            onClick={() => handleClicks("sign-in")}
          >
            {"Sign in"}
          </h6>
          <h6
            className="text-xs cursor-pointer hover:text-blue-500"
            onClick={() => handleClicks("create")}
          >
            {"Create Your Vii Account"}
          </h6>
        </div>
      </div>
      <div className="flex flex-col">
        {isCreate ? (
          <CreateViiAccount />
        ) : isSignIn ? (
          <SignInAccount />
        ) : (
          <div>
            <h2>{"one-vii-account-for-everything Vii"}</h2>
            <p>
              A single Vii Account and password gives you access to all Vii
              services. Sign in to manage your account.
            </p>
            <ButtonActions
              name={"sign-in"}
              // handleActions={}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ViiAccountCaller;
