import { Grid } from '@mui/material'
import React from 'react'
import Logo from '../asserts/logo.svg'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
  return (
    <>
        <Grid lg={12} container justifyContent="center">
            <Grid lg={11} md={11} sm={11} xs={11} container justifyContent="space-between" className='footer_start mt-5 py-5'>
                <Grid lg={3} md={3} sm={6} xs={12} container className='mt-3'>
                    <img onClick={() =>{navigate("/")}} className='footer_logo' src={Logo} alt=''/>
                    <span>E Block 4th Floor, PSG STEP, E-Lab -501A, Peelamedu, Coimbatore, Tamil Nadu 641004</span>
                </Grid>
                <Grid lg={2} md={2} sm={4} xs={6} container alignContent="flex-start" className='mt-3'>
                    <h5>Connect Us</h5>
                    <Grid lg={12} container className='gap-3 mt-2'>
                        <img src={require('../asserts/instagram_foot.svg').default} alt=''/>
                        <img src={require('../asserts/facebook_foot.svg').default} alt=''/>
                        <img src={require('../asserts/linkedin_foot.svg').default} alt=''/>
                    </Grid>
                </Grid>
                <Grid lg={2} md={2} sm={6} xs={6} flexDirection="column" container className='mt-3 contact_us'>
                    <h5>Contact Us</h5>
                    <a href="tel:+919952275310" rel="noreferrer" target='_blank'><img src={require('../asserts/call.svg').default} alt=""/> +91 99522 75310</a>
                    <a href="mailto:loov@gmail.com" rel="noreferrer" target='_blank'><img src={require('../asserts/mail.svg').default} alt=""/> loov@gmail.com</a>
                </Grid>
                <Grid lg={2} md={2} sm={4} xs={6} flexDirection="column" container className='mt-3 privacy_links'>
                    <h5>Support</h5>
                    <span onClick={() =>{navigate("/privacy-policy")}}>Privacy Policies</span>
                    <span onClick={() =>{navigate("/terms-conditions")}}>Terms & Conditions</span>
                    <a href='https://wa.me/+919952275310' rel="noreferrer" target='_blank'>Help Center</a>
                </Grid>
                <Grid lg={2} md={2} sm={6} xs={6} justifyContent="flex-start" alignContent="flex-start" container className='mt-3 app_link_main'>
                    <h5>App Link</h5>
                    <Grid lg={12} container justifyContent="flex-start">
                    <Grid lg={12} md={12} sm={6} xs={12} container className='mt-2'>
                        <img src={require('../asserts/link1.svg').default} alt=''/>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid lg={12} container justifyContent="center" className='last_footers'>
                <span>© 2024 - 2030. All rights reserved by LOOV</span>
            </Grid>
        </Grid>
    </>
  )
}

export default Footer
