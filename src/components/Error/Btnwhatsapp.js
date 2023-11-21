import React from 'react';
import '../../style/whatsapp.css';

const Btnwhatsapp = () => {

    // , { useEffect }
    // useEffect(() => {
    //     const scrollFunction = () => {
    //       if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    //         document.querySelector(".whatsapp_float").style.display = "block";
    //       } else {
    //         document.querySelector(".whatsapp_float").style.display = "none";
    //       }
    //     }
    
    //     window.addEventListener('scroll', scrollFunction);
    
    //     // Nettoyage après le démontage
    //     return () => {
    //       window.removeEventListener('scroll', scrollFunction);
    //     };
    //   }, []); // Le tableau vide signifie que useEffect s'exécute une fois après le premier rendu
    

      return (
        <>
            
            <a href="https://wa.me/237694696705" class="whatsapp_float" target="_blank" rel="noopener noreferrer" >
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>

        </>
    )
}

export default Btnwhatsapp;
