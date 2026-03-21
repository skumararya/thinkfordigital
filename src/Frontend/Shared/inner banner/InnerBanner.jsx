import React from 'react'

const InnerBanner = ({ pageTitle, breadcrumb1, breadcrumb2, breadcrumb1Link }) => {
  return (
    <>
      <div class="container-fluid page-header py-5">
            <div class="container text-center py-5">
                <h1 class="display-2 text-white mb-4 animated slideInDown">{pageTitle}</h1> 
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"> <a href={breadcrumb1Link}>{breadcrumb1}</a></li>
                        <li class="breadcrumb-item" aria-current="page">{breadcrumb2}</li>
                    </ol>
                </nav>
            </div>
        </div> 
    </>
  )
}

export default InnerBanner
