import SubCard from "../../../components/SubCard"

function Visibility({ visibility }) {
  return (
    <SubCard class="w-52" title="Visibility">
  <p>{Math.round(visibility)}mi</p>
</SubCard>
  )
}

export default Visibility