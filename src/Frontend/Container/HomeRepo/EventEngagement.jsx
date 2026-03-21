import React from 'react'

const EventEngagement = () => {
  return (
    <>
     
<div class="events-engagements-sec">
			<div class="container">
				<div class="row gy-3">
					<div class="col-12 col-sm-12 col-md-4 col-lg-4 z-index mt-5">
						<div class="heading-sec mt-5">
							<div>
								<h2 class="all_heading text-white">Events &<br/>Engagements</h2>
								<span class="underline-bg"></span>
							</div>
							<p>Creating Spaces to Connect, Learn, and Grow</p>
							<div class="btn-sec mt-3">
								<a href="#" class="btn quick-btn">View All</a>
								<div class="owl-nav">
									<button type="button" class="owl-prev"><span class="material-symbols-outlined">arrow_left_alt</span></button>
								
									<button type="button" class="owl-next"><span class="material-symbols-outlined">arrow_right_alt</span></button>
								</div>
							</div>							
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-8 col-lg-8 z-index">
						<div id="events-engagements-slider" class="owl-carousel owl-theme">
							<div class="slider-first-row">
								<div class="card-sec">
									<div class="img-sec">
										<img src="images/events-engagements-1.png" alt=""/>
									</div>
									<div class="desc-sec">
										<a href="#">Workshops & Bootcamps <span class="material-symbols-outlined">trending_flat</span></a>
									</div>
								</div>
								<div class="card-sec">
									<div class="img-sec">
										<img src="images/events-engagements-2.png" alt=""/>
									</div>
									<div class="desc-sec">
										<a href="#">School & College Events <span class="material-symbols-outlined">trending_flat</span></a>
									</div>
								</div>
							</div>
							<div class="slider-first-row">
								<div class="card-sec">
									<div class="img-sec">
										<img src="images/events-engagements-3.png" alt=""/>
									</div>
									<div class="desc-sec">
										<a href="#">Competitions & Hackathons <span class="material-symbols-outlined">trending_flat</span></a>
									</div>
								</div>
								<div class="card-sec">
									<div class="img-sec">
										<img src="images/events-engagements-4.png" alt=""/>
									</div>
									<div class="desc-sec">
										<a href="#">Government & CSR Programs <span class="material-symbols-outlined">trending_flat</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default EventEngagement
