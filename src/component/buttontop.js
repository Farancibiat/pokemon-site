import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
  
const ButtonTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button className='scrollTop' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
     &uarr;UP
    </Button>
  );
}
  
export default ButtonTop;