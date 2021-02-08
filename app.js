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

  // Add event handlers to films category

  const turnPink = () => {
      $films100.css('background-color', '#FF91D2');
      $films100.css('color', 'black')
      const $div = $('<div>');
      $div.addClass('zoom')
      $div.text('This 1978 film starred Diana Ross as a dog-loving Harlem school techer whisked away to another land.')
      $div.css('text-align', 'center')
      $films100.append($div)
  }

  // Add event listeners to films category
  $films100.on('click', turnPink)

  // Add a class specifically for that category
  // Add the text that will be displayed in that category
  // Append the class of the specified category to it's parent class
})