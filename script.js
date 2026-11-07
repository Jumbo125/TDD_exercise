const table_string = 
    `Date; exercises
    01.11.; pushups, pullups, crunches
    03.11.; deadlifts, pushups
    06.11.; pushups, crunches, running
    08.11.; crawling, pullups
    `

    function divideString(string){
        console.log(string.split(/\r?\n/));
    }

     function test_divideString(array){
        if (!Array.isArray(array)) {
            console.log("kein array");
        }

        if (table_string.length === array.join("").length){
            console.log("alles enthalten");
        };

    }


    divideString(table_string);