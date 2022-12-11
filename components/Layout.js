import Background from './Background';
import Footer1 from './Footer1';

import Navbar1 from './Navbar1';

function Layout({children}) {
  return (
    <div>
      <Navbar1 />
    
{children}
      <Footer1 />
    </div>
  );
}
export default Layout;
