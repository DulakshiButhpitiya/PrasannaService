import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../Assets/tirepressure.jpg'
import image2 from '../Assets/Oilchange.jpg'
import image3 from '../Assets/motorcyclechain.jpg'
import image4 from '../Assets/brakepads.jpg'
import image5 from '../Assets/air-filter.jpg'
import image6 from '../Assets/oilfilter.jpg'
import image7 from '../Assets/coolant.jpg'

const MaintenanceCard = () => {
  const details = [
    {
      title: "TIRE PRESSURE",
      description: "Checking your tire pressure is crucial to ensure you’re riding safely. If the pressure is too low, you risk a flat tire or a blowout at high speed, and if the pressure is too high, it may affect the bike’s handling. Usually, you’ll find the recommended air pressure measurements on the tire manufacturer’s manual. Use a tire pressure gauge to measure the PSI level on your tires and inflate as needed.",
      image: image1
    },
    {
      title: "ENGINE OIL LEVEL",
      description: "Your engine oil level should always be full. To check the oil level, run your bike for a few minutes to warm it up. Then, put your motorcycle on the center stand (or ask a friend to put and keep it upright) and look at the engine oil glass located at the bottom of the engine. If it’s not on full, top it up; if the oil looks black, it’s time to change it",
      image: image2
    },
    {
      title: "CHAIN SLACK (IGNORE THIS IF YOUR BIKE HAS A SHAFT DRIVE)",
      description: "With wear and long miles, your chain may start sagging more than it should. To measure the chain slack, push the chain towards the swingarm; it shouldn’t sag more than 40mm (50mm for dirt bikes). If it’s too slack, adjust the chain by loosening the axle nut and turn the feature bolts to shorten or lengthen the slack as needed. You’ll find the exact measurements for your bike in the owner’s manual.",
      image: image3
    },
    {
      title: "BRAKE PADS",
      description: "Brake pads tend to wear quickly on most motorcycles, and it’s always good to keep an eye on them during routine checks. Take a peek inside your brake calipers and if the brake pads are reaching 2mm, it’s high time to replace them.",
      image: image4
    },
    {
      title: "AIR FILTER",
      description: "On street and sport bikes, air filters last for over 5,000km and more before they need cleaning or replacing. On dirt bikes, or in case you ride in dusty, sandy conditions, your air filter may need more regular cleaning (anywhere from monthly to bi-weekly). To check the state of your air filter, open the airbox and remove the filter. If it looks filthy and clogged, replace or clean it.",
      image: image5
    },
    {
      title: "OIL FILTER",
      description: "As a rule of thumb your oil filter should be replaced along with the engine oil. Expect to replace the oil filter every 4,000 – 5,000 kms, unless your owner’s manual recommends a different interval.",
      image: image6
    }
    // ,
    // {
    //   title: "COOLANT",
    //   description: "Your motorcycle coolant fluid should be changed every two years or so. The coolant liquid may deteriorate with time, so it’s best to completely replace it within 20-24 months. To change your coolant, put the bike on the center stand, remove the fairings to access the radiator, then drain the old coolant from the radiator top and replace it with new fluid.",
    //   image: image7
    // }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        {details.map((detail, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white h-100">
              <div
                className="card-body bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${detail.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative z-10 backdrop-blur-sm p-4">
                  <h5 className="card-title">{detail.title}</h5>
                  <p className="card-text">{detail.description}</p>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-0"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceCard;
