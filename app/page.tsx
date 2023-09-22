import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   

    <div className="container">
      <div className="bg-dark mt-2 d-flex flex-column flex-md-row align-items-center">
        <a id="toggleButton"><i className="text-white fas fa-bulb fa-sun fa-2x"></i></a>&nbsp;&nbsp;&nbsp;
        <small className="text-white mb-2 mb-md-0">&nbsp;<i className="fa fa-map-marker-alt me-2"></i>Alex Kemboi, Nairobi, Kenya.</small>
        <small className="text-white mb-2 mb-md-0">&nbsp;<i className="fa fa-phone-alt me-2"></i>+254726837210</small>
        <small className="text-white mb-2 mb-md-0">&nbsp;&nbsp;<i className="fa fa-envelope-open me-2"></i>alexkipchirchirkemboi@gmail.com</small>
    
   <div className="d-flex justify-content-center justify-content-md-center">        
         
            <a
              href="https://www.linkedin.com/in/alex-kemboi-9642a3166"
              target="_blank"
              ><i className="fab text-white fa-linkedin grow-on-hover fa-2x"></i      ></a>
            <a href="https://www.twitter.com/alexkemboi97" target="_blank"
              ><i className="fab text-white fa-twitter grow-on-hover fa-2x"></i         ></a>
            <a href="https://www.github.com/alexkemboi" target="_blank"
              ><i className="fab text-white fa-github grow-on-hover fa-2x"></i            ></a>
          
        </div> 
    </div>
    
    
      {/* <!-- Navbar componenet --> */}
        <nav
        className="navbar navbar-expand-lg navbar-primary bg-dark " 
      >
        {/* <!-- <a className="navbar-brand text-white" href="#">Alex Kemboi</a> --> */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"><i className="fas fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
            <li>
              <a className="nav-link by-primary text-white" href="#" 
                >Resume</a>
            </li>
           
          </ul>
        </div>
      </nav>

      {/* <!-- main banner --> */}
      <section id="home">                 
          <div className="card border border-dark border-0 bg-dark ">
  <div className="card-content bg-dark row">
    
      {/* <!-- Adjust column sizes for different screen sizes --> */}
      <div className="bg-dark col-xl-3 col-lg-4 col-12">
        <div className="bg-dark text-center">
          <img className="imagealex m-2 img-fluid" src="/images/alex.jpg" alt="Alex" />
        </div>
      </div>
      <div className="bg-dark col-xl-9 col-lg-8 col-12">
        <div className="text-center bg-dark rounded-right ">
          <h4 className="hero_title text-success fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Habari</h4>
          <p className="hero_desc text-white fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">
            It's me Alex,I am a professional Software developer in Nairobi, Kenya.
          </p>
          <button
            type="button"
            className="btn btn-dark text-white border-white m-3 grow-on-hover"
          
          >
            <i className="fas fa-file mr-1"></i>Resume
          </button>
          <div className="container-fluid">
            {/* <!-- social media icons --> */}
            <div className="social-icons text-center">
              <a href="https://www.linkedin.com/in/alex-kemboi-9642a3166" target="_blank" className="text-dark">
                <i className="fab text-white fa-linkedin grow-on-hover "></i>
              </a>
              <a href="https://www.twitter.com/alexkemboi97" target="_blank" className="text-dark">
                <i className="fab text-white fa-twitter grow-on-hover "></i>
              </a>
              <a href="https://www.github.com/alexkemboi" target="_blank" className="text-dark"> 
                <i className="fab text-white fa-github grow-on-hover "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    
  </div>
          </div>

      </section>
{/* 
      <!-- about section--> */}
      <section id="about">
        <div className="bg-dark">
          <div className="p-4 ">
            <h1 className="text-center text-white bg-dark w-50 p-3 rounded-pill m-auto fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">About Me</h1>   
            <div className="row">
              <div className="col-lg-12">
                <p className="text-white mt-3">
                              My name is Alex Kemboi. I’m a graduate from Kisii University in
                              Kenya with a degree in Software Engineering. I'm most passionate
                              about giving back to the community, and my goal is to pursue
                              this passion within the field of software engineering. In my
                              free time I like working on open source projects. I seek to grow
                              my career in a progressive organization where the blend of my
                              talents and enhanced education skills will help to achieve the
                              goals of the organization.I enjoy being challenged and engaging with projects that
                              require me to work outside my comfort and knowledge set as I
                              continuing to learn and develop techniques that are important
                              to me
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- <div className="d-flex justify-content-centre">
              <button
                type="button"
                className="btn btn-dark text-white border-white border-1-solid-black mt-1 m-auto"
                onclick="downloadAbout()"
              >
                <i className="fas mr-2 fa-file text-white"></i>More
              </button>
            </div> --> */}
          </div>  
         </section>

      {/* <!-- skills section --> */}
          <section id="skills" className="mt-3">
            <div className="card border border-dark border-0">
              <div className="card-header bg-dark">
                <h1 className="text-center text-white bg-dark w-50  rounded-pill mr-auto ml-auto fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long ">My Skills</h1>  
              </div>
              <div className="card-body bg-dark">
                <div className="row m-auto justify-content-center  ">  
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-12">                
                      <div className="card grow-on-hover m-1">
                        <div className="card-content">
                            <div className="media d-flex align-items-stretch">
                                <div className="py-1 px-2 media-body bg-danger">
                                    <h6><b className="text-white">HTML5</b></h6>
                                    <h6 className="text-bold-400">&nbsp;</h6>
                                    <div className="progress mt-1 mb-0" >
                                        <div className="progress-bar w-80 bg-white w-80" role="progressbar"  ></div>
                                    </div>
                                </div>
                                <div className="p-2 text-center bg-white rounded-right">
                                    <i className="fab fa-html5 text-danger fa-3x m-auto text-center"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                      
                    </div>    
                  
                  <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
                    
                    <div className="card grow-on-hover m-1">
                      <div className="card-content">
                        <div className="media d-flex align-items-stretch">
                          <div className="py-1 px-2 media-body bg-dark">
                            <h6><b className="text-white">CSS3</b></h6>
                            <h6 className="text-bold-400">&nbsp;</h6>
                            <div className="progress mt-1s mb-0 h-70">
                              <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                            </div>
                          </div>
                          <div className="p-2 text-center bg-white rounded-right">
                            <i className="fab fa-css3-alt text-dark fa-3x m-auto text-center"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
                    
                    <div className="card grow-on-hover m-1">
                      <div className="card-content">
                        <div className="media d-flex align-items-stretch">
                          <div className="py-1 px-2 media-body bg-warning">
                            <h6><b className="text-white">Javascript</b></h6>
                            <h6 className="text-bold-400">&nbsp;</h6>
                            <div className="progress mt-1s mb-0" >
                              <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                            </div>
                          </div>
                          <div className="p-2 text-center bg-white rounded-right">
                            <i className="fab fa-js text-warning fa-3x m-auto text-center"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
    
                  <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
                    <div className="card grow-on-hover m-1">
                      <div className="card-content">
                        <div className="media d-flex align-items-stretch">
                          <div className="py-1 px-2 media-body bg-purple">
                            <h6><b className="text-white">Bootstrap</b></h6>
                            <h6 className="text-bold-400">&nbsp;</h6>
                            <div className="progress mt-1s mb-0" >
                              <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                            </div>
                          </div>
                          <div className="p-2 text-center bg-white rounded-right">                            
                            <i className="fab fa-bootstrap text-purple fa-3x  m-auto text-center"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
                    <div className="card grow-on-hover m-1">
                        <div className="card-content">
                            <div className="media d-flex align-items-stretch">
                                <div className="py-1 px-2 media-body bg-info">
                                    <h6><b className="text-white">React</b></h6>
                                    <h6 className="text-bold-400">&nbsp;</h6>
                                    <div className="progress mt-1 mb-0" >
                                        <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                                    </div>
                                </div>
                                <div className="p-2 text-center bg-white rounded-right">
                                    <i className="fab fa-react text-info fa-3x m-auto text-center"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
    
                

              <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
                <div className="card grow-on-hover m-1">
                    <div className="card-content">
                        <div className="media d-flex align-items-stretch">
                            <div className="py-1 px-2 media-body bg-warning">
                                <h6><b className="text-white">MongoDB</b></h6>
                                <h6 className="text-bold-400">&nbsp;</h6>
                                <div className="progress mt-1 mb-0" >
                                    <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                                </div>
                            </div>
                            <div className="p-2 text-center bg-white rounded-right">
                                <i className="fas fa-database text-warning fa-3x m-auto text-center"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 


            
            <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
              <div className="card grow-on-hover m-1">
                  <div className="card-content">
                      <div className="media d-flex align-items-stretch">
                          <div className="py-1 px-2 media-body bg-info">
                              <h6><b className="text-white">Java</b></h6>
                              <h6 className="text-bold-400">&nbsp;</h6>
                              <div className="progress mt-1 mb-0" >
                                  <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                              </div>
                          </div>
                          <div className="p-2 text-center bg-white rounded-right">
                              <i className="fas fa-java text-info fa-3x m-auto text-center"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div> 


          <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
            <div className="card grow-on-hover m-1">
                <div className="card-content">
                    <div className="media d-flex align-items-stretch">
                        <div className="py-1 px-2 media-body bg-success">
                            <h6><b className="text-white">AWS</b></h6>
                            <h6 className="text-bold-400">&nbsp;</h6>
                            <div className="progress mt-1 mb-0" >
                                <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                            </div>
                        </div>
                        <div className="p-2 text-center bg-white rounded-right">
                            <i className="fas fa-aws text-success fa-3x m-auto text-center"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

          
          <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
            <div className="card grow-on-hover m-1">
                <div className="card-content">
                    <div className="media d-flex align-items-stretch">
                        <div className="py-1 px-2 media-body bg-danger">
                            <h6><b className="text-white">C</b></h6>
                            <h6 className="text-bold-400">&nbsp;</h6>
                            <div className="progress mt-1 mb-0" >
                                <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                            </div>
                        </div>
                        <div className="p-2 text-center bg-white rounded-right">
                            <i className="fas fa-code text-danger fa-3x m-auto text-center"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div> 


                      {/* <!-- NodeJS Card --> */}
<div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
  <div className="card grow-on-hover m-1">
      <div className="card-content">
          <div className="media d-flex align-items-stretch">
              <div className="py-1 px-2 media-body bg-secondary">
                  <h6><b className="text-white">NodeJS</b></h6>
                  <h6 className="text-bold-400">&nbsp;</h6>
                  <div className="progress mt-1 mb-0" >
                      <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                  </div>
              </div>
              <div className="p-2 text-center bg-white rounded-right">
                  <i className="fab fa-node-js text-secondary fa-3x m-auto text-center"></i>
              </div>
          </div>
      </div>
  </div>
</div>
<div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
  <div className="card grow-on-hover m-1">
      <div className="card-content">
          <div className="media d-flex align-items-stretch">
              <div className="py-1 px-2 media-body bg-success">
                  <h6><b className="text-white">MySQL</b></h6>
                  <h6 className="text-bold-400">&nbsp;</h6>
                  <div className="progress mt-1 mb-0" >
                      <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                  </div>
              </div>
              <div className="p-2 text-center bg-white rounded-right">
                  <i className="fas fa-database text-success fa-3x m-auto text-center"></i>
              </div>
          </div>
      </div>
  </div>
</div> 

{/* <!-- Angular Card --> */}
<div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
  <div className="card grow-on-hover m-1">
      <div className="card-content">
          <div className="media d-flex align-items-stretch">
              <div className="py-1 px-2 media-body bg-danger">
                  <h6><b className="text-white">Angular</b></h6>
                  <h6 className="text-bold-400">&nbsp;</h6>
                  <div className="progress mt-1 mb-0" >
                      <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                  </div>
              </div>
              <div className="p-2 text-center bg-white rounded-right">
                  <i className="fab fa-angular text-danger fa-3x m-auto text-center"></i>
              </div>
          </div>
      </div>
  </div>
</div>

{/* <!-- Azure Card --> */}
<div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
  <div className="card grow-on-hover m-1">
      <div className="card-content">
          <div className="media d-flex align-items-stretch">
              <div className="py-1 px-2 media-body bg-primary">
                  <h6><b className="text-white">Azure</b></h6>
                  <h6 className="text-bold-400">&nbsp;</h6>
                  <div className="progress mt-1 mb-0" >
                      <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                  </div>
              </div>
              <div className="p-2 text-center bg-white rounded-right">
                  <i className="fas fa-cloud text-primary fa-3x m-auto text-center"></i>
              </div>
          </div>
      </div>
  </div>
</div>

{/* <!-- C# Card --> */}
<div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
  <div className="card grow-on-hover m-1">
      <div className="card-content">
          <div className="media d-flex align-items-stretch">
              <div className="py-1 px-2 media-body bg-secondary">
                  <h6><b className="text-white">C#</b></h6>
                  <h6 className="text-bold-400">&nbsp;</h6>
                  <div className="progress mt-1 mb-0" >
                      <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                  </div>
              </div>
              <div className="p-2 text-center bg-white rounded-right">
                  <i className="fab fa-cuttlefish text-secondary fa-3x m-auto text-center"></i>
              </div>
          </div>
      </div>
  </div>
