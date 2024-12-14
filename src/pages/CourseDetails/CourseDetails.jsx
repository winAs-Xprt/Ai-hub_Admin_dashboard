import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import './CourseDetails.css';

const popularTopics = [
  'Data Science',
  'Artificial Intelligence (AI)',
  'Deep Learning',
  'Generative AI (GenAI)',
  'Data Analysis',
  'Machine Learning',
  'Python',
  'Cloud Computing',
  'Cybersecurity',
  'Blockchain',
];

const initialCourseData = [
  {
    id: 1,
    title: 'Introduction to Machine Learning',
    rating: 4.8,
    reviews: 256,
    image: 'https://via.placeholder.com/250x150',
  },
  {
    id: 2,
    title: 'Deep Learning with Python',
    rating: 4.7,
    reviews: 180,
    image: 'https://via.placeholder.com/250x150',
  },
  {
    id: 2,
    title: 'Deep Learning with Python',
    rating: 4.7,
    reviews: 180,
    image: 'https://via.placeholder.com/250x150',
  },
  {
    id: 2,
    title: 'Deep Learning with Python',
    rating: 4.7,
    reviews: 180,
    image: 'https://via.placeholder.com/250x150',
  },
  {
    id: 2,
    title: 'Deep Learning with Python',
    rating: 4.7,
    reviews: 180,
    image: 'https://via.placeholder.com/250x150',
  },
];

function CourseDetails() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [courseData, setCourseData] = useState(initialCourseData);
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    duration: '',
    thumbnail: '',
    video: '',
  });

  const scrollTopics = (direction) => {
    const container = document.querySelector('.topics-container');
    const scrollAmount = 150;
    const newOffset = direction === 'left' ? scrollOffset - scrollAmount : scrollOffset + scrollAmount;

    container.scrollTo({
      left: newOffset,
      behavior: 'smooth',
    });

    setScrollOffset(newOffset);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = courseData.length + 1;
    const newCourseData = {
      id,
      title: newCourse.title,
      rating: 0,
      reviews: 0,
      image: newCourse.thumbnail || 'https://via.placeholder.com/250x150',
    };
    setCourseData([...courseData, newCourseData]);
    setShowForm(false);
    setNewCourse({ title: '', description: '', duration: '', thumbnail: '', video: '' });
  };

  // Drag and Drop functionality for Thumbnail and Video
  const onDropThumbnail = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setNewCourse({ ...newCourse, thumbnail: URL.createObjectURL(file) });
  };

  const onDropVideo = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setNewCourse({ ...newCourse, video: URL.createObjectURL(file) });
  };

  const { getRootProps: getThumbnailProps, getInputProps: getThumbnailInputProps } = useDropzone({
    onDrop: onDropThumbnail,
    accept: 'image/*',
  });

  const { getRootProps: getVideoProps, getInputProps: getVideoInputProps } = useDropzone({
    onDrop: onDropVideo,
    accept: 'video/*',
  });

  return (
    <div className="course-details-container">
      {/* Popular Topics Section */}
      <section className="popular-topics">
        <h2>Popular Topics</h2>
        <div className="topics-carousel">
          <button
            className="carousel-btn prev"
            onClick={() => scrollTopics('left')}
            disabled={scrollOffset <= 0}
            aria-label="Scroll left"
          >
             <strong>{'←'}</strong> {/* Bolded left arrow */}
          </button>
          <div className="topics-container">
            {popularTopics.map((topic, index) => (
              <button key={index} className="topic-btn">
                {topic}
              </button>
            ))}
          </div>
          <button
            className="carousel-btn next"
            onClick={() => scrollTopics('right')}
            disabled={scrollOffset >= (popularTopics.length - 3) * 150}
            aria-label="Scroll right"
          >
             <strong>{'→'}</strong> {/* Bolded left arrow */}
          </button>
        </div>
      </section>

      {/* Header Actions */}
      <div className="header-actions">
        <button className="view-btn" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
          Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
        </button>
        <button className="add-course-btn" onClick={() => setShowForm(true)}>Add New Course</button>
      </div>

      {/* Courses Section */}
      <section className={viewMode === 'grid' ? 'course-grid' : 'course-list'}>
        {courseData.map((course) => (
          <div key={course.id} className={viewMode === 'grid' ? 'course-card' : 'course-list-item'}>
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <div className="rating">
                <span className="stars">{'★'.repeat(Math.floor(course.rating))}</span>
                <span className="rating-number">{course.rating.toFixed(1)}</span>
                <span className="reviews">({course.reviews} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Add Course Form Popup */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup">

        <button
        className="close-btn"
        onClick={() => setShowForm(false)} // Close the form
        aria-label="Close"
      >
        &times; {/* The '×' character represents the close icon */}
      </button>

            <h2>Add New Course</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Course Title:
                <input
                  type="text"
                  name="title"
                  value={newCourse.title}
                  onChange={handleFormChange}
                  required
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={newCourse.description}
                  onChange={handleFormChange}
                  required
                />
              </label>
              <label>
                Duration:
                <input
                  type="text"
                  name="duration"
                  value={newCourse.duration}
                  onChange={handleFormChange}
                  required
                />
              </label>

              <label>
  Thumbnail:
  <div
    {...getThumbnailProps()}
    className="file-dropzone"
  >
    <input {...getThumbnailInputProps()} />
    <p>{newCourse.thumbnail ? 'Thumbnail selected' : 'Drag & drop an image here or browse'}</p>
  </div>
</label>

<label>
  Video URL:
  <div
    {...getVideoProps()}
    className="file-dropzone"
  >
    <input {...getVideoInputProps()} />
    <p>{newCourse.video ? 'Video selected' : 'Drag & drop a video here or browse'}</p>
  </div>
</label>

              <div className="form-actions">
                <button type="submit" className="submit-btn">Add Course</button>
                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;