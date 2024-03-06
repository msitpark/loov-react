import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Logo from '../asserts/logo.svg'
import { useNavigate } from "react-router-dom";


function TermsandConditions() {
    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <Grid lg={12} container>
        <Grid lg={12} container justifyContent="center" className={scrolled ? 'scrolledHeader' : 'header_main'}>
            <Grid lg={10} md={10} container justifyContent="space-between" alignItems="center" className='header_contents'>
                <Grid lg={1.5} md={2} sm={3} xs={4} container className='my-2'>
                    <img onClick={() =>{navigate("/")}} className='main_logo' src={Logo} alt=''/>
                </Grid>
                <Grid lg={1.5} md={2} sm={2} xs={4} container className='my-2 justify-content-end'>
                    <button onClick={() =>{navigate("/")}} className='login_btn'>Home</button>
                </Grid>
            </Grid>
        </Grid>
        <div className="container-fluid">
            <div className="row justify-content-center">
            <div className="col-12 main_content_terms">
                <div className="row justify-content-center">
                    <div className="col-12 text-center my-5">
                        <h1>Terms & Conditions</h1>
                    </div>
                    <div className="col-lg-10 col-11">
                        <div className="row">
                            <p>At Loov, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Loov and how we use it.</p>
                            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they share and/or collect on Loov.</p>
                            <div className="col-12">
                                <div className="row">
                                    <h5>Consent:</h5>
                                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <h5>Information we collect</h5>
                                    <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                                    <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                                    <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <h5>How we use your information</h5>
                                    <p>We use the information we collect in various ways, including:</p>
                                    <p>1. Provide, operate, and maintain our website.</p>
                                    <p>2. Improve, personalize, and expand our website.</p>
                                    <p>3. Understand and analyze how you use our</p>
                                    <p>4. Develop new products, services, features, and functionality</p>
                                    <p>5. Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</p>
                                    <p>6. Send you emails</p>
                                    <p>7. Find and prevent fraud</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <h5>Log Files</h5>
                                    <p>Loov follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <h5>Cookies and Web Beacons</h5>
                                    <p>Like any other website, Loov uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <h5>Advertising Partners Privacy Policies</h5>
                                    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Loov.</p>
                                    <p>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Loov, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                                    <p>Note that Loov has no access to or control over these cookies that are used by third-party advertisers.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <h5>Third-Party Privacy Policies</h5>
                                    <p>Loov's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt out of certain options.</p>
                                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found on the browsers' respective websites.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <h5>Children's Information</h5>
                                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                                    <p>Loov does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    </Grid>
  )
}

export default TermsandConditions
