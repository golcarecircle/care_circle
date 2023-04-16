import { useState, useEffect } from 'react';
import axios from 'axios';

interface MedicalBlog {
  id: number;
  title: string;
  author: string;
  body: string;
}

const DailyMedicalReading = () => {
  const [blog, setBlog] = useState<MedicalBlog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get('https://api.medicalblogs.com/daily');
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      <h2>Daily Medical Reading</h2>
      {blog ? (
        <>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.body}</p>
        </>
      ) : (
        <p>Loading blog...</p>
      )}
    </div>
  );
};

export default DailyMedicalReading;
