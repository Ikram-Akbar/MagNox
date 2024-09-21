import { Link } from 'react-router-dom';
const Nav = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        {name: "Jobs", path: "/jobs"},
        { name: 'Applied Jobs', path: '/appliedJobs' },
        { name: 'Blogs', path: '/blogs' },
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    MagNox 365
                </div>
                <div className="flex-1 flex justify-center">
                    <ul className="flex space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} className="text-gray-300 hover:text-white">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
