import React from "react";
import {useNavigate} from "react-router-dom";
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import"../styles/Homepage.css";
export const productlist=[
{
id:1,image:image1,cardtitle:"oil"

},{id:2,image:image2,cardtitle:"suger",},
];
function Homepage() {
    const navigation=useNavigate();
    const handleNavigate=(id)=>{
        navigation(`singlecard/${id}`)
    }
    return(
        <div className='navcontainer'>
            {productlist.map((item)=>(
                <div key={item.id} className="card">
                    <div className="image-container"><img src={item.image}/></div>
                    <div className="title">{item.cardtitle}</div>
                    <button className="button" type='button' onClick={()=>handleNavigate(item.id)}>view</button>
                    </div>
            ))}
            

            </div>
        
    )

}
export default Homepage;