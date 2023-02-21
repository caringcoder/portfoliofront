import React from 'react'

const featureBox = [
  {
    head: "Unique design",
    para: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    icon: "fa fa-desktop"
  },
  {
    head: "Different Layout",
    para: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: "fa fa-user"
  },
  {
    head: "Make it Simple",
    para: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: "fa fa-comment"
  },
  {
    head: "Responsiveness",
    para: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: "fa fa-image"
  },
  {
    head: "Testing for Perfection",
    para: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: "fa fa-th"
  },
  {
    head: "Advanced Options",
    para: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: "fa fa-cog"
  },
]
function Services() {
  return (
    <>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className='text-light'>What I Do</h2>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites including fullstack applications.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              featureBox.map((element, index) => {
                return (
                  <div className="col-sm-6 col-lg-4" key={index}>
                    <div className="feature-box-1 bg-light text-black">
                      <div className="icon">
                        <i className={`fa fa-${element.icon}`}></i>
                      </div>
                      <div className="feature-content">
                        <h5>{element.head}</h5>
                        <p>{element.para}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Services