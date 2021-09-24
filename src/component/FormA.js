import React from 'react'
import Data from './data.json';
import { Form, Col } from 'react-bootstrap';

class FormA extends React.Component {

        FormEvent = (event) => {
        let JsonData = Data;
        let filterArray = []
        let selectedHorns = Number(event.target.value);
        filterArray = JsonData.filter(item => {

            return (item.horns === selectedHorns)

        })
        console.log(filterArray)
        if (filterArray.length === 0) {
            filterArray = Data;
        }
        console.log(filterArray)
        this.props.HornsFun(filterArray)

    }
    render() {
        return (

            <div className="row" style={{ margin: "20px 5%" }}>

                < Form horizontal
                    style={{ margin: "12px 22%" }}
                >
                    <Form.Group
                        controlId="formBasicEmail"
                        style={{ margin: "12px 22%" }}

                    >
                        <Col sm={4}  >
                            <Form.Select size="sm" onChange={this.FormEvent}>
                                <option value="">Choose The Number of horns</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="100">100</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Form >
                {/* {
                    this.props.data.map(e => {
                        return (<HornedBeast Name={e.title} src={e.image_url} disc={e.description} show={this.props.show} />)
                    })

                } */}
            </div>

        )
    }
}

export default FormA
