import React from 'react';

class HeaderComponent extends React.Component {
    render() {
        return (
            <>

                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>

            </>
        );
    }
}

export default HeaderComponent;