import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from '../asserts/logo.svg'
import { useNavigate } from "react-router-dom";
function PrivacyPolicy() {
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
                    <h1>Privacy & Policy</h1>
                  </div>
                  <div className="col-lg-10 col-11">
                    <div className="row">
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Introduction:</h5>
                                <p>Welcome to "www.loov.in," the website operated by Loov ("Company," "we," "our," or "us"). At Loov, we are committed to protecting your privacy and ensuring the security of your personal and sensitive information. This Privacy Policy outlines how we access, collect, use, and share user data when you visit our website. We also explain the procedures we follow to handle your personal and sensitive data securely, as well as our data retention and deletion policies.</p>
                                <p>This Privacy Policy is essential to maintain transparency and build trust with our users. We understand the importance of safeguarding your data and ensuring that it is used responsibly and in accordance with applicable laws and regulations. By accessing or using our website, you agree to the practices described in this Privacy Policy.</p>
                                <p>We encourage you to read this policy carefully to understand how we manage your data and how it affects you as a user of "www.loov.in." If you have any questions or concerns about our data practices or your personal information, please don't hesitate to contact us using the information provided at the end of this policy.</p>
                                <p>As part of our commitment to data protection, we comply with the requirements of the entity named in our Google Play listing or app store listing, as well as any legal obligations that apply to us regarding user data privacy.</p>
                                <p>Please note that this Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. In such cases, we will notify you of any significant updates, and the revised policy will be accessible on our website. Your continued use of our services after any modifications signifies your acceptance of the updated Privacy Policy.</p>
                                <p>Thank you for choosing "www.loov.in." We value your trust and are dedicated to providing you with a safe and secure experience on our website.</p>
                            </div>
                        </div>     
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Information We Collect:</h5>
                                <p>When you access or use "www.loov.in," we may collect the following types of data:</p>
                                <h6>1. Personal Information:</h6>
                                <p>a. Name: We may collect your full name to personalise your experience on our website and address you appropriately in any communications.</p>
                                <p>b. Email Address: Your email address enables us to communicate with you, respond to your inquiries, and provide updates or information related to our services.</p>
                                <p>c. Contact Information: We may collect additional contact details, such as your phone number or address, to facilitate communication or deliver specific services if required.</p>
                                <p>d. Any Other Information You Voluntarily Provide: You may choose to share additional information with us voluntarily through forms, surveys, or other interactions on our website. Such information may include preferences, feedback, or other details that help us improve our services.</p>
                                <h6>2. Non-Personal Information:</h6>
                                <p>a. IP Address: When you visit "www.loov.in," we automatically collect your IP address, which is a unique identifier assigned to your device by your internet service provider. IP addresses help us analyse website usage, diagnose technical issues, and track user interactions.</p>
                                <p>b. Browser Type and Version: We collect information about the web browser you use to access our website. This data helps us optimise our website's compatibility with different browsers and improve user experience.</p>
                                <p>c. Device Type and Identifiers: We may gather information about the type of device you use to access our website, such as a computer, smartphone, or tablet. Device identifiers assist us in understanding how users access and interact with our platform.</p>
                                <p>d. Website Usage Data: We employ cookies and similar tracking technologies to collect information about your interaction with "www.loov.in." This includes the pages you visit, the time spent on each page, the links you click, and other actions you take on our website. Website usage data allows us to enhance our website's functionality and tailor our content to better meet your needs.</p>
                                <p>We only collect personal and sensitive information when it is necessary for legitimate business purposes, and we ensure compliance with relevant data protection laws. Please be assured that we do not collect personal information without your consent, and you have the option to refuse the use of cookies or withdraw your consent at any time.</p>
                                <p>Please refer to our "Cookie Policy" for more details about the types of cookies we use and how you can manage your cookie preferences.</p>
                                <p>Rest assured that the security of your data is of utmost importance to us. We take appropriate measures to safeguard your information from unauthorised access, disclosure, alteration, or destruction.</p>
                                <p>By using "www.loov.in," you agree to the collection and use of your information as described in this Privacy Policy. Your continued use of our website constitutes your acceptance of our data collection practices. If you have any concerns or require further information about our data collection methods, please contact us using the provided details in the "Contact Us" section.</p>
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Information We Collect:</h5>
                                <p>At Loov, we utilise the information we collect from you for various purposes, all aimed at improving your experience on "www.loov.in" and delivering our services effectively. The following are the primary ways we use your information:</p>
                                <p>1. Providing Services: We use your personal information to respond to your inquiries, process your requests, and provide the services you request from us. Whether it's answering your questions, fulfilling orders, or assisting with technical support, your information enables us to deliver a seamless user experience.</p>
                                <p>2. Communication: Your email address allows us to communicate with you effectively. We may send you transactional emails, service updates, and important notices related to your account or our services. Additionally, we may use your email to provide you with newsletters or promotional materials if you have opted to receive them. You can opt-out of marketing communications at any time.</p>
                                <p>3. Personalization: By analysing the data we collect, we can tailor our website content and offerings to match your preferences and interests. This personalization aims to enhance your experience and provide you with relevant information.</p>
                                <p>4. Improving Our Services: Non-personal information, such as website usage data and device identifiers, helps us understand how users interact with our platform. This data enables us to optimise our website's performance, identify areas for improvement, and enhance the user interface.</p>
                                <p>5. Legal Compliance: In certain situations, we may be required to use and retain your information to comply with applicable laws, regulations, or legal processes. This includes responding to lawful requests from governmental authorities or enforcing our terms of service.</p>
                                <p>6. Business Operations: We may use your information for internal purposes, such as data analysis, research, and auditing. These activities assist us in operating and maintaining a secure and efficient website.</p>
                                <p>7. Preventing Fraud and Misuse: We may use your information to detect and prevent fraudulent activities, unauthorised access, or misuse of our website or services. This helps maintain the security and integrity of our platform.</p>
                                <p>8. Third-Party Service Providers: We may engage trusted third-party service providers to assist us in operating our website, processing payments, delivering services, or conducting analytics. These providers will have access to your information solely for the purpose of performing services on our behalf and are obligated to maintain its confidentiality.</p>
                                <p>Please be assured that we do not use your personal information for purposes other than those outlined in this Privacy Policy, unless we obtain your explicit consent or as required by law.</p>
                                <p>As part of our commitment to transparency, we ensure that our data usage practices are in compliance with relevant data protection laws and regulations.</p>
                                <p>If you have any concerns about how we use your information or wish to update or delete your data, please refer to the "Your Rights" section in this Privacy Policy or contact us using the information provided in the "Contact Us" section. We value your privacy and will address your inquiries promptly.</p>
                                
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Data Sharing:</h5>
                                <p>At Loov, we respect your privacy and are committed to protecting your personal and sensitive information. We do not sell, rent, or trade your data to third parties for marketing purposes. However, in certain circumstances, we may share your information with trusted third parties for specific purposes outlined below:</p>
                                <p>1. Service Providers: We may engage reputable third-party service providers to assist us in operating "www.loov.in" and delivering our services. These service providers may include hosting companies, payment processors, analytics providers, customer support platforms, and marketing agencies. These entities have access to your information solely for the purpose of performing services on our behalf and are contractually obligated to maintain the confidentiality and security of your data.</p>
                                <p>2. Business Transfers: In the event of a merger, acquisition, or sale of our assets, your information may be transferred to the acquiring entity. We will ensure that the acquiring entity continues to handle your information in accordance with this Privacy Policy.</p>
                                <p>3. Legal Compliance: We may disclose your information when required by law or in response to valid legal requests, such as court orders, subpoenas, or government inquiries. We will only disclose the minimum necessary information required by law.</p>
                                <p>4. Protection of Rights: We may share your information with third parties to protect and enforce our rights, the rights of other users, or to investigate and prevent potential fraud, security breaches, or violations of our terms of service.</p>
                                <p>5. With Your Consent: We will seek your explicit consent before sharing your personal information with third parties for purposes other than those mentioned in this Privacy Policy.</p>
                                <p>6. Aggregated or Anonymized Data: We may aggregate or anonymize your data to create statistical or analytical reports. Such reports may be shared with third parties for research, marketing, or other purposes while ensuring that individual identities remain anonymous.</p>
                                <p>7. Public Information: Any information you voluntarily disclose on public areas of "www.loov.in," such as comments or forums, may be viewed and used by others. We cannot control how third parties may use this information, so please exercise caution when posting personal information in public areas.</p>
                                <p>We maintain strict control over the sharing of your information and work only with reputable and trustworthy third parties. We require these parties to adhere to industry-standard data protection practices and ensure they treat your data with the same level of confidentiality and security that we do.</p>
                                <p>Please note that when you access external websites through links on "www.loov.in," our Privacy Policy no longer applies. We encourage you to review the privacy policies of those websites to understand how they handle your information.</p>
                                <p>Your continued use of our website constitutes your acceptance of our data sharing practices as outlined in this Privacy Policy. If you have any concerns or questions regarding data sharing, please contact us using the information provided in the "Contact Us" section, and we will address your inquiries promptly.</p>
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Data Security:</h5>
                                <p>At Loov, we prioritise the security and protection of your personal and sensitive information. We implement robust measures to safeguard your data from unauthorised access, disclosure, alteration, or destruction. Our commitment to data security includes the following practices:</p>
                                <p>1. Encryption: We use industry-standard encryption protocols, such as Secure Socket Layer (SSL) or Transport Layer Security (TLS), to secure data transmission between your browser and our servers. This encryption helps protect your information from interception during transmission.</p>
                                <p>2. Access Controls: We restrict access to personal and sensitive data to authorised personnel only. Employees and contractors who require access to this information to perform their duties undergo comprehensive security training and are bound by strict confidentiality obligations.</p>
                                <p>3. Regular Security Assessments: We conduct periodic security assessments and audits to identify potential vulnerabilities and address them promptly. This proactive approach helps us maintain a secure website environment.</p>
                                <p>4. Data Minimization: We only collect and retain the minimum amount of personal and sensitive data necessary to fulfil the purposes outlined in this Privacy Policy. We avoid storing excessive or unnecessary data to reduce the risk of data breaches.</p>
                                <p>5. Secure Hosting: We partner with reputable hosting providers that employ advanced security measures to protect our servers and databases against unauthorised access.</p>
                                <p>6. Monitoring and Intrusion Detection: We continuously monitor our website and systems for suspicious activities or unauthorised access attempts. Intrusion detection systems help us promptly identify and respond to potential security threats.</p>
                                <p>7. Regular Updates: We keep our software and applications up-to-date with the latest security patches and updates to ensure they are protected against known vulnerabilities.</p>
                                <p>8. Secure Payment Processing: When you make payments on "www.loov.in," we use secure payment gateways that comply with industry standards and encryption protocols to protect your financial data.</p>
                                <p>9. Employee Training: Our employees undergo regular training on data security best practices and privacy policies to maintain a strong security culture within our organisation.</p>
                                <p>10. Incident Response Plan: We have a comprehensive incident response plan in place to handle any data breaches or security incidents swiftly and effectively, ensuring timely communication with affected individuals and relevant authorities, as required by law.</p>
                                <p>Despite our best efforts, it is important to remember that no method of data transmission or storage can be entirely secure. While we take stringent measures to protect your information, we cannot guarantee absolute security. In the event of a data breach, we will take immediate action to mitigate its impact and notify you as required by applicable laws.</p>
                                <p>Please remember to keep your account credentials, such as usernames and passwords, confidential and avoid sharing them with others. If you suspect any unauthorised activity on your account or have security concerns, please contact us immediately using the information provided in the "Contact Us" section.</p>
                                <p>By using "www.loov.in," you acknowledge and agree that the transmission and storage of your data involve inherent risks. We appreciate your trust in our data security practices and are dedicated to upholding the highest standards of privacy and security for your data.</p>
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Data Retention and Deletion:</h5>
                                <p>At Loov, we are committed to retaining your personal and sensitive data only for as long as necessary to fulfil the purposes for which it was collected and as required by law. Our data retention and deletion policy ensures that your information is not kept beyond its intended use and is securely disposed of when no longer needed. The following principles govern our data retention and deletion practices:</p>
                                <h6>1. Data Retention:</h6>
                                <p>a. Personal Information: We retain your personal information for as long as it is necessary to provide you with our services, respond to your inquiries, or fulfil any contractual obligations. If you have an account on "www.loov.in," we will retain your account information for as long as your account remains active or as needed to comply with legal requirements.</p>
                                <p>b. Marketing Communications: If you have provided consent to receive marketing communications from us, we will retain your contact information until you unsubscribe from such communications.</p>
                                <p>c. Legal Obligations: We may retain certain information for a longer period if required by applicable laws, regulations, or legal processes.</p>
                                <h6>2. Data Deletion:</h6>
                                <p>a. User Requests: If you wish to delete your account or request the deletion of specific personal data we hold about you, we will promptly process such requests, subject to any legal obligations that may require the retention of certain information.</p>
                                <p>b. Inactive Accounts: If your account remains inactive for an extended period and you have not used our services within the specified time frame, we may delete or anonymize your personal information.</p>
                                <p>c. Anonymization: In some cases, we may retain data in an anonymized form for analytical or research purposes, in which case the data will no longer be attributable to any individual.</p>
                                <h6>3. Data Disposal:</h6>
                                <p>a. Secure Disposal: We employ secure methods to dispose of data that is no longer required, including deletion from our databases and secure erasure from our servers and storage systems.</p>
                                <p>b. Backup Data: We regularly review and update our backup retention policies to ensure that deleted or expired data is not retained in backups beyond the necessary period.</p>
                                <h6>4. Developer's Data Retention and Deletion Policy:</h6>
                                <p>As a responsible data controller, Loov's data retention and deletion policy applies to any personal and sensitive data collected and processed through "www.loov.in." </p>
                                <p>We require all our employees and third-party service providers to comply with these policies and adhere to the same standards of data protection.</p>
                                <p>Please note that while we take all reasonable steps to delete your personal information upon request or when it is no longer necessary, residual copies may remain in our backup systems for a limited period. Additionally, we may retain certain information as required by law or for legitimate business purposes, such as resolving disputes, enforcing our agreements, or complying with legal obligations.</p>
                                <p>If you have any questions or wish to request the deletion of your data, please refer to the "Contact Us" section of this Privacy Policy for instructions on how to reach out to us. We will address your inquiries and requests promptly and ensure compliance with applicable data protection laws.</p>
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Your Rights</h5>
                                <p>As a user of "www.loov.in," you have certain rights concerning your personal and sensitive data. We are committed to respecting and facilitating the exercise of these rights. The following are your rights in relation to your data:</p>
                                <p>1. Right to Access: You have the right to request access to the personal information we hold about you. If you want to know what data we have collected and processed, you can submit a request to us. We will provide you with a copy of the data and any additional relevant information within a reasonable timeframe.</p>
                                <p>2. Right to Rectification: If you believe that any of the personal information we hold about you is inaccurate or incomplete, you have the right to request corrections or updates. You can inform us of the changes, and we will make the necessary updates to ensure the accuracy of your data.</p>
                                <p>3. Right to Erasure (Right to be Forgotten): You have the right to request the deletion of your personal information under certain circumstances. If you no longer want us to process your data and there is no legitimate reason for us to retain it, you can submit a request for erasure. However, please note that certain legal obligations may prevent us from immediately deleting all data.</p>
                                <p>4. Right to Object: You have the right to object to the processing of your personal data, especially when it is based on our legitimate interests or for direct marketing purposes. If you object to such processing, we will review the situation and discontinue the processing unless there are compelling legitimate grounds for us to continue.</p>
                                <p>5. Right to Restrict Processing: You have the right to request the restriction of processing of your personal data in certain situations. If you believe that the data we hold about you is inaccurate or you have objected to the processing, you can request a restriction until we resolve the matter.</p>
                                <p>6. Right to Data Portability: You have the right to receive the personal data you have provided to us in a structured, commonly used, and machine-readable format. If you wish, we can transmit this data to another data controller at your request.</p>
                                <p>7. Right to Withdraw Consent: If you have previously provided consent for specific data processing activities, you have the right to withdraw your consent at any time. This withdrawal will not affect the lawfulness of processing based on consent before its withdrawal.</p>
                                <p>8. Right to Lodge a Complaint: If you believe that your data protection rights have been violated, you have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction.</p>
                                <p>To exercise any of these rights or if you have any questions regarding your rights or our data practices, please contact us using the information provided in the "Contact Us" section of this Privacy Policy. We will respond to your requests and inquiries promptly and ensure compliance with applicable data protection laws.</p>
                                <p>Please note that while we strive to address your rights without undue delay, certain factors, such as legal obligations and complex requests, may require more time for processing. Rest assured that we will keep you informed throughout the process and take all necessary steps to protect your rights and privacy.</p>
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Updates to this Privacy Policy</h5>
                                <p>At Loov, we are committed to transparency and ensuring that you are well-informed about our data practices. As part of this commitment, we may update this Privacy Policy from time to time to reflect changes in our data collection, usage, or legal requirements. When we make updates to this policy, we will notify you of significant changes through one or more of the following methods:</p>
                                <p>1. Notice on the Website: We will post a prominent notice on "www.loov.in" to inform you of the changes to the Privacy Policy. This notice will be displayed for a reasonable period to ensure that you have the opportunity to review the updated policy.</p>
                                <p>2. Email Notification: If you have provided us with your email address and consented to receive communications from us, we may send you an email notification informing you of the changes to the Privacy Policy.</p>
                                <p>3. Other Communication Channels: Depending on the circumstances, we may use other communication channels, such as push notifications or in-app messages, to notify you of significant changes to the Privacy Policy.</p>
                                <p>Your continued use of "www.loov.in" after the effective date of the updated Privacy Policy will signify your acceptance of the changes. If you do not agree with any modifications to this policy, you may choose to stop using our website.</p>
                                <p>We encourage you to review this Privacy Policy regularly to stay informed about how we protect your privacy and handle your data. Our commitment to your data protection and privacy remains unwavering, and any updates to this policy will be made with the utmost consideration for your rights and interests.</p>
                                <p>If you have any questions or concerns about the updates to this Privacy Policy or our data practices, please do not hesitate to contact us using the information provided in the "Contact Us" section. We value your trust and are dedicated to providing you with a safe and secure experience on "www.loov.in."</p>
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Contact Us</h5>
                                <p>If you have any questions, concerns, or inquiries about our Privacy Policy or any aspect of "www.loov.in," we encourage you to reach out to us. Our team is here to assist you and address any data-related matters. You can contact us using the following methods:</p>
                                <p>Email: <a target="_blank" rel="noreferrer" href="mailto:loov@gmail.com">loov@gmail.com</a></p>
                                <p>Please feel free to email us to the provided address. We will make every effort to respond to your inquiries promptly and ensure that your concerns are addressed appropriately.</p>
                                <p>Protecting your privacy and ensuring the security of your data are of utmost importance to us, and we take your feedback seriously. Your questions and suggestions are invaluable in helping us improve our services and maintain the highest standards of data protection.</p>
                                <p>Thank you for choosing "www.loov.in" We value your trust and are dedicated to providing you with a positive and secure experience on our website.</p>
                            </div>
                        </div>      
                        <div className="col-12 inner_spliter">
                            <div className="row">
                                <h5>Conclusion</h5>
                                <p>In conclusion, at Loov, we are committed to protecting your privacy and ensuring the security of your personal and sensitive data. This Privacy Policy has been designed to provide transparency about how we access, collect, use, and share your information when you visit "www.loov.in"</p>
                                <p>We hold ourselves accountable to the principles outlined in this policy and strive to comply with relevant data protection laws and regulations. Your trust is essential to us, and we take great care in handling your data responsibly and ethically.</p>
                                <p>By using "www.loov.in" you agree to the practices described in this Privacy Policy. We encourage you to review this policy periodically to stay informed about any updates or changes.</p>
                                <p>If you have any questions, concerns, or requests regarding your data or this Privacy Policy, please don't hesitate to contact us using the information provided in the "Contact Us" section. </p>
                                <p>Our team is ready to assist you and address your inquiries promptly.</p>
                                <p>Thank you for choosing Loov and entrusting us with your data. We are dedicated to providing you with a safe, seamless, and personalised experience on "www.loov.in" Your privacy and satisfaction are our top priorities, and we remain committed to continuously improving our services to meet your needs.</p>
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

export default PrivacyPolicy
