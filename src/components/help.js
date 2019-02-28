import React from 'react'

const Help = () => {
  return(
    <div className='help'>
      <div className="container-fluid p-0 m-0 text-center">
        <div className="row">
          <div className="col-12 pt-4 pb-3">
            <div className="col-md-10 px-5 px-md-4 mx-auto">
              <h1 className="p-3 mild_blue_text">Time + Talent + Treasure = Impact</h1>
              <img src={require('../assets/help_involve.jpg')} alt="Help Involve"/>
              <h2 className="p-3 mild_blue_text">Donate</h2>
              <div className="col-md-10 mx-auto text-muted h5">
                <p className="lh_1_9">
                  Every gift helps us create opportunity for low income individuals with high barriers to employments. Currently, 38% of The Bread Project clients are refugees and immigrants, 32% are reentry and 100% live below the federal poverty level. Donate online here!
                </p>
                <p>Mailing address for check donation:</p>
                <p>The Bread Project</p>
                <p>1615 University Avenue</p>
                <p>Berkeley, California 94703</p>
                <div className="mild_blue_border col-3 mx-auto mt-4 mb-5"> </div>
              </div>
              <div className="mild_blue_bg p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help;
