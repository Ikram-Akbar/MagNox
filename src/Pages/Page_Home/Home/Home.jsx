import HeroSection from "../../../SharedComponents/HeroSection/HeroSection";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    const handleButtonClick = () => {
        alert('Button clicked! Redirecting...');
        // You can add navigation logic here, e.g., using React Router
        // or any other logic when the button is clicked.
    };
    return (
        <div>
            <HeroSection
                backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Welcome to Our Website"
                description="We offer the best services for you"
                buttonText="Get Started"
                onButtonClick={handleButtonClick}
            />
            <FeaturedJobs/>
        </div>
    );
};

export default Home;