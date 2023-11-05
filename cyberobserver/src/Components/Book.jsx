import React from 'react';
import NavTop from './NavTop';
import { Box, Heading } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
// import Sliding from './Sliding';""
import "./Book.css"
const Book = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavTop />
      <Box
        style={{
          height: 'auto',
          width: '100%',
          backgroundImage: `url(https://xmcyber.com/wp-content/themes/xmcyber/img/global/book-demo-circle-top.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ margin: 'auto', width: '50%', paddingTop: '100px', textAlign: 'center' }}>
          <Heading style={{color:"#000033",fontSize:"60px",margin:"0"}}>Let's Talk</Heading>
          <h5 style={{fontSize:"30px",color:"#000033",marginTop:"5px"}}>Get ready to see all ways</h5>
          <Box
            color={'#FBFBFB'}
            style={{
              margin: 0,
              padding: '20px',
              backgroundColor: '#000033',
              borderRadius: '20px',
              zIndex: '100',
            }}
          >
            <Heading fontSize={'40px'} margin={'auto'}>
              Take a Demo
            </Heading>

            <form style={{ margin: 'auto', marginTop: '50px', width: '80%' }}>
              <input
                style={{ height: '40px', width: '45%', borderRadius: '5px', marginBottom: '20px' }}
                type="text"
                placeholder="First Name*"
              />
              <input
                style={{ height: '40px', width: '45%', borderRadius: '5px', marginLeft: '10px' }}
                type="text"
                placeholder="Last Name*"
              />
              <br />

              <input
                style={{ height: '40px', width: '45%', borderRadius: '5px', marginBottom: '20px', marginTop: '20px' }}
                type="text"
                placeholder="India"
              />
              <input
                style={{ height: '40px', width: '45%', borderRadius: '5px', marginLeft: '10px', marginTop: '20px' }}
                type="number"
                placeholder="+91"
              />
              <br />

              <input
                style={{ height: '40px', width: '95%', borderRadius: '5px', marginBottom: '20px', marginTop: '20px' }}
                type="email"
                placeholder="Business email*"
              />
              <br />

              <Textarea
                style={{ height: '180px', width: '95%', borderRadius: '5px', marginBottom: '20px', marginTop: '20px' }}
                placeholder="How did you hear about us"
              />
              <br />
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <input type="checkbox" style={{ marginRight: '10px' }} />
                By signing up you are agreeing to receive occasional marketing, product and event updates from XM Cyber.
                You can unsubscribe at any time. By submitting the form, I acknowledge that I have read the Privacy
                Policy.*
              </label>
              <br />
              <Box paddingBottom={'80px'}>
                <button
                  style={{
                    backgroundColor: 'yellow',
                    color: '#000033',
                    width: '100%',
                    borderRadius: '5px',
                    height: '40px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  Submit
                </button>
              </Box>
            </form>
          </Box>
        </div>
      </Box>
      <div className="imagebox" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"150px"}}>
      <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111830/Kaltura_Logo-1.png"
        alt="Moving Image 1"
        className="image"
      />
      <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26112425/hph.png"
        alt="Moving Image 2"
        className="image"
      />
      <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111839/Amadeus_Logo-1.png"
        alt="Moving Image 3"
        className="image"
      />
      <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111736/Rochling_Logo.png"
        alt="Moving Image 4"
        className="image"
      />
      <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111755/Telefonica_Logo-1.png"
        alt="Moving Image 5"
        className="image"
      />
       <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111800/Senator_international_Logo.png"
        alt="Moving Image 5"
        className="image"
      />
       <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111759/Schunk_group_Logo-1.png"
        alt="Moving Image 5"
        className="image"
      />
       <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111838/Clinique_Saint_Pierre_ASBL_Logo-1.png"
        alt="Moving Image 5"
        className="image"
      />
       <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111832/Motorola_Logo-1.png"
        alt="Moving Image 5"
        className="image"
      />
       <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111836/Damac_properties_Logo-1.png"
        alt="Moving Image 5"
        className="image"
      />
       <img
        src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/09/26111756/Virgin_media_O2_Logo.png"
        alt="Moving Image 5"
        className="image"
      />
      {/* Add more image elements as needed */}
    </div>
    </div>

  );
};

export default Book;
