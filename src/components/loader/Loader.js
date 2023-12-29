const Loader = (props) => {
    return (
        <div className="w-40 h-40 flex items-center justify-center">
            <div className={`w-12 h-12 animate-spin rounded-full ${props.borderColor} border-t-2 border-r-2`}></div>
        </div>
    );
};

export default Loader;