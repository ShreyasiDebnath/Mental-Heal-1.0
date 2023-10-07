import React from 'react'

function Comhome() {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-info bg-info"data-bs-theme="dark">
      <div class="container" style={{margin: "0"}}>
        <img src="https://media.tenor.com/ybn86nLN5mAAAAAC/brain-mental.gif"
        alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
        <a class="navbar-brand" href="#"><strong/>Mental Healing</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" >Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Professional Counsellor</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="/home">Volunteer</a>
            </li>
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact Us
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Mobile: 1234567890</a></li>
                <li><a class="dropdown-item" href="#">Email: name@example.com</a></li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><a class="dropdown-item" href="#">Premium</a></li>
              </ul>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blogpost</a>
              </li>
              
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Premium</a>
            </li>
          </ul>
          <form class="d-flex" role="search" style={{right: "0",
    position: "absolute"}}>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit"><strong>Search</strong></button>
          </form>
         
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Comhome