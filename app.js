console.log('is this thing on?')

$(() => {
    // setting up modal //

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
})