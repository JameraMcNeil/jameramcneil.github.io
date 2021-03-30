// console.log('is this thing on?')

$(() => {

    // As a user, I am able to select and deselect a modal to learn the directions of the game //

    // setting up modal 
    // Selecting modal elements that users will be interacting with

  const $openBtn = $('#openModal');
  
  const $modal = $('#modal');

  const $closeBtn = $('#close');

      // Event Handlers //

  // Event handler to open the modal
  const openModal = () => {
    $modal.css('display', 'block');
  }

  // Add event handler to close the button

  const closeModal = () => {
    $modal.css('display', 'none');
  }

    // Event Listeners //

  // Add event listener on the Learn to Play button
  $openBtn.on('click', openModal);

  // Add event listener to Close button
  $closeBtn.on('click', closeModal);

  // Setting Up Game //

  // As a user, I am able to choose an $dollar amount from any category ranging from $100-$500 under each category

  // Select  each $$$ category and create a new jQuery variable
  const $films100 = $('.films-100')
  const $films200 = $('.films-200')
  const $films300 = $('.films-300')
  const $films400 = $('.films-400')
  const $films500 = $('.films-500')
  const $authors100 = $('.authors-100')
  const $authors200 = $('.authors-200')
  const $authors300 = $('.authors-300')
  const $authors400 = $('.authors-400')
  const $authors500 = $('.authors-500')
  const $items100 = $('.items-100')
  const $items200 = $('.items-200')
  const $items300 = $('.items-300')
  const $items400 = $('.items-400')
  const $items500 = $('.items-500')
  const $music100 = $('.music-100')
  const $music200 = $('.music-200')
  const $music300 = $('.music-300')
  const $music400 = $('.music-400')
  const $music500 = $('.music-500')
  const $sayings100 = $('.sayings-100')
  const $sayings200 = $('.sayings-200')
  const $sayings300 = $('.sayings-300')
  const $sayings400 = $('.sayings-400')
  const $sayings500 = $('.sayings-500')

  // const $score = $('.score')

  // const scoreCount = () => {
      
  // }

  // Add event handlers for content within each category
  // Create a new function that will contain question and answers
  // Create a new div that adds the css zoom class to the function

  const filmContent100 = () => {
    //To help with structuring I added a paragraph to the new div that will have the question displayed inside the section when it's grabbed
      const $div = $('<div>');
      $div.addClass('zoom')
      $div.html('<p>This 1978 film starred Diana Ross as a dog-loving Harlem school techer whisked away to another land. What is: </p>')
      // Maybe I can utitlize backticks to help structure this paragraph because it's all blending together//
      // $div.text('This 1978 film starred Diana Ross as a dog-loving Harlem school techer whisked away to another land. What is: ')
      // Create a button element for each answer 
      //Add a class to the button which groups teogether all of the potential answers
      const $inputAnswerA = $('<button>')
      $inputAnswerA.addClass('answer-button')
      $inputAnswerA.html('<p>Mahogony </p>')
      const $inputAnswerB = $('<button>')
      $inputAnswerB.addClass('answer-button')
      $inputAnswerB.html('<p>Lady Sings the Blues</p>')
      const $inputAnswerC = $('<button>')
      $inputAnswerC.addClass('answer-button')
      $inputAnswerC.html('<p>The Wiz</p>')
      const $inputAnswerD = $ ('<button>')
      $inputAnswerD.addClass('answer-button')
      $inputAnswerD.html('<p>Grease</p>')
      $div.append($inputAnswerA)
      $div.append($inputAnswerB)
      $div.append($inputAnswerC)
      $div.append($inputAnswerD)
    // append the div to the table data
      $films100.append($div)


      // add click event for buttons to spark an alert on correct answer
      // select element that will be affected when clicked

      $('.answer-button').on('click', (e) => {
    // checking to see what element and text is selected when the event occurs
        // console.log($(e.currentTarget).text())
        //create a conditional that takes current target and compares it to the string of the correct answer
        if ( $(e.currentTarget).text() == 'The Wiz') {
          // sets an alert informing user answer is correct
          alert('The Wiz is the correct answer! You\'ve earned $100!')
          // grabbing the score element and the value of the class element 
          // add the value of the score to the class holding the number
          // $score.text(parseInt($score.text()) + $(`<td>:contains('$100')`).text())
          
        } else {
          alert('Sorry, that\'s the wrong answer.')
        }
      })

      
  }

  const filmContent200 =() => {
      const $div = $('<div>');
      $div.addClass('zoom')
      $div.html('<p>This film was adapted from Terry McMillan\'s novel about four friends. What is: </p>')
      const $inputAnswerA = $('<button>')
      $inputAnswerA.addClass('answer-button')
      $inputAnswerA.html('<p>Sex and the City</p>')
      const $inputAnswerB = $('<button>')
      $inputAnswerB.addClass('answer-button')
      $inputAnswerB.html('<p>Waiting to Exhale</p>')
      const $inputAnswerC = $('<button>')
      $inputAnswerC.addClass('answer-button')
      $inputAnswerC.html('<p>The Score</p>')
      const $inputAnswerD = $ ('<button>')
      $inputAnswerD.addClass('answer-button')
      $inputAnswerD.html('<p>How Stella Got Her Groove Back</p>')
      $div.append($inputAnswerA)
      $div.append($inputAnswerB)
      $div.append($inputAnswerC)
      $div.append($inputAnswerD)


      $films200.append($div)

      $('.answer-button').on('click', (e) => {
        if ($(e.currentTarget).text() == 'Waiting to Exhale') {
          alert('Waiting to Exhale is the correct answer! You\'ve earned $200!')
        } else {
          alert('Sorry, that\'s the wrong answer.')
        }
      })
  }

  const filmContent300 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This 2002 film follows two childhood friends as they bond over career, love, and Hip Hop. What is:  </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Brown Sugar</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Love Jones</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>The Wood</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Honey</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)

    $films300.append($div)


    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Brown Sugar') {
        alert('Brown Sugar is the correct answer! You\'ve earned $300!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })
  }

  const filmContent400 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This 1980\'s film follows a young prince from a wealthy African country looking for love. What is:  ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Prince and Me</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Princess Diaries</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Coming to America</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Shrek</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    
    $films400.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Coming to America') {
        alert('Coming to America is the correct answer! You\'ve earned $400!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })


  }

  const filmContent500 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>In this film, Furious Styles educates a group of young men about the dangers of decreasing property values in the Black community and its correlation to gentrification. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Friday</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Menace II Society</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Higher Learning</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Boyz N the Hood</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)

    $films500.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Boyz N the Hood') {
        alert('Boyz N the Hood is the correct answer! You\'ve earned $500!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })


  }

  const authorContent100 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This author, poet, and activist told us about their life in a book about a \'Caged Bird\'. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Billy D. Williams </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Maya Angelou</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Yaa Gyasi</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Oprah Winfrey</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors100.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Maya Angelou') {
        alert('Maya Angelou is the correct answer! You\'ve earned $100!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const authorContent200 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This American novelist won the 2011 National Book Award for their novel \'Salvage the Bones\'. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Britt Bennett</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Colson Whitehead</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Jesmyn Ward</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Toni Morrison</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors200.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Jesmyn Ward') {
        alert('Jesmyn Ward is the correct answer! You\'ve earned $200!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })
  }

  const authorContent300 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This author\'s Harlem-based love story novel was adapted for the film in 2018 and starred newcomer Kiki Lane. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>James Baldwin</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Richard Wright</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Langston Hughes</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Lorraine Hansberry</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors300.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'James Baldwin') {
        alert('James Baldwin is the correct answer! You\'ve earned $300!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const authorContent400 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>In the late 1960\'s, this author became the first Black female editor in fiction at Random House in NYC. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Zora Neale Hurston </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Toni Morrison</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Alice Walker</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Angela Davis</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors400.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Toni Morrison') {
        alert('Toni Morrison is the correct answer! You\'ve earned $400!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const authorContent500 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>The New York Times best-selling essay collection \'Bad Feminist\' was helmed by this Nebraska-born writer. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Gabby Rivera</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Ashley Ford</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Saeed Jones</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Roxane Gay</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors500.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Roxane Gay') {
        alert('Roxane Gay is the correct answer! You\'ve earned $500!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const itemContent100 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>These items are often found together beneath the kitchen sink. What are: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>doggie treats </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>plastic bags</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>cleaning supplies</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>wires</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items100.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'plastic bags') {
        alert('Plastic bags is the correct answer! You\'ve earned $100!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })  

  }

  const itemContent200 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This container lives in the fridge, but doesn\'t contain it\'s original contents. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>egg carton</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>orange juice bottle</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>aluminum foil</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Country Crock</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items200.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Country Crock') {
        alert('Country Crock is the correct answer! You\'ve earned $200!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const itemContent300 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>The photo of this historical Black figure is somwehere in your grandparent\'s home. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Photo of Barack Obama</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Photo of cast from Good Times</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Photo of Denzel Washinton</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Photo of Michelle Obama</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items300.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Photo of Barack Obama') {
        alert('Photo of Barack Obama is the correct answer! You\'ve earned $300!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const itemContent400 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>An item that preserves the quality of your grand mother\'s furniture. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Fabric Spray </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Furniture Cleaning</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Couch Cover</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Plastic Wrap</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items400.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Plastic Wrap') {
        alert('\'Plastic Wrap\' is the correct answer! You\'ve earned $400!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const itemContent500 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('A 5 gallon jug is usually full of this: What is:  ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Water</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Change</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Candy</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Fish</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items500.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Change') {
        alert('\'Change\' is the correct answer! You\'ve earned $500!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })


  }

  const musicContent100 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This American singer previsouly released music under their given name, but emerged in 2016 with a new mysterious persona. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Solange</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>H.E.R.</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>SZA</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Lauryn Hill</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music100.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'H.E.R.') {
        alert('H.E.R. is the correct answer! You\'ve earned $100!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const musicContent200 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This musical competition began during the pandemic on Instagram. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Voices of Fire</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>American Idol</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Verzuz</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>America\'s Got Talent</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music200.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Verzuz') {
        alert('Verzuz is the correct answer! You\'ve earned $200!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })


  }

  const musicContent300 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This song was dedicated to the years 1999 and 2000. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>\'Girlfriend\' by Boy\'s World</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>\'Uh-oh\' by Lumidee</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>\'Rock the Boat \' by Aaliyah</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>\'Back That Thang Up\' by Juvenile</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music300.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == '\'Back That Thang Up\' by Juvenile') {
        alert('\'Back That Thang Up\' by Juvenile is the correct answer! You\'ve earned $300!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const musicContent400 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>This musician is the Queen. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Ke$ha</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Taylor Swift</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Adele</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Beyoncé Giselle Knowles-Carter</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music400.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Beyoncé Giselle Knowles-Carter') {
        alert('Beyoncé Giselle Knowles-Carter is the correct answer! You\'ve earned $400!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const musicContent500 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>Known as \'The Mother of the Blues,\' this singer bridged earlier vaudeville and the authentic expression of southern blues, influencing a generation of blues singers. Who is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>Bessie Smith</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>Ma Rainey</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>Madam C. J. Walker</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>Lucille Bogan</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music500.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == 'Ma Rainey') {
        alert('Ma Rainey is the correct answer! You\'ve earned $500!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const sayingsContent100 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>A two-word dismissal. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>\'Bye, Felicia\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>\'Get Gone!\'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>\'Girl Bye!\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>\'That\'s enough!\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings100.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == '\'Bye, Felicia\'') {
        alert('\'Bye, Felicia\' is the correct answer! You\'ve earned $100!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const sayingsContent200 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>When you\'re a Native New Yorker and the temperature is low. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>\'Omg, I\'m freezing!\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>\'It\'s cold as hell\'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>\'It\'s brick outside\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>\'Someone turn up the heat!\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings200.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == '\'It\'s brick outside\'') {
        alert('\'It\'s brick outside\' is the correct answer! You\'ve earned $200!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const sayingsContent300 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>What your mama said she\'d give you when you\'re crying: What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>a treat</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>\'something to cry about \'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>\'a pop on the butt\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>a hug</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings300.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == '\'something to cry about \'') {
        alert('\'something to cry about \' is the correct answer! You\'ve earned $300!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const sayingsContent400 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>When your apperance is unsatisfactory. What is: </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>\'You look a mess.\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>\'You look hurt. \'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>\'You look like who shot john\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>\'That\'s what you\'re wearing?\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings400.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == '\'You look like who shot john\'') {
        alert('\'You look like who shot john\' is the correct answer! You\'ve earned $400!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  const sayingsContent500 = () => {
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.html('<p>A response to a request for McDonalds. What is:  </p>')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('answer-button')
    $inputAnswerA.html('<p>\'I could go for a fry\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('answer-button')
    $inputAnswerB.html('<p>\'We\'re eating at home\'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('answer-button')
    $inputAnswerC.html('<p>\'You got McDonald\'s money?\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('answer-button')
    $inputAnswerD.html('<p>\'Sure!\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings500.append($div)

    $('.answer-button').on('click', (e) => {
      if ($(e.currentTarget).text() == '\'You got McDonald\'s money?\'') {
        alert('\'You got McDonald\'s money?\' is the correct answer! You\'ve earned $500!')
      } else {
        alert('Sorry, that\'s the wrong answer.')
      }
    })

  }

  // Add event listeners to each category
  // Found that everytime I clicked the clicked event it would duplicate the box so
  // I separated the click first event from the event handlers
  // Then I added the off.click method to tell the code to stop the click right before it runs the function 

  $films100.on('click', () => {
    $films100.css('background-color', '#FF91D2');
    $films100.css('color', 'black')
    $films100.off('click')
    filmContent100()
  })


  $films200.on('click', () => {
    $films200.css('background-color', '#FF91D2');
    $films200.css('color', 'black')
    $films200.off('click')
    filmContent200()
})

  $films300.on('click', () => {
    $films300.css('background-color', '#FF91D2');
    $films300.css('color', 'black')
    $films300.off('click')
    filmContent300()
  })
  $films400.on('click', () => {
    $films400.css('background-color', '#FF91D2');
    $films400.css('color', 'black')
    $films400.off('click')
    filmContent400()
  })

  $films500.on('click', () => {
    $films500.css('background-color', '#FF91D2');
    $films500.css('color', 'black')
    $films500.off('click')
    filmContent500()
  })

  $authors100.on('click', () => {
    $authors100.css('background-color', '#FF91D2');
    $authors100.css('color', 'black')
    $authors100.off('click')
    authorContent100()
  })
  $authors200.on('click', () => {
    $authors200.css('background-color', '#FF91D2');
    $authors200.css('color', 'black')
    $authors200.off('click')
    authorContent200()
  })

  $authors300.on('click', () => {
    $authors300.css('background-color', '#FF91D2');
    $authors300.css('color', 'black')
    $authors300.off('click')
    authorContent300()
  })

  $authors400.on('click', () => {
    $authors400.css('background-color', '#FF91D2');
    $authors400.css('color', 'black')
    $authors400.off('click')
    authorContent400()
  })

  $authors500.on('click', () => {
    $authors500.css('background-color', '#FF91D2');
    $authors500.css('color', 'black')
    $authors500.off('click')
    authorContent500()
  })

  $items100.on('click', () => {
    $items100.css('background-color', '#FF91D2');
    $items100.css('color', 'black')
    $items100.off('click')
    itemContent100()
  })

  $items200.on('click', () => {
    $items200.css('background-color', '#FF91D2');
    $items200.css('color', 'black')
    $items200.off('click')
    itemContent200()
  })

  $items300.on('click', () => {
    $items300.css('background-color', '#FF91D2');
    $items300.css('color','black')
    $items300.off('click')
    itemContent300()
  })

  $items400.on('click', () => {
    $items400.css('background-color', '#FF91D2');
    $items400.css('color', 'black')
    $items400.off('click')
    itemContent400()
  })

  $items500.on('click', () => {
    $items500.css('background-color', '#FF91D2');
    $items500.css('color', 'black')
    $items500.off('click')
    itemContent500()
  })

  $music100.on('click', () => {
    $music100.css('background-color', '#FF91D2');
    $music100.css('color', 'black')
    $music100.off('click')
    musicContent100()
  })

  $music200.on('click', () => {
    $music200.css('background-color', '#FF91D2');
    $music200.css('color', 'black')
    $music200.off('click')
    musicContent200()
  })

  $music300.on('click', () => {
    $music300.css('background-color', '#FF91D2');
    $music300.css('color', 'black')
    $music300.off('click')
    musicContent300()
  })

  $music400.on('click', () => {
    $music400.css('background-color', '#FF91D2');
    $music400.css('color', 'black')
    $music400.off('click')
    musicContent400()
  })

  $music500.on('click', () => {
    $music500.css('background-color', '#FF91D2');
    $music500.css('color', 'black')
    $music500.off('click')
    musicContent500()
  })

  $sayings100.on('click', () => {
    $sayings100.css('background-color', '#FF91D2');
    $sayings100.css('color', 'black')
    $sayings100.off('click')
    sayingsContent100()
  })

  $sayings200.on('click', () => {
    $sayings200.css('background-color', '#FF91D2');
    $sayings200.css('color', 'black')
    $sayings200.off('click')
    sayingsContent200()
  })

  $sayings300.on('click', () => {
    $sayings300.css('background-color', '#FF91D2');
    $sayings300.css('color', 'black')
    $sayings300.off('click')
    sayingsContent300()
  })

  $sayings400.on('click', () => {
    $sayings400.css('background-color', '#FF91D2');
    $sayings400.css('color', 'black')
    $sayings400.off('click')
    sayingsContent400()
  })


  $sayings500.on('click', () => {
    $sayings500.css('background-color', '#FF91D2');
    $sayings500.css('color', 'black')
    $sayings500.off('click')
    sayingsContent500()
  })

  
})