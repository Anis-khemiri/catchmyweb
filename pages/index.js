
import Works from './../components/Works';
import Team from './../components/Team';
import Meeteam from './../components/Meeteam';
import StartProject from './../components/StartProject';
import Blog from './../components/Blog';
import Landing from './../components/Landing';
import Feature from './../components/Feature';



export default function Home() {
  return (

    <div>
    {/* ladding */}
    <Landing />
    {/* feature */}

    <Feature />
    <Works />

    <Team />
    {/* meet team */}

    <Meeteam />
    {/* start project */}
    <StartProject />
    {/* blog */}
    <Blog />
    {/* Subscribe to our Newsletter: */}


  </div>
  )
}
