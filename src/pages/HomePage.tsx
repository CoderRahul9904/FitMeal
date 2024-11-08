import Benifits from "../components/Benifits";
import Categories from "../components/Categories";
import FeatureRecipes from "../components/FeatureRecipes";
import HeroContainer from "../components/HeroContainer";
import WorkingFlow from "../components/WorkingFlow";


function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroContainer />
      <FeatureRecipes />

      <Categories />

      <Benifits />

      <WorkingFlow />

    </div>
  );
}

export default HomePage;
