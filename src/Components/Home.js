import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameCollection: []
        }
    }

    async componentDidMount() {
        await axios.get('http://127.0.0.1:8000/api/games')
            .then(response => {
                this.setState({
                    gameCollection: response.data.data
                })
                let test = response.data
            })
            .catch(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs='3'>
                        Hello
                    </Col>
                    <Col xs='9'>
                        <Row>
                            {
                                this.state.gameCollection.map(item => (
                                    <Col xs='4' className="my-3">
                                        <Card>
                                            <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardSubtitle>Genre</CardSubtitle>
                                                <CardText>Price: {item.price}</CardText>
                                                <Button>Button</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Home;
