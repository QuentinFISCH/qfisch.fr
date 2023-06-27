import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details, { DetailsProps } from './pages/Details';
import './App.scss';

const epitaProps: DetailsProps = {
  title: "M.Sc. in Computer Science",
  description: ["This is epita", "SCIA major"],
  image: "PFP.jpeg",
  company: "EPITA",
  category: "/* Education */",
  grade: false,
  loc: "Paris, France",
  dateStart: "September 2019",
  dateEnd: "July 2024",
  skills: [["Python", "yellow"]],
  github: "test"
};

const AppRoutes = () => {
  return (
    <div className='routes'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='test' element={<Home />} />
        <Route path='education' >
          <Route path="epita" element={<Details {...epitaProps} />} />
        </Route>
        <Route path='/work/xbto' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;
