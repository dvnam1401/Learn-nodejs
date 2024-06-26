import {useEffect,useRef,useState} from 'react';

export default function useClickOutSide(dom="button"){
    const [show,setShow] =useState(false);
    const nodeRef =useRef(null);
    useEffect(() => {
        function handleClickOutside (e){
            if(
                nodeRef.current && 
                !nodeRef.current.contains(e.taget) &&
                !e.taget.matches(dom)
            ){
                setShow(false);
            }
        }
        document.addEventListener("click",handleClickOutside);
    
return () => {
    document.removeEventListener("click",handleClickOutside);
};
});
return {
    show,
    setShow,
    nodeRef,
};
}

   

