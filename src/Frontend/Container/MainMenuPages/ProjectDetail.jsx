import React from 'react'
import InnerBanner from '../../Shared/inner banner/InnerBanner'

const ProjectDetail = (
    {
  title,
  about,
  skills = [],
  roles = [],
  branding = [],
  image
}
) => {
  return (
    <>
     <InnerBanner 
  pageTitle="Project Detail"
  breadcrumb1="Home"
  breadcrumb1Link="/"
  breadcrumb2="Project Detail"
    />

<section class="py-5">
    <div class="container">
        <div class="row g-5">

            <div class="col-lg-7">

                <div class="mb-5">
                    <h3 class="mb-3">About Project</h3>
                    <p>
                        {/* Appic Media is a leading technology platform providing mobile advertising
                        and analytics services to app developers globally. */}
                        {about}
                    </p>
                </div>

                <div class="mb-5">
                    <h3 class="mb-3">Skills Used</h3> 
                    <ul class="list-inline">
                        {/* <li class="list-inline-item badge bg-primary">HTML5</li>
                        <li class="list-inline-item badge bg-primary">CSS3</li>
                        <li class="list-inline-item badge bg-primary">Bootstrap</li>
                        <li class="list-inline-item badge bg-primary">jQuery</li>
                        <li class="list-inline-item badge bg-primary">React</li> */}
                         {skills.map((skill, index) => (
                    <li key={index} className="list-inline-item badge bg-primary">
                      {skill}
                    </li>
                  ))}
                    </ul>
                </div>

                <div class="mb-5">
                    <h3 class="mb-3">What We Did</h3>
                    <ul>
                        {/* <li>Requirement Gathering</li>
                        <li>Prototype Design</li>
                        <li>HTML Conversion</li>
                        <li>Development </li>
                        <li>Project Delivery</li> */}
                        {roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                    </ul>
                </div>

               <div className="mb-5">
  <h3 className="mb-3">Other Brandings</h3>

  <div id="brandingCarousel" className="carousel slide" data-bs-ride="carousel">
    
    <div className="carousel-inner">

      {Array.from({ length: Math.ceil(branding.length / 2) }).map((_, index) => {
        const firstImg = branding[index * 2];
        const secondImg = branding[index * 2 + 1];

        return (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row">
              
              <div className="col-md-6">
                <img
                  src={firstImg}
                  className="d-block w-100 rounded shadow"
                  alt="branding"
                />
              </div>

              {secondImg && (
                <div className="col-md-6">
                  <img
                    src={secondImg}
                    className="d-block w-100 rounded shadow"
                    alt="branding"
                  />
                </div>
              )}

            </div>
          </div>
        );
      })}

    </div>

    {/* Controls */}
    <button 
      className="carousel-control-prev" 
      type="button" 
      data-bs-target="#brandingCarousel" 
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button 
      className="carousel-control-next" 
      type="button" 
      data-bs-target="#brandingCarousel" 
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>

                <div class="mb-5">
                    <h3 class="mb-3">Client Feedback</h3>
                    <blockquote class="blockquote bg-light p-4 rounded">
                        <p class="mb-0">
                            “It was quite impressive to see the expertise in web design and development.”
                        </p>
                    </blockquote>
                </div>

            </div>

            <div class="col-lg-5">

                <div class="card shadow">
                    {/* <img src="images/project1.png" class="img-fluid rounded" alt="project" /> */}
                    <img
                  src={image}
                  className="img-fluid rounded"
                  alt={title}
                />
                </div>

            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default ProjectDetail
