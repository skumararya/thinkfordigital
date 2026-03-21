import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  useGetLastUpdatedQuery, 
  useGetVisitorCountQuery, 
  useAddVisitorMutation 
} from "../../../redux/api/apiService";

const VisitorInfo = () => {
  const { data: visitorResponse } = useGetVisitorCountQuery();
  
  const [addVisitor] = useAddVisitorMutation();


  useEffect(() => {
    try {
      addVisitor();
    } catch (error) {
      console.error("Failed to add visitor:", error);
    }
  }, [addVisitor]);

  const visitorCount = visitorResponse?.data || "...";

  return <p>Visitors: {visitorCount}</p>;
};

const FooterBottom = () => {
  const { data: lastUpdatedResponse, isLoading } = useGetLastUpdatedQuery();
  const lastUpdatedDate = lastUpdatedResponse?.data || "Not available";

  return (
    <div className="copyright">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 footer-top-wrapper">
            <ul>
              <li><NavLink to="/terms-conditions">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
              <li><NavLink to="/archives">Archives</NavLink></li>
              <li><NavLink to="/copyright-policy">Copyright Policy</NavLink></li>
              <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
           <p>Copyright  © {new Date().getFullYear()} Government of NCT of Delhi. All rights reserved.</p>
          </div>
          <div className="col-lg-3 text-right">
            <p>Page last updated on: {isLoading ? '...' : lastUpdatedDate}</p>
            <VisitorInfo /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;