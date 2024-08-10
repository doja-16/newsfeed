import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Admincss/AddNews.css';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('http://localhost:9001/news/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('News published successfully!');
        console.log('News published successfully:', result);
        // Reset form fields if needed
        setTitle('');
        setContent('');
        setImage(null);
      } else {
        toast.error('Failed to publish news.');
        console.error('Failed to publish news:', response.statusText);
      }
    } catch (error) {
      toast.error('Error occurred while publishing news.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-news">
      <form onSubmit={handleSubmit}>
      <h2>Add News</h2>
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          ></textarea>
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])} 
          />
        </div>
        
        <button type="submit">Publish</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNews;
