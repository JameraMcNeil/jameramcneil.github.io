console.log('is this thing on?')

$(() => {

    // As a user, I am able to select and deselect a modal to learn the directions of the game //
    // setting up modal 

     //Grabbing About the Game button
  const $openBtn = $('#openModal');
  
  // Grabbing modal element
  const $modal = $('#modal');

  //Grabbing close button
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

  // Add event listener on the About Game Button
  $openBtn.on('click', openModal);

  // Add event listener to Close button
  $closeBtn.on('click', closeModal);

  // Setting Up Game //

  // As a user, I am able to choose an $dollar amount from any category ranging from $100-$500 under each category

  // Grab each $$$ category and create a new jQuery variable
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

  const $score = $('.score')

  const scoreCount = () => {
      
  }

  // Add event handlers to films category

  const filmContent100 = () => {
      $films100.css('background-color', '#FF91D2');
      $films100.css('color', 'black')
      const $div = $('<div>');
      $div.addClass('zoom')
      // Maybe I can utitlize backticks to help structure this paragraph because it's all blending together//
      $div.text('This 1978 film starred Diana Ross as a dog-loving Harlem school techer whisked away to another land. What is: ')
      // added buttons for each each answer 
      const $inputAnswerA = $('<button>')
      $inputAnswerA.addClass('Mahogony')
      $inputAnswerA.html('<p>Mahogony </p>')
      const $inputAnswerB = $('<button>')
      $inputAnswerB.addClass('Lady')
      $inputAnswerB.html('<p>Lady Sings the Blues</p>')
      const $inputAnswerC = $('<button>')
      $inputAnswerC.addClass('Wiz')
      $inputAnswerC.html('<p>The Wiz</p>')
      const $inputAnswerD = $ ('<button>')
      $inputAnswerD.addClass('Grease')
      $inputAnswerD.html('<p>Grease</p>')
      $div.append($inputAnswerA)
      $div.append($inputAnswerB)
      $div.append($inputAnswerC)
      $div.append($inputAnswerD)

      $films100.append($div)

      
  }

  const filmContent200 =() => {
      $films200.css('background-color','#FF91D2');
      $films200.css('color', 'black')
      const $div = $('<div>');
      $div.addClass('zoom')
      $div.text('This film was adapted from Terry McMillan\'s novel about for friends. What is: a) Sex and the City b) Waiting to Exhale c) The Score d) How Stella Got Her Groover Back')
      $films200.append($div)
  }

  const filmContent300 = () => {
    $films300.css('background-color','#FF91D2');
    $films300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This 2002 film follows two childhood friends as they bond over career, love, and Hip Hop. What is a) Brown Sugar b) Love Jones c) The Wood d) Honey')
    $films300.append($div)
  }

  const filmContent400 = () => {
    $films400.css('background-color','#FF91D2');
    $films400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This 1980\'s film follows a young price from a wealthy African country looking for love. What is a) The Prince and Me b) Princess Diaries c)Coming to America d) Shrek')
    $films400.append($div)
  }

  const filmContent500 = () => {
    $films500.css('background-color','#FF91D2');
    $films500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('In this film, Furious Styles educates a group of young men about the dangers of decreasing property values in the Black community and its correlation to gentrification. What is: a) Friday b) Menace II Society c) Higher Learning d) Boyz N the Hood')
    $films500.append($div)
  }

  const authorContent100 = () => {
    $authors100.css('background-color', '#FF91D2');
    $authors100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This author, poet, and activist told us about their life in a book about a \'Caged Bird\'. Who is: a)Billy D. Williams b) Maya Angelous c) Yaa Gyasi d)Oprah Winfrey')
    $authors100.append($div)
  }
  const authorContent200 = () => {
    $authors200.css('background-color', '#FF91D2');
    $authors200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This American novelist won the 2011 National Book Award for their novel \'Salvage the Bones\'. Who is: a) Britt Bennett b) Colson Whitehead c) Jesmyn Ward d) Toni Morrison.')
    $authors200.append($div)
  }

  const authorContent300 = () => {
    $authors300.css('background-color', '#FF91D2');
    $authors300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This author\'s Harlem-based love story novel was adapted for the film in 2018 and starred newcomer Kiki Lane. Who is: a) James Baldwin c) Richard Wright c) Langston Hughes d) Lorraine Hansberry')
    $authors300.append($div)
  }

  const authorContent400 = () => {
    $authors400.css('background-color', '#FF91D2');
    $authors400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('In the late 1960\'s, this author became the first Black female editor in fiction at Random House in NYC. Who is: a) Zora Neal Hurston b) Toni Morrison c) Alice Walker d) Angela Davis')
    $authors400.append($div)
  }

  const authorContent500 = () => {
    $authors500.css('background-color', '#FF91D2');
    $authors500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('The New York Times best-selling essay collection \'Bad Feminist\' was helmed by this Nebraska-born writer. Who is: a) Gabby Rivera b) Ashley Ford c) Saeed Jones d) Roxane Gay')
    $authors500.append($div)
  }

  const itemContent100 = () => {
    $items100.css('background-color', '#FF91D2');
    $items100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('These items are often found together beneath the kitchen sink. What are: a) doggie treats b) plastic bags c) cleaning supplies d) wires')
    $items100.append($div)
  }
  const itemContent200 = () => {
    $items200.css('background-color', '#FF91D2');
    $items200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This container lives in the fridge, but doesn\'t contain it\'s original contents. What is: a) egg carton b) orange juice bottle c) aluminum foil d) Country Crock container')
    $items200.append($div)
  }

  const itemContent300 = () => {
    $items300.css('background-color', '#FF91D2');
    $items300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('The photo of this historical Black figure is somwehere in your grandparent\'s home. What is: a) photo of Barack Obama b) photo of cast from Good Times c) photo of Denzel Washington d) photo of Michelle Obama')
    $items300.append($div)
  }

  const itemContent400 = () => {
    $items400.css('background-color', '#FF91D2');
    $items400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('An item that preserves the quality of your grand mother\'s furniture. What is: a) fabric spray b) furniture cleaning c) couch cover d) plastic wrap')
    $items400.append($div)
  }

  const itemContent500 = () => {
    $items500.css('background-color', '#FF91D2');
    $items500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('A 5 gallon jug is usually full of this: What is a) water b) change c) candy d) fish')
    $items500.append($div)
  }

  const musicContent100 = () => {
    $music100.css('background-color', '#FF91D2');
    $music100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This American singer previsouly released music under their given name, but emerged in 2016 with a new mysterious persona. Who is: a) Solange b) H.E.R. c) SZA d) Lauryn Hill')
    $music100.append($div)
  }

  const musicContent200 = () => {
    $music200.css('background-color', '#FF91D2');
    $music200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This musical competition began during the pandemic on Instagram. What is: a) Voices of Fire b) American Idol c) Verzuz d) America\'s Got Talent')
    $music200.append($div)
  }

  const musicContent300 = () => {
    $music300.css('background-color', '#FF91D2');
    $music300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This song was dedicated to the years 1999 and 2000. What is a) \'Girlfriend\' by Boy\'s World b) \'Uh-oh\' by Lumidee c) \'Rock the Boat \' by Aaliyah d) \'Back That Thang Up\' by Juvenile')
    $music300.append($div)
  }

  const musicContent400 = () => {
    $music400.css('background-color', '#FF91D2');
    $music400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This musician is the Queen. Who is a) Ke$ha b) Taylor Swift c) Adele d) Beyoncé Giselle Knowles-Carter')
    $music400.append($div)
  }

  const musicContent500 = () => {
    $music500.css('background-color', '#FF91D2');
    $music500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('Known as \'The Mother of the Blues,\' this singer bridged earlier vaudeville and the authentic expression of southern blues, influencing a generation of blues singers. Who is: a) Bessie Smith b) Ma Rainey c) Madam C. J. Walker d) Lucille Bogan')
    $music500.append($div)
  }

  const sayingsContent100 = () => {
    $sayings100.css('background-color', '#FF91D2');
    $sayings100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('A two-word dismissal. What is a) \'Bye, Felicia b) \'Get Gone!\' c) \'Girl Bye!\' d) \'That\'s enough!\'')
    $sayings100.append($div)
  }

  const sayingsContent200 = () => {
    $sayings200.css('background-color', '#FF91D2');
    $sayings200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('When you\'re a Native New Yorker and the temperature is low. What is: \'Omg, I\'m freezing!\' b) \'It\'s cold as hell\' c) \'It\'s brick outside\' d) \'Someone turn up the heat!\'')
    $sayings200.append($div)
  }

  const sayingsContent300 = () => {
    $sayings300.css('background-color', '#FF91D2');
    $sayings300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('What your mama said she\'d give you when you\'re crying: a) a treat b) \'something to cry about \' c) \'a pop on the butt\' d) a hug')
    $sayings300.append($div)
  }

  const sayingsContent400 = () => {
    $sayings400.css('background-color', '#FF91D2');
    $sayings400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('When your apperance is unsatisfactory. What is: \'You look a mess.\' b) \'You look hurt. \' c) \'You look like who shot john\' d) \'That\'s what you\'re wearing?\' ')
    $sayings400.append($div)
  }

  const sayingsContent500 = () => {
    $sayings500.css('background-color', '#FF91D2');
    $sayings500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('A response to a request for McDonalds. What is: a) \'I could go for a fry\' b) \'We\'re eating at home\' c) \'You got McDonald\'s money?\' d) \'Sure!\' ')
    $sayings500.append($div)
  }

  // Add event listeners to films category
  $films100.on('click', filmContent100)
  $films200.on('click', filmContent200)
  $films300.on('click', filmContent300)
  $films400.on('click', filmContent400)
  $films500.on('click', filmContent500)

  $authors100.on('click', authorContent100)
  $authors200.on('click', authorContent200)
  $authors300.on('click', authorContent300)
  $authors400.on('click', authorContent400)
  $authors500.on('click', authorContent500)

  $items100.on('click', itemContent100)
  $items200.on('click', itemContent200)
  $items300.on('click', itemContent300)
  $items400.on('click', itemContent400)
  $items500.on('click', itemContent500)

  $music100.on('click', musicContent100)
  $music200.on('click', musicContent200)
  $music300.on('click', musicContent300)
  $music400.on('click', musicContent400)
  $music500.on('click', musicContent500)

  $sayings100.on('click', sayingsContent100)
  $sayings200.on('click', sayingsContent200)
  $sayings300.on('click', sayingsContent300)
  $sayings400.on('click', sayingsContent400)
  $sayings500.on('click', sayingsContent500)

  // Add a class specifically for that category
  // Add the text that will be displayed in that category
  // Append the class of the specified category to it's parent class
})