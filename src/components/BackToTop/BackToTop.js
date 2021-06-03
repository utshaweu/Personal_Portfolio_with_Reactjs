import React, { Fragment, useState, useEffect  } from 'react'
import { useWindowScroll } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


const BackToTop = () => {

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false)

  useEffect(()=>{
    
    if(pageYOffset > 400){
      setVisiblity(true);
    }else{
      setVisiblity(false);
    }

  },[pageYOffset])

  const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

  if(!visible){
    return false;
  }


  
  return (
    <Fragment>
      <div className="ScrollToTop CursorPointer text-center" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} className="Up" />
      </div>
    </Fragment>
  )
}

export default BackToTop
