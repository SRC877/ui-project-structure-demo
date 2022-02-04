import React from 'react';

function TableBodyComponent(props) {
    let user = props.user
    return (
        <>

            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>

        </>
    );

}


export default TableBodyComponent;