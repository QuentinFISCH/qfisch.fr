import { Link } from 'react-router-dom'
import ElementHeading from './ElementHeading.tsx'
import PersonalInfo from './PersonalInfo.tsx'
import "./Resume.scss"
import Tag from './Tag.tsx'

export default function Resume() {
    return (
        <div className='resume'>
            <div className="content">
                <p className="main-title">
                    Quentin FISCH
                </p>
                <p className="title-decorator">
                    Looking for 6 months end-of-study intership starting Feb/Mar 2024
                </p>
                <PersonalInfo sidebar={false} />
                <div className="section">
                    <h1 className="section-title">/* Education */</h1>
                    <Link to="/education/epita">
                        <div className="element">
                            <ElementHeading title="M.Sc. in Computer Science @ EPITA engineering school" />
                            <p className="context">2019 - 2024 • Paris, France</p>
                            <div className="tags">
                                <Tag color='red' text="GPA: 4.0/4.0" />
                            </div>
                            <ul>
                                <li>Engineering course specialising in Computer Science with the development of physics knowledge, mathematics, algorithms and fundamentals</li>
                                <li>AI and Big Data specialisation (Machine Learning, NLP, Computer Vision)</li>
                                <li>Secretary of blockchain and finance association (LaCity) and organizer of competitions and conferences with partners</li>
                            </ul>
                        </div>
                    </Link>
                    <Link to="/education/ctu">
                        <div className="element">
                            <ElementHeading title="Abroad semester in Computer Science @ Czech Technical University Prague" />
                            <p className="context">02/2021 - 06/2021 • Prague, Czech Republic</p>
                            <div className="tags">
                                <Tag color='red' text="GPA: 4.0/4.0" />
                            </div>
                            <ul>
                                <li>Faculty of Computer Science with courses in artificial intelligence, database, linear algebra, computer architecture and object-oriented programming</li>
                            </ul>
                        </div>
                    </Link>
                </div>

                <hr className="separator" />

                <div className="section">
                    <h1 className="section-title">// Work experience</h1>
                    <Link to="/work/alien6-software-engineer">
                        <div className="element">
                            <ElementHeading title="Software Engineer @ Alien6" />
                            <p className="context">02/2023 - present • Remote</p>
                            <div className="tags">
                                <Tag color='blue' text="React.js" />
                                <Tag color='red' text="Java" />
                                <Tag color='green' text="Blockchain" />
                                <Tag color='green' text="Solidity" />
                            </div>
                            <ul>
                                <li>Part-time permanent contract</li>
                                <li>Creation of a web platform to generate 100% blockchain based badges for all types of certifications</li>
                            </ul>
                        </div>
                    </Link>

                    <Link to="/work/xbto">
                        <div className="element">
                            <ElementHeading title="Data Engineering Intern @ XBTO" />
                            <p className="context">08/2022 - 01/2023 • New York City, United States</p>
                            <div className="tags">
                                <Tag color='yellow' text="Python" />
                                <Tag color='purple' text="Scala" />
                                <Tag color='purple' text="Spark" />
                                <Tag color='purple' text="Kafka" />
                                <Tag color='orange' text="AWS" />
                                <Tag color='pink' text="Finance" />
                            </div>
                            <ul>
                                <li>Engineered a market data pipeline for live and historical data ingestion of 11,500 crypto instruments using Kafka, Scala, Spark and AWS</li>
                                <li>Worked with the Quant Research team on market data database construction for 10+ indicators</li>
                                <li>Completed a real time data monitoring + risk monitoring ($20M) dashboards using Grafana</li>
                            </ul>
                        </div>
                    </Link>

                    <Link to="/work/amanu">
                        <div className="element">
                            <ElementHeading title="StartUp Co-founder @ Amanu" />
                            <p className="context">01/2022 - 06/2022 • Paris, France</p>
                            <div className="tags">
                                <Tag color='blue' text="React.js" />
                                <Tag color='green' text="Blockchain" />
                                <Tag color='green' text="Solidity" />
                                <Tag color='green' text="NFT" />
                                <Tag color='pink' text="Business creation" />
                            </div>
                            <ul>
                                <li>Co-creation of a StartUp with 2 classmates</li>
                                <li>Built a solution to digitalise physical art in NFT, link a physical object to an NFT in 5 minutes time</li>
                                <li>Implemented Solidity smart contracts and solutions in React.js</li>
                            </ul>
                        </div>
                    </Link>

                    <Link to="/work/alien6-project-manager-solidity-dev">
                        <div className="element">
                            <ElementHeading title="Project Manager & Solidity Developer @ Alien6" />
                            <p className="context">10/2021 - 07/2022 • Remote</p>
                            <div className="tags">
                                <Tag color='blue' text="React.js" />
                                <Tag color='green' text="Blockchain" />
                                <Tag color='green' text="Solidity" />
                                <Tag color='pink' text="Tokenemics" />
                            </div>
                            <ul>
                                <li>Part-time permanent contract</li>
                                <li>Managed and code a 6 month project for the creation of a React.js DApp</li>
                                <li>Structured an ICO prototype to raise 100k€ and designed smart contracts with Solidity</li>
                            </ul>
                        </div>
                    </Link>
                </div>

                <hr className="separator" />

                <div className="section">
                    <h1 className="section-title"># Projects</h1>
                    <Link to="/projects/pfee-transformers-llm">
                        <div className="element">
                            <ElementHeading title="Transformers + LLM model for tickets classification & fixing time prediction" />
                            <p className="context">End-of-study project x Cloud Temple • Ongoing</p>
                            <div className="tags">
                                <Tag color='yellow' text="Python" />
                                <Tag color='orange' text="Tensorflow" />
                                <Tag color='orange' text="Numpy" />
                                <Tag color='orange' text="Pandas" />
                                <Tag color='orange' text="Scikit-Learn" />
                                <Tag color='red' text="Transformers" />
                                <Tag color='red' text="Machine Learning" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/projects/nlp">
                        <div className="element">
                            <ElementHeading title="Various NLP tasks" />
                            <p className="context">School micro-projects</p>
                            <div className="tags">
                                <Tag color='yellow' text="Python" />
                                <Tag color='orange' text="Tensorflow" />
                                <Tag color='orange' text="Numpy" />
                                <Tag color='orange' text="Pandas" />
                                <Tag color='orange' text="Scikit-Learn" />
                                <Tag color='red' text="Transformers" />
                                <Tag color='red' text="Machine Learning" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/projects/data-engineering">
                        <div className="element">
                            <ElementHeading title="Data pipeline for live drone data processing" />
                            <p className="context">School project</p>
                            <div className="tags">
                                <Tag color='purple' text="Scala" />
                                <Tag color='purple' text="Spark" />
                                <Tag color='purple' text="Kafka" />
                                <Tag color='yellow' text="AWS" />
                                <Tag color='blue' text="Docker" />
                                <Tag color='orange' text="Grafana" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/projects/recommender-system">
                        <div className="element">
                            <ElementHeading title="Recommender system for food delivery app" />
                            <p className="context">School project</p>
                            <div className="tags">
                                <Tag color='yellow' text="Python" />
                                <Tag color='orange' text="Tensorflow" />
                                <Tag color='orange' text="Numpy" />
                                <Tag color='orange' text="Pandas" />
                                <Tag color='purple' text="PySpark" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/projects/trading-bot-competition">
                        <div className="element">
                            <ElementHeading title="Trading bot competition - 2nd place out of 100+ teams" />
                            <p className="context">Competition by EPITA x IMC Trading</p>
                            <div className="tags">
                                <Tag color='yellow' text="Python" />
                                <Tag color='blue' text="Trading" />
                                <Tag color='pink' text="Finance" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/projects/sudoku-solver">
                        <div className="element">
                            <ElementHeading title="Sudoku solver (simulated annealing method)" />
                            <p className="context">School project</p>
                            <div className="tags">
                                <Tag color='green' text="C#" />
                                <Tag color='blue' text="Constraint programming" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
