import React from "react";
import { Link, NavLink } from "react-router-dom";

function InnerBannerBreadCrumb({ pageTitle, title2, page2, title3, page3, title4, page4, title5 }) {
  const breadcrumbItems = [
    { title: title2, path: page2 },
    { title: title3, path: page3 },
    { title: title4, path: page4 },
    { title: title5, path: null } // title5 never has a path
  ].filter(item => item.title); 

  return (
    <div className="inner-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <div className="b-title">
              <h1 className="page-headerOLD">{pageTitle}</h1>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-0">
            <nav className="breadcrumb" role="navigation" aria-labelledby="system-breadcrumb">
              <ol>
                <li><Link to="/"><b>Home</b></Link></li>
                
                {breadcrumbItems.map((item, index) => (
                  <li key={index}>
                    {item.path ? (
                      <Link to={`/${item.path}`}><b>{item.title}</b></Link>
                    ) : (
                      <b>{item.title}</b>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerBannerBreadCrumb;
