import React, { useEffect, useRef, useState } from 'react'
import CssBlock from './CssBlock'
import Htmlblock from './Htmlblock'
import JavaScript from './JavaScript'
import ReactJs from './ReactJs'
import NodeJs from './NodeJs'

const Modal = ({ isOpen, onClose }) => {
  const [isOpenHtmlModal, setIsOpenHtmlModal] = useState(false)
  const [isOpenCssModal, setIsOpenCssModal] = useState(false)
  const [isOpenJsModal, setIsOpenJsModal] = useState(false)
  const [isOpenReactJsModal, setIsOpenReactJsModal] = useState(false)
  const [isOpenNodeJsModal, setIsOpenNodeJsModal] = useState(false)
 
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      setShowModal(false)
      setIsOpenHtmlModal(false) // Закрываем HtmlModal, когда основное модальное окно закрывается
      setIsOpenCssModal(false)
      setIsOpenJsModal(false)
      setIsOpenReactJsModal(false)
      setIsOpenNodeJsModal(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown)
      if (modalRef.current) {
        modalRef.current.focus()
      }
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showModal])

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      hideModal()
    }
  }

  const stopPropagation = e => {
    e.stopPropagation()
  }

  const handleHtml = () => {
    setIsOpenHtmlModal(true)
    setIsOpenCssModal(false)
    setIsOpenJsModal(false)
    setIsOpenReactJsModal(false)
    setIsOpenNodeJsModal(false)
  }
  const handleCss = () => {
    setIsOpenCssModal(true)
    setIsOpenHtmlModal(false)
    setIsOpenJsModal(false)
    setIsOpenReactJsModal(false)
    setIsOpenNodeJsModal(false)
  }

  const handleJs = () => {
    setIsOpenCssModal(false)
    setIsOpenHtmlModal(false)
    setIsOpenJsModal(true)
    setIsOpenReactJsModal(false)
    setIsOpenNodeJsModal(false)
  }

  const handleReactJs = () => {
    setIsOpenReactJsModal(true)
    setIsOpenCssModal(false)
    setIsOpenHtmlModal(false)
    setIsOpenJsModal(false)
    setIsOpenNodeJsModal(false)
  }

  const handleNodeJs = () => {
    setIsOpenNodeJsModal(true)
    setIsOpenReactJsModal(false)
    setIsOpenCssModal(false)
    setIsOpenHtmlModal(false)
    setIsOpenJsModal(false)
  }

  const handleCloseHtmlModal = () => {
    setIsOpenHtmlModal(false)
  }

  const handleCloseCssModal = () => {
    setIsOpenCssModal(false)
  }

  const handleCloseJsModal = () => {
    setIsOpenJsModal(false)
  }

  const handleCloseReactJsModal = () => {
    setIsOpenReactJsModal(false)
  }

  const handleCloseNodeJsModal = () => {
    setIsOpenNodeJsModal(false)
  }

  const hideModal = () => {
    setShowModal(false)
    onClose()
  }

  if (!showModal) return null

 
  

  return (
    <>
      {showModal && (
        <div
          className={`modal-overlay ${isOpen ? 'show' : ''}`}
          onClick={hideModal}
        >
          <div
            className='modal-content'
            onClick={stopPropagation}
            tabIndex='-1'
            ref={modalRef}
          >
            <button onClick={handleHtml}>HTML</button>
            <button onClick={handleCss}>CSS</button>
            <button onClick={handleJs}>JavaScript</button>
            <button onClick={handleReactJs}>ReactJS</button>
            <button onClick={handleNodeJs}>NodeJS</button>
            <button onClick={hideModal} className='close-button'>
              Close
            </button>
          </div>
        </div>
      )}
      {isOpenHtmlModal && (
        <Htmlblock isOpen={isOpenHtmlModal} onClose={handleCloseHtmlModal} />
      )}
      {isOpenCssModal && (
        <CssBlock isOpen={isOpenCssModal} onClose={handleCloseCssModal} />
      )}
      {isOpenJsModal && (
        <JavaScript isOpen={isOpenJsModal} onClose={handleCloseJsModal} />
      )}
      {isOpenReactJsModal && (
        <ReactJs
          isOpen={isOpenReactJsModal}
          onClose={handleCloseReactJsModal}
        />
      )}
      {isOpenNodeJsModal && (
        <NodeJs isOpen={isOpenNodeJsModal} onClose={handleCloseNodeJsModal} />
      )}



    </>
  )
}

export default Modal
