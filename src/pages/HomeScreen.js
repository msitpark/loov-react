import { Button, Grid, Stack } from '@mui/material'
import "./home.css"
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../asserts/logo.svg'
import Logo_black from '../asserts/logo_black.svg'
import Lock from '../asserts/lock.svg'
import Playstore from '../asserts/playstore.svg'
import Facebook from '../asserts/facebook.svg'
import Linkedin from '../asserts/linkedin.svg'
import Insta from '../asserts/instagram.svg'
import Linkarrow from '../asserts/arrowslink.svg'
import Banners from '../asserts/center_banner.svg'
import client1 from '../asserts/client/client1.png'
import client2 from '../asserts/client/client2.png'
import client3 from '../asserts/client/client3.png'
import client4 from '../asserts/client/client4.png'
import client5 from '../asserts/client/client5.png'
import client6 from '../asserts/client/client6.png'
import client8 from '../asserts/client/client8.png'
import client9 from '../asserts/client/client9.png'
import Marquee from 'react-fast-marquee'
import { starterData,advancedData } from "../datas/Homedatas";
import { Accordion } from 'react-bootstrap';
function HomeScreen() {
    const [activeButton, setActiveButton] = useState(1);
    const AllRef = useRef(null);
    const FeaturesRef = useRef(null);
    const PricingRef = useRef(null);
    const FaqsRef = useRef(null);
    const [isMonthly, setIsMonthly] = useState(true);
    const [color, setColor] = useState('#070a0ad6');
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const listenScrollEvent = () => {
      if (window.scrollY > 600) {
        setColor('black');
      } else {
        setColor('#070a0ad6');
      }
    };
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
  
      return () => {
        window.removeEventListener('scroll', listenScrollEvent);
      };
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };
    const handleClick = (button) => {
        setActiveButton(button);
    };
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 34,
        height: 21,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 18,
          height: 17,
          borderRadius: 100,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 100,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));
  return (
    <>
        <Grid lg={12} ref={AllRef} container justifyContent="center">
            <Grid lg={12} container justifyContent="center" className={scrolled ? 'scrolledHeader' : 'header_main'}>
                <Grid lg={10} md={10} container justifyContent="space-between" alignItems="center" className='header_contents'>
                    <Grid lg={1.5} md={2} sm={3} xs={4} container className='my-2'>
                        <img className='main_logo' src={Logo} alt=''/>
                    </Grid>
                    <Grid lg={1.5} md={2} sm={2} xs={4} container className='my-2 show_mobi justify-content-end'>
                        <a href='https://app.loov.in/login' className='atagunder' rel="noreferrer" target='_blank'><button className='login_btn'><img src={Lock} alt=""/>Login</button></a>
                    </Grid>
                    <Grid lg={6} md={6} sm={6} xs={12} container className='my-2' justifyContent="center" alignItems="center">
                        <Grid container className='buttons_header' justifyContent="space-between" alignItems="center">
                            <button className={activeButton === 1 ? 'active_btn' : ''} onClick={() => { handleClick(1); AllRef.current.scrollIntoView(); }}>All</button>
                            <button className={activeButton === 2 ? 'active_btn' : ''} onClick={() => { handleClick(2); FeaturesRef.current.scrollIntoView(); }}>Features</button>
                            <button className={activeButton === 3 ? 'active_btn' : ''} onClick={() => { handleClick(3); PricingRef.current.scrollIntoView(); }}>Pricing</button>
                            <button className={activeButton === 4 ? 'active_btn' : ''} onClick={() => { handleClick(4); FaqsRef.current.scrollIntoView(); }}>FAQ</button>
                        </Grid>
                    </Grid>
                    <Grid lg={1.5} md={2} sm={2} xs={4} container className='my-2 normal_show justify-content-end'>
                    <a href='https://app.loov.in/login' className='atagunder' rel="noreferrer" target='_blank'><button className='login_btn'><img src={Lock} alt=""/>Login</button></a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid lg={8} md={10} sm={11} xs={11} container justifyContent="center" className='mb-lg-5'>
                <Grid lg={12} container className='section_1 mb-3'>
                    <span>I'm <img src={Logo_black} alt=''/></span>
                    <p>Your ultimate solution for managing your field force. With me, tracking locations, expenses, tasks, and sales is a breeze. I'm designed to make your business operations seamless and efficient, attracting owners to streamline their workflow with precision. Let's optimise your team's productivity together!</p>
                </Grid>
                <Grid lg={12} container justifyContent="space-between" className=''>
                    <Grid lg={2.9} container className='main_social' justifyContent="space-between">
                        <Grid lg={12} xs={5.7} container justifyContent="center" className='childer main_social_1 mb-3'>
                            <img className='shakers' src={Playstore} alt=''/>
                            <button><img src={Linkarrow} alt=''/></button>
                        </Grid>
                        <Grid lg={12} xs={5.7} container justifyContent="center" className='childer main_social_2 mb-3'>
                            <img  className='shakers' src={Insta} alt=''/>
                            <button><img src={Linkarrow} alt=''/></button>
                        </Grid>
                    </Grid>
                    <Grid lg={5.8} container className='section_center mb-3'>
                        <img className='w-100' src={Banners} alt=''/>
                        {/* <span className='first_think'>How do I track my field <br/> <b>STAFF?</b></span>
                        <span id='second_think' className='show'>How do I track my <br/> <b>staff meeting clients?</b></span> */}
                    </Grid>
                    <Grid lg={2.9} container className='main_social' justifyContent="space-between">
                        <Grid lg={12} xs={5.7} container justifyContent="center" className='childer main_social_3 mb-3'>
                            <img className='shakers' src={Linkedin} alt=''/>
                            <button><img src={Linkarrow} alt=''/></button>
                        </Grid>
                        <Grid lg={12} xs={5.7} container justifyContent="center" className='childer main_social_4 mb-3'>
                            <img className='shakers' src={Facebook} alt=''/>
                            <button><img src={Linkarrow} alt=''/></button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid lg={12} container className='my-5 py-3 main_marquee'>
                <Marquee>
                    <img src={client1} alt=''/>
                    <img src={client2} alt=''/>
                    <img src={client3} alt=''/>
                    <img src={client4} alt=''/>
                    <img src={client5} alt=''/>
                    <img src={client6} alt=''/>
                    <img src={client8} alt=''/>
                    <img src={client9} alt=''/>
                </Marquee>
            </Grid>
            <Grid lg={12} style={{ background: color,transition:"0.8s"}} ref={FeaturesRef} container justifyContent="center" rowGap={2} className='black_bento pb-5'>
                <Grid lg={12} container justifyContent="center" className='my-5'>
                    <h1><span>LOOV</span> Does it Better</h1>
                </Grid>
                <Grid lg={10} md={10} sm={11} xs={11} container justifyContent="space-between" alignItems="flex-end">
                    <Grid lg={7.9} xs={12} rowGap={2} container justifyContent="space-between" alignItems="flex-end" className='main_better mb-3 flex-md-row-reverse flex-lg-row-reverse'>
                        <Grid lg={5} md={5} sm={5} xs={12}container>
                            <img src={require('../asserts/betterbig1.png')} alt=''/>
                        </Grid>
                        <Grid lg={7} md={7} sm={7} xs={12} container alignItems="flex-end" className='mb-lg-0 mb-3'>
                            <h2>Track Real time Location</h2>
                            <p>With LOOV's live location tracking, stay constantly informed of your employees'
                                whereabouts in the field, ensuring efficiency and accountability. Perfect for business
                                owners seeking real-time oversight.</p>
                        </Grid>
                        
                    </Grid>
                    <Grid lg={3.9} container justifyContent="center" alignItems="flex-end" className='main_better mb-3'>
                        <Grid lg={8} md={8} sm={5} xs={10} container>
                            <img src={require('../asserts/betterbig2.png')} alt=''/>
                        </Grid>
                        <Grid lg={12} md={7} sm={7} xs={12} container alignItems="flex-end" className='mt-3'>
                            <h2>Track Expenses</h2>
                            <p>LOOV's expense tracking feature offers insight into field expenditures, including
                                automatic travel expense calculations based on live locations. Effortlessly manage
                                and monitor your team's spending in real-time.</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg={10} md={10} sm={11} xs={11} container justifyContent="space-between" alignItems="flex-end">
                    <Grid lg={3.9} container justifyContent="center" alignItems="flex-end" className='main_better mb-3'>
                        <Grid lg={8} md={8} sm={5} xs={10} container>
                            <img src={require('../asserts/betterbig3.png')} alt=''/>
                        </Grid>
                        <Grid lg={12} md={7} sm={7} xs={12} container alignItems="flex-end" className='mt-3'>
                            <h2>Track Sales</h2>
                            <p>LOOV enhances sales with an order management system, enabling quick quotations
                                and orders. Boost purchase efficiency and provide owners with a clear overview of sales activities, all in real-time.</p>
                        </Grid>
                    </Grid>
                    <Grid lg={7.9} xs={12} rowGap={2} container justifyContent="space-between" alignItems="flex-end" className='main_better mb-3 flex-md-row-reverse flex-lg-row-reverse'>
                        <Grid lg={5} md={5} sm={5} xs={12}container>
                            <img src={require('../asserts/betterbig4.png')} alt=''/>
                        </Grid>
                        <Grid lg={7} md={7} sm={7} xs={12} container alignItems="flex-end" className='mb-lg-0 mb-3'>
                            <h2>Track Attendance</h2>
                            <p>Effortlessly manage employee attendance with LOOV, calculating presence and
                                absence at a glance. Simplify attendance tracking for accurate, hassle-free
                                workforce management.</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg={10} md={10} sm={11} xs={11} container justifyContent="space-between" alignItems="flex-end">
                    <Grid lg={7.9} xs={12} rowGap={2} container justifyContent="space-between" alignItems="flex-end" className='main_better mb-3 flex-md-row-reverse flex-lg-row-reverse'>
                        <Grid lg={5} md={5} sm={5} xs={12}container>
                            <img src={require('../asserts/betterbig5.png')} alt=''/>
                        </Grid>
                        <Grid lg={7} md={7} sm={7} xs={12} container alignItems="flex-end" className='mb-lg-0 mb-3'>
                            <h2>Track Tasks</h2>
                            <p>Assign and monitor tasks effortlessly with LOOV, ensuring seamless oversight and 
                                completion. Streamline your team's productivity and project management.</p>
                        </Grid>
                    </Grid>
                    <Grid lg={3.9} container justifyContent="center" alignItems="flex-end" className='main_better mb-3'>
                        <Grid lg={8} md={8} sm={5} xs={10} container>
                            <img src={require('../asserts/betterbig6.png')} alt=''/>
                        </Grid>
                        <Grid lg={12} md={7} sm={7} xs={12} container alignItems="flex-end" className='mt-3'>
                            <h2>Stay Hydrated</h2>
                            <p>LOOV's Stay Hydrated feature prompts employees with timely alarms to drink water,
                                supporting their health and preventing dehydration effectively.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid lg={12} ref={PricingRef} container justifyContent="center" className='pricing_main'>
                <Grid lg={12} container className='my-5' justifyContent="center">
                    <h1>Pricing</h1>
                </Grid>
                <Grid lg={12} container className='my-3 togglemain' justifyContent="center">
                    <Stack direction="row" spacing={4} alignItems="center">
                        <span>Monthly</span>
                        <AntSwitch defaultChecked={isMonthly} onChange={handleChange} inputProps={{ 'aria-label': 'ant design' }} />
                        <span>Annual</span>
                    </Stack>
                </Grid>
                <Grid lg={8} md={10} container justifyContent="space-evenly" className='mb-5'>
                    <Grid lg={4} md={4} sm={5} xs={11} container justifyContent="center" className='main_pricing pb-3'>
                        <Grid lg={12} container justifyContent="center" alignItems="center" className='price_head'>
                            <h3>Starter</h3>
                        </Grid>
                        <Grid lg={12} container flexDirection='column' justifyContent="center" alignItems="center" className='my-lg-4 my-3 main_price_content'>
                            <h1>₹{isMonthly ? '9,999' : '999'}<span> /5 users</span></h1>
                            <span>+ Tax</span>
                        </Grid>
                        {starterData.map((data) => (
                        <Grid lg={10} md={10} sm={11} xs={11} container justifyContent="space-around" alignItems="center" className='my-2'>
                            <Grid lg={2} md={2} sm={2} xs={2} container justifyContent="center">
                                <img src={require('../asserts/check-circle.svg').default} alt=''/>
                            </Grid>
                            <Grid lg={10} md={10} sm={10} xs={10} container>
                                <span>{data.usages}</span>
                            </Grid>
                        </Grid>))}
                        <Grid lg={12} container justifyContent="center">
                            <Button className='trail_nowbtn'>Trial Now</Button>
                        </Grid>
                    </Grid>
                    <Grid lg={4} md={4} sm={5} xs={11} container justifyContent="center" className='main_pricing bg_blackprice pb-3'>
                        <Grid lg={12} container justifyContent="center" className='price_head'>
                            <h3>Advanced</h3>
                        </Grid>
                        <Grid lg={12} container flexDirection='column' justifyContent="center" alignItems="center" className='my-lg-4 my-3 main_price_content'>
                            <h1>₹{isMonthly ? '14,999' : '1,499'}<span> /5 users</span></h1>
                            <span>+ Tax</span>
                        </Grid>
                        {advancedData.map((data) => (
                        <Grid lg={10} md={10} sm={11} xs={11} container justifyContent="space-around" alignItems="center" className='my-2'>
                            <Grid lg={2} md={2} sm={2} xs={2} container justifyContent="center">
                                <img src={require('../asserts/check-circle.svg').default} alt=''/>
                            </Grid>
                            <Grid lg={10} md={10} sm={10} xs={10} container>
                                <span>{data.usages}</span>
                            </Grid>
                        </Grid>))}
                        <Grid lg={12} container justifyContent="center">
                            <Button className='trail_nowbtn'>Trial Now</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid lg={12} ref={FaqsRef} container justifyContent="center" className='faq_main'>
                <Grid lg={12} container className='my-5' justifyContent="center">
                    <h1>FAQ’S</h1>
                </Grid>
                <Grid lg={8} md={8} sm={10} xs={11} conatiner justifyContent="center">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0" className='mb-3'>
                            <Accordion.Header>With the 1 Day free trial, can I access the full version?</Accordion.Header>
                            <Accordion.Body>
                            Yes, the LOOV is fully accessible for the trial version. You do not need a credit card to use the free version.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mb-3'>
                            <Accordion.Header>Is LOOV really a sales booster?</Accordion.Header>
                            <Accordion.Body>
                                By increasing salesforce productivity each second, LOOV indirectly increases sales.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='mb-3'>
                            <Accordion.Header>Is there any training for my team on how to use the app?</Accordion.Header>
                            <Accordion.Body>
                                Yes, our support team will schedule a Google Meet to provide a more detailed tutorial. In addition, we have lots of video content you can watch to learn more.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='mb-3'>
                            <Accordion.Header>Which payment methods are available for managing subscriptions?</Accordion.Header>
                            <Accordion.Body>
                            All payment methods are integrated, including Scan, G-pay, Phonepe, Paytm, Credit card, Debit card, and Net Banking.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='mb-3'>
                            <Accordion.Header>Are there any options to reduce the user count?</Accordion.Header>
                            <Accordion.Body>
                            Rather, we follow standard plans that follow a minimum of 5 staff, a maximum multiplied by five. Our corporate packages are available if you have more users. For more information, please contact us.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='mb-3'>
                            <Accordion.Header>Using this app safe?</Accordion.Header>
                            <Accordion.Body>
                            Obviously, every industry standard and best practice is followed to ensure the security of your data.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className='mb-3'>
                            <Accordion.Header>In case of technical difficulties, what should I do?</Accordion.Header>
                            <Accordion.Body>
                                You can contact support by email at support@loov.in. If you encounter an issue while using the service, please let us know so we can correct it, and it will increase your productivity.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" className='mb-3'>
                            <Accordion.Header>If I start with a small staff, can I increase it?</Accordion.Header>
                            <Accordion.Body>
                            If you need to upgrade or downgrade, you can do so at any time.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Grid>
                <Grid lg={10} md={10} sm={11} xs={11} container justifyContent="space-evenly" className='extra_faq my-5'>
                    <Grid lg={6} md={7} sm={7} xs={12} container>
                        <h3>Still have question?</h3>
                        <span>Can't find the answer you’re looking for. Please chat to our friendly team </span>
                    </Grid>
                    <Grid lg={3} md={3} sm={3} xs={12} container justifyContent="center" className='mt-lg-0 mt-md-0 mt-3' alignItems="center">
                        <a href='https://wa.me/+919952275310'  rel="noreferrer" target='_blank'><Button className='gettouch_btn'>Get in touch</Button></a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid lg={12} container className='main_bgtrack' justifyContent="space-around">
                <Grid lg={4} md={7} sm={7} xs={12} container flexDirection="column">
                    <h1>Get Started for free</h1>
                    <span>Completely free for 14 days </span>
                </Grid>
                <Grid lg={3} md={3} sm={5} xs={12} container justifyContent="space-around" className='mt-lg-0 mt-md-0 mt-3' alignItems="center">
                    <Button className='freetrail_btn'>Start Free Trial</Button>
                    <a href='https://wa.me/+919952275310'  rel="noreferrer" target='_blank'><Button className='getdemo_btn'>Get a Demo</Button></a>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default HomeScreen
