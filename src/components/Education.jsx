export default function Education({ data, setData }) {
return (
<section>
<h3>Education</h3>
<textarea placeholder="Education details" onChange={e => setData({ ...data, education: e.target.value })}></textarea>
</section>
)
}