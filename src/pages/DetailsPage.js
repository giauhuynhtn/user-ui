import React from 'react';
import {useParams} from 'react-router-dom'


function DetailsPage({data}) {
    const params = useParams()
    let userInfo = data[params.id - 1]
    console.log(userInfo);

    return (
        <div className="detail__container">
            <h1 className="detail__header">DETAILED INFORMATION</h1>
            <ul className="detail__info-list">
                <li>Name: {userInfo.name}</li>
                <li>Username: {userInfo.username}</li>
                <li>Email: {userInfo.email}</li>
                <li>Phone: {userInfo.phone}</li>
                <li>Company: {userInfo.company.name}</li>
                <li>Website: {userInfo.website}</li>
                <li>Address: 
                    <ul>
                        <li>Street: {userInfo.address.street}</li>
                        <li>Suite: {userInfo.address.suite}</li>
                        <li>City: {userInfo.address.city}</li>
                        <li>Zipcode: {userInfo.address.zipcode}</li>
                    </ul>
                </li>
            </ul>
        
        </div>
        
    )
}

export default DetailsPage