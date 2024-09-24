import React, { useState, useEffect, useCallback } from 'react';
import vendors from './vendors'; 
import SearchResultBadges from './SearchResultsComponents/SearchResultBadges';
import SearchResultFilters from './SearchResultsComponents/SearchResultFilters';
import SearchResultFooter from './SearchResultsComponents/SearchResultFooter';
import SearchResultNavbar from './SearchResultsComponents/SearchResultNavbar';
import SearchResultPagination from './SearchResultsComponents/SearchResultPagination';
import SearchResults from './SearchResultsComponents/SearchResults';
import SearchResultSearchbar from './SearchResultsComponents/SearchResultSearchbar';
import SearchResultText from './SearchResultsComponents/SearchResultText';
import Modal from 'react-modal';

const FilterTips = ({ selectedCity, showVerified }) => (
  <div>
    {selectedCity && <p>City Filter: {selectedCity}</p>}
    {showVerified && <p>Showing Verified Vendors</p>}
  </div>
);

function App() {
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showVerified, setShowVerified] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 5;

  const filterVendors = useCallback(() => {
    let results = vendors.filter(vendor => {
      const matchesServices = vendor.services.some(service => 
        service.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCity = selectedCity ? vendor.officeAddress.toLowerCase() === selectedCity.toLowerCase() : true;
      const matchesVerified = showVerified ? vendor.verified : true;
      return matchesServices && matchesCity && matchesVerified;
    });
    setFilteredVendors(results);
  }, [searchTerm, selectedCity, showVerified]);

  useEffect(() => {
    filterVendors();
  }, [filterVendors]);

  const openModal = (vendor) => {
    setSelectedVendor(vendor);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVendor(null);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentPageVendors = filteredVendors.slice((currentPage - 1) * vendorsPerPage, currentPage * vendorsPerPage);

  return (
    <div>
      <SearchResultNavbar />
      <SearchResultSearchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchResultFilters selectedCity={selectedCity} setSelectedCity={setSelectedCity} showVerified={showVerified} setShowVerified={setShowVerified} />
      <FilterTips selectedCity={selectedCity} showVerified={showVerified} />
      <SearchResults vendors={currentPageVendors} onViewContact={openModal} />
      <SearchResultText />
      <SearchResultBadges />
      <SearchResultPagination totalVendors={filteredVendors.length} vendorsPerPage={vendorsPerPage} paginate={paginate} currentPage={currentPage} />
      <SearchResultFooter buttonsActive={false} />

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Contact Information</h2>
        {selectedVendor && (
          <div>
            <p>Name: {selectedVendor.name}</p>
            <p>Office Address: {selectedVendor.officeAddress}</p>
            <p>City: {selectedVendor.city}</p>
            <p>Services: {selectedVendor.services.join(', ')}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
