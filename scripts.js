



fetch("adressbok-1.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        let dataSet = data;
        console.log(dataSet);

        // write code here.
        // for (i=0; i< dataSet.length();i++){
        //     document.querySelector(".adress_list").innerHTML = dataSet[i].lastname;    
        // }

        // sorter array: tjek array.sort().
        // https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
       let result = sortByKey(dataSet, "age");
        console.log(result);
        

        function sortByKey(dataSet, age) {
            return dataSet.sort(function(a, b) {
                var x = a[age]; var y = b[age];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
        
        result.forEach(obj => {
            let element = document.createElement("li");
            name = obj.lastname;
            element.innerHTML = name;
            document.body.appendChild(element);
            
            let element1 = document.createElement("li");
            name1 = obj.firstname;
            element1.innerHTML = name1;
            document.body.appendChild(element1);
            
            let element2 = document.createElement("li");
            name2 = obj.email;
            
            element2.innerHTML = name2;
            
            document.body.appendChild(element2);
            
        });



    });
// Collapse