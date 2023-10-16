import {Component} from 'react';
import './Portfolio.css';

class portfolio extends Component{
    render(){
        
        return(
            <div class="container">
                <center><h1 class="bg-dark text-light m-1 mb-0">My Portfolio</h1></center>
                <div class="row mt-0">
                    <div class="col-md-13">
                        <div class="jumbotron jumbotron-fluid mt-4 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">About Me</h3>
                                <p class="p-2 one">
                                I am Renuka Gayathri Yaddanapudi. Pursuing Computer Science in VIT AP University.Passionate to work in a competitive environment where I can showcase my technical skills. </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Skills</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Programming: Python, Java</li>
                                        <li>Web-Development: HTML, CSS, JavaScript</li>
                                        <li>Database: MySQL</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Internships</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Web development - Oasis Infobyte</li>
                                        <li>Artificial Intelligence - Bharat Intern</li>
                                        <li>Programming</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Contact Me: <a href="mailto:yrenukagayathri@gmail.com">Email</a> <a href="LinkedInProfile">LinkedIn</a> +91 9912902542</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default portfolio;
