import React, { useState } from 'react'
import InnerBanner from '../../Shared/inner banner/InnerBanner'
import { useNavigate } from "react-router-dom";

const Training = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const courses = [
    {
      title: "UI/UX Design",
      desc: "Learn Figma, Wireframing & User Experience",
      duration: "2 Months",
      mode: "Online",
      program: "Summer Training",
      category: "Design",
      icon: "🎨"
    },
    {
      title: "Web Development",
      desc: "HTML, CSS, JavaScript & Responsive Design",
      duration: "3 Months",
      mode: "Hybrid",
      program: "Industrial Training",
      category: "Frontend",
       icon: "🌐"
    },
    {
      title: "PHP & Laravel",
      desc: "Backend development with PHP & Laravel",
      duration: "2 Months",
      mode: "Offline",
      program: "Internship",
      category: "Backend",
        icon: "🖥️"
    },
    {
      title: "React Development",
      desc: "Build modern web applications using React",
      duration: "2 Months",
      mode: "Online",
      program: "Live Project",
      category: "Frontend",
       icon: "⚛️"
    },
    {
      title: "Node.js Development",
      desc: "Build APIs & backend systems",
      duration: "2 Months",
      mode: "Hybrid",
      program: "Industrial Training",
      category: "Backend",
      icon: "🚀"
    },
  ];

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter(c => c.category === filter);

  return (
    <>
      <InnerBanner 
        pageTitle="Training"
        breadcrumb1="Home"
        breadcrumb1Link="/"
        breadcrumb2="Training"
      />

      <div className="container-fluid services py-5 mb-5">
        <div className="container">

          {/* Heading */}
          <div className="text-center mx-auto pb-5 wow fadeIn">
            <h5 className="text-primary">Our Training</h5>
            <h1>Professional IT Training Programs</h1>
          </div>

          {/* Filter Buttons */}
          <div className="text-center mb-4">
            {["All", "Frontend", "Backend", "Design"].map((cat) => (
              <button
                key={cat}
                className={`btn me-2 mb-2 ${filter === cat ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Cards */}
          <div className="row g-5 services-inner">
            {filteredCourses.map((course, index) => (
              <div className="col-md-6 col-lg-4 wow fadeIn" key={index}>
                <div className="course-item bg-light">
                  <div className="p-4 text-center services-content">

                    {/* Icon */}
                    <div style={{ fontSize: "80px" }}>{course.icon}</div>
<br/>
                    <h4 className="mb-3">{course.title}</h4>
                    <p>{course.desc}</p>

                    {/* Badges */}
                    <div className="mb-3">
                      <span className="badge bg-primary custom-badge me-2">{course.duration}</span>
                      <span className="badge bg-primary custom-badge me-2">{course.mode}</span>
                      <span className="badge bg-primary  custom-badge">{course.program}</span>
                    </div>

                    <button 
                      onClick={() => navigate("/contact")}
                      className="btn btn-secondary px-4 py-2 rounded-pill"
                    >
                      Contact Us
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default Training;