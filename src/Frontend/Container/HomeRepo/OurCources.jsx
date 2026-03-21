import React from 'react'
import { Link } from 'react-router-dom'

const OurCources = () => {
  return (
    <>
     
   <div class="container-fluid project py-5 mb-5">
    <div class="container">
        <div class="text-center mx-auto pb-5" >
            <h5 class="text-primary">Our Project</h5>
            <h1>Our Recently Completed Projects</h1>
        </div>

        <div class="row g-5">

            <div class="col-md-6 col-lg-4">
                <div class="project-item">
                    <div class="project-img">

                        <Link to="projectdetail/appic-media">
                            <img src="images/project-1.jpg" class="img-fluid w-100 rounded" alt="" />
							<div class="project-content">
                            <h4 class="text-secondary text-center"><i class="fa fa-link fa-2x mb-4 text-white"></i></h4>
                           
                        </div>
                        </Link>

                        

                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-item">
                    <div class="project-img">

                        <Link to="projectdetail/aifactory" >
                            <img src="images/project-3.jpg" class="img-fluid w-100 rounded" alt="" />
							 <div class="project-content">
                           <h4 class="text-secondary text-center"><i class="fa fa-link fa-2x mb-4 text-white"></i></h4>
                            
                        </div>
                        </Link>

                       

                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="project-item">
                    <div class="project-img">

                        <Link to="projectdetail/aiven" >
                            <img src="images/project-2.jpg" class="img-fluid w-100 rounded" alt="" />
							<div class="project-content">
                            <h4 class="text-secondary text-center"><i class="fa fa-link fa-2x mb-4 text-white"></i></h4>
                           
                        </div>
                        </Link>

                        

                    </div>
                </div>
            </div>

            
			
		 <div class="col-md-6 col-lg-4">
                <div class="project-item">
                    <div class="project-img">

                        <Link to="projectdetail/appic-media">
                            <img src="images/project-1.jpg" class="img-fluid w-100 rounded" alt="" />
							<div class="project-content">
                            <h4 class="text-secondary text-center"><i class="fa fa-link fa-2x mb-4 text-white"></i></h4>
                           
                        </div>
                        </Link>

                        

                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="project-item">
                    <div class="project-img">

                        <Link to="projectdetail/aifactory" >
                            <img src="images/project-3.jpg" class="img-fluid w-100 rounded" alt="" />
							 <div class="project-content">
                           <h4 class="text-secondary text-center"><i class="fa fa-link fa-2x mb-4 text-white"></i></h4>
                            
                        </div>
                        </Link>

                       

                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="project-item">
                    <div class="project-img">

                        <Link to="projectdetail/aiven" >
                            <img src="images/project-2.jpg" class="img-fluid w-100 rounded" alt="" />
							<div class="project-content">
                            <h4 class="text-secondary text-center"><i class="fa fa-link fa-2x mb-4 text-white"></i></h4>
                           
                        </div>
                        </Link>

                        

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    </>
  )
}

export default OurCources
