export default function Preview({ data }) {
const copyResume = () => {
const text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nEducation:\n${data.education}\n\nExperience:\n${data.experience}\n\nSkills:\n${data.skills}`
navigator.clipboard.writeText(text)
alert('Resume copied!')
}


return (
<div className="preview">
<div className="preview-header">
<h2>{data.name || 'Your Name'}</h2>
<button onClick={copyResume}>Copy</button>
</div>
<p className="contact">{data.email} {data.phone && '| ' + data.phone}</p>
<h4>Education</h4>
<p>{data.education}</p>
<h4>Experience</h4>
<p>{data.experience}</p>
<h4>Skills</h4>
<p>{data.skills}</p>
</div>
)
}