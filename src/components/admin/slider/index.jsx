import { CCarousel, CCarouselCaption, CCarouselItem, CCol, CRow } from "@coreui/react"
import { useState } from "react"
import PropTypes from 'prop-types'



const SliderComponent = ({slideArr}) => {
  const [activeIndex] = useState(0)

  return (
    <div>
      <CRow>
        <CCol sm={12}>
          <CCarousel activeIndex={activeIndex} controls={true} indicators={true} touch={true}>
            { slideArr?.map((slide, i) => <CCarouselItem key={`slider-${i}`}>
                <img className="d-block w-100" src={slide.img} alt="slide 1"/>
                <CCarouselCaption><h3>{slide.captionTitle}</h3><p>{slide.captionParagraph}</p></CCarouselCaption>
              </CCarouselItem>)
            }
          </CCarousel>
        </CCol>
      </CRow>
    </div>
  )
}

export default SliderComponent

SliderComponent.propTypes = {
  slideArr: PropTypes.arrayOf({
    img: PropTypes.string,
    captionTitle: PropTypes.string,
    captionParagraph: PropTypes.string
  })
}