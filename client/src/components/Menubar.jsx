import React from 'react'
import './menubar.css'

export default function Menubar() {
  return (
    
     <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
      
        <div>
        <h1>Click the burger menu to see the magic.</h1>
        <input type="checkbox" id="burger-toggle" />
        <label htmlFor="burger-toggle" className="burger-menu">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </label>
        <div className="menu">
          <div className="menu-inner">
            <ul className="menu-nav">
              <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
                    <div>Home</div>
                  </span></a></li>
              <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
                    <div>About</div>
                  </span></a></li>
              <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
                    <div>Service</div>
                  </span></a></li>
              <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
                    <div>Team</div>
                  </span></a></li>
            </ul>
            <div className="gallery">
              <div className="title">
                <p>Sora Gallery</p>
              </div>
              <div className="images">
                <a className="image-link" href="#">
                  <div className="image" data-label="Star"><img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt="" /></div>
                </a>
                <a className="image-link" href="#">
                  <div className="image" data-label="Sun"><img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt="" /></div>
                </a>
                <a className="image-link" href="#">
                  <div className="image" data-label="Tree"><img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt="" /></div>
                </a>
                <a className="image-link" href="#">
                  <div className="image" data-label="Sky"><img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt="" /></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
          
  )
}
