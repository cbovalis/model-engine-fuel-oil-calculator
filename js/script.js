  function calculateOil(){
         var initial_volume = 3785.41;  // Default for 1 Gallon
         var container = document.getElementById('starting_fuel_container').value;
         var current_oil_percentage = document.getElementById('current_oil_percentage').value;
         var desired_oil_percentage = document.getElementById('desired_oil_percentage').value;
         var existing_oil_content, additional_oil_needed_in_mililiters, additional_oil_needed_in_ounces = 0; 
         
         // Determine starting volume in ml - 1 Gallon = 3785.41 Mililiters
            if ( container == "half_gallon" ) {
               initial_volume = 1892.7;
             } else if ( container == "quart") {
               initial_volume = 946.35; 
               } else if ( container == "pint") {
                 initial_volume = 473.17; 
                 }
         
         // Existing oil amount (in ml) we have in our fuel container 
         // based on the existing oil percentage
         existing_oil_content = ( current_oil_percentage * initial_volume ) / 100; 
         
         additional_oil_needed_in_mililiters = (((desired_oil_percentage * initial_volume)/100) - existing_oil_content) / (1 - (desired_oil_percentage)/100);
         
         // Now the above figure is in ml. Let's convert it to fluid ounces:  1ml = 0.0338 fl.oz 
         additional_oil_needed_in_ounces = (additional_oil_needed_in_mililiters * 0.0338).toFixed(2); 
         
         document.getElementById('oil_needed').innerHTML = ' ' + additional_oil_needed_in_ounces + 'oz ' + ' (' + additional_oil_needed_in_mililiters.toFixed(2) + ' ml )'; 
         
      }

// scratch area delete it
getelem