import { FaRegSmileBeam, FaStar, FaDollarSign } from "react-icons/fa";

const WhyToursApp = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-primary-500 mb-12">
                    Why Choose TOURSAPP?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Konfor */}
                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="text-[#F2A945] text-4xl mb-4">
                            <FaRegSmileBeam />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Comfort</h3>
                        <p className="text-lg text-gray-700">
                            Enjoy your travel with premium comfort, top-quality service, and smooth experiences.
                        </p>
                    </div>

                    {/* Kalite */}
                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="text-[#F2A945] text-4xl mb-4">
                            <FaStar />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Quality</h3>
                        <p className="text-lg text-gray-700">
                            We ensure the highest quality standards, providing exceptional service and unmatched reliability.
                        </p>
                    </div>

                    {/* Ekonomik */}
                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="text-[#F2A945] text-4xl mb-4">
                            <FaDollarSign />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Affordable</h3>
                        <p className="text-lg text-gray-700">
                            Offering the best value for your money with competitive prices and exclusive deals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyToursApp;
