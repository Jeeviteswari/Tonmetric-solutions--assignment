import './index.css'

const PortfolioSection = () => (
  <>
    <div className="portfolio-container">
      <h1 className="portfolio-heading">Portfolio</h1>
      <p className="portfolio-para">
        Lorem Ipsum is simply dummy text of the parinting and typesetting
        industry.Lorem Ipsum has been the industry standard dummy te ever since
        the 1500s
      </p>
      <div className="images-container">
        <img
          src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1663481684/lorelimage1_r6ofbi.jpg"
          alt="singleImage"
          className="single-loreal-image"
        />
        <img
          src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1663481699/lorelimage2_zn8xab.jpg"
          alt="singleImage"
          className="single-loreal-image"
        />
      </div>
      <div className="images-container">
        <img
          src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1663481713/lorelimage3_phrtlk.jpg"
          alt="singleImage"
          className="single-loreal-image"
        />
        <img
          src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1663481729/lorelimage4_fdihho.jpg"
          alt="singleImage"
          className="single-loreal-image"
        />
      </div>
      <div className="images-container">
        <img
          src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1663481745/lorelimage5_ulee4x.jpg"
          alt="singleImage"
          className="single-loreal-image"
        />
        <img
          src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1663481763/lorelimage6_wujyua.jpg"
          alt="singleImage"
          className="single-loreal-image"
        />
      </div>
    </div>
  </>
)

export default PortfolioSection
