import React from 'react';
import { Table } from 'react-bootstrap';

const MessProfile = () => {
    return (
        <div>
            <div className='profile flex px-10 py-10'>
                <div className="image w-64 mt-5">
                    <img className='rounded-full border-dashed border-2 border-indigo-600' src="https://scontent.fdac20-1.fna.fbcdn.net/v/t1.6435-9/183602404_3873789652740024_6041627425324342208_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L9-YxYAKQA8AX-EzmKo&_nc_ht=scontent.fdac20-1.fna&oh=00_AT-bFr5ssJ2qlnvom8IXN57sLYlekHVnGI5S54stfPPjvA&oe=624C8A6A" alt="" />           
                </div>
                <div className=" w-100 info font-serif font-black nt-bold py-10 ml-10">
                    <h3>Name:Rizwan Ahmed Sakib</h3>
                    <div className="table">
                        <Table striped bordered hover variant="dark">
                            <thead >
                                <tr>
                                <th>#</th>
                                <th>Mile Rate</th>
                                <th>Total Mile</th>
                                <th>Mile Cost</th>
                                <th>Deposit</th>
                                <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                </tr>
                            </tbody>
                        </Table>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessProfile;