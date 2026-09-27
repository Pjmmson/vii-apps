
const ViiAccountLists = ({accLists}) => {
    return (
        <div className="flex flex-col max-h-full">
            <div className="flex flex-row justify-between p-2">
                <h4 className="font-bold text-lg">{"Vii account"}</h4>
                <div className="flex flex-row justify-between gap-4">
                    <h6 className="text-xs cursor-pointer hover:text-blue-500">{"Sign in"}</h6>
                    <h6 className="text-xs cursor-pointer hover:text-blue-500">{"Create Your Vii Account"}</h6>
                </div>
                
            </div>
            <div>
                <ul>
                    {accLists && accLists.map((acc) => (
                        <li key={acc.id}>{acc.name} - {acc.email}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};
export default ViiAccountLists;