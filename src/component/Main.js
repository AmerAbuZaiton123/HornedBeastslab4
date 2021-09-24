import React from 'react';
import { Card, Col, Button } from 'react-bootstrap'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCounter: 0
        }
    }

    LikeIncrement = () => {
        this.setState({
            likeCounter: this.state.likeCounter + 1,
        });
    }
    openModel = () => {
        let image_url = this.props.image_url
        let description = this.props.description
        let horns = this.props.horns
        let keyword = this.props.keyword
        let title = this.props.title
        let like = this.state.likeCounter
        this.props.openModelFun(image_url, description, horns, keyword, title, like)

    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.LikeIncrement} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <p style={{ 'margin': '20px', "color": "black", "fontSize": "20px" }}>Like: {this.state.likeCounter}👍</p>
                        <p style={{ 'margin': '20px', "color": "black", "fontSize": "20px" }} > {this.props.description}</p>

                        <Button variant="primary" onClick={this.openModel}
                            style={{
                                'background-color': 'black', 'border-color': 'white',
                                'margin-top': '20px'
                            }}>Read More</Button>
                    </Card.Body>
                </Card>

            </>

        )
    }
}


export default Main