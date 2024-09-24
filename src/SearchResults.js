import React from 'react';

const SearchResults = ({ vendors, onViewContact }) => {
    return (
        <div>
            {vendors.length === 0 ? (
                <p>No vendors found.</p>
            ) : (
                vendors.map(vendor => (
                    <div className="vendor-card" key={vendor.id}>
                        <h3>{vendor.name}</h3>
                        <p>Services: {vendor.services.join(', ')}</p>
                        <p>City: {vendor.city}</p>
                        <button onClick={() => onViewContact(vendor)}>View Contact</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default SearchResults;