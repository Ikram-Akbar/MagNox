import { FaBriefcase, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const jobs_data = useLoaderData();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Available Jobs ({jobs_data.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs_data.map((job) => (
          <div key={job.id} className="bg-gray-100 shadow-lg rounded-lg p-6">
            {/* Job Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={job.logo}
                alt={job.company_name}
                className="w-20 h-20 object-contain"
              />
            </div>
            {/* Job Title */}
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {job.job_title}
            </h2>
            {/* Company Name */}
            <p className="text-gray-600 text-center mb-2">{job.company_name}</p>
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
              <button className="text-center mt-4 bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
