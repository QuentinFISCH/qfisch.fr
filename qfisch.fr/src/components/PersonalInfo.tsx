import "./PersonalInfo.scss"
import ElementHeading from './ElementHeading.tsx'
import Tag from './Tag.tsx'

export default function PersonalInfo({ sidebar = true }) {
  return (
    <div className={'personal-info' + (sidebar ? "" : " sidebar")}>
      <img src="/PFP.jpeg" alt="pfp" />
      <div className="info about">
        <ElementHeading title='About' />
        <p>Engineering course specialising in Computer Science with the development of physics knowledge, mathematics, algorithms and fundamentals. AI and Big Data specialisation (Machine Learning, NLP, Computer Vision). Secretary of blockchain and finance association (LaCity) and organizer of competitions and conferences with partners</p>
      </div>
      <div className="info contact">
        <ElementHeading title='Contact' />
        <div className='contacts'>
          <div className='link'>
            <img src="/github.png" alt="" />
            <a href="https://github.com/QuentinFISCH">GitHub</a>
          </div>
          <div className='link'>
            <img src="/linkedin.png" alt="" />
            <a href="https://www.linkedin.com/in/quentin-fisch/">LinkedIn</a>
          </div>
          <div className='link'>
            <img src="/email.png" alt="" />
            <a href="mailto:quentin.fisch@epita.fr">Email</a>
          </div>
        </div>
      </div>
      <div className="info skills">
        <ElementHeading title='Skills' />
        <div className="tags">
          <Tag text='Python' color="yellow" />
          <Tag color='yellow' text="AWS" />
          <Tag text='Tensorflow' color="orange" />
          <Tag text='Numpy' color="orange" />
          <Tag text='Pandas' color="orange" />
          <Tag text='Scikit-Learn' color="orange" />
          <Tag color='orange' text="Grafana" />
          <Tag text='Transformers' color="red" />
          <Tag text='Machine Learning' color="red" />
          <Tag text='Java' color="red" />
          <Tag text='Scala' color="purple" />
          <Tag text='Spark' color="purple" />
          <Tag text='Kafka' color="purple" />
          <Tag text='PySpark' color="purple" />
          <Tag color='green' text="C#" />
          <Tag color='green' text="Blockchain" />
          <Tag color='green' text="Solidity" />
          <Tag color='green' text="NFT" />
          <Tag color='blue' text="React.js" />
          <Tag color='blue' text="Docker" />
          <Tag color='blue' text="Constraint programming" />
          <Tag color='blue' text="Trading" />
          <Tag color='pink' text="Finance" />
          <Tag color='pink' text="Business creation" />
          <Tag color='pink' text="Tokenemics" />
        </div>
      </div>
    </div>
  )
}
