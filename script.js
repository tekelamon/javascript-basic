document.getElementById('executeBtn').addEventListener('click', function() {
    const outputElement = document.getElementById('output');

/* JavaScript data types:
      - string
      - number
      - boolean
      - object
      - function
*/

    // Your JavaScript code goes here

// string examples
    const message = 'Hello, JavaScript!';
    let firstName = "Teke";
    let lastName = "Byas";
    console.log( firstName + ' ' + lastName );

// number examples
    let grossIncome = 90000;
    let tax = 0.05;
    let netIncome = grossIncome - ( grossIncome * tax );

    console.log( "$" + netIncome );

// boolean examples
    console.log("1" === 1);
    console.log("1" == 1);
    console.log( 3 > 5 );
    console.log( true );
    console.log( false );

    outputElement.textContent = firstName + ' ' + lastName;
});
