import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };


Modal.setAppElement('#root');

export default function PostModal({open,setOpen}) {
    let subtitle;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  return (
      <Modal
       isOpen={open}
       onAfterOpen={afterOpenModal}
       onRequestClose={handleClose}
       style={customStyles}
       contentLabel="New Post"
      >
        <div className="w-[400px] flex flex-col items-center">
        <p ref={(_subtitle) => (subtitle = _subtitle)} className='w-64 text-xl text-center'>Create new post</p>



        <button onClick={handleClose}>close</button>
      </div>
      </Modal>
  );
}