document.addEventListener('DOMContentLoaded', function() {
    // Select elements by their ID
    const redBox = document.getElementById('red-box');
    const blueBox = document.getElementById('blue-box');
    
    // Function to handle the click event
    function toggleColor(event) {
        if (event.target.id === 'red-box') {
            event.target.id = 'blue-box';
            event.target.classList.replace('red-box', 'blue-box');
            event.target.querySelector('p').textContent = 'I am blue';
        } else if (event.target.id === 'blue-box') {
            event.target.id = 'red-box';
            event.target.classList.replace('blue-box', 'red-box');
            event.target.querySelector('p').textContent = 'I am red';
        }
    }

    // Add click event listeners to both elements
    redBox.addEventListener('click', toggleColor);
    blueBox.addEventListener('click', toggleColor);
    
    // JSON parsing and stringifying example
    const jsonString = `{
      "movies": [
        {
          "title": "Baahubali: The Beginning",
          "director": "S.S. Rajamouli",
          "year": 2015,
          "genre": "Action",
          "actors": ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
        },
        {
          "title": "Baahubali: The Conclusion",
          "director": "S.S. Rajamouli",
          "year": 2017,
          "genre": "Action",
          "actors": ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
        },
        {
          "title": "Arjun Reddy",
          "director": "Sandeep Reddy Vanga",
          "year": 2017,
          "genre": "Romance",
          "actors": ["Vijay Deverakonda", "Shalini Pandey", "Rahul Ramakrishna"]
        }
      ]
    }`;

    // Parse the JSON string into a JavaScript object
    const movieCollection = JSON.parse(jsonString);

    // Log the movie titles
    console.log("Movies in the collection:");
    movieCollection.movies.forEach(movie => {
        console.log(`- ${movie.title}`);
    });

    // Add a new movie to the collection
    movieCollection.movies.push({
        "title": "Ala Vaikunthapurramuloo",
        "director": "Trivikram Srinivas",
        "year": 2020,
        "genre": "Drama",
        "actors": ["Allu Arjun", "Pooja Hegde", "Tabu"]
    });

    // Log the updated movie collection
    console.log("Updated Movies in the collection:");
    movieCollection.movies.forEach(movie => {
        console.log(`- ${movie.title}`);
    });

    // Convert the updated collection back to a JSON string
    const updatedJsonString = JSON.stringify(movieCollection, null, 2);
    console.log(updatedJsonString);
});
