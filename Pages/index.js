import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experience, proyects } from "../profile";
const Index = () => (
  <Layout>
    {/*  */}

    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="github.jpg" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Diego Robledo Mendoza</h1>
              <h3>Software Enginner Student</h3>
              <p>
                I am a person who seeks to solve problems through the
                application of web technologies, currently focused on front end
                development
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Second Section */}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => {
              return (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experience.map(({ title, description, from, to }, i) => {
                return (
                  <li key={i}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Portdolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {proyects.map(({ name, description, image, link }, i) => {
              return (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description} </p>
                      <a href={link} target="_blank">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <a
              href="https://github.com/BestoWaifu02"
              target="_blank"
              className="btn btn-outline-light"
            >
              More Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
