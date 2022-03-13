import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ComposedModal,
  TextInput,
} from 'carbon-components-react';
import React from 'react';
import PropTypes from 'prop-types';

const AddPayment = ({isOpen = false, setIsOpen}) => {
  return <>
    <ComposedModal open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader label='Payments balance' title='Add payment' />
      <ModalBody>
        <TextInput
          style={{marginBottom: '1rem'}}
          id='title'
          labelText='Title'
          onChange={() => console.log('title...')}
        />
        <TextInput
          style={{marginBottom: '1rem'}}
          id='title'
          labelText='Title'
          onChange={() => console.log('title...')}
        />
        <TextInput
          style={{marginBottom: '1rem'}}
          id='title'
          labelText='Title'
          onChange={() => console.log('title...')}
        />
        <TextInput
          style={{marginBottom: '1rem'}}
          id='title'
          labelText='Title'
          onChange={() => console.log('title...')}
        />
      </ModalBody>
      <ModalFooter primaryButtonText='Add' secondaryButtonText='Cancel' />
    </ComposedModal>
  </>;
};

AddPayment.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default AddPayment;
