import React from 'react';
import about_banner_img from '../assets/WhoWeAre_Hero-compressor.jpg';

const About = () => {
  return(
    <div className='about'>
      <h4 class="h1 mild_blue_text text-center p-5 font-weight-bold">We Prepare People for Work & Life</h4>
      <img src={about_banner_img} alt="About Banner Image"/>
      <div className="container-fluid p-0 m-0 text-center">
        <div className="row">
          {/* Intro message section*/}
          <div className="vision col-12 py-5">
            <div className="col-md-10 px-5 px-md-4 mx-auto">
              <h3 className="p-5 mild_blue_text">Our Vision</h3>
              <p className="text-muted h5">
                The Bread Project’s vision is to lead work-readiness, employment support & professional development programs for marginalized individuals in the San Francisco Bay Area, and to be a model for this work nationwide.
              </p>
              <div className="mild_blue_border col-4 mx-auto text-white m-5"> </div>
              <p className="text-muted h5">
                When thousands of low-income, chronically unemployed adults are able to make a successful transition to employment and have ongoing access to further education to increase their economic opportunities, they improve not only their own lives but those of their families and communities, for generations to come.
              </p>
            </div>
          </div>

          <div className="history col-12 py-5 mild_blue_bg">
            <div className="col-md-10 px-5 px-md-4 mx-auto">
              <h1 className="p-5 text-white">Our History</h1>
              <p className="text-white">
                The Bread Project was founded as a California nonprofit 501(c)(3) public benefit corporation in December 2000. Lucie Buchbinder and Susan Phillips, specialists in subsidized housing, created the organization to help low-income housing tenants obtain job skills training and become self-sufficient. After a successful beginning at the San Francisco Baking Institute in South San Francisco, The Bread Project transferred to the East Bay and partnered with Berkeley Adult School and Oakland Unified School District Adult and Career Education.
              </p>
              <p className="text-white">
                With growth came the opportunity for The Bread Project to operate its own training facility and wholesale bakery. In 2010, we moved to Emeryville. In 2014, the award-winning 3-week Bakery Bootcamp™ was established to offer a quicker pathway to employment. In 2015, The Bread Project moved again to its current facility – zoned for both retail and wholesale operations –in Berkeley, California. During our 18-year history, we have served over 1,800 low-income individuals. Today 90% of graduates find jobs, and average time to employment is only one month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
