import React, { useState } from 'react'
import Overlay from '../Overlay/Overlay';
import './Singleproject.css'

function Singleproject() {
  const projectObject = localStorage.getItem('projectObject');
  const [overFlow, setOverFlow] = useState(true);
  const singleProject = projectObject ? JSON.parse(projectObject) : null;
  const imgNum = Math.floor(Math.random() * singleProject?.projectImages.length);
  

  return (
    <>
      <Overlay text={singleProject.projectName + '...'}
        setOverFlow={setOverFlow} />
      <div className="single-project-container">
        <div>
          <div>
            <div>
              <div>
                <p>{singleProject.projectName}</p>
              </div>
              <div>
                <img src={singleProject.projectImages.length > 0 && singleProject.projectImages[imgNum].image} alt="" />
              </div>
            </div>

          </div>

          <div className='single-stack-tech-container'>

            <h1>Technologies</h1>
            <div>
              {
                singleProject.projectTechnologies.map((technology: any) =>
                  <div>
                    <p>{technology.technology}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <section>
          <div>

            <p>{singleProject.projectDescription}</p>
          </div>
          <div>
            <a
              href={singleProject.projectGitUrl}
              target="_blank"
              rel="noreferrer"
              title="Github.code"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={singleProject.projectSite} target="_blank"
              rel="noreferrer"
              title="Site.see">View live site</a>
          </div>
        </section>
      </div>

    </>
  )
}

export default Singleproject