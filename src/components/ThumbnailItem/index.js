/* eslint-disable react/button-has-type */
import './index.css'

const ThumbnailItem = props => {
  const {thumbList, clickedImage, activeImage} = props
  const {thumbnailUrl, imageUrl, thumbnailAltText, imageAltText} = thumbList
  const imageChange = () => {
    clickedImage(imageUrl, imageAltText)
  }
  const activeTab = activeImage ? '' : 'blurImage'

  return (
    <li className="listStyle">
      <button className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`image ${activeTab}`}
          onClick={imageChange}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
