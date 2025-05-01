import React, { useContext, useState } from 'react';
import { WebinarContext } from '../context/WebinarContext';
import Navbar from '../components/Navbar';
import './WebinarAdmin.css';

const cityOptions = {
  Pakistan: ['Karachi', 'Lahore', 'Islamabad'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Qatar: ['Doha', 'Al Rayyan', 'Al Wakrah'],
};

function WebinarAdmin() {
  const { webinars, addWebinar, deleteWebinar, updateWebinar } = useContext(WebinarContext);
  const [newWebinar, setNewWebinar] = useState({ title: '', city: '', country: '', description: '', image: '', registrants: [] });
  const [previewImage, setPreviewImage] = useState(null);
  const [expandedWebinarId, setExpandedWebinarId] = useState(null);
  const [editingWebinarId, setEditingWebinarId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleChange = (e) => setNewWebinar({ ...newWebinar, [e.target.name]: e.target.value });
  const handleEditChange = (e) => setEditData({ ...editData, [e.target.name]: e.target.value });

  const handleImageUpload = (e, setImageFn) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImageFn(reader.result);
    reader.readAsDataURL(file);
  };

  const handleAddWebinar = () => {
    const { title, city, country, description, image } = newWebinar;
    if (!title || !city || !country || !description || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }
    addWebinar({ ...newWebinar, registrants: [] });
    setNewWebinar({ title: '', city: '', country: '', description: '', image: '', registrants: [] });
    setPreviewImage(null);
  };

  const handleDelete = (id) => deleteWebinar(id);
  const handleSaveEdit = () => {
    updateWebinar(editData);
    setEditingWebinarId(null);
    setEditData({});
  };
  const cancelEdit = () => {
    setEditingWebinarId(null);
    setEditData({});
  };
  const toggleRegistrants = (id) => setExpandedWebinarId(expandedWebinarId === id ? null : id);
  const startEdit = (webinar) => {
    setEditingWebinarId(webinar.id);
    setEditData({ ...webinar });
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <div className="admin-container">
          <div className="admin-form">
            <h3>Add New Webinar</h3>
            <input name="title" placeholder="Webinar Title" value={newWebinar.title} onChange={handleChange} />
            <select name="country" value={newWebinar.country} onChange={handleChange}>
              <option value="">Select Country</option>
              {Object.keys(cityOptions).map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select>
            <select name="city" value={newWebinar.city} onChange={handleChange} disabled={!newWebinar.country}>
              <option value="">Select City</option>
              {cityOptions[newWebinar.country]?.map((city, i) => <option key={i} value={city}>{city}</option>)}
            </select>
            <textarea name="description" placeholder="Description" value={newWebinar.description} onChange={handleChange} rows={4} />
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, (img) => { setNewWebinar({ ...newWebinar, image: img }); setPreviewImage(img); })} />
            {previewImage && <img src={previewImage} alt="Preview" className="preview-image" />}
            <button onClick={handleAddWebinar}>Add Webinar</button>
          </div>

          <div className="admin-webinars">
            <h3>All Webinars</h3>
            {webinars.map((w) => (
              <div key={w.id} className="webinar-card-admin">
                <div className="webinar-card-content">
                  <img src={editingWebinarId === w.id ? editData.image : w.image} alt={w.title} />
                  <div>
                    {editingWebinarId === w.id ? (
                      <>
                        <input name="title" value={editData.title} onChange={handleEditChange} placeholder="Title" />
                        <select name="country" value={editData.country} onChange={handleEditChange}>
                          <option value="">Select Country</option>
                          {Object.keys(cityOptions).map((country, i) => <option key={i} value={country}>{country}</option>)}
                        </select>
                        <select name="city" value={editData.city} onChange={handleEditChange} disabled={!editData.country}>
                          <option value="">Select City</option>
                          {cityOptions[editData.country]?.map((city, i) => <option key={i} value={city}>{city}</option>)}
                        </select>
                        <textarea name="description" value={editData.description} onChange={handleEditChange} />
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, (img) => setEditData({ ...editData, image: img }))} />
                        <div className="card-actions">
                          <button onClick={handleSaveEdit}>Save</button>
                          <button onClick={cancelEdit}>Cancel</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <h4>{w.title}</h4>
                        <p>{w.city}, {w.country}</p>
                        <p className="desc">{w.description}</p>
                        <p><strong>Registrants:</strong> {w.registrants.length}</p>
                        <div className="card-actions">
                          <button onClick={() => handleDelete(w.id)}>Delete</button>
                          <button onClick={() => startEdit(w)}>Edit</button>
                          <button onClick={() => toggleRegistrants(w.id)}>
                            {expandedWebinarId === w.id ? 'Hide Registrants' : 'View Registrants'}
                          </button>
                        </div>
                        {expandedWebinarId === w.id && (
                          <ul className="registrant-list">
                            {w.registrants.length === 0 ? (
                              <li>No one registered yet.</li>
                            ) : (
                              w.registrants.map((r, index) => (
                                <li key={index}>{r.name} ({r.email})</li>
                              ))
                            )}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WebinarAdmin;
