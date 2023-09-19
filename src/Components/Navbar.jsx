const Navbar = () => {
    return (
        <nav className="p-5 flex items-center max-w-screen-md mx-auto border-b border-gray-200 ">
            <h1 className="text-red-700">Serendipitous Sagas</h1>
            <div className="ml-auto">
                <a className="ml-4 p-2 hover:text-red-300" href="/">Home</a>
                <a className="ml-4 p-2 hover:text-red-300" href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;