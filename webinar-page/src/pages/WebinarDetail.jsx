import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/Navbar';

function WebinarDetail() {
  const { id } = useParams();
  const [webinar, setWebinar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const docRef = doc(db, 'webinars', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setWebinar(docSnap.data());
        } else {
          setWebinar(null);
        }
      } catch (error) {
        console.error('Error fetching webinar:', error);
        setWebinar(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinar();
  }, [id]);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (!webinar) return <h2 style={{ textAlign: 'center' }}>Webinar Not Found</h2>;

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Arial', sans-serif;
          }

          .webinar-page {
            display: flex;
            gap: 2rem;
            max-width: 1200px;
            margin: 2rem auto;
            padding: 2rem;
            background: linear-gradient(135deg, #e0f7fa, #b3e5fc);
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }

          .left-panel.card {
            flex: 2;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
          }

          .left-panel.card:hover {
            transform: translateY(-4px);
          }

          .webinar-thumbnail {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .webinar-content {
            padding: 1.5rem;
          }

          .webinar-tag {
            display: inline-block;
            background: #007bff;
            color: #fff;
            padding: 0.3rem 0.8rem;
            border-radius: 12px;
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .webinar-title {
            font-size: 2rem;
            font-weight: 700;
            margin: 0 0 0.5rem;
            color: #333;
          }

          .webinar-subtitle {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 1rem;
          }

          .webinar-details p {
            margin: 0.5rem 0;
            font-size: 1rem;
            color: #444;
          }

          .webinar-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #555;
            margin: 1rem 0;
          }

          .webinar-highlights h3 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .webinar-highlights ul {
            list-style: none;
            padding: 0;
          }

          .webinar-highlights li {
            font-size: 1rem;
            color: #333;
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
          }

          .highlight-icon {
            color: #28a745;
            margin-right: 0.5rem;
          }

          .add-to-calendar-btn {
            background: #f0f0f0;
            color: #333;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            margin-top: 1rem;
            transition: background 0.3s ease;
          }

          .add-to-calendar-btn:hover {
            background: #e0e0e0;
          }

          .right-panel {
            flex: 1;
          }

          .form-card {
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
          }

          .form-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333;
          }

          .form-card form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .form-card input {
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
          }

          .form-card button {
            background: #007bff;
            color: #fff;
            border: none;
            padding: 0.75rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s ease;
          }

          .form-card button:hover {
            background: #0056b3;
          }

          @media (max-width: 768px) {
            .webinar-page {
              flex-direction: column;
            }

            .left-panel.card {
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
      <Navbar />
      <div className="webinar-page">
        <div className="left-panel card">
          {webinar.thumbnail && (
            <img
              src={webinar.thumbnail}
              alt={`${webinar.title} thumbnail`}
              className="webinar-thumbnail"
            />
          )}
          <div className="webinar-content">
            <span className="webinar-tag">{webinar.category || 'Webinar'}</span>
            <h1 className="webinar-title">{webinar.title}</h1>
            <p className="webinar-subtitle">
              {webinar.subtitle || 'Join us for an insightful session!'}
            </p>
            <div className="webinar-details">
              <p>
                <strong>Location:</strong> {webinar.city || 'N/A'},{' '}
                {webinar.country || 'N/A'}
              </p>
              {webinar.date && (
                <p>
                  <strong>Date:</strong> {new Date(webinar.date).toLocaleDateString()}
                </p>
              )}
              {webinar.time && (
                <p>
                  <strong>Time:</strong> {webinar.time}
                </p>
              )}
              {webinar.speaker && (
                <p>
                  <strong>Speaker:</strong> {webinar.speaker}
                </p>
              )}
            </div>
            <p className="webinar-description">{webinar.description}</p>
            <div className="webinar-highlights">
              <h3>Why Attend?</h3>
              <ul>
                <li>
                  <span className="highlight-icon">✔</span> Industry-leading speakers
                </li>
                <li>
                  <span className="highlight-icon">✔</span> Free digital workbook included
                </li>
                <li>
                  <span className="highlight-icon">✔</span> Certificate of participation
                </li>
              </ul>
            </div>
            <button className="add-to-calendar-btn">Add to Calendar</button>
          </div>
        </div>

        <div className="right-panel">
          <div className="form-card">
            <h3>Register Now</h3>
            <form>
              <input type="text" placeholder="Your Name" required aria-label="Your Name" />
              <input
                type="email"
                placeholder="Your Email"
                required
                aria-label="Your Email"
              />
              <button type="submit">Secure My Spot</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebinarDetail;