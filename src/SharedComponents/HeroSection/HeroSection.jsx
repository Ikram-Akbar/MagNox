

const HeroSection = ({
  
    backgroundImage,
    title,
    
    description,
    buttonText,
    onButtonClick
}) => {
    return (
        <section
            className="bg-cover bg-center h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="text-center">
                <h1 className="text-white text-4xl font-bold">{title}</h1>
                <p className="text-white mt-4">{description}</p>
                <button
                    onClick={onButtonClick}
                    className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
