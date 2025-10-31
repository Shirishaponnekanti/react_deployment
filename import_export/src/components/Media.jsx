import img1 from "../assets/Dog.jpeg"
import Dog from "../assets/image.jpeg"
import Card from "../assets/Data/foodie.json"
export const Mediafiles = ()=>{
    console.log(Card)
    return<>
        <h4>Media queries</h4>
        <img src={img1} alt="image1" height={200} width={250}/>
        <img src={Dog} alt="image2"  height={200} width={250}/>
        <br />
        <br />
        <img src="Dogss.jpeg" alt="image3" />
        <img src="vite.svg" alt="image4" height={200}  width={200}/>
        <ul>
            <li>{Card.Name}</li>
            <li>{Card.Calories}</li>
            <li>{Card.Price}</li>
        </ul>
    </>
}