import Card from "../../../components/Card"

function Visibility({ visibility }) {
  return (
    <Card class="custom-class" title="Visibility">
  <p>{Math.round(visibility)}mi</p>
</Card>
  )
}

export default Visibility