import {Component} from 'react'
import ProfileSection from '../ProfileSection'
import SocialMedia from '../SocialMedia'

import AboutSection from '../AboutSection'
import ServicesSection from '../ServicesSection'
import PortfolioSection from '../PortfolioSection'
import VideoSection from '../VideoSection'
import ClientSection from '../ClientSection'
import ReviewSection from '../ReviewSection'

import './index.css'

class BannerSection extends Component {
  render() {
    return (
      <>
        <div className="bg-container">
          <div className="banner-container">
            <img
              src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1663434900/Ass_image_rdyalx.jpg"
              className="profile-image"
              alt="profileImage"
            />
          </div>
          <ProfileSection />
          <SocialMedia />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <VideoSection />
          <ClientSection />
          <ReviewSection />
        </div>
      </>
    )
  }
}

export default BannerSection
