import Layout from "../components/Layout";
import Link from "next/dist/client/link";
import { skills, experiences } from "../profile";

const Index = () => (
  <Layout>
    <header className="row text-center">
      <div className="col-md-12 bg-dark">
        <div className="card-car-body">
          <div className="row">
            <div className="col-md-4">
              <img src="developer.jpg" alt="Developer" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <br />
              <h1>Daniel Davila</h1>
              <hr />
              <h3>FullStack Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident sequi cumque laborum esse rerum, exercitationem minima
                nisi ducimus mollitia quae.
              </p>
              <Link href="/hireme">
                <a className="btn btn-outline-info btn-lg mx-4">Hire me!</a>
              </Link>
              <Link href="/paycoffe">
                <a className="btn btn-outline-info btn-lg mx-4">
                  Pay me a coffe!
                </a>
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </header>
    <br />

    {/* Second section */}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
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
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(({ title, description, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