</div>

{/* <!-- ASP.NET Card --> */}
<div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
  <div className="card grow-on-hover m-1">
      <div className="card-content">
          <div className="media d-flex align-items-stretch">
              <div className="py-1 px-2 media-body bg-purple">
                  <h6><b className="text-white">ASP.NET</b></h6>
                  <h6 className="text-bold-400">&nbsp;</h6>
                  <div className="progress mt-1 mb-0" >
                      <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                  </div>
              </div>
              <div className="p-2 text-center bg-white rounded-right">
                  <i className="fas fa-code text-purple fa-3x m-auto text-center"></i>
              </div>
          </div>
      </div>
  </div>
</div>

                      {/* <!-- Git Card --> */}
                      <div className="col-xl-3 col-lg-6 col-sm-6 col-12">            
                        <div className="card grow-on-hover m-1">
                            <div className="card-content">
                                <div className="media d-flex align-items-stretch">
                                    <div className="py-1 px-2 media-body bg-info">
                                        <h6><b className="text-white">Git</b></h6>
                                        <h6 className="text-bold-400">&nbsp;</h6>
                                        <div className="progress mt-1 mb-0" >
                                            <div className="progress-bar w-80 bg-white" role="progressbar"  ></div>
                                        </div>
                                    </div>
                                    <div className="p-2 text-center bg-white rounded-right">
                                        <i className="fab fa-github text-info fa-3x m-auto text-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>   
                  
                </div>
              </div>
            </div>
            
          </section>

     


      {/* <!-- portfolio section--> */}
      <section  id="portfolio">
          <div className="card h-100 w-100  bg-dark border border-dark border-0 mt-2 mb-2">      
            <div className="card-header bg-dark">
              <h1 className="card-title text-white fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Portfolio</h1>
            </div>    
            <div className="card-body text-center bg-dark">             
              <p className="container">
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100">
                      <img
                        src="/images/bankingapp.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Banking App</h3>
                        <p className="card-text text-sm">
                          This application is used to register customers,withdraw &
                          deposit cash
                        </p>
                        
                      </div>
                    </div>
                  </div>
      
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100">
                      <img
                        src="/images/schoolapp.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">School App</h3>
                        <p className="card-text text-sm">
                          This application is used to register students,record and
                          analyse exams
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100">
                      <img
                        src="/images/portfolioApp.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Portfolio</h3>
                        <p className="card-text text-sm">
                          This is a personal portfolio describing who iam and the
                          projects i have done
                        </p>
                      
                      </div>
                    </div>
                  </div>
      
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100">
                      <img
                        src="/images/afrecommerce.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Afrecommerce</h3>
                        <p className="card-text text-sm">
                          This an ecommerce to sell and buy african fabhions
                        </p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100 animated-background">
                      <img
                        src="/images/kusuweb.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">KUSU Website</h3>
                        <p className="card-text text-sm">
                          This a students website for shairing information and distributing bursaries and work study jobs
                        </p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100">
                      <img
                        src="/images/certs.PNG"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Clinical</h3>
                        <p className="card-text text-sm">
                          This a clinical education system for placing students in their rotaion areas.
                        </p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100">
                      <img
                        src="/images/caro.PNG"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Carolyne Kimeto</h3>
                        <p className="card-text text-sm">
                          This Carolyne's personal portfolio for writing her bloggs and managing her studies
                        </p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 mt-3">
                    <div className="card grow-on-hover h-100 w-100">
                      <img
                        src="/images/foodcloud.PNG"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h3 className="card-title text-sm fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Foodcloud</h3>
                        <p className="card-text text-sm">
                          This a market place for selling and buying food waste at affordable prices.
                        </p>
                      
                      </div>
                    </div>
                  </div>
                  
                </div>
              </p>
              <button className="btn btn-dark text-white border-white text-center" type="button">
                Contact
              </button>
            </div>          
        </div>
      </section>
{/* 
      <!-- <section id="portfolio" className="bg-dark d-none">
        <h1 className="text-center fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Portfolio</h1>
        <div style="max-height: 500px; overflow-y: auto;margin-left: 20px;margin-right: 20px;">
         
         <div className="repositories row"></div> -->
        <!-- </div>
      </section> --> */}

      <section id="contact">
                    <div className=" bg-dark card border">
                        <div className="card-header bg-dark text-white">
                            <h1 className="text-center text-white fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Contact Me</h1>
                        </div>
                        <div className="bg-dark card-body">
                            <form id="contactForm" action="javascript:void(0);">
                                <div className="form-group">
                                    <label className="text-white name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark border-white text-white"
                                        id="name"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-white email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control bg-dark border-white text-white"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-white message">Message</label>
                                    <textarea
                                        className="form-control bg-dark border-white text-white"
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark text-white border-white">Send Message</button>
                            </form>
                        </div>
                   
        </div>
    </section>


    

      <div className="container mt-5">
        <h2 className="text-center text-white fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 long">Latest Blog Posts</h2>
        <h5 className="text-light text-center">Coming soon....</h5>
        {/* <!-- Blog Cards --> */}
        <div className="row d-none">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="image1.jpg" className="card-img-top" alt="Blog Image"/>
              <div className="card-body">
                <h5 className="card-title">Blog Post Title 1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget urna eget ante vestibulum volutpat.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
      
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="image2.jpg" className="card-img-top" alt="Blog Image"/>
              <div className="card-body">
                <h5 className="card-title">Blog Post Title 2</h5>
                <p className="card-text">Praesent non sem nec lectus vestibulum ultricies eget ac massa. Sed vehicula ante nec cursus.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
      
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="image3.jpg" className="card-img-top" alt="Blog Image"/>
              <div className="card-body">
                <h5 className="card-title">Blog Post Title 3</h5>
                <p className="card-text">Aliquam sagittis orci ac odio dictum, eget efficitur orci tempus. Nullam bibendum metus non augue lacinia cursus.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Blog Cards -->
      
        <!-- Pagination --> */}
        <nav aria-label="Page navigation d-none">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <span className="page-link text-dark">Previous</span>
            </li>
            <li className="page-item text-dark active"><a className="page-link" href="#">1</a></li>
            <li className="page-item text-dark"><a className="page-link text-dark" href="#">2</a></li>
            <li className="page-item text-dark"><a className="page-link text-dark" href="#">3</a></li>
            <li className="page-item text-dark">
              <a className="page-link text-dark" href="#">Next</a>
            </li>
          </ul>
        </nav>
        {/* <!-- End Pagination --> */}
      
      </div>
      
      

      {/* <!-- footer section--> */}
        <footer id="footer" className="bg-dark"  >
          <div >
            <p className="text-white">
              I'm currently looking for software development partnerships and opportunities! 
              If you have of any projects or ideas,iam available to bring your ideas to live,
              and to answer any questions.Feel free to say hi, You can
              email me at alexkipchirchirkemboi@gmail.com or send a direct message on linkedin or twitter.
            </p>
          </div>
          <div>
            {/* <!-- social media icons --> */}
            <div className="social-icons  ">
              <a
                href="https://www.linkedin.com/in/alex-kemboi-9642a3166"
                target="_blank"
                ><i className="fab text-white fa-linkedin grow-on-hover"></i></a>
              <a href="https://www.twitter.com/alexkemboi97" target="_blank"
                ><i className="fab text-white fa-twitter grow-on-hover"></i></a>
              <a href="https://www.github.com/alexkemboi" target="_blank"
                ><i className="fab text-white fa-github grow-on-hover"></i></a>
            </div>
          </div>
        </footer>
      </div>   
    </main>
  )
}
