import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { WebinarContext } from '../context/WebinarContext';

function WebinarDetail() {
  const { id } = useParams();
  const { webinars } = useContext(WebinarContext);
  const webinar = webinars.find((w) => w.id === parseInt(id));

  if (!webinar) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Webinar Not Found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="webinar-page">
        <div className="left-panel">
          <h2>{webinar.title}</h2>
          <p className="city">Location: {webinar.city}, {webinar.country}</p>
          <p className="description">{webinar.description}</p>
          <ul className="highlights">
            <li>✔ Industry-leading speakers</li>
            <li>✔ Free digital workbook included</li>
            <li>✔ Certificate of participation</li>
          </ul>
        </div>

        <div className="right-panel">
          <div className="form-card">
            <h3>Register Now</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Secure My Spot</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .webinar-page {
          display: flex;
          flex-wrap: wrap;
          min-height: 100vh;
        }

        .left-panel {
  flex: 1;
  padding: 60px 40px;
  background: linear-gradient(135deg, #f8fafd 0%, #eef2f5 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset -1px 0 0 #ddd;
}

.left-panel h2 {
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 10px;
  font-weight: 700;
}

.left-panel .city {
  font-size: 1.1rem;
  color: #0056b3;
  margin-bottom: 24px;
  font-weight: 500;
}

.left-panel .description {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-left: 4px solid #0056b3;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.left-panel .highlights {
  margin-top: 20px;
}

.left-panel .highlights li {
  font-size: 1rem;
  margin-bottom: 12px;
  color: #003366;
  list-style: none;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.left-panel .highlights li::before {
  content: '✔';
  color: #28a745;
  margin-right: 10px;
  font-size: 1.2rem;
}


        .right-panel {
          flex: 1;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
            ),
            url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .form-card {
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
          padding: 40px;
          max-width: 400px;
          width: 100%;
        }

        .form-card h3 {
          margin-bottom: 25px;
          color: #003366;
          font-size: 1.6rem;
          text-align: center;
        }

        .form-card form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-card input {
          padding: 12px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .form-card button {
          padding: 14px;
          background-color: #0056b3;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 86, 179, 0.3);
        }

        .form-card button:hover {
          background-color: #003366;
          box-shadow: 0 6px 14px rgba(0, 86, 179, 0.4);
        }

        @media (max-width: 768px) {
          .webinar-page {
            flex-direction: column;
          }

          .left-panel,
          .right-panel {
            flex: 100%;
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
}

export default WebinarDetail;
