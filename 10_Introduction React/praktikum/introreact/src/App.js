// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './asset/asset/css/main.css';
import logo from './asset/asset/img/logo-ALTA@2x.png'
import profil from './asset/asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

function App() {
  return (
    <div className="home-background">
      <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="alterra">
                    <a><img src={logo} className="logo-atas"  alt="logo"/></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="container">
                        <div className="row align-items-center navig">
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" class="aktif">HOME</a></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                        </div>
                    </div>
                </div>    
            </div>
        </div> 
      </header>
    
        <div className="container h-100">
            <div className="row align-items-center isi-home">
                <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                  <img src={profil} className="foto-profil"  alt="profil"/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="main-p">
                        <p className="sapaan">Hi, my name is </p>
                        <p className="nama">Anne Sullivan</p>
                        <p className="hobi">I build things for the web</p>
                        <p className="tombol"><a href="about.html">Get In Touch</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <p className="text-center">Copyright 2022 - Anne Sullivan</p>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default App;
