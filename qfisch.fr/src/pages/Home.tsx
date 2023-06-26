import PersonalInfo from '../components/PersonalInfo.tsx'
import Resume from '../components/Resume.tsx'
import "./Home.scss"

export default function Home() {
  return (
    <div className='home'>
        <PersonalInfo  />
        <Resume />
    </div>
  )
}
