console.log("Let's get this party started!");
const $gifDisplay = $('#gif-display');

const apiKey = 'rlh7oqa5iETMazgNdQH7uPugb41PTltv';
const baseUrl = 'https://api.giphy.com/v1/gifs/search';
const $searchBtn = $('#search-button');
const $delBtn = $('#delete-button');
const $form = $('form');

$form.on('submit', async function (e) {
  e.preventDefault();
  let $input = $('#search-input');
  let search = $input.val();
  $input.val('');
  const res = await axios.get(
    `${baseUrl}?api_key=${apiKey}&q=${search}&limit=20&offset=0&rating=g&lang=en`
  );
  //console.log(res.data);
  appendGif(res.data);
});

function appendGif(res) {
  let resLength = res.data.length;
  if (resLength) {
    let randId = Math.floor(Math.random() * resLength);
    let $newCol = $('<div>', { class: 'col-md-4 col-12 mb-4' });
    let $gif = $('<img>', {
      src: res.data[randId].images.original.url,
      class: 'w-100',
    });
    $newCol.append($gif);
    $gifDisplay.append($newCol);
  }
}

$delBtn.on('click', function () {
  $gifDisplay.empty();
});
