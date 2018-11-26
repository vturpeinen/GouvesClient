import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './HomePage.css';
import Doggie from './components/Images/koira1.jpg';

     
export default class HomePage extends Component {
 
    render() {
        return (
            <div>
            <nav id="menu" class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                       {/*  <div>class="navbar-brand page-scroll" href="#page-top">
                        
                    </div> */}
                    </div>

                    {/*Collect the nav links, forms, and other content for toggling -->*/}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                       
                            <li><NavLink to="/" class="page-scroll">Home</NavLink></li>
                            <li><NavLink to="aboutus" class="page-scroll">About Us</NavLink></li>
                            <li><NavLink to="ongoingmissions" class="page-scroll">Ongoing Missions</NavLink></li>
                            <li><NavLink to="adoptions" class="page-scroll">Adoptions</NavLink></li>
                            <li><NavLink to="howyoucanhelp" class="page-scroll">How you can help?</NavLink></li>
                            <li><NavLink to="contactus" class="page-scroll">Contact Us</NavLink></li>
                            {/* <input type="text" placeholder="Search" name="search"/>
                            <button type="submit"><i class="fa fa-search"></i></button> */}
                        </ul>   
                    </div>
                </div>
            </nav>
            <div class="container-fluid"> {/* <!-- tällä saa containerista responsiivisen --> */}
            <div class="row">
                <div class="cuteDogArea">
                    <img class="dog1" src={Doggie} height="620px" width="900px" alt="Doggie with flowers"/>
                    <div class="welcome" height="200px" width="300px"><h1>Welcome</h1><p>protection and adoption of stray animals</p></div>
                </div>
            </div>     
        </div>
        <section>
        <div class="whoWeAre">
            <h1>Who we are</h1>
            <p>Gouves Animal Shelter is Greek non-profit organisation, located in the lovely island of Crete.
    
    
    
                We take care of more than 200 dogs and 200 cats every single month, dedicating our time to make sure these animals have a new chance in life. We have neutering and educational programmes to help change the animal welfare laws and attitudes of the people.
    
                ​
    
                Our dogs find homes all over Europe and even US, so please feel free to check our dogs and cats waiting for homes! If you wish to support us, by donating, or maybe volunteering, we welcome the help! We don´t get any help from the government, so our volunteer work is financed by individuals like you!</p>
        </div>
    </section>
    <section>
    <div class="battle-pig">
        <h2>Donation pig area</h2>
        <p>TAISTELUSIKA <br/> TÄHÄN <br/> RÖH </p>
    </div>
</section>
 <div class="footer">
 <p>Contact Us: Tel 123-456-7890 , Fax 123-456-7890</p>
 <p>email: <a href="email:gouvesshelter@gmail.com">
 gouvesshelter@gmail.com</a></p>
</div>
</div>
    
        );
    }
}

