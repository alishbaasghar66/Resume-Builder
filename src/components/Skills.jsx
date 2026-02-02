export default function Skills({ data, setData }) {
return (
<section>
<h3>Skills</h3>
<input placeholder="e.g. React, JavaScript" onChange={e => setData({ ...data, skills: e.target.value })} />
</section>
)
}