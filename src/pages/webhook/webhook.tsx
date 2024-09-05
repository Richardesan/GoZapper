import Skeleton from '../../components/skeleton'
import ConfigureEndpoint from './component/configureEndpoint'

const Webhook = () => {
  return (
<Skeleton>
<h1 className="font-black text-3xl text-darkText">WebHooks</h1>
<p className="text-lightText text-base font-medium my-1">Configure an endpoint to receive updates from Gozapper when the status of a delivery changes</p>
<ConfigureEndpoint />

</Skeleton>
  )
}

export default Webhook