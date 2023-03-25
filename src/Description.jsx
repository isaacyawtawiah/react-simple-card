import { Component } from "react";

class Description extends Component {
    render() {
        const description = this.props;
        return (
            <div style={{fontWeight:"inherit", backgroundColor:"dimgrey",color:"white"}}>
                {this.props.description}
            </div>
        )
    }
}
export default Description