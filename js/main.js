/* Mom's Watercolor — galleries, filters, lightbox and copy-email buttons.
   To add a painting or commission, add an entry to the lists below. */

var EMAIL = 'momswatercolor@gmail.com';

/* PAINTINGS (paintings.html)
   size:     shown under the title, e.g. '4×6"'
   original: price of the original, e.g. '$20'. Use null once it sells.
   print:    price of a print, e.g. '$10'. Use null if no prints.
   If both prices are null, the painting shows as "Sold".
   subject:  cats, dogs, horses, birds, snowfairies, wildlife, flowers,
             landscapes, urban, holiday, people, other */
var PAINTINGS = [
  {"img": "images/tabby-in-the-sink.jpg", "title": "Tabby waving from the sink", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a tabby cat sitting in a bathroom sink with one paw raised"},
  {"img": "images/tabby-in-a-box.jpg", "title": "Tabby napping in a box", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a sleepy tabby cat tucked inside a cardboard box"},
  {"img": "images/white-cat-napping.jpg", "title": "White cat napping", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a white cat stretched out asleep on a cushion"},
  {"img": "images/beagle-on-the-bed.jpg", "title": "Beagle resting on the bed", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a beagle lying on a bed with its chin down"},
  {"img": "images/pit-bull-sprawled.jpg", "title": "Chocolate pit bull sprawled out", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a chocolate pit bull lying flat with legs splayed"},
  {"img": "images/grey-cat-lounging.jpg", "title": "Grey cat lounging", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a grey cat lounging against a wall on a wood floor"},
  {"img": "images/chihuahua-napping.jpg", "title": "Chihuahua napping", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a black and tan small dog asleep on its side"},
  {"img": "images/corgi-looking-back.jpg", "title": "Corgi looking back", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a corgi sitting with its back turned, looking over its shoulder"},
  {"img": "images/golden-on-the-stairs.jpg", "title": "Golden retriever asleep on the stairs", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a golden retriever sleeping across the stairs"},
  {"img": "images/fluffy-brown-puppy.jpg", "title": "Fluffy brown puppy", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a fluffy brown puppy lying down"},
  {"img": "images/tuxedo-cat-in-a-bowl.jpg", "title": "Tuxedo cat in a glass bowl", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a black and white cat curled up in a glass bowl"},
  {"img": "images/stellers-jay.jpg", "title": "Steller's jay", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a blue and black Steller's jay perched on a stump"},
  {"img": "images/dark-eyed-junco.jpg", "title": "Dark-eyed junco", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a dark-eyed junco on a mossy branch"},
  {"img": "images/house-finch.jpg", "title": "House finch", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a red-headed house finch on a curved branch"},
  {"img": "images/robin.jpg", "title": "Robin", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a round orange-breasted robin perched on a post"},
  {"img": "images/pink-mushrooms.jpg", "title": "Pink mushrooms on moss", "subject": "flowers", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of pink mushrooms growing from green moss"},
  {"img": "images/purple-mushrooms.jpg", "title": "Purple mushrooms", "subject": "flowers", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of tall slender mauve mushrooms"},
  {"img": "images/blue-eyed-husky.jpg", "title": "Blue-eyed husky", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor portrait of a husky with blue eyes and its tongue out"},
  {"img": "images/tabby-with-a-toy-mouse.jpg", "title": "Tabby with a toy mouse", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a tabby and white cat playing with a toy mouse"},
  {"img": "images/border-collie-frisbee.jpg", "title": "Border collie with a frisbee", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a border collie carrying a purple frisbee"},
  {"img": "images/orange-tabby-rolling.jpg", "title": "Orange tabby rolling over", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of an orange tabby cat rolling on its back"},
  {"img": "images/corgi-smiling.jpg", "title": "Corgi sitting and smiling", "subject": "dogs", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a smiling corgi sitting upright"},
  {"img": "images/tabby-at-the-bowl.jpg", "title": "Tabby at the food bowl", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a tabby cat seen from behind at its food bowl"},
  {"img": "images/pileated-woodpecker.jpg", "title": "Pileated woodpecker", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a red-crested pileated woodpecker on a tree trunk"},
  {"img": "images/annas-hummingbird.jpg", "title": "Anna's hummingbird", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of an Anna's hummingbird with a magenta head hovering"},
  {"img": "images/mourning-dove.jpg", "title": "Mourning dove on a fence", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a mourning dove perched on a wooden fence"},
  {"img": "images/chickadee-on-a-branch.jpg", "title": "Chickadee on a branch", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a black-capped chickadee on a branch"},
  {"img": "images/tabby-at-the-bowl-ink.jpg", "title": "Tabby at the food bowl (ink & watercolor)", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Ink and watercolor sketch of a tabby cat from behind at its bowl"},
  {"img": "images/snow-fairy-bare-branch.jpg", "title": "Snow fairy on a bare branch", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a fluffy white long-tailed tit on a bare branch"},
  {"img": "images/snow-fairy-blue-wash.jpg", "title": "Snow fairy in a soft blue wash", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a long-tailed tit on a snowy branch in soft blue-grey"},
  {"img": "images/snow-fairy-facing-forward.jpg", "title": "Snow fairy facing forward", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a round long-tailed tit facing forward on a branch"},
  {"img": "images/snow-fairy-wings-up.jpg", "title": "Snow fairy in flight", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a long-tailed tit flying with wings raised"},
  {"img": "images/snow-fairy-snowy-pine.jpg", "title": "Snow fairy on a snowy pine", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a long-tailed tit on a snow-covered pine branch"},
  {"img": "images/colorful-songbird.jpg", "title": "Colorful songbird on blossoms", "subject": "birds", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a blue, red and green songbird perched on pink blossoms"},
  {"img": "images/orange-tabby-lounging.jpg", "title": "Orange tabby lounging", "subject": "cats", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of an orange tabby cat lying down with green eyes"},
  {"img": "images/snow-fairy-falling-snow.jpg", "title": "Snow fairy in falling snow", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a white long-tailed tit on a branch against green with falling snow"},
  {"img": "images/snow-fairy-with-buds.jpg", "title": "Snow fairy on a budding branch", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a long-tailed tit on a branch with buds"},
  {"img": "images/snow-fairy-wings-out.jpg", "title": "Snow fairy with wings out", "subject": "snowfairies", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a long-tailed tit on a twig with its wings spread"},
  {"img": "images/magnolia-bud.jpg", "title": "Magnolia bud", "subject": "flowers", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a pink magnolia bud against a purple and blue background"},
  {"img": "images/pinwheels-in-a-meadow.jpg", "title": "Pinwheels in a spring meadow", "subject": "landscapes", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of colorful pinwheels in a green and yellow meadow"},
  {"img": "images/seaside-towers.jpg", "title": "Seaside towers with string lights", "subject": "urban", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Ink and watercolor of seaside apartment towers with string lights at dusk"},
  {"img": "images/palm-trees-burger-stand.jpg", "title": "Palm trees and a burger stand", "subject": "urban", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Ink and watercolor of palm trees beside a red and white burger stand"},
  {"img": "images/rooftops-and-power-lines.jpg", "title": "Rooftops and power lines", "subject": "urban", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Ink and watercolor of tiled rooftops and a power pole"},
  {"img": "images/purple-irises.jpg", "title": "Purple irises", "subject": "flowers", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of purple and yellow irises among green leaves"},
  {"img": "images/red-camellia.jpg", "title": "Red camellia", "subject": "flowers", "size": "4×6\"", "original": "$20", "print": "$10", "alt": "Watercolor of a red camellia blossom with glossy leaves"},
  {"img": "images/calico-walking.jpg", "title": "Calico walking toward you", "subject": "cats", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor of a calico cat walking forward with its tail up"},
  {"img": "images/blue-eyed-siamese.jpg", "title": "Blue-eyed Siamese", "subject": "cats", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor portrait of a Siamese cat with blue eyes"},
  {"img": "images/black-cat-windowsill.jpg", "title": "Black cat on the windowsill", "subject": "cats", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor of a black cat sitting on a windowsill by a brick wall"},
  {"img": "images/french-bulldog.jpg", "title": "French bulldog", "subject": "dogs", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor of a fawn French bulldog standing"},
  {"img": "images/curly-poodle.jpg", "title": "Curly brown poodle", "subject": "dogs", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor of a curly brown poodle trotting with its tongue out"},
  {"img": "images/santa-hat-kitty.jpg", "title": "Sleepy kitty in a Santa hat", "subject": "holiday", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor of a sleeping orange cat in a Santa hat with Merry Christmas lettering"},
  {"img": "images/snowy-cottage.jpg", "title": "Snowy cottage in the pines", "subject": "holiday", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor of a white cottage with a red door among pine trees and gold stars"},
  {"img": "images/holly-and-berries.jpg", "title": "Holly and berries", "subject": "holiday", "size": "5×7\"", "original": "$25", "print": "$10", "alt": "Watercolor of holly leaves with three red berries"},
  {"img": "images/chickadee-blue-blossoms.jpg", "title": "Chickadee with blue blossoms", "subject": "birds", "size": "6×8\"", "original": "$35", "print": "$15", "alt": "Watercolor of a chickadee perched on a stem with pale blue flowers"},
  {"img": "images/snow-fairy-pine-6x8.jpg", "title": "Snow fairy on a snowy pine (large)", "subject": "snowfairies", "size": "6×8\"", "original": "$35", "print": "$15", "alt": "Watercolor of a fluffy long-tailed tit on a snowy pine bough"},
  {"img": "images/cat-at-the-faucet.jpg", "title": "Long-haired tabby at the faucet", "subject": "cats", "size": "8×10\"", "original": "$50", "print": "$15", "alt": "Detailed watercolor of a long-haired tabby drinking from a kitchen faucet"},
  {"img": "images/black-friesian.jpg", "title": "Black Friesian galloping", "subject": "horses", "size": "8×10\"", "original": "$35", "print": "$15", "alt": "Watercolor of a black Friesian horse galloping with a flowing mane"},
  {"img": "images/white-horse.jpg", "title": "White horse standing", "subject": "horses", "size": "8×10\"", "original": "$35", "print": "$15", "alt": "Watercolor of a white horse standing in profile"},
  {"img": "images/dark-grey-horse.jpg", "title": "Dark grey horse galloping", "subject": "horses", "size": "8×10\"", "original": "$35", "print": "$15", "alt": "Watercolor of a dark grey horse galloping"},
  {"img": "images/palomino-horse.jpg", "title": "Palomino standing", "subject": "horses", "size": "8×10\"", "original": "$35", "print": "$15", "alt": "Watercolor of a palomino horse with a pale mane standing in profile"},
  {"img": "images/chestnut-horse.jpg", "title": "Chestnut horse galloping", "subject": "horses", "size": "8×10\"", "original": "$35", "print": "$15", "alt": "Watercolor of a chestnut horse galloping with white socks"},
  {"img": "images/gypsy-vanner.jpg", "title": "Piebald Gypsy Vanner", "subject": "horses", "size": "8×10\"", "original": "$35", "print": "$15", "alt": "Watercolor of a brown and white Gypsy Vanner horse with feathered feet"},
  {"img": "images/snow-fairy-6x9.jpg", "title": "Snow fairy on a branch", "subject": "snowfairies", "size": "6×9\"", "original": "$35", "print": "$15", "alt": "Watercolor of a long-tailed tit clinging to a branch with wings spread"},
  {"img": "images/autumn-mountain-lake.jpg", "title": "Autumn lake with mountains", "subject": "landscapes", "size": "8×10\"", "original": "$40", "print": "$15", "alt": "Watercolor of a mountain lake with evergreens and red autumn brush"},
  {"img": "images/autumn-street.jpg", "title": "Autumn street with a car", "subject": "urban", "size": "7×10\"", "original": "$30", "print": "$15", "alt": "Ink and watercolor of a car parked under an orange autumn tree"},
  {"img": "images/alpine-church.jpg", "title": "Alpine church below the peaks", "subject": "landscapes", "size": "8×10\"", "original": "$35", "print": "$15", "alt": "Watercolor of a small church in a green valley below jagged mountains"},
  {"img": "images/italian-window.jpg", "title": "Italian window with flowers", "subject": "urban", "size": "7×9\"", "original": "$25", "print": "$15", "alt": "Ink and watercolor of a stone wall window with iron grille under pink flowers"},
  {"img": "images/foggy-forest.jpg", "title": "Foggy forest", "subject": "landscapes", "size": "6×9\"", "original": "$25", "print": "$15", "alt": "Loose watercolor of evergreen trees in fog"},
  {"img": "images/snow-fairy-flying.jpg", "title": "Snow fairy flying toward you", "subject": "snowfairies", "size": "7×9\"", "original": "$35", "print": "$15", "alt": "Watercolor of a fluffy long-tailed tit flying forward with wings raised"},
  {"img": "images/northern-lights.jpg", "title": "Northern lights over a tipi", "subject": "landscapes", "size": "5×8\"", "original": "$20", "print": "$10", "alt": "Watercolor of green and gold northern lights over a glowing tipi and pines"},
  {"img": "images/baby-deer.jpg", "title": "Baby deer", "subject": "wildlife", "size": "6×8\"", "original": "$35", "print": "$15", "alt": "Watercolor of a spotted fawn standing among small flowers"},
  {"img": "images/riverside-bicycle.jpg", "title": "Riverside sunset with a bicycle", "subject": "landscapes", "size": "9×12\"", "original": "$50", "print": "$15", "alt": "Watercolor of a bicycle leaning on a tree by a river at sunset with a city beyond"},
  {"img": "images/tabby-cat.jpg", "title": "Tabby with green eyes", "subject": "cats", "alt": "Detailed watercolor of a tabby cat with bright green eyes", "size": null, "original": null, "print": null},
  {"img": "images/mushroom-study.jpg", "title": "Mushroom study", "subject": "flowers", "alt": "Watercolor study sheet of red, orange, grey and brown mushrooms", "size": null, "original": null, "print": null},
  {"img": "images/portrait-silver-chain.jpg", "title": "Portrait with silver chain", "subject": "people", "alt": "Watercolor portrait of a man with short grey hair and a silver chain against a blue background", "size": null, "original": null, "print": null},
  {"img": "images/portrait-pearls.jpg", "title": "Portrait with pearls", "subject": "people", "alt": "Watercolor portrait of a woman with shoulder-length hair and a pearl necklace", "size": null, "original": null, "print": null},
  {"img": "images/portrait-striped-shirt.jpg", "title": "Portrait in a striped shirt", "subject": "people", "alt": "Loose watercolor portrait of a man in a striped shirt against a blue wash", "size": null, "original": null, "print": null},
  {"img": "images/portrait-profile.jpg", "title": "Portrait in profile", "subject": "people", "alt": "Watercolor profile portrait of an older woman with short silver hair and a drop earring", "size": null, "original": null, "print": null},
  {"img": "images/portrait-white-beard.jpg", "title": "Portrait with white beard", "subject": "people", "alt": "Watercolor portrait of a man with a white beard and long swept-back hair", "size": null, "original": null, "print": null},
  {"img": "images/portrait-auburn-hair.jpg", "title": "Portrait with auburn hair", "subject": "people", "alt": "Watercolor portrait of a woman with wavy auburn hair against a dark blue background", "size": null, "original": null, "print": null}
];

/* PAST COMMISSIONS (custom.html)
   tags: 'pets', 'people', 'holiday', 'labels', 'nature' */
var WINE = 'Painted for a family-owned winery, then turned into digital artwork for their wine bottle labels.';
var COMMISSIONS = [
  { img: 'images/lucky-memorial-portrait.jpg', tags: ['pets'], title: 'Lucky',
    caption: 'A memorial portrait of a much-loved chihuahua, under a rainbow.',
    alt: 'Watercolor memorial portrait of Lucky, a chihuahua, beneath a rainbow' },
  { img: 'images/woman-and-her-cat.jpg', tags: ['pets', 'people', 'holiday'], title: 'Her and her cat',
    caption: 'A holiday portrait of a woman and her cat, framed in winter greenery.',
    alt: 'Watercolor of a woman nose to nose with her cat inside a holiday wreath' },
  { img: 'images/seattle-holiday-card.jpg', tags: ['people', 'holiday'], title: 'Happy Holidays from Seattle',
    caption: 'A custom holiday card with the couple painted in front of the Seattle skyline.',
    alt: 'Custom holiday card of a couple in front of the Seattle skyline and a mountain' },
  { img: 'images/lovebirds.jpg', tags: ['pets'], title: 'Two lovebirds',
    caption: 'A portrait of a pair of pet lovebirds.',
    alt: 'Watercolor of two lovebirds, one yellow and one green, on a perch' },
  { img: 'images/wine-label-cow.jpg', tags: ['labels'], title: 'Cow', caption: WINE,
    alt: 'Watercolor of a Holstein cow in front of a red barn' },
  { img: 'images/under-the-mistletoe.jpg', tags: ['people', 'holiday'], title: 'Under the mistletoe',
    caption: 'A playful holiday portrait of a couple.',
    alt: 'Watercolor of a couple kissing under mistletoe' },
  { img: 'images/wine-label-rooster.jpg', tags: ['labels'], title: 'Rooster', caption: WINE,
    alt: 'Watercolor of a rooster among red and pink flowers' },
  { img: 'images/hummingbird-1.jpg', tags: ['nature'], title: 'Hummingbird I',
    caption: 'One of a commissioned pair of hummingbirds and zinnias.',
    alt: 'Watercolor of a hummingbird feeding at an orange zinnia' },
  { img: 'images/winter-wreath.jpg', tags: ['people', 'holiday'], title: 'Winter wreath',
    caption: 'A holiday illustration portrait in a plaid coat.',
    alt: 'Watercolor of a woman in a plaid coat and striped scarf holding a wreath' },
  { img: 'images/wine-label-pig.jpg', tags: ['labels'], title: 'Pig', caption: WINE,
    alt: 'Watercolor of a curious pink pig' },
  { img: 'images/long-tailed-tits-1.jpg', tags: ['nature'], title: 'Long-tailed tits I',
    caption: 'One of a commissioned pair of tiny long-tailed tits, 2021.',
    alt: 'Watercolor of two long-tailed tits facing each other' },
  { img: 'images/hummingbird-2.jpg', tags: ['nature'], title: 'Hummingbird II',
    caption: 'The second of the hummingbird pair.',
    alt: 'Watercolor of a hummingbird approaching an orange zinnia' },
  { img: 'images/wine-label-lamb.jpg', tags: ['labels'], title: 'Lamb', caption: WINE,
    alt: 'Watercolor of a white lamb against a blue-green background' },
  { img: 'images/long-tailed-tits-2.jpg', tags: ['nature'], title: 'Long-tailed tits II',
    caption: 'The second of the long-tailed tit pair, 2021.',
    alt: 'Watercolor of two long-tailed tits, one perched and one in flight' }
];

function el(tag, attrs, children) {
  var node = document.createElement(tag);
  for (var key in attrs || {}) {
    if (key === 'text') node.textContent = attrs[key];
    else node.setAttribute(key, attrs[key]);
  }
  (children || []).forEach(function (c) { if (c) node.appendChild(c); });
  return node;
}

/* Lightbox */
var box, boxImg, boxText;
function openLightbox(src, alt, text) {
  if (!box) {
    box = el('dialog', { 'class': 'lightbox', 'aria-label': 'Enlarged painting' });
    var close = el('button', { 'class': 'close', 'aria-label': 'Close', text: '×' });
    close.addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
    boxImg = el('img', {});
    boxText = el('p', {});
    box.appendChild(close); box.appendChild(boxImg); box.appendChild(boxText);
    document.body.appendChild(box);
  }
  boxImg.src = src; boxImg.alt = alt; boxText.textContent = text;
  if (box.showModal) box.showModal(); else window.open(src, '_blank');
}

function pieceFigure(item, extra) {
  var zoom = el('button', { 'class': 'zoom', type: 'button', 'aria-label': 'Enlarge ' + item.title }, [
    el('img', { src: item.img, alt: item.alt, loading: 'lazy' })
  ]);
  zoom.addEventListener('click', function () { openLightbox(item.img, item.alt, item.title); });
  var cap = el('figcaption', {}, [
    el('span', { 'class': 'title', text: item.title }),
    item.caption ? el('span', { 'class': 'caption', text: item.caption }) : null
  ]);
  return el('figure', { 'class': 'piece' }, [zoom].concat(extra && extra.before || []).concat([cap]).concat(extra && extra.after || []));
}

function setupFilters(container, defs, onPick) {
  if (!container) return;
  var buttons = defs.map(function (d, i) {
    var b = el('button', { 'class': 'pill', type: 'button', 'aria-pressed': i === 0 ? 'true' : 'false', text: d[1] });
    b.addEventListener('click', function () {
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      onPick(d[0]);
    });
    container.appendChild(b);
    return b;
  });
}

/* Paintings page */
(function () {
  var grid = document.getElementById('paintings-gallery');
  if (!grid) return;
  var avail = 'all', subject = 'all';
  function isSold(p) { return !p.original && !p.print; }
  function matches(p) {
    var okAvail = avail === 'all' ||
      (avail === 'original' && !!p.original) ||
      (avail === 'print' && !!p.print) ||
      (avail === 'sold' && isSold(p));
    return okAvail && (subject === 'all' || p.subject === subject);
  }
  function render() {
    grid.innerHTML = '';
    var list = PAINTINGS.filter(matches);
    list.forEach(function (p) {
      var badges = el('div', { 'class': 'badges' });
      if (p.original) badges.appendChild(el('span', { 'class': 'badge ok', text: 'Original available' }));
      if (p.print) badges.appendChild(el('span', { 'class': 'badge ok', text: 'Print available' }));
      if (isSold(p)) badges.appendChild(el('span', { 'class': 'badge sold', text: 'Sold · not available' }));
      var prices = el('div', { 'class': 'prices' });
      if (p.original) prices.appendChild(el('div', {}, [el('span', { text: 'Original' }), el('strong', { text: p.original })]));
      if (p.print) prices.appendChild(el('div', {}, [el('span', { text: 'Print' }), el('strong', { text: p.print })]));
      var after = isSold(p)
        ? [el('a', { 'class': 'small', href: 'custom.html', text: 'Love it? Commission something similar →' })]
        : [prices];
      var item = { img: p.img, alt: p.alt, title: p.title, caption: p.size ? p.size + ' watercolor on Arches paper' : '' };
      grid.appendChild(pieceFigure(item, { before: [badges], after: after }));
    });
    var count = document.getElementById('paintings-count');
    if (count) count.textContent = list.length === 1 ? '1 painting' : list.length + ' paintings';
    var empty = document.getElementById('paintings-empty');
    if (empty) empty.hidden = list.length > 0;
  }
  setupFilters(document.getElementById('avail-filters'),
    [['all', 'All'], ['original', 'Original available'], ['print', 'Print available'], ['sold', 'Sold, not available']],
    function (v) { avail = v; render(); });
  var subjects = [['all', 'All subjects'], ['cats', 'Cats'], ['dogs', 'Dogs'], ['horses', 'Horses'], ['birds', 'Birds'],
    ['snowfairies', 'Snow Fairies'], ['wildlife', 'Wildlife'], ['flowers', 'Flowers & Plants'], ['landscapes', 'Landscapes'],
    ['urban', 'Urban Sketches'], ['holiday', 'Holiday'], ['people', 'People'], ['other', 'Other']]
    .filter(function (s) { return s[0] === 'all' || PAINTINGS.some(function (p) { return p.subject === s[0]; }); });
  var subjBox = document.getElementById('subject-filters');
  if (subjects.length > 2) setupFilters(subjBox, subjects, function (v) { subject = v; render(); });
  else if (subjBox) subjBox.parentNode.removeChild(subjBox);
  render();
})();

/* Custom page */
(function () {
  var grid = document.getElementById('commissions-gallery');
  if (!grid) return;
  var tabs = [['all', 'All'], ['pets', 'Pets'], ['people', 'People'], ['holiday', 'Holiday'], ['labels', 'Wine labels'], ['nature', 'Birds & nature']];
  function render(sel) {
    grid.innerHTML = '';
    COMMISSIONS.filter(function (c) { return sel === 'all' || c.tags.indexOf(sel) !== -1; })
      .forEach(function (c) { grid.appendChild(pieceFigure(c)); });
  }
  setupFilters(document.getElementById('commissions-filters'), tabs, render);
  render('all');
})();

/* Email address with a Copy button (no email links) */
(function () {
  var spots = document.querySelectorAll('[data-email]');
  Array.prototype.forEach.call(spots, function (spot) {
    spot.textContent = '';
    spot.appendChild(el('span', { 'class': 'email-text', text: EMAIL }));
    if (!navigator.clipboard) return;
    var btn = el('button', { type: 'button', 'class': 'copy-btn', text: 'Copy' });
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(EMAIL).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
      });
    });
    spot.appendChild(btn);
  });
})();

/* Footer year */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
