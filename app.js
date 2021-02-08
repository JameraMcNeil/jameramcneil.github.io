console.log('is this thing on?')

$(() => {
    // setting up modal //

     //Grabbing About the Game button
  const $openBtn = $("#openModal");
  
  // Grabbing modal element
  const $modal = $("#modal");

  //Grabbing close button
  const $closeBtn = $("#close");

      // Event Handlers //

  // Event handler to open the modal
  const openModal = () => {
    $modal.css("display", "block");
    setTimeout(openModal, 5000);
  }

  // Add event handler to close the button

  const closeModal = () => {
    $closeBtn.css("click", "none");
  }

    // Event Listeners //

  // Add event listerner on the About Game Button
  $openBtn.on("click", openModal);

  // Add event listener to Close button
  $closeBtn.on("click", closeModal);
})