import PersonalInfo from '../components/PersonalInfo'
import Resume from '../components/Resume'
import "./Home.scss"

export default function Home() {
  return (
    <div className='home'>
        <PersonalInfo  />
        <Resume />
    </div>
  )
}
