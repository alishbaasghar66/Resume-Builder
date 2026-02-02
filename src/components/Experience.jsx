export default function Experience({ data, setData }) {
return (
<section>
<h3>Experience</h3>
<textarea placeholder="Work experience" onChange={e => setData({ ...data, experience: e.target.value })}></textarea>
</section>
)
}