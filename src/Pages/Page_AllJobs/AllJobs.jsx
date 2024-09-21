// import { useState } from "react";
// import { FaBriefcase, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
// import { Link, useLoaderData } from "react-router-dom";

// const AllJobs = () => {
//   const jobs_data = useLoaderData();
//   const [filteredJobs, setFilteredJobs] = useState(jobs_data);
//   const [filters, setFilters] = useState({
//     jobType: "",
//     location: "",
//     remoteOrOnsite: "",
//   });

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   // Apply filters
//   const applyFilters = () => {
//     const { jobType, location, remoteOrOnsite } = filters;
//     const filtered = jobs_data.filter((job) => {
//       return (
//         (jobType ? job.job_type === jobType : true) &&
//         (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
//         (remoteOrOnsite ? job.remote_or_onsite === remoteOrOnsite : true)
//       );
//     });
//     setFilteredJobs(filtered);
//   };

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Available Jobs ({filteredJobs.length})
//       </h1>

//       {/* Filter Section */}
//       <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Job Type
//           </label>
//           <select
//             name="jobType"
//             value={filters.jobType}
//             onChange={handleFilterChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="">All</option>
//             <option value="Full Time">Full Time</option>
//             <option value="Part Time">Part Time</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Location
//           </label>
//           <input
//             type="text"
//             name="location"
//             value={filters.location}
//             onChange={handleFilterChange}
//             placeholder="Enter location"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Remote/Onsite
//           </label>
//           <select
//             name="remoteOrOnsite"
//             value={filters.remoteOrOnsite}
//             onChange={handleFilterChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="">All</option>
//             <option value="Remote">Remote</option>
//             <option value="Onsite">Onsite</option>
//           </select>
//         </div>
//       </div>

//       {/* Apply Filters Button */}
//       <div className="flex justify-end mb-8">
//         <button
//           onClick={applyFilters}
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//         >
//           Apply Filters
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredJobs.map((job) => (
//           <div key={job.id} className="bg-gray-100 shadow-lg rounded-lg p-6">
//             {/* Job Logo */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src={job.logo}
//                 alt={job.company_name}
//                 className="w-20 h-20 object-contain"
//               />
//             </div>
//             {/* Job Title */}
//             <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
//               {job.job_title}
//             </h2>
//             {/* Company Name */}
//             <p className="text-gray-600 text-center mb-2">{job.company_name}</p>
//             {/* Job Type and Remote/Onsite */}
//             <div className="flex items-center justify-center text-gray-700 mb-4">
//               <FaBriefcase className="mr-2" />
//               <p>
//                 {job.job_type} | {job.remote_or_onsite}
//               </p>
//             </div>
//             {/* Location and Salary */}
//             <div className="flex items-center justify-between text-gray-600 mb-4">
//               <div className="flex items-center">
//                 <FaMapMarkerAlt className="mr-2" />
//                 <p>{job.location}</p>
//               </div>
//               <div className="flex items-center">
//                 <FaDollarSign className="mr-1" />
//                 <p className="font-semibold">{job.salary}</p>
//               </div>
//             </div>
//             {/* Apply Button */}
//             <div className="flex justify-center">
//               <button className="text-center mt-4 bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition">
//                 <Link to={`/jobs/${job.id}`}> View Details</Link>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllJobs;




import { useState } from "react";
import { FaBriefcase, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const jobs_data = useLoaderData();
  const [jobTypeFilter, setJobTypeFilter] = useState(""); // Filter by Job Type
  const [locationFilter, setLocationFilter] = useState(""); // Filter by Location
  const [remoteOrOnsiteFilter, setRemoteOrOnsiteFilter] = useState(""); // Filter by Remote/Onsite

  // Simple filter function
  const filteredJobs = jobs_data.filter((job) => {
    return (
      (jobTypeFilter ? job.job_type === jobTypeFilter : true) &&
      (locationFilter
        ? job.location.toLowerCase().includes(locationFilter.toLowerCase())
        : true) &&
      (remoteOrOnsiteFilter ? job.remote_or_onsite === remoteOrOnsiteFilter : true)
    );
  });

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Available Jobs ({filteredJobs.length})
      </h1>

      {/* Filter Section */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Type
          </label>
          <select
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            placeholder="Enter location"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Remote/Onsite
          </label>
          <select
            value={remoteOrOnsiteFilter}
            onChange={(e) => setRemoteOrOnsiteFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
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
              <p>
                {job.job_type} | {job.remote_or_onsite}
              </p>
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
                <Link to={`/jobs/${job.id}`}> View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;






