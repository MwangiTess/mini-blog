import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-5 flex items-center max-w-screen-md mx-auto border-b border-gray-200 ">
            <Link to="/">
            <h1 className="text-red-700">Serendipitous Sagas</h1>
            </Link>
                <div className="ml-auto">
                <Link className="ml-4 p-2 hover:text-red-300" to="/">Home</Link>
                <Link className="ml-4 p-2 hover:text-red-300" to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;