import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';
import Details from './pages/Details';
import {
  alien6ProjectManagerSolidityDevProps,
  alien6SoftwareEngineerProps,
  amanuProps,
  ctuProps,
  epitaProps,
  xbtoProps,
  pfeeTransformersLLMProps,
  nlpProps,
  dataEngineeringProps,
  recommenderSystemProps,
  tradingBotCompetitionProps,
  sudokuSolverProps
} from './shared/routesProps';

const AppRoutes = () => {
  return (
    <div className='routes'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='education' >
          <Route path="epita" element={<Details {...epitaProps} />} />
          <Route path="ctu" element={<Details {...ctuProps} />} />
        </Route>
        <Route path='/work'>
          <Route path="alien6-software-engineer" element={<Details {...alien6SoftwareEngineerProps} />} />
          <Route path="xbto" element={<Details {...xbtoProps} />} />
          <Route path="amanu" element={<Details {...amanuProps} />} />
          <Route path="alien6-project-manager-solidity-dev" element={<Details {...alien6ProjectManagerSolidityDevProps} />} />
        </Route>
        <Route path='/projects'>
          <Route path="pfee-transformers-llm" element={<Details {...pfeeTransformersLLMProps} />} />
          <Route path="nlp" element={<Details {...nlpProps} />} />
          <Route path="data-engineering" element={<Details {...dataEngineeringProps} />} />
          <Route path="recommender-system" element={<Details {...recommenderSystemProps} />} />
          <Route path="trading-bot-competition" element={<Details {...tradingBotCompetitionProps} />} />
          <Route path="sudoku-solver" element={<Details {...sudokuSolverProps} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes;
