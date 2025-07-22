import React from "react";
import { FaUtensils, FaRegHeart, FaChartLine, FaClock } from "react-icons/fa";


type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const featuresData:FeatureCardProps[] = [
  {
    icon: FaUtensils ,
    title: "Recipe Search",
    description: "Find recipes that fit your dietary needs and preferences with an advanced search tool.",
  },
  {
    icon: FaRegHeart ,
    title: "Save Favorites",
    description: "Save your favorite recipes for quick access and keep them organized in one place.",
  },
  {
    icon: FaChartLine ,
    title: "Track Nutrition",
    description: "Monitor your daily calorie intake and track macronutrients to meet your fitness goals.",
  },
  {
    icon: FaClock ,
    title: "Meal Planning",
    description: "Plan meals in advance with easy-to-use tools and ensure balanced, healthy eating.",
  },
];
