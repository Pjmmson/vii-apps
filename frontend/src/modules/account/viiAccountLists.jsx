
const ViiAccountLists = ({accLists}) => {
    return (
        <div className="flex flex-col items-center bg-amber-300">
            <ul>
                {accLists && accLists.map((acc) => (
                    <li key={acc.id}>{acc.name} - {acc.email}</li>
                ))}
            </ul>
        </div>
    );
};
export default ViiAccountLists;