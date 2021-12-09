import React from 'react'
import FooterItem from './FooterItem'
import  './Footer.css'
const Footer = () => {
    return (
        <div className="container" >
         <div className="subContainer">
          
              <FooterItem heading="Discover" items={['Logos','Poster','Business Card','Flayer','Resume','Presentation']}/>
              <FooterItem heading="Explore" items={["Design Type","Templates","Graphs & Charts","Photo editing","Prints","Apps"]}/>
              <FooterItem heading="Learn" items={["Blog","Design School","Business Resoucres","Events","Customers"]}/>
              <FooterItem heading="Support" items={["Help Center","Contact Us","Privacy Policy","Terms of Use","Feedback"]}/>
              <FooterItem heading="Social" items={["Facebook","Twitter","Instagram","Youtube","LinkedIn"]}/>
              <FooterItem heading="Company" items={["About Us","Careers","Blog","Press","Advertise"]}/>
              
            
        </div>
       
            <p>
                Terms of Use | Privacy Policy 
            </p>

        
        </div>
    )
}

export default Footer
