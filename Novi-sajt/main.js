const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(0.9)';
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});

const links = document.querySelectorAll('a');

// Loop through each link and add a mouseover event listener
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Set the font size and padding of the link to make it appear expanded
    link.style.fontSize = '24px';
    link.style.padding = '10px';
  });

  // Add a mouseout event listener to reset the link styles when the cursor moves away from the link
  link.addEventListener('mouseout', () => {
    link.style.fontSize = '16px';
    link.style.padding = '5px';
  });
});