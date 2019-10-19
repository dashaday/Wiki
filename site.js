var html = document.querySelector('html');

// Removes displayed information before displaying the new one

function closeOthers() {
  var infoContainer = html.querySelector('.sections-container');
  var infoSections = infoContainer.getElementsByClassName('section-content');
  // console.log(infoSections);
  for (let i = 0; i < infoSections.length; i++) {
    // console.log("section: " + infoSections[i]);
    if (infoSections[i].classList.contains('visible')) {
      infoSections[i].classList.toggle('visible');
    }
  }
}

// For the design page

if (document.querySelector('#design-page')) {

  // get component buttons

  var primerBtn = html.querySelector('#primer-button');
  var petaseBtn = html.querySelector('#petase-button');
  var assayBtn = html.querySelector('#assay-button');

  // Click listener for three design components

  primerBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#primer');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  petaseBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#petase');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  assayBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#assay');
    closeOthers();
    designContent.classList.toggle('visible');
  });

} // End of design page

// For the design page

if (document.querySelector('#experiment-page')) {

  // get component buttons

  var agarBtn = html.querySelector('#agar-button');
  var gelBtn = html.querySelector('#gel-button');
  var petBtn = html.querySelector('#pet-button');
  var gibsonBtn = html.querySelector('#gibson-button');
  var dnaMiniBtn = html.querySelector('#dna-mini-button');
  var dnaHDBtn = html.querySelector('#dna-hd-button');
  var pcrBtn = html.querySelector('#pcr-button');
  var pcrPurifyBtn = html.querySelector('#pcr-purify-button');
  var proteinBtn = html.querySelector('#protein-purify-button');

  // Click listener for three design components

  agarBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#agar');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  gelBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#gel');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  petBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#pet');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  gibsonBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#gibson');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  dnaMiniBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#dna-mini');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  dnaHDBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#dna-hd');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  pcrBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#pcr');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  pcrPurifyBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#pcr-purify');
    closeOthers();
    designContent.classList.toggle('visible');
  });

  proteinBtn.addEventListener('click', function(e) {
    let designContent = html.querySelector('#protein-purify');
    closeOthers();
    designContent.classList.toggle('visible');
  });

} // End of design page
