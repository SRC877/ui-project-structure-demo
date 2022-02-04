import React, { Component } from 'react';

/* tslint:disable */

function HeaderComponent(props) {
    console.log(props);

    return (
        <>

            <thead>
                <tr>
                    <th scope="col">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={props.checked}
                            id="mastercheck"
                            onChange={props.onChange}
                        />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Website</th>

                </tr>
            </thead>

        </>
    );

}

export default HeaderComponent;