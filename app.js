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
      // $films100.css('background-color', '#FF91D2');
      // $films100.css('color', 'black')
      const $div = $('<div>');
      $div.addClass('zoom')
      // Maybe I can utitlize backticks to help structure this paragraph because it's all blending together//
      $div.text('This 1978 film starred Diana Ross as a dog-loving Harlem school techer whisked away to another land. What is: ')
      // created a button element for each answer 
      //added a class to the button with the name of the answer
      // set an html element on the button of the answer itself so it's visible to user
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

      let answer = true;

      // add click event for buttons to change color on correct answer
      // $('button').on('click', (e) => {
      //   if (answer === '<p>The Wiz</p>') {
      //     $(e.currentTarget).css('background-color', 'green')
      //   }
      // })

      
  }

  const filmContent200 =() => {
      $films200.css('background-color','#FF91D2');
      $films200.css('color', 'black')
      const $div = $('<div>');
      $div.addClass('zoom')
      $div.text('This film was adapted from Terry McMillan\'s novel about for friends. What is: ')
      const $inputAnswerA = $('<button>')
      $inputAnswerA.addClass('SATC')
      $inputAnswerA.html('<p>Sex and the City</p>')
      const $inputAnswerB = $('<button>')
      $inputAnswerB.addClass('WTE')
      $inputAnswerB.html('<p>Waiting to Exhale</p>')
      const $inputAnswerC = $('<button>')
      $inputAnswerC.addClass('the-score')
      $inputAnswerC.html('<p>The Score</p>')
      const $inputAnswerD = $ ('<button>')
      $inputAnswerD.addClass('Stella')
      $inputAnswerD.html('<p>How Stella Got Her Groove Back</p>')
      $div.append($inputAnswerA)
      $div.append($inputAnswerB)
      $div.append($inputAnswerC)
      $div.append($inputAnswerD)


      $films200.append($div)
  }

  const filmContent300 = () => {
    $films300.css('background-color','#FF91D2');
    $films300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This 2002 film follows two childhood friends as they bond over career, love, and Hip Hop. What is:  ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('BrwnSugar')
    $inputAnswerA.html('<p>Brown Sugar</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('LoveJones')
    $inputAnswerB.html('<p>Love Jones</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('Wood')
    $inputAnswerC.html('<p>The Wood</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('honey')
    $inputAnswerD.html('<p>Honey</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)

    $films300.append($div)
  }

  const filmContent400 = () => {
    $films400.css('background-color','#FF91D2');
    $films400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This 1980\'s film follows a young price from a wealthy African country looking for love. What is:  ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('prince-me')
    $inputAnswerA.html('<p>Prince and Me</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('p-diaries')
    $inputAnswerB.html('<p>Princess Diaries</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('CTA')
    $inputAnswerC.html('<p>Coming to America/p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('shrek')
    $inputAnswerD.html('<p>Shrek</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    
    $films400.append($div)
  }

  const filmContent500 = () => {
    $films500.css('background-color','#FF91D2');
    $films500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('In this film, Furious Styles educates a group of young men about the dangers of decreasing property values in the Black community and its correlation to gentrification. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('friday')
    $inputAnswerA.html('<p>Friday</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('menace')
    $inputAnswerB.html('<p>Menace II Society</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('higher')
    $inputAnswerC.html('<p>Higher Learning</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('Boyz')
    $inputAnswerD.html('<p>Boyz N the Hood</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)

    $films500.append($div)
  }

  const authorContent100 = () => {
    $authors100.css('background-color', '#FF91D2');
    $authors100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This author, poet, and activist told us about their life in a book about a \'Caged Bird\'. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('billy')
    $inputAnswerA.html('<p>Billy D. Williams </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('Maya')
    $inputAnswerB.html('<p>Maya Angelou</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('gyasi')
    $inputAnswerC.html('<p>Yaa Gyasi</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('oprah')
    $inputAnswerD.html('<p>Ophrah Winfrey</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors100.append($div)

  }
  const authorContent200 = () => {
    $authors200.css('background-color', '#FF91D2');
    $authors200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This American novelist won the 2011 National Book Award for their novel \'Salvage the Bones\'. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('britt')
    $inputAnswerA.html('<p>Britt Bennett</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('Colson')
    $inputAnswerB.html('<p>Colson Whitehead</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('jesmyn')
    $inputAnswerC.html('<p>Jesmyn Ward</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('toni')
    $inputAnswerD.html('<p>Toni Morrison</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors200.append($div)
  }

  const authorContent300 = () => {
    $authors300.css('background-color', '#FF91D2');
    $authors300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This author\'s Harlem-based love story novel was adapted for the film in 2018 and starred newcomer Kiki Lane. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('baldwin')
    $inputAnswerA.html('<p>James Baldwin</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('wright')
    $inputAnswerB.html('<p>Richard Wright</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('hughes')
    $inputAnswerC.html('<p>Langston Hughes/p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('hansberry')
    $inputAnswerD.html('<p>Lorraine Hansberry</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors300.append($div)
  }

  const authorContent400 = () => {
    $authors400.css('background-color', '#FF91D2');
    $authors400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('In the late 1960\'s, this author became the first Black female editor in fiction at Random House in NYC. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('zora')
    $inputAnswerA.html('<p>Zora Neale Hurston </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('tmorrison')
    $inputAnswerB.html('<p>Toni Morrison</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('walker')
    $inputAnswerC.html('<p>Alice Walker</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('davis')
    $inputAnswerD.html('<p>Angela Davis</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors400.append($div)
  }

  const authorContent500 = () => {
    $authors500.css('background-color', '#FF91D2');
    $authors500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('The New York Times best-selling essay collection \'Bad Feminist\' was helmed by this Nebraska-born writer. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('rivera')
    $inputAnswerA.html('<p>Gabby Rivera</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('ford')
    $inputAnswerB.html('<p>Ashley Ford</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('jones')
    $inputAnswerC.html('<p>Saeed Jones</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('gay')
    $inputAnswerD.html('<p>Roxane Gay</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $authors500.append($div)
  }

  const itemContent100 = () => {
    $items100.css('background-color', '#FF91D2');
    $items100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('These items are often found together beneath the kitchen sink. What are: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('treats')
    $inputAnswerA.html('<p>doggie treats </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('bags')
    $inputAnswerB.html('<p>plastic bags</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('cleaning')
    $inputAnswerC.html('<p>cleaning supplies</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('wires')
    $inputAnswerD.html('<p>wires</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items100.append($div)
  }
  const itemContent200 = () => {
    $items200.css('background-color', '#FF91D2');
    $items200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This container lives in the fridge, but doesn\'t contain it\'s original contents. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('egg-carton')
    $inputAnswerA.html('<p>egg carton</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('bottle')
    $inputAnswerB.html('<p>orange juice bottle</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('foil')
    $inputAnswerC.html('<p>aluminum foil</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('country-crock')
    $inputAnswerD.html('<p>Country Crock</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items200.append($div)
  }

  const itemContent300 = () => {
    $items300.css('background-color', '#FF91D2');
    $items300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('The photo of this historical Black figure is somwehere in your grandparent\'s home. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('barack-obama')
    $inputAnswerA.html('<p>Photo of Barack Obama </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('good-times')
    $inputAnswerB.html('<p>Photo of cast from Good Times</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('denzel')
    $inputAnswerC.html('<p>Photo of Denzel Washinton</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('michelle-obama')
    $inputAnswerD.html('<p>Photo of Michelle Obama</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items300.append($div)
  }

  const itemContent400 = () => {
    $items400.css('background-color', '#FF91D2');
    $items400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('An item that preserves the quality of your grand mother\'s furniture. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('spray')
    $inputAnswerA.html('<p>Fabric Spray </p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('furniture-cleaning')
    $inputAnswerB.html('<p>Furniture Cleaning</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('couch-cover')
    $inputAnswerC.html('<p>Couch Cover</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('plastic-wrap')
    $inputAnswerD.html('<p>Plastic Wrap</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items400.append($div)
  }

  const itemContent500 = () => {
    $items500.css('background-color', '#FF91D2');
    $items500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('A 5 gallon jug is usually full of this: What is:  ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('water')
    $inputAnswerA.html('<p>Water</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('change')
    $inputAnswerB.html('<p>Change</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('candy')
    $inputAnswerC.html('<p>Candy</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('fish')
    $inputAnswerD.html('<p>Fish</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $items500.append($div)
  }

  const musicContent100 = () => {
    $music100.css('background-color', '#FF91D2');
    $music100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This American singer previsouly released music under their given name, but emerged in 2016 with a new mysterious persona. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('solange')
    $inputAnswerA.html('<p>Solange</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('her')
    $inputAnswerB.html('<p>H.E.R.</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('sza')
    $inputAnswerC.html('<p>SZA</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('lauryn-hill')
    $inputAnswerD.html('<p>Lauryn Hill</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music100.append($div)
  }

  const musicContent200 = () => {
    $music200.css('background-color', '#FF91D2');
    $music200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This musical competition began during the pandemic on Instagram. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('VOF')
    $inputAnswerA.html('<p>Voices of Fire</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('american-idol')
    $inputAnswerB.html('<p>American Idol</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('verzuz')
    $inputAnswerC.html('<p>Verzuz</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('AGT')
    $inputAnswerD.html('<p>America\'s Got Talent</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music200.append($div)
  }

  const musicContent300 = () => {
    $music300.css('background-color', '#FF91D2');
    $music300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This song was dedicated to the years 1999 and 2000. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('girlfriend')
    $inputAnswerA.html('<p>\'Girlfriend\' by Boy\'s World</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('lumidee')
    $inputAnswerB.html('<p>\'Uh-oh\' by Lumidee</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('aaliyah')
    $inputAnswerC.html('<p>\'Rock the Boat \' by Aaliyah</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('juvenile')
    $inputAnswerD.html('<p>\'Back That Thang Up\' by Juvenile</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music300.append($div)
  }

  const musicContent400 = () => {
    $music400.css('background-color', '#FF91D2');
    $music400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('This musician is the Queen. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('kesha')
    $inputAnswerA.html('<p>Ke$ha</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('taylor-swift')
    $inputAnswerB.html('<p>Taylor Swift</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('adele')
    $inputAnswerC.html('<p>Adele</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('bey')
    $inputAnswerD.html('<p>Beyoncé Giselle Knowles-Carter</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music400.append($div)
  }

  const musicContent500 = () => {
    $music500.css('background-color', '#FF91D2');
    $music500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('Known as \'The Mother of the Blues,\' this singer bridged earlier vaudeville and the authentic expression of southern blues, influencing a generation of blues singers. Who is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('bessie')
    $inputAnswerA.html('<p>Bessie Smith</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('ma-rainey')
    $inputAnswerB.html('<p>Ma Rainey</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('madame')
    $inputAnswerC.html('<p>Madam C. J. Walker</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('bogan')
    $inputAnswerD.html('<p>Lucille Bogan</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $music500.append($div)
  }

  const sayingsContent100 = () => {
    $sayings100.css('background-color', '#FF91D2');
    $sayings100.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('A two-word dismissal. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('bye')
    $inputAnswerA.html('<p>\'Bye, Felicia\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('get-gone')
    $inputAnswerB.html('<p>\'Get Gone!\'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('girl-bye')
    $inputAnswerC.html('<p>\'Girl Bye!\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('enough')
    $inputAnswerD.html('<p>\'That\'s enough!\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings100.append($div)
  }

  const sayingsContent200 = () => {
    $sayings200.css('background-color', '#FF91D2');
    $sayings200.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('When you\'re a Native New Yorker and the temperature is low. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('omg')
    $inputAnswerA.html('<p>\'Omg, I\'m freezing!\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('cold')
    $inputAnswerB.html('<p>\'It\'s cold as hell\'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('brick')
    $inputAnswerC.html('<p>\'It\'s brick outside\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('turn-up')
    $inputAnswerD.html('<p>\'Someone turn up the heat!\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings200.append($div)
  }

  const sayingsContent300 = () => {
    $sayings300.css('background-color', '#FF91D2');
    $sayings300.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('What your mama said she\'d give you when you\'re crying: What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('a-treat')
    $inputAnswerA.html('<p>a treat</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('cry')
    $inputAnswerB.html('<p>\'something to cry about \'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('pop')
    $inputAnswerC.html('<p>\'a pop on the butt\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('hug')
    $inputAnswerD.html('<p>a hug</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings300.append($div)
  }

  const sayingsContent400 = () => {
    $sayings400.css('background-color', '#FF91D2');
    $sayings400.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('When your apperance is unsatisfactory. What is: ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('messy')
    $inputAnswerA.html('<p>\'You look a mess.\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('hurt')
    $inputAnswerB.html('<p>\'You look hurt. \'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('john')
    $inputAnswerC.html('<p>\'You look like who shot john\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('wearing')
    $inputAnswerD.html('<p>\'That\'s what you\'re wearing?\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings400.append($div)
  }

  const sayingsContent500 = () => {
    $sayings500.css('background-color', '#FF91D2');
    $sayings500.css('color', 'black')
    const $div = $('<div>');
    $div.addClass('zoom')
    $div.text('A response to a request for McDonalds. What is: a) \'I could go for a fry\' b) \'We\'re eating at home\' c) \'You got McDonald\'s money?\' d) \'Sure!\' ')
    const $inputAnswerA = $('<button>')
    $inputAnswerA.addClass('yum-fries')
    $inputAnswerA.html('<p>\'I could go for a fry\'</p>')
    const $inputAnswerB = $('<button>')
    $inputAnswerB.addClass('home-meal')
    $inputAnswerB.html('<p>\'We\'re eating at home\'</p>')
    const $inputAnswerC = $('<button>')
    $inputAnswerC.addClass('mickie-dees')
    $inputAnswerC.html('<p>\'You got McDonald\'s money?\'</p>')
    const $inputAnswerD = $ ('<button>')
    $inputAnswerD.addClass('all-yes')
    $inputAnswerD.html('<p>\'Sure!\'</p>')
    $div.append($inputAnswerA)
    $div.append($inputAnswerB)
    $div.append($inputAnswerC)
    $div.append($inputAnswerD)
    $sayings500.append($div)
  }

  // Add event listeners to each category
  // Found that everytime I clicked the
  $films100.on('click', (e) => {
    $films100.css('background-color', '#FF91D2');
    $films100.css('color', 'black')
    $films100.off('click')
    // e.preventDefault();
    // $(e.currentTarget).trigger('reset');
    filmContent100()
  })


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