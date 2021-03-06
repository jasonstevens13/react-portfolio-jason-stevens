import React from "react";
import "./mystyle.css";

const projects = [
    {
        id: 1,
        img: "./images/stockliteracy.JPG",
        title: "Stock Literacy",
        p: "A gamified site for stock 101 lessons.",
        t: "MERN stack |  MongoDB | Express | React | Node | Mongoose ODM | Heroku | various NPMs",
        repo: "https://github.com/wayele/StockLiteracy",
        deployed: "https://stocklit.herokuapp.com/"
    },
    {
        id: 2,
        img: "./images/giph-your-times1.JPG",
        title: "Giph Your Times",
        p: "New York Times meets Giphy. Need I say more?",
        t: "Javascript | CSS (Bootstrap) | HTML | Handlebars | Node | Express | MySQL | Sequelize ORM | Heroku | Git | GitHub",
        repo: "https://github.com/jasonstevens13/giph-you-times",
        deployed: "https://ancient-depths-99799.herokuapp.com/"
    },
    {
        id: 3,
        img: "./images/mealprep.JPG",
        title: "Meals & Sips",
        p: "Your dinner party prep app!",
        t: "HTML | CSS (Bulma framework & custom CSS) | Javascript | JQuery | APIs | Git | Github",
        repo: "https://github.com/jasonstevens13/meal-prep",
        deployed: "https://jasonstevens13.github.io/meal-prep/"

    },
    {
        id: 4,
        img: "./images/passwordgenerator.JPG",
        title: "Password Generator",
        p: "Generate a random password.",
        t: "HTML | CSS (Bootstrap) | Javascript | Git | Github",
        repo: "https://github.com/jasonstevens13/password-generator",
        deployed: "https://jasonstevens13.github.io/password-generator/"
    },
    {
        id: 5,
        img: "./images/coderefactor.jpg",
        title: "Code Refactor - a lesson in clean code.",
        p: "Fundementals in code updates, and cleaner code.",
        t: "HTML | CSS | Git | Github",
        repo: "https://github.com/jasonstevens13/homework-1-code-refactor",
        deployed: "https://jasonstevens13.github.io/code-refactor/"
    },
    {
        id: 6,
        img: "./images/burgerapp.JPG",
        title: "Stacks of Burgers",
        p: "My first full-stack app illustrated with Burgers.",
        t: "HTML | CSS | Javascript | JQuery | Node | Express | MySQL | Heroku | Git | Github",
        repo: "https://github.com/jasonstevens13/burger",
        deployed: "https://arcane-wave-81750.herokuapp.com/"
    },
    {
        id: 7,
        img: "./images/weather-app.JPG",
        title: "Weather Dashboard",
        p: "An ad-free weather app.",
        t: "HTML | CSS (Bootstrap) | Javascript | JQuery | APIs | Git | Github",
        repo: "https://github.com/jasonstevens13/weather-dashboard",
        deployed: "https://jasonstevens13.github.io/weather-dashboard/"
    }
];



function ProjectCard() {


    return (

        <div className="float-left">
            <div className="card-deck mt-3">

                <div className="row">
                    <div className="col-lg-6 mb-3" id="projectCard" key={projects[0].id}>
                        <div className="card h-100 border-dark">
                            <img className="card-img-top" src={projects[0].img}></img>
                            <div className="card-body">
                                <h2 id="headline1" className="card-title titles">{projects[0].title}</h2>
                                <p className="card-text italic">{projects[0].p}</p>
                                <p>{projects[0].t}</p>
                            </div>
                            <div className="card-footer bg-transparent text-muted mt-3">
                                <a href={projects[0].repo}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">GitHub Repo</a>
                                <a href={projects[0].deployed}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">Deployed App</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3" id="projectCard" key={projects[1].id}>
                        <div className="card h-100 border-dark">
                            <img className="card-img-top" src={projects[1].img}></img>
                            <div className="card-body">
                                <h2 id="headline1" className="card-title titles">{projects[1].title}</h2>
                                <p className="card-text italic">{projects[1].p}</p>
                                <p>{projects[1].t}</p>
                            </div>
                            <div className="card-footer bg-transparent text-muted mt-3">
                                <a href={projects[1].repo}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">GitHub Repo</a>
                                <a href={projects[1].deployed}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">Deployed App</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3" id="projectCard" key={projects[2].id}>
                        <div className="card h-100 border-dark">
                            <img className="card-img-top" src={projects[2].img}></img>
                            <div className="card-body">
                                <h2 id="headline1" className="card-title titles">{projects[2].title}</h2>
                                <p className="card-text italic">{projects[2].p}</p>
                                <p>{projects[2].t}</p>
                            </div>
                            <div className="card-footer bg-transparent text-muted mt-3">
                                <a href={projects[2].repo}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">GitHub Repo</a>
                                <a href={projects[2].deployed}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">Deployed App</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3" id="projectCard" key={projects[3].id}>
                        <div className="card h-100 border-dark">
                            <img className="card-img-top" src={projects[3].img}></img>
                            <div className="card-body">
                                <h2 id="headline1" className="card-title titles">{projects[3].title}</h2>
                                <p className="card-text italic">{projects[3].p}</p>
                                <p>{projects[3].t}</p>
                            </div>
                            <div className="card-footer bg-transparent text-muted mt-3">
                                <a href={projects[3].repo}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">GitHub Repo</a>
                                <a href={projects[3].deployed}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">Deployed App</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3" id="projectCard" key={projects[5].id}>
                        <div className="card h-100 border-dark">
                            <img className="card-img-top" src={projects[5].img}></img>
                            <div className="card-body">
                                <h2 id="headline1" className="card-title titles">{projects[5].title}</h2>
                                <p className="card-text italic">{projects[5].p}</p>
                                <p>{projects[5].t}</p>
                            </div>
                            <div className="card-footer bg-transparent text-muted mt-3">
                                <a href={projects[5].repo}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">GitHub Repo</a>
                                <a href={projects[5].deployed}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">Deployed App</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3" id="projectCard" key={projects[6].id}>
                        <div className="card h-100 border-dark">
                            <img className="card-img-top" src={projects[6].img}></img>
                            <div className="card-body">
                                <h2 id="headline1" className="card-title titles">{projects[6].title}</h2>
                                <p className="card-text italic">{projects[6].p}</p>
                                <p>{projects[6].t}</p>
                            </div>
                            <div className="card-footer bg-transparent text-muted mt-3">
                                <a href={projects[6].repo}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">GitHub Repo</a>
                                <a href={projects[6].deployed}
                                    className="btn btn-secondary btn-sm btn-block" target="_blank"
                                    rel="noopener noreferrer">Deployed App</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );

}

export default ProjectCard;
