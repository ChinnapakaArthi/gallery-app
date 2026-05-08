import './index.css'

const ThumbnailItem = props => {
  const {activeId, eachImageDetails, clickImageItem} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImageDetails
  const onClickImageItem = () => {
    clickImageItem(id)
  }

  const activeImageClassName = id === activeId ? 'active-image' : 'image'

  return (
   <li className="image-item-container">
      <button type="button" className="thumbnail-button" onClick={onClickImageItem}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}   
          className={activeImageClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
