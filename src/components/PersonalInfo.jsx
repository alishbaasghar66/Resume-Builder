export default function PersonalInfo({ data, setData }) {
return (
<section>
<h3>Personal Information</h3>
<input placeholder="Full Name" onChange={e => setData({ ...data, name: e.target.value })} />
<input placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
<input placeholder="Phone" onChange={e => setData({ ...data, phone: e.target.value })} />
</section>
)
}