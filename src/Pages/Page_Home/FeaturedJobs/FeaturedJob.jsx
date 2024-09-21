/* eslint-disable react/prop-types */

import { FaMapMarkerAlt, FaDollarSign, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job }) => {
    return (
        <div className="">
            <div key={job.id} className=" bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                {/* Job Logo */}
                <div className="flex justify-center items-center mb-4">
                    <img
                        src={job.logo}
                        alt={job.company_name}
                        className="w-24 h-24 object-contain "
                    />
                </div>
                {/* Job Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    {job.job_title}
                </h2>
                {/* Company Name */}
                <p className="text-gray-600 mb-2 text-center">{job.company_name}</p>
                {/* Job Type and Remote/Onsite */}
                <div className="flex items-center justify-center text-gray-700 mb-4">
                    <FaBriefcase className="mr-2" />
                    <p>{job.job_type} | {job.remote_or_onsite}</p>
                </div>
                {/* Location and Salary */}
                <div className="flex items-center justify-between text-gray-600 mb-4">
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <p>{job.location}</p>
                    </div>
                    <div className="flex items-center">
                        <FaDollarSign className="mr-1" />
                        <p className="font-semibold">{job.salary}</p>
                    </div>
                </div>
                {/* Apply Button */}
                <div className="flex justify-center">
                    <Link to={`/jobs/${job.id}`}>
                        <button className="text-center mt-4 bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;
