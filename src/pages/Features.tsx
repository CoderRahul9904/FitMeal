
import { featuresData } from "../util/features";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Features() {
  return (
    
    <div className="bg-gray-50 h-screen flex flex-col justify-between w-screen ">
      <Header />
      <div className="w-screen mx-auto px-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">FitMeal Features</h1>
        <p className="text-gray-600 mb-12">
          Discover the amazing features that make FitMeal your ultimate companion for healthy eating and meal planning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Features;
