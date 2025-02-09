"use client";
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    fatherName: '',
    motherName: '',
    age: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    phone: '',
    alternatePhone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    role: 'User',
    status: 'Active',
    profilePicture: '',
    coverPhoto: '',
    bio: '',
    lastLogin: '',
    loginHistory: [],
    sessionTokens: [],
    isOnline: false,
    lastLogout: '',
    trustedDevices: [],
    facebookProfile: '',
    twitterProfile: '',
    linkedInProfile: '',
    githubProfile: '',
    website: '',
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert('User created successfully!');
//       } else {
//         alert('Failed to create user.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
const handleSubmit = async (e:any) => {
    e.preventDefault();

        console.log("Form data:", formData);    
        
    try {
     const responsive = await signIn("credentials", {
        redirect: false,
        formData,
     });
     if (responsive) {
        console.log(responsive);
        
     }
    } catch (error) {
      console.error("Sign-up error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      
    }
  };

  return (
 <>
 <div className='min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-40'>
 <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg w-full text-black  transition-all duration-300 ease-in-out">
      {/* Personal Information */}
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          name="name"
          placeholder='John Doe'
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          placeholder='example.com'
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          name="password"
          placeholder='********'
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Father's Name</label>
        <input
          type="text"
          name="fatherName"
          placeholder='John Doe'
          value={formData.fatherName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Mother's Name</label>
        <input
          type="text"
          name="motherName"
          placeholder='Jane Doe'    
          value={formData.motherName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Age</label>
        <input
          type="number"
          name="age"
          placeholder='25'
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
  <label htmlFor="gender" className="block">Gender</label>
  <select
    id="gender" // Associate with label
    name="gender"
    aria-label="Select Gender" // Alternative accessible name
    value={formData.gender}
    onChange={handleChange}
    className="w-full p-2 border rounded"
    required
  >
    <option value="">Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
</div>

      <div>
        <label className="block">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          placeholder='YYYY-MM-DD'
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor='maritalStatus' className="block">Marital Status</label>
        <select
          name="maritalStatus"
          id='maritalStatus'                
          value={formData.maritalStatus}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
      </div>

      {/* Contact Details */}
      <div>
        <label htmlFor='phone' className="block">Phone</label>
        <input
          type="text"
          name="phone"
          id='phone'
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor='Alternate Phone' className="block">Alternate Phone</label>
        <input
          type="text"
          name="alternatePhone"
          id='alternatePhone'
          placeholder='Optional'
          value={formData.alternatePhone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Address</label>
        <input
          type="text"
          name="address"
          placeholder='1234 Main St, City, State, Country'
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">City</label>
        <input
          type="text"
          name="city"
          placeholder='City'
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">State</label>
        <input
          type="text"
          name="state"
            placeholder='State'
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Country</label>
        <input
          type="text"
          name="country"
            placeholder='Country'
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Zip Code</label>
        <input
          type="text"
          name="zipCode"
            placeholder='Zip Code'
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

    
      {/* Social Media & Extra */}
      <div>
        <label className="block">Facebook Profile</label>
        <input
          type="text"
          name="facebookProfile"
          placeholder='https://facebook.com/username'
          value={formData.facebookProfile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Twitter Profile</label>
        <input
          type="text"
          name="twitterProfile"
          placeholder='https://twitter.com/username'    
          value={formData.twitterProfile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">LinkedIn Profile</label>
        <input
          type="text"
          name="linkedInProfile"
          placeholder='https://linkedin.com/in/username'
          value={formData.linkedInProfile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">GitHub Profile</label>
        <input
          type="text"
          name="githubProfile"
            placeholder='https://linkedin.com/in/username'
          value={formData.githubProfile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Website</label>
        <input
          type="text"
          name="website"
            placeholder='https://example.com'
          value={formData.website}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
 </div>
 </>
  );
}