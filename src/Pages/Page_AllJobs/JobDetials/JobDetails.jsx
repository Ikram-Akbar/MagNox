import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find((job) => job.id === parseInt(id));

    if (!job) {
        return <div>Job not found</div>; // Handle case where job doesn't exist
    }

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">
                 {job.job_title}
            </h1>
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column (80%) */}
                    <div className="md:col-span-4">
                        <div className="flex justify-center mb-4">
                            <img
                                src={job.logo}
                                alt={job.company_name}
                                className="w-32 h-32 object-contain"
                            />
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                            {job.company_name}
                        </h2>
                        <p className="text-gray-600 mb-2">Location: {job.location}</p>
                        <p className="text-gray-500 mb-2">Job Type: {job.job_type}</p>
                        <p className="text-gray-500 mb-2">Salary: {job.salary}</p>
                        <h3 className="text-xl font-semibold mt-4">Job Description:</h3>
                        <p className="text-gray-700 mb-4">{job.job_description}</p>
                    </div>

                    {/* Right Column (20%) */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold mb-2">Requirements:</h3>
                        <p className="text-gray-700 mb-4">Education: {job.educational_requirements}</p>
                        <p className="text-gray-700 mb-4">Experience: {job.experiences}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">Contact Information:</h3>
                        <p className="text-gray-700">Phone: {job.contact_information.phone}</p>
                        <p className="text-gray-700">Email: {job.contact_information.email}</p>
                        <p className="text-gray-700">Address: {job.contact_information.address}</p>
                    </div>
                </div>
                {/* Apply Button */}
                <div className="flex justify-center mt-6">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
