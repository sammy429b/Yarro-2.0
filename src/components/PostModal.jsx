import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

export default function PostModal({ open, setOpen, textPost }) {
  let subtitle;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    // document.getElementById('create-post').
    console.log(document.getElementById('postText').value)
    setOpen(false);
  };



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
      <div className="w-[600px] h-[20rem] flex flex-col items-center">
        <div className='w-full  flex items-center justify-between'>
          <p ref={(_subtitle) => (subtitle = _subtitle)} className='w text-xl text-center text-bold'>Create new post</p>
          <button onClick={handleClose} className='font-semibold text-xl'>
            <i className='fa fa-close'></i>
          </button>
        </div>
        <form className='w-full h-[15rem] mt-2' onSubmit={textPost}>
          <textarea className=" w-full text-xl h-[14rem] outline-none p-2 resize-none" autoFocus rows={10} type="text" name="postText" id="post-text" placeholder='Share your thoughts' wrap="soft" />
          <div className='w-full flex justify-end items-center gap-x-4'>
            <button type='button' className='text-violet-600 bg-white w-[7rem] h-[2.3rem] rounded-[3rem] border-violet-600 border' onClick={handleClose}>cancel</button>
            <input type='submit' value={'send'} className='bg-violet-600 text-white w-[7rem] h-[2.3rem] rounded-[3rem] cursor-pointer' />
          </div>
        </form>
      </div>
    </Modal>
  );
}