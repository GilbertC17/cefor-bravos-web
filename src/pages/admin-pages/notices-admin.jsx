import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NoticesAdmin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [notices, setNotices] = useState([]);
  const [editingId, setEditingId] = useState(null); // Estado para manejar la edición
  const [showModal, setShowModal] = useState(false); // Controlar la visibilidad del modal
const [deleteId, setDeleteId] = useState(null); // Almacenar el ID de la noticia a eliminar

  // Obtener las noticias al cargar el componente
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/notices', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setNotices(response.data);
      } catch (error) {
        console.error('Error al obtener las noticias:', error);
      }
    };

    fetchNotices();
  }, []);

  // Manejar el envío del formulario para agregar una noticia
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }
  
    try {
      if (editingId) {
        // Actualizar noticia existente
        const response = await axios.put(`http://localhost:3001/api/admin/notices/${editingId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setMessage('Noticia actualizada exitosamente');
        setNotices(
          notices.map((notice) =>
            notice.id === editingId ? response.data.notice : notice
          )
        );
        setEditingId(null); // Reiniciar el estado de edición
      } else {
        // Agregar nueva noticia
        const response = await axios.post('http://localhost:3001/api/admin/notices', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setMessage('Noticia agregada exitosamente');
        setNotices([response.data, ...notices]); // Agregar la nueva noticia al inicio de la lista
      }
  
      // Reiniciar el formulario
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      setMessage(editingId ? 'Error al actualizar la noticia' : 'Error al agregar la noticia');
      console.error('Error:', error);
    }
  };

  // Manejar la eliminación de una noticia
  const handleDelete = async (id) => {
    setDeleteId(id); // Almacenar el ID de la noticia a eliminar
    setShowModal(true); // Mostrar el modal
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/admin/notices/${deleteId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setNotices(notices.filter((notice) => notice.id !== deleteId)); // Eliminar la noticia del estado
      setMessage('Noticia eliminada exitosamente');
    } catch (error) {
      console.error('Error al eliminar la noticia:', error);
      setMessage('Error al eliminar la noticia');
    } finally {
      setShowModal(false); // Ocultar el modal
      setDeleteId(null); // Reiniciar el ID de la noticia a eliminar
    }
  };

  // Manejar la edición de una noticia
  const handleEdit = (id) => {
    const noticeToEdit = notices.find((notice) => notice.id === id);
    setTitle(noticeToEdit.title);
    setContent(noticeToEdit.content);
    setImage(null); // No se puede editar la imagen directamente
    setEditingId(id); // Establecer el ID de la noticia que se está editando
  };

  return (
    <div className="container mt-5">
      <h1>Agregar Noticia</h1>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Contenido</label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Imagen</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingId ? 'Actualizar Noticia' : 'Agregar Noticia'}
        </button>
      </form>
  
      <h2 className="mt-5">Noticias Agregadas</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Título</th>
            <th>Contenido</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.title}</td>
              <td>{notice.content}</td>
              <td>
                {notice.image && (
                  <img
                    src={`http://localhost:3001/uploads/${notice.image}`}
                    alt={notice.title}
                    style={{ width: '100px' }}
                  />
                )}
              </td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(notice.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(notice.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Confirmación */}
      {showModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Eliminar Noticia</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar esta noticia?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => confirmDelete()}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoticesAdmin;