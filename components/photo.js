import { Pane } from 'evergreen-ui'

function Page(props) {
  return (
    <Pane
      height={300}
      background={`url(${props.src})`}
      backgroundSize="cover!important"
    />
  )
}

export default Page