// UploadImage.js
import React, { useState } from 'react';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [project, setProject] = useState('');
  const [achievements, setAchievements] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('education', education);
      formData.append('project', project);
      formData.append('achievements', achievements);

      await fetch('/api/userdetails/adduserdetails', {
        method: 'POST',
        body: formData
      });

      // Reset form fields after successful submission
      setFile(null);
      setName('');
      setEmail('');
      setEducation('');
      setProject('');
      setAchievements('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Upload User Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
        <input type="text" placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} />
        <input type="text" placeholder="Achievements" value={achievements} onChange={(e) => setAchievements(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadImage;
