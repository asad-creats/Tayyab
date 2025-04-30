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
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setNewWebinar({ ...newWebinar, [e.target.name]: e.target.value });
  };

  const addWebinar = () => {
    const { title, city, country, image, description } = newWebinar;

    if (!title || !city || !country || !image || !description) {
      alert('Please fill in all fields.');
      return;
    }

    const newId = webinars.length ? Math.max(...webinars.map(w => w.id)) + 1 : 1;
    setWebinars([...webinars, { id: newId, ...newWebinar }]);
    setNewWebinar({
      title: '',
      city: '',
      country: '',
      image: '',
      description: '',
    });
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
          <input
            name="image"
            placeholder="Image URL"
            value={newWebinar.image}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newWebinar.description}
            onChange={handleChange}
            rows={4}
          />
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
