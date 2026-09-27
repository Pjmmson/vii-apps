
export function ButtonActions ({name, handleActions, buttonIcon , buttonColor="blue-400",nameColor="black"}) {
    return (
        <button
        type="button"
        onClick={handleActions}
        aria-label={name}
        className={`inline-flex items-center w-fit hover:cursor-pointer justify-center gap-2 px-2 py-2 text-sm font-medium rounded-lg shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none bg-${buttonColor}`}
        >
            {buttonIcon && <span className="inline-flex items-center shrink-0">{buttonIcon}</span>}
            {name && <span className={`text-${nameColor}`}>{name}</span>}
        </button>
    );
};