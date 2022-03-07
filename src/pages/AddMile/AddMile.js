import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'

const AddMile = () => {
    const add = <FontAwesomeIcon icon={faPlus} />
    const minus = <FontAwesomeIcon icon={faMinus} />
    return (
        <div >
            <Table striped bordered hover variant="dark">
                <thead >
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mile</th>
                    <th>Add mile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>0</td>
                    <td>{minus} {add}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default AddMile;