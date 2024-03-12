import React, { useState } from 'react'
import SendCertificate from '../InstitutionPages/SendCertificate';


const CertificateCard = (props) => {

  const [showModal, setShowModal] = useState(false);


  const { doc } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`https://gateway.pinata.cloud/ipfs/${doc.hash}`}>
          <img className="rounded-t-lg" src={`https://gateway.pinata.cloud/ipfs/${doc.hash}`} alt="IPFS Hash" />
      </a>
      <div className="p-2">
          <a href="/">
              <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{doc.name}</h6>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email : {doc.email}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">Image Hash : {doc.hash}</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setShowModal(true)}>
              Send Certificate
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          {showModal ? (
          <SendCertificate
            show={showModal}
            onHide={(e) => setShowModal(false)}
            doc={doc}
          />
        ) : null}
      </div>
    </div>
    )
}

export default CertificateCard