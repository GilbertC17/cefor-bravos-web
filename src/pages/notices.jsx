import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../bootstrap/css/bootstrap.min.css';
import '../notices.css';

function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/notices');
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []); // Se ejecuta solo al cargar el componente

  return (
    <div className="container mt-5">
      <h1 className="title-container-notices">NOTICIAS BRAVOS</h1>
      {notices.map((notice) => (
        <div key={notice.id} className="mb-4-notice">
          <h2 className="notice-title border-red">{notice.title}</h2>
          <div className="notice-content">
          <p>{notice.content}</p>
          {notice.image && (
              <img
                src={`http://localhost:3001/uploads/${notice.image}`}
                alt={notice.title}
                className="img-fluid"
              />
          )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notices;