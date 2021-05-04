import React from 'react';
import "./Home.css";
import { Envelope, Files, Folder, Instagram, Facebook, Twitter, Journals, Truck, Basket } from 'react-bootstrap-icons';

function Home() {
  return (
      
    <div className="About">

<div class="row">
  <div class="column">
    <div class="card">
          <img className="img"
            src= "https://lh3.googleusercontent.com/KJF47ZvZfWVy5dgjyO_ymwmVWFA5blU4LumdLg2OaueWVhcy_xkjT55AKubPy0IaGVLTpqkLNgjTfPgpCgFR3xaW-Ttb7Xw9te3pitdvovTd2aScLJzljuxYl2Pjpnm9Skp2ZulRPVy85wTjSciaT_CQ7aUXYyejCYN9iRY9McPYdU2spirwkL9N_oT6tu-t86t73Q6d_eNV0YdBhguzQ7Ja8BlIgUroIRbD3CoAwmcGHlLajsWxWqDq1BUGFsEVt5pzEbE4BeLoc4fMTnrvzCPSqKST7gUcwqulg2fl6hKdQ7pyaQTRNUzystuzO0nryBsaBl0gEO0hXB12FSk4RluieB_u163UbUmfJ_6ucc61dr-kXuJUyrU1ZJGNmlJrkg9R_52Qz7bulxDglperDbwiJMnqwby-k4scK_kNjjaJrmG1gfMXpeEYuqU4YOrlG6ZDtYKxABpZTj4lfaqc3DrYv4_BuzVfW2-ThJHUD4Etk7TomAf90OpIQApIZ6THsTF-yroy-dapmsOnwErkhw80_f3CldXUs-vzTDcapcwxbxGQOOZ29TyVSbRocsivALEnfSVCX6hQAVOzEX7tbqCWuln0M60nVgAWBdcZytg65wALFbukMNcdkbSSC-i9GMyKdgFoWRTzn7oKr5IMlOSdy_EdIO_qkIREyKNr-QUJOcclyASU03UQpO-7tI1K2_KVuDpZeFFremRljz9mxRM=w594-h657-no?authuser=5.jpg" alt=""
            />
            
            <p className="profile">
            <b>Name: </b> <i>Emily Nyadzua Timothy</i>
            </p>
            <p className="profile">
                <b> Profile:</b> <i>Chem-Bio Tutor</i>
            </p>          
       </div>
  </div>

  <div class="column">
    <div class="card">
      <h3><Folder className="ml-4" color="royalblue" /> <u>About Me</u></h3>
      <p> I am a fourth-year student at The University of Eldoret studying Bachelor of Education-Sciences, majoring in Chemistry/Biology. 
        I am a result-oriented person who applies logical thinking to provide solutions in real time.
        Perhaps, I do embrace team work where necessary. Also, a great Communicator who applies ethical and organizational skills
        in order to deliver the required results.
      </p>
      

   <h3><u><b>Hobbies</b></u></h3>
           <p><Truck className="ml-4" color="royalblue" /> Travelling</p> 
           <p><Basket className="ml-4" color="royalblue" /> Cooking</p> 
           <p><Journals className="ml-4" color="royalblue" /> Reading Novels</p>

    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3><Files className="ml-4" color="royalblue" /> <u>Education Background</u></h3>
      <p><b>2017-2021:</b> University of Eldoret</p>
      <p><b>2013-2016:</b>Secondary School </p>
      <p><b>2005-2012:</b>Primary School </p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3><u>Get in Touch</u></h3>
      <p><Envelope className="ml-4" color="royalblue" />  <b>Email:</b> emilynyadzua72@gmail.com</p>
      <p><Facebook className="ml-4" color="royalblue" />  <b>Facebook:</b>@nasrylemily</p>
      <p><Twitter className="ml-4" color="royalblue" />  <b>Twitter:</b>@nasrylemily</p>
      <p><Instagram className="ml-4" color="royalblue" />  <b>Instagram:</b>@nasrylemily</p>
    </div>
  </div>


  
  <script src="./bundle.js"></script>

</div>

 
    </div>
    
  ); 
}

export default Home;
