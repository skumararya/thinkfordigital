import React from "react";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb";

const SchemesForArtists = () => {
  return (
    <>
      <InnerBannerBreadCrumb pageTitle={"Schemes"} title2={"Schemes"} />
      <div className="profile-content-bg">
        <div className="container">
          <div className="col-12 col-sm-12 col-md-12 white-bg white-profile-b">
            <div className="row pt-3 pb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="profile-title text-left">
                  <h2>The Prevailing Schemes</h2>
                  <div className="sub-underline"></div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-12 my-3">
                <div className="table-responsive">
                  <table className="table table-bordered custm-table">
                    <thead>
                      <tr>
                        <th>Sr.No.</th>
                        <th>Name of the Scheme</th>
                        <th>BE 2022-23 (Rs. in Lakhs)</th>
                        <th>Brief of Scheme</th>
                        <th>Document</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td>1</td>
                        <td>
                          Financial Assistance to NGO for Poetry, literature,
                          Art & Culture.
                        </td>
                        <td>70</td>
                        <td>
                          Objective of this scheme is to provide financial
                          assistance to the NGO’s for organizing Poetry
                          festival, Literary Festival, International Art
                          Festival and promotion of Art & Culture activities.
                        </td>
                        <td>
                          <a type="button" target="_blank" href="#">
                            <i className="fas fa-file-pdf"></i>
                          </a>
                        </td>
                      </tr> */}

                      {/* <tr>
                        <td>2</td>
                        <td>Ek Bharat Shrestha Bharat</td>
                        <td>75</td>
                        <td>
                          To Celebrate the Unity in Diversity of our Nation, to
                          promote the spirit of national integration, to
                          showcase the rich heritage, culture, customs &
                          traditions to establish long- term engagement between
                          states. Delhi Government has partnered with Sikkim
                          Government for this program .
                        </td>
                        <td>
                          <a type="button" target="_blank" href="#">
                            <i className="fas fa-file-pdf"></i>
                          </a>
                        </td>
                      </tr> */}

{/* 
                      <tr>
                        <td>3</td>
                        <td>Mukhyamantri Art & Culture Promotion Scheme</td>
                        <td>500</td>
                        <td>
                          To Expand the cultural activities to the every corner
                          of Delhi and to improve the community participation in
                          restoration and up keep of lesser known monument..
                        </td>
                        <td>
                          <a type="button" target="_blank" href="#">
                            <i className="fas fa-file-pdf"></i>
                          </a>
                        </td>
                      </tr> */}

                      <tr>
                        <td>1</td>
                        <td>Street Theatre & Performing Arts</td>
                        <td>500</td>
                        <td>
                          To encourage, promote and mentor young talent and to
                          bring forth social issues among communities and
                          public, a street theatre/performing art fellowship is
                          initiated by the Department.
                        </td>
                        <td>
                          <a type="button" target="_blank" href="#">
                            <i className="fas fa-file-pdf"></i>
                          </a>
                        </td>
                      </tr>

                      {/* <tr>
                        <td>5</td>
                        <td>Hiring of 11 Programme Officers</td>
                        <td>100</td>
                        <td>
                          In order to expand the Cultural Activities, High Level
                          committees are to be constituted in all the eleven
                          Revenue Districts in Delhi and to assist these
                          committees, department of ACL intends to hire services
                          of 11 Programme Officers i.e. one for each district.
                        </td>
                        <td>
                          <a type="button" target="_blank" href="#">
                            <i className="fas fa-file-pdf"></i>
                          </a>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchemesForArtists;
