/* 
app.css
ExpressPortfolio

Created by Silviya Velani on 01/05/21.
Student Id: 301167163
Copyright © 2021 Centennial College. All rights reserved. */


// IIFE - Immediately Invoked Function Expression

(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/business-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();