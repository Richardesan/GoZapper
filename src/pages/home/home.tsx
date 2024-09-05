import GetStarted from '../getStarted/getStarted'
import Dashboard from './component/dashboard'
import useTypedSelector from '../../auth/userLoggedIn'

const Home = () => {
  const isSignedIn = useTypedSelector((state) => state.user.isSignedIn);

function displayPage() {
if (isSignedIn) {
    return <Dashboard />
} else {
    return <GetStarted />
}
}

    return (
    <div>
        {displayPage()}
    </div>
  )
}

export default Home