import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

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

  const parsedDate = webinar.date?.toDate?.() || new Date(webinar.date);
  const dateString = isNaN(parsedDate) ? 'TBD' : parsedDate.toLocaleDateString();
  const timeString = webinar.time || 'TBD';

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background: #f1f5f9;
        }
.webinar-hero {
  position: relative;
  padding: 60px 20px 200px;
  text-align: center;
  color: white;
  overflow: hidden;
}

.webinar-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('https://unsplash.com/photos/grey-high-rise-building-during-daytime-XcmVu1ZMv6M') center/cover no-repeat;
  z-index: 0;
  opacity: 0.5; /* Adjust for brightness */
}

.webinar-hero h1,
.webinar-hero p {
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}


        .webinar-hero p {
          font-size: 1.2rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
        }

        .webinar-page {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 2rem;
          max-width: 1200px;
          margin: -100px auto 0;
        }

        .left-panel {
          flex: 2;
          margin-right: 2rem;
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          position: relative;
          top: -20px;
          z-index: 2;
        }

        .info-box {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        .info-item {
          background: #f5f5f5;
          padding: 0.5rem 1rem;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          width: 120px;
          text-align: center;
          color: #333;
        }

        .info-item div {
          font-size: 1.5rem;
        }

        .info-item p {
          margin: 0.25rem 0 0;
          font-weight: 500;
        }

        .presenter-inline {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .presenter-inline img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .presenter-info {
          display: flex;
          flex-direction: column;
        }

        .presenter-info .presenter-name {
          font-weight: bold;
        }

        .right-panel {
          flex: 1;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          height: fit-content;
          text-align: center;
          position: relative;
          top: -20px;
        }

        h2 {
          margin-top: 2rem;
          font-size: 1.5rem;
        }

        ul {
          padding-left: 1rem;
        }

        .form-card input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .form-card button {
          background: #007bff;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
        }

        .form-card button:hover {
          background: #0056b3;
        }

        @media (max-width: 768px) {
          .webinar-page {
            flex-direction: column;
          }

          .left-panel {
            margin-right: 0;
            margin-bottom: 2rem;
          }

          .presenter-inline {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="webinar-hero">
        <h1>{webinar.title}</h1>
        <p>{webinar.subtitle || 'Join us for an exciting discussion on real estate trends and strategies.'}</p>
      </div>

      <div className="webinar-page">
        <div className="left-panel">
          <div className="info-box">
            <div className="info-item">
              <div>📅</div>
              <p>{dateString}</p>
            </div>
            <div className="info-item">
              <div>⏰</div>
              <p>{timeString}</p>
            </div>
            <div className="presenter-inline">
              <img src={webinar.presenterPhoto || 'https://i.pravatar.cc/100?img=68'} alt="Presenter" />
              <div className="presenter-info">
                <div className="presenter-name">{webinar.presenterName || 'John Doe'}</div>
                <div>{webinar.presenterTitle || 'Senior Real Estate Analyst'}</div>
              </div>
            </div>
          </div>

          <h2>About this Webinar</h2>
          <p>{webinar.description}</p>

          <h2>What You’ll Learn</h2>
          <ul>
            <li>How to identify high-potential properties</li>
            <li>Trends shaping 2024’s real estate market</li>
            <li>Strategies to maximize ROI</li>
          </ul>
        </div>

        <div className="right-panel">
          <h2>Register Now</h2>
          <form className="form-card">
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Reserve My Spot</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default WebinarDetail;
