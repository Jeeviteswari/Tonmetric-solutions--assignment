import './index.css'

import ReactPlayer from 'react-player'

const VideoSection = () => (
  <>
    <div className="video-container">
      <h1 className="video-heading">Videos</h1>
      <p className="video-para">
        Lorem Ipsum is simply dummy text of the parinting and typesetting
        industry.Lorem Ipsum has been the industry standard dummy te ever since
        the 1500s
      </p>
      <div className="images-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5_dpNTBdBk0"
          className="video1"
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=j2NG0OfoRqA"
          className="video2"
        />
      </div>
      <div className="images-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5_dpNTBdBk0"
          className="video1"
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=j2NG0OfoRqA"
          className="video2"
        />
      </div>
    </div>
  </>
)

export default VideoSection
