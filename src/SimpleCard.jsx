import { Component } from "react";
import vite from './assets/c11.png';
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";



class SimpleCard extends Component {
    render() {
        
        return (
            <div style={{display:"flex", width:"350px"}} >
                <div>
                    <Image img={vite}/>
                </div>
                <div>
                    <Title title="Rent And Drive Yourself" />
                    <Description description="Should you lease or buy a new car? Typically, the choice comes down to priorities. For some drivers, it’s purely a matter of dollars and Cedis: Which is the less expensive option right now? For others, it’s about the benefits of ownership."/>
                </div>
            </div>
        )
    }
}
export default SimpleCard