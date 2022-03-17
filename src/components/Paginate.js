import React, { useState, useEffect } from 'react'
import propType from 'prop-types'
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Paginate = ({ data, itemsPerPage, setData, setPage } ) => {
  const [pageData, setPageData] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [currentClickedNumber, setCurrentClickedNumber] = useState(1)
  const [activeButton, setActiveButton] = useState(1)

  const determineNumberOfPages = () => {
    let paginateDataObject = {}
    let index = 0
    let dataLength = data.length
    let chunckArray = []

    for( index = 0; index < dataLength; index += itemsPerPage){
      let newChunck = data.slice(index, index + itemsPerPage)
      chunckArray.push(newChunck)
    }

    chunckArray.forEach((chunk, i) => {
      paginateDataObject[i + 1] = chunk
    })

    setTotalPages(chunckArray.length)
    setPageData(paginateDataObject)
  }

  const handleClickedNumber = (e) => {
    setCurrentClickedNumber(parseInt(e.target.innerText))
  }

  const moveToLastPage = () => {
    setCurrentClickedNumber(totalPages)
    setActiveButton(totalPages)
  }

  const moveToFirstPage = () => {
    setCurrentClickedNumber(1)
    setActiveButton(1)
  }

  const moveOnePageForward = () => {

    setCurrentClickedNumber(currentClickedNumber +1 > totalPages
      ? totalPages : currentClickedNumber + 1)
    setActiveButton( currentClickedNumber + 1 > totalPages
      ? totalPages : currentClickedNumber + 1)

  }

  const moveOnePageBackward = () => {
    setCurrentClickedNumber( currentClickedNumber - 1 < 1
      ? 1 : currentClickedNumber - 1)
    setActiveButton( currentClickedNumber - 1 < 1
      ? 1 : currentClickedNumber - 1)
  }

  useEffect(() => {
    determineNumberOfPages()
  }, [data])

  useEffect(() => {
    if(pageData){
      setData(pageData[currentClickedNumber])
      setPage(parseInt(currentClickedNumber))
    }
  }, [currentClickedNumber])

  const activateButton = (e) => {
    setActiveButton(parseInt(e.target.value))
  }

  const pageNumberRender = () => {
    let pages = []
    let i, cont
    if(currentClickedNumber - 1 === 0){
      i = currentClickedNumber
      cont = 2
    } else {
      i = currentClickedNumber - 1
      if(currentClickedNumber === totalPages){
        cont = currentClickedNumber
      } else{
        cont = currentClickedNumber + 1
      }
    }
    for (i; i <= cont; i++ ){
      pages.push(<button
        className={activeButton === i ? 'item__paginate activePage' : 'item__paginate'}
        onClick={activateButton}
        value={i}
        key={i}>{i}</button>)
    }
    return pages
  }


  return (
    <div className='paginateContainer'>
      {currentClickedNumber > 1 ? (
        <>
          <button onClick={moveToFirstPage} className='item__paginate'><FontAwesomeIcon icon={faAngleDoubleLeft}/> </button>
          <button onClick={moveOnePageBackward} className='item__paginate'><FontAwesomeIcon icon={faAngleLeft}/></button>
        </>
      ) : <div/> }
      <div onClick={handleClickedNumber}>
        {pageNumberRender()}
      </div>
      {
        currentClickedNumber < totalPages ? (
          <>
            <button onClick={moveOnePageForward} className='item__paginate'><FontAwesomeIcon icon={faAngleRight}/></button>
            <button onClick={moveToLastPage} className='item__paginate'><FontAwesomeIcon icon={faAngleDoubleRight}/> </button>
          </>
        )
          : <div/>
      }
    </div>
  )
}

Paginate.propType = {
  data: propType.array.isRequired,
  setData: propType.func.isRequired,
  itemsPerPage: propType.number.isRequired,
}

export default Paginate