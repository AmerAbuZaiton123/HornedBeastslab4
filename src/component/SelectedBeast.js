import React from 'react';
import { Modal, Button } from 'react-bootstrap'
class SelectedBeast extends React.Component {
    render() {
        return (<>
            <Modal show={this.props.openModel} onHide={this.props.closeModelFun}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width={'100%'} src={this.props.image_url} alt={this.props.keyword} />
                    <p style={{ 'margin': '20px', "color": "black", "fontSize": "20px", "": "", 'textAlign': 'center' }}>Like Numbere: {this.props.like}  👍</p>
                    <p style={{ 'margin': '20px', "color": "black", "fontSize": "20px", "": "", 'textAlign': 'center' }}>{this.props.description}</p>
                    <p style={{ 'margin': '20px', "color": "black", "fontSize": "20px", "": "", 'textAlign': 'center' }}>{this.props.horns}</p>
                </Modal.Body>
                <Modal.Footer>


                    <Button variant="primary" onClick={this.props.closeModelFun}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
    }
}
export default SelectedBeast