import { useState } from 'react'
import Header from './components/Header'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Preview from './components/Preview'


export default function App() {
const [data, setData] = useState({
name: '', email: '', phone: '',
education: '', experience: '', skills: ''
})


return (

    
<div className="app">
<Header />
<div className="container">
<div className="form">
<PersonalInfo data={data} setData={setData} />
<Education data={data} setData={setData} />
<Experience data={data} setData={setData} />
<Skills data={data} setData={setData} />
</div>
<Preview data={data} />
</div>
</div>
)
}