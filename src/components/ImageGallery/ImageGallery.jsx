import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({img, onImgClick}) => {
    return <>
    <ul onClich={onImgClick} className={style.ImageGallery}> 
        <ImageGalleryItem img={img} />
    </ul>
    </>
}


ImageGallery.PropTypes = {
    img: PropTypes.arrayOf(
         PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    onImgClick: PropTypes.func.isRequired,
}
