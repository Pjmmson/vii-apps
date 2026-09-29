const ButtonActions = ({name, handleActions, buttonBgColor="bg-white",nameColor="black"}) => {
    return (
        <button
        type="button"
        onClick={handleActions}
        aria-label={name}
        className={`inline-flex items-center w-fit hover:cursor-pointer hover:bg-black hover:text-white justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonBgColor} ${nameColor}`}
        >
            {name && <span>{name}</span>}
        </button>
    );
};
export default ButtonActions;