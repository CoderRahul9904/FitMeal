// FeatureCard.tsx
import React from "react";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon:Icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="text-green-500 text-4xl mb-4"><Icon /></div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
