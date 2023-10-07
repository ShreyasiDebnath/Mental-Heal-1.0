import React from 'react'

function Comhome() {
  return (
    <>
   <div class="alert alert-info" role="alert">
      Congratulations, Welcome to our Website &#129504;
    </div>
    <div class="container-fluid">
    
      {/* <div class="text-center">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAA/FBMVEXL4v////++2Pv/3c5KgKo2Xn3/y75AcJP0+/8rTWbigIbk9v/dY27N5P/I4P//08UvWXmtxt651fswVXAhRl+nvtf5///S6f/d4fDk+f/w9///4tLi7//ieoDZ6f4hUXSYmaFKbo1GeaA/eaU8aIrs/v95hJRfc4lPa4Ty18ro0MWOhIvX3/PJ0N7W4ul8kqXC092SrcqJn7P48fBjkbncV2PfbXawx9fk2d/jucDjmqCqmqlpYXt/a4AsZIumcICAnboANlFlgpzUwrxdZnXTs6ytmpmsparnvrTu09b20Mv03tmhssCAqMuau9zmrLHIeIKYb4JXY366aHcAXYBQAAAI3UlEQVRogb3beUPbNhQAcNVNsNPExoEQNyYkJHEKtGsOoOVYx0LYurJR2m3f/7tMkg9dT7JMw972B6E4Pz+9J8XxgV5UDy+O+wMfOTSCAPmDfj/2nvBGqOLfx/3IRwEOhFDg5LGD/3NQ5T2ognsYpmoePr8DTrYDz4F7fRFmO8D7zs5O0LfO3xKPB6Cc+YHko/4G8T7Sy7nvCL4z2AzuldM0RN5xBuWjX4rjUtvQIP+DeGxPqzzuvR/AvUElWim9s4OMY2/C+xVpkDclr8e9aiPOeEkP9Mlr8fhJMg258bTJ6/D+0237ttfgVTtNDrnvquBPLDcLqfCOY4175vfVhfhXctdDn3YAHvsalrxnFAVtIPb22igStpN1B9BV3NDmfuQsR0k9VKLR6XR2V1Ly5bqCG8bcRysM14HYbeDoHFXVFVxvR+0ElHO80VlF4s6WdZ2M6+sdtYcaOscbnUDqOgkPzLh+fvsGO8dv9+R9l3RkwvUfJT4a6cacy3wZSZvJE26gxw2NHq0MdoEf4alobrq+Djc1emCgC7zROZ6ftkVe1j0NblhcoqUp8QLHfOf2WGg7U9NxuOnYITJVnMeJvyvohrIz3DPYJaMu4o3Omu87OfUdD8AHehvPM2PiEt5oIKGC2vlW/BSbPkUr4p22qefYYV2BG7qtOi4tNlLqjoybj1R5PBwOlU+X3Ubn9rajxXU9l+GeMXEOD+t/3N0dHpEdyH6FfxgOf3v3+5fPux0NrpvsyCZxhofHJ/s4Xr69O3xzdHxcrx8fH705vPtza3sL//9bR4PLAz8QcCPNZ363/5IG2YOTk7dvT07Ij5gm8UWXuYzv8HjZd5McD48yW4oM385SV3G46sgmcYa/MePvdDh8XIFK5/hGcHiuo7LFbUM4uMyhklVdwg/N+GctDq7wyKLdGD68M+JbX/SZQ+OOylbWFN8ji0o4/AO2C3z7822HBIBD445sRh1n/gbH4VuNXeBb21/ekWiruDLuMcVtTkC83qcLmy4KHPM4tl4DbwGMO7LodYJrXRmnAeHAuCObkj8Ljj9dUPkKsylc/eqG7M45bQKXT1f0MS5/yfi/cFx0ZFXyZ8GdF8h8DqSISvg2/B7K8Qyy6jeEfqqCw4krMz22xTH/lx1+/5PuHZQvjcj+BKsheR7X2uoaVwH37XBDA0uZD5DN4pqFHW7Yewn3q+D6onP4n/Y4QlbTPI1LG/zSHg+q4PqOs+o3AK8S2nHnRt107lTCnUq4LnVu1DXrywZwXeoMN7TbD+Oa1K0qDuEVGg5pPt1Y4oZWB/BK3U4CmG7Mvjdvq+IVFhkaatmZXZKIushUxZXcty3zhpbX6pcNX8P2ZXkBJXzwBFzQiy9KpgkO4/gj1fpgAsTzr6cvX1rg6sHEj+Apvb1Nfq6O48MoywNIEOfjCZl7lofOG8El27H90vAcOLL9uvQMOP26VLHj/Ch4D+Hvg6ikgNAXxUpF9yN/OZqdqfbZbLT0zbxccvIVuUrRfUwP511PWeD/8rrzYQmvlNz2tAij68NF1/OkMyT7ntdd4H8ivG5r+LSIxQkhRC9eLxNyUTH0SIg6/RU5WzZMlvKVtXx74LS33akwhHCt6/RcXLimkqfY3jr991CTvTrqVicBffxuGY3f/LQr62f0dfc0/4v6Eu9r2Xnnvs3pT3I/QvtrrbiwMXzIcE+0ve5DcaU3rH1tI/FGBu3pT8PJMN8PsDyZjIvLKcOLHD/LGz3DL9hl5vFkUvv6GPA8MOqmU954tH0i10gkBb7I8VTfz1+Rds8ioZsQ38/HX3/KGzrZj1eyx/NJKuMYA3j3rGg2ER/nW00m54905TOc7Fdbzo/anMynzuEeXmw8AE/47bDfjpR5xl/mkFP3g/OaFHnqrOYk9XvuRVHzsbTp5DyQccOlLb9dm8h4njrrdq97efDhir3Kuz1RNq3VHqHEwYt6vqPStZorzXNst1qtD9+Kl/k8d4Ftb0RdvKjHp+4HAM3wdY7df2gR/brb5Vc4GHfdHa7VpcuZwhqr1JtG3sqjXmp/ozbWD86o3hvlfwHZbk2pOHQJ23+EBp1N9LDXJNZ1ZmP9FXnd7BWLYCJtOiZ4shTnuICzZQ5MvLDxXOs1m83eFcPv6S/YNJd1l8ZYWNwkPFvh/bah29K5Nm0SLE/9wzdiN6cP3E08rmq77iO3qst41nPRVwhnieN2T/HexxQ/oHZzOucuqicAnqzEbhPxtOcicNS5zMM1xZq9uPURR6uZ4k3+fhJXtfG405VGc6tKdpMOZLOlncQs5XoHr3Bkifdm/N0E3Bo3LnCXn+IKTjreh3F+3IcX1Otdpvhl+or7QOVHnbNdR74HV74xS7PC8KmH87ToVyl+1VNKziXuCrjpxiwy3zQ4X/VROtDXr2hcp+M+Yv/uwnZScksauelUg9e41BeUO0jxA/piwSUODzrGS27Gw78A1zdh4Olky0qeFX16yvAxbGNcseRfeLrMuZ4bTYuSZ0WfslFPNLbrKndcq7eezrQ6Sx1PtrzktOj8RNPaM4UCbrrV6sXAhw/T5uxVETN+1Mf2Nni7sVYvOj7sFiWnRe8WtlvBhm+09s41XceOIqdXDL+aqseOopyswTvsNTd/r8w6Xmeu2bBfFyuMxr6Zw4ru5vo9WC/KzpUcF10uuGQ/aBDtYwUL4ACW6cOfefznoWBL09td6Az9AxUxXPhM/8Tjnwz2zVr/HJfpUZL2RH9QE35n9veQb3Qxbe2Ql+EvYrDvUv0X1u2/cLZU7ZXx8bWSx4cW0NinepH6d2ZLIz7WVtsKf+HtAY1H9PDvHP87zGyJdh/Kntsqf2QsXqqlp7nneB2yb5JS2vJhuQsle6yHv6b2ryGxK2dtjePar6T03SJ1urAJ8s38vd27Wj8gGV+IZwvcLHWceCLkvH6wfkCzyqOhs4tVbVLsgVv/B0+zj/+EuZ3cJO76Avr02gSOIyY7QPYA74Ib/ttq/Uvs5Aa77vxh9owPxebhvV60V6frUfKp1fo0Ws9PlxeLqi6N/wD4GShyZyFu1wAAAABJRU5ErkJggg=="alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
   
      <p>
      <button type="button" class="btn btn-outline-success">Profile</button>
      </p>
    </div > */}
    

    <nav class="navbar navbar-expand-lg navbar-info bg-info"data-bs-theme="dark">
    
    
    
      <div class="container">
        <img src="https://media.tenor.com/ybn86nLN5mAAAAAC/brain-mental.gif"
        alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
        <a class="navbar-brand" href="#"><strong/>Mental Healing</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">Professional</a>
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
                <a class="nav-link" href="/post">Blogpost</a>
              </li>
              
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit"><strong>Search</strong></button>
          </form>
         
        </div>
      </div>
    </nav>
    </div>
   
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Reliability</h5>
            <p>Description</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvvtgMVpX0hOOoszWUusiA8B2NEcHK9Kvcw&usqp=CAU" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            
            <h5>Best User Friendly Community</h5>
            <p>Description</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://www.shutterstock.com/shutterstock/photos/2044697201/display_1500/stock-vector-tips-for-a-good-mental-health-with-useful-advices-infographic-concept-vector-illustration-healthy-2044697201.jpg" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Effective Servicea</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
      <div class="text-center">
        <img src="https://media.tenor.com/QtO700-kVL4AAAAj/mental-health-mental-health-crisis.gif"/>
        <img src="https://media.tenor.com/tEwf-zn6NbcAAAAj/mental-health-for-all-self-care.gif"/>
        <img src="https://media.tenor.com/lKFLaKjwKuQAAAAM/mental-health-wellbeing.gif"/>
        
        
    <div container>
      <a href="/quiz">
         <button type="button" class="btn btn-outline-info">Self Evaluaton</button>
    </a>
    <div id="psychology-facts-container">
      <div id="psychology-facts-content">
          <div class="fact-card"><strong>Fact 1:</strong> Psychology is the scientific study of the mind and behavior.</div>
          <div class="fact-card"><strong>Fact 2:</strong> Sigmund Freud is often called the father of modern psychology.</div>
          <div class="fact-card"><strong>Fact 3:</strong> Cognitive psychology focuses on mental processes like thinking, memory, and problem-solving.</div>
          <div class="fact-card"><strong>Fact 4:</strong> The human brain is incredibly complex, with billions of neurons.</div>
          <div class="fact-card"><strong>Fact 5:</strong> Emotional intelligence plays a vital role in one's mental well-being.</div>
         
          <div class="fact-card"><strong>Fact 6:</strong>A gene is the cause of one being negative almost all the time. </div>
          <div class="fact-card"><strong>Fact 7:</strong>Good liars are also the good ones in detecting lies from others.</div>
          <div class="fact-card"><strong>Fact 8:</strong>Tearing the paper off drink bottles is a sign of sexual frustration. </div>
          <div class="fact-card"><strong>Fact 9:</strong> The type of music you listen to has an impact on your perception of the world.</div>
          <div class="fact-card"><strong>Fact 10:</strong>Having positive and happy people around you can keep you happier.</div>
       
          <div class="fact-card"><strong>Fact 11:</strong> Remembering a past event brings up the last time you retrieve it in your memory rather than the event itself.</div>
          <div class="fact-card"><strong>Fact 12:</strong>The brain replays memories and creates perfect moment scenarios 70% of the time.</div>
          <div class="fact-card"><strong>Fact 13:</strong>You tend to recall all your bad deeds 98% of the time when you are told that someone has to ask a question.</div>
          <div class="fact-card"><strong>Fact 14:</strong>Even though you have overslept already, you still have the tendency to desire more sleep. </div>
          <div class="fact-card"><strong>Fact 15:</strong>Even though you have overslept already, you still have the tendency to desire more sleep.</div>
          <div class="fact-card"><strong>Fact 16:</strong> People who take interest in serial killers turn out to be better conversationalists.</div>
          <div class="fact-card"><strong>Fact 17:</strong>Of all the people born blind, none has been found to have developed schizophrenia.</div>
          <div class="fact-card"><strong>Fact 18:</strong>Spending money on experiences have a greater value for you. </div>
          <div class="fact-card"><strong>Fact 19:</strong> Singing could make you feel less anxious and depressed.</div>
          <div class="fact-card"><strong>Fact 20:</strong>Singing could make you feel less anxious and depressed.</div>
          <div class="fact-card"><strong>Fact 21:</strong>Severe depression increases the aging process in cells, thus causing biological aging. </div>
          <div class="fact-card"><strong>Fact 22:</strong>The fact that falling in love only takes 4 minutes is psychologically proven.</div>
          <div class="fact-card"><strong>Fact 23:</strong> The feeling of ‘being in love’ is the brain’s chemical reaction, not the heart’s.</div>
          <div class="fact-card"><strong>Fact 24:</strong>Having higher IQs make it harder for women to find a mate. </div>
          <div class="fact-card"><strong>Fact 25:</strong>That last person you think of before you sleep is either the reason you are happy or in pain.</div>
          <div class="fact-card"><strong>Fact 26:</strong> 90% of people take into texting the things they could not express in person.</div>
          
      </div>
  </div>  
    <div class="container-books">
      <button class="btn btn-primary" type="button">Read Books&#128214;</button>
      <div class=" align-items-start">
        
        <a href="https://www.infobooks.org/free-pdf-books/psychology/anxiety/" download>&#128218;Anxiety</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/autism/" download>&#128218;Autism</a>
        
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Body%20Language%20Books" download>&#128218;Body Language</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20about%20ADHD" download>&#128218;ADHD</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20about%20Dyscalculia" download>&#128218;Dyscalculia</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20about%20loneliness" download>&#128218;Lonelines</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20about%20Personality" download>&#128218;Personality</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20about%20Violence" download>&#128218;
        Violance</a>
      </div>
      <div>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20on%20Addictions" download>  &#128218;Addictions</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20on%20Bullying" download>&#128218;Bullying</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20on%20Concentration" download>&#128218;Concentrattion</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20on%20Resilience" download>&#128218;Resilliance</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20on%20Stress" download>&#128218;Stress</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20on%20Suicide" download>&#128218;Suicide</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Books%20that%20talk%20about%20Insecurity" download>&#128218;Insecurity</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Child%20Psychology%20Books" download>&#128218;Child Psycology</a>
      </div>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Criminal%20Psychology%20Books" download>&#128218;Criminal Psycology</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Dementia%20Books" download>&#128218;Dimentia</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Depression%20Books" download>&#128218;Depression</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Eating%20Disorder%20Books" download>&#128218;Eating Disorder</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#Educational%20Psychology%20Books" download>&#128218;Educational Psycology</a>
        <a href="https://www.infobooks.org/free-pdf-books/psychology/#General%20Psychology%20Books" download>&#128218;Emotions</a>
        

       

      </div>
        
        
         
      </div>
    
    </div>

    <audio controls autoplay loop>
      <source src="your-audio-file.mp3" type="audio/mpeg"/>
      <source src="your-audio-file.mp3" type="audio/mpeg"/>
      <source src="your-audio-file.mp3" type="audio/mpeg"/>
  </audio>
    <div class="container-videos">
      <button class="btn btn-primary" type="button">Button</button>
      <div class="row align-items-start">
        <div class="col">
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col">
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col">
         <div class="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
    </div>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default Comhome