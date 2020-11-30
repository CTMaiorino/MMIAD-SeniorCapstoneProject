import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
class SearchCriteriaTools extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    state = {
        isVisible:true
    }
    setVisibility = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        return (
            <div className={this.state.isVisible === true ? 'border m-2' : 'm-2'}>
                <div  className="border border-dark d-flex p-3" >
                <Button  className="m-2 p-2"size="small" onClick={this.setVisibility}>  <Image src="icon.png" width='30px' alt={this.state.isVisible === true ? 'Hide' : 'Show'} /> </Button> 
                <h1 className="m-2">{this.props.title}</h1>
                </div>
                <br></br>
                <Form variant='Primary' className={this.state.isVisible === true ? 'visable p-3' : 'invisible p-3'} >
                    <Form.Group>
                        {this.props.criteria.map((item) => (
                                <Form.Check inline label={item} value={item} />
                        ))}
                    </Form.Group>

                </Form>
            </div >

        )
    }''
}
export default SearchCriteriaTools;
