const LOADING = ({label}) => {
    return (
        <div className="flex justify-center items-center gap-2 text-blue-600 p-8">
          <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <span className="text-sm font-medium text-gray-500">{label}</span>
        </div>
    );
};
export default LOADING;