
function Header({ category, title }){
    return(
        <div className=" mb-7">
            <p className="text-lg text-gray-400">{category}</p>
            <p className="text-3xl font-bold tracking-tight text-slate-900">{title}</p>
        </div>
    )
};

export default Header;