import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [jobLength] = useState(6);

    useEffect(() => {
        fetch("/allJobs.json")
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data));
    }, []);

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">
                Featured Jobs
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredJobs.slice(0, jobLength).map((job) => (
                    <FeaturedJob key={job.id} job={job} />
                ))}
            </div>

            {/* Centered "See All Jobs" Button */}
            <div className="flex justify-center mt-8">
                <Link to="/jobs">
                    <button className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition">
                        See All Jobs
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;
