import { Link } from "react-router-dom";
import ElementHeading from "../components/ElementHeading";
import Tag from "../components/Tag";
import "./Details.scss"

export type DetailsProps = {
  title: string,
  description: string[],
  image: string,
  company: string,
  category: string,
  loc: string,
  dateStart: string,
  dateEnd: string,
  grade: boolean,
  skills?: [string, string][],
  github?: string,
}

export default function Details(props: DetailsProps) {
  return (
    <div className="details">
      <div className="side">
        <h1 className="section-title">{props.category}</h1>
        <img src={props.image} />
        <Link to="/" className="button">
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M17.7,11.2C17.7,11.2,17.7,11.2,17.7,11.2l-5-5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.3,3.3H7c-0.6,0-1,0.4-1,1 s0.4,1,1,1h7.6l-3.3,3.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0l5-5C18.1,12.3,18.1,11.6,17.7,11.2z"></path></svg>
          <p>Back</p>
        </Link>
      </div>

      <div className="main">
        <div className="content">
          <div>
            <h1 className="name">{props.title}</h1>
            <p className="context">@ {props.company} • in {props.loc} • from <span>{props.dateStart}</span> to <span>{props.dateEnd}</span></p>
          </div>
          {
            props.grade ?
              <div>
                <ElementHeading title="Grade" />
                <div className="tags">
                  <Tag color='red' text="GPA: 4.0/4.0" />
                </div>
              </div>
              : <div>
                <ElementHeading title="Skills" />
                <div className="tags">
                  {
                    props.skills?.map((item, index) => {
                      return <Tag key={index} color={item[1]} text={item[0]} />
                    })
                  }
                </div>
              </div>
          }

          <div>
            <ElementHeading title="Description" />
            <ul>
              {
                props.description.map((item, index) => {
                  return <li key={index}>{item}</li>
                })
              }
            </ul>
          </div>

          {
            props.github ?
              <div>
                <ElementHeading title="Links" />
                <div className="links">
                  {
                    props.github ?
                      <div className='link'>
                        <img src="/github.png" alt="" />
                        <a href={props.github}>GitHub</a>
                      </div>
                      : null
                  }
                </div>
              </div>
              : null
          }
        </div>
      </div>
    </div>
  )
}
