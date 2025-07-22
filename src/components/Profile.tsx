import { useState } from 'react';

function Profile( ) {
  const user = {
    name: "John Doe",
    profileImage: "https://example.com/johndoe.jpg", // URL to a sample profile image
  };
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || "User Name",
    weight: 70, // initial values
    height: 170,
    bmi: 24.2,
    profileImage: user?.profileImage || 'https://via.placeholder.com/150', // placeholder image if no profile image
  });

  // Toggle edit mode
  const toggleEditMode = () => setIsEditing(!isEditing);

  // Handle profile field updates
  const handleChange = (field:any, value:any) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  // Render profile view and edit view
  return (
    <section className="mb-12 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Your Profile</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        
        {/* Profile Image */}
        <div className="relative">
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 object-cover shadow-lg"
          />
          {isEditing && (
            <div className="absolute bottom-0 right-0">
              <input
                type="file"
                accept="image/*"
                onChange={() => handleChange('profileImage', 'https://example.com/default-image.jpg')}
                className="hidden"
                id="upload-photo"
              />
              <label htmlFor="upload-photo" className="cursor-pointer bg-gray-800 text-white p-2 rounded-full shadow-md">
                Edit
              </label>
            </div>
          )}
        </div>
        
        {/* Profile Details */}
        <div className="flex-1">
          {/* User Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            ) : (
              <p className="text-lg font-bold">{profile.name}</p>
            )}
          </div>

          {/* Weight */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Weight (kg)</label>
            {isEditing ? (
              <input
                type="number"
                value={profile.weight}
                onChange={(e) => handleChange('weight', e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            ) : (
              <p className="text-lg font-bold">{profile.weight} kg</p>
            )}
          </div>

          {/* Height */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Height (cm)</label>
            {isEditing ? (
              <input
                type="number"
                value={profile.height}
                onChange={(e) => handleChange('height', e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            ) : (
              <p className="text-lg font-bold">{profile.height} cm</p>
            )}
          </div>

          {/* BMI */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">BMI</label>
            {isEditing ? (
              <input
                type="number"
                value={profile.bmi}
                onChange={(e) => handleChange('bmi', e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            ) : (
              <p className="text-lg font-bold">{profile.bmi}</p>
            )}
          </div>

          {/* Edit/Save Button */}
          <button
            onClick={toggleEditMode}
            className={`mt-4 py-2 px-4 rounded-lg font-semibold w-full ${
              isEditing ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
