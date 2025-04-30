import React, { useContext, useState } from 'react';
import { WebinarContext } from '../context/WebinarContext';
import Navbar from '../components/Navbar';
import './WebinarAdmin.css';

function WebinarAdmin() {
  const { webinars, setWebinars } = useContext(WebinarContext);
  const [newWebinar, setNewWebinar] = useState({
    title: '',
    city: '',
    country: '',
    description: '',
    image: '',
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    setNewWebinar({ ...newWebinar, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewWebinar({ ...newWebinar, image: reader.result }); // base64 string
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const addWebinar = () => {
    const { title, city, country, description, image } = newWebinar;

    if (!title || !city || !country || !description || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    const newId = webinars.length ? Math.max(...webinars.map(w => w.id)) + 1 : 1;
    setWebinars([...webinars, { id: newId, ...newWebinar }]);

    // Reset form
    setNewWebinar({
      title: '',
      city: '',
      country: '',
      description: '',
      image: '',
    });
    setPreviewImage(null);
  };

  const deleteWebinar = (id) => {
    setWebinars(webinars.filter(w => w.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="admin-page">
        <h2>Webinar Admin Dashboard</h2>

        <div className="webinar-form">
          <input
            name="title"
            placeholder="Title"
            value={newWebinar.title}
            onChange={handleChange}
          />
          <input
            name="city"
            placeholder="City"
            value={newWebinar.city}
            onChange={handleChange}
          />
          <input
            name="country"
            placeholder="Country"
            value={newWebinar.country}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newWebinar.description}
            onChange={handleChange}
            rows={4}
          />

          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              style={{ maxWidth: '150px', marginTop: '10px', borderRadius: '8px' }}
            />
          )}

          <button onClick={addWebinar}>Add Webinar</button>
        </div>

        <ul className="webinar-list">
          {webinars.map((w) => (
            <li key={w.id} className="webinar-item">
              <div>
                <strong>{w.title}</strong><br />
                <span>{w.city}, {w.country}</span>
                <p style={{ marginTop: '8px', fontSize: '0.95rem' }}>{w.description}</p>
              </div>
              <button onClick={() => deleteWebinar(w.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default WebinarAdmin;
