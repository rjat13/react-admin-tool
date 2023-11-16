import SliderComponent from "../../components/admin/slider"
import slide1 from '../../assets/img/course-1.jpeg';
import slide2 from '../../assets/img/career.jpeg';
import slide3 from '../../assets/img/mocktest.jpeg';

const Slider = () => {
    const slidesArr = [
        {img: slide1, captionTitle: "This is caption for slide 1", captionParagraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
        {img: slide2, captionTitle: "This is caption for slide 2", captionParagraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
        {img: slide3, captionTitle: "This is caption for slide 3", captionParagraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
    ]
  return (
    <div>
        {slidesArr && <SliderComponent slideArr={slidesArr} />}
    </div>
  )
}

export default Slider