/* Mom's Watercolor — galleries and lightbox.
   To add a painting or commission, add an entry to the lists below. */

var EMAIL = 'momswatercolor@gmail.com';

/* PAINTINGS (paintings.html)
   status: 'original' = original for sale, 'prints' = prints only,
           'both' = original + prints, 'sold' = sold, 'ask' = ask about availability
   subject: 'flowers', 'animals', 'urban', 'other' */
var PAINTINGS = [
  { img: 'images/tabby-cat.jpg', title: 'Tabby with green eyes', subject: 'animals', status: 'ask',
    alt: 'Detailed watercolor of a tabby cat with bright green eyes' },
  { img: 'images/palomino-horse.jpg', title: 'Palomino horse', subject: 'animals', status: 'ask',
    alt: 'Watercolor of a palomino horse cantering, with a pale golden mane' },
  { img: 'images/robin.jpg', title: 'Robin', subject: 'animals', status: 'ask',
    alt: 'Watercolor of a round orange-breasted robin perched on a branch' },
  { img: 'images/mushroom-study.jpg', title: 'Mushroom study', subject: 'flowers', status: 'ask',
    alt: 'Watercolor study sheet of red, orange, grey and brown mushrooms' }
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
  { img: 'images/chestnut-horse.jpg', tags: ['pets'], title: 'Chestnut horse',
    caption: 'A portrait of a horse in full gallop, painted for its owner.',
    alt: 'Watercolor of a chestnut horse galloping' },
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

var STATUS = {
  original: { badge: 'Original available', button: 'Ask about this painting' },
  prints:   { badge: 'Prints available', button: 'Ask about a print' },
  both:     { badge: 'Original + prints', button: 'Ask about this painting' },
  sold:     { badge: 'Sold', button: 'Commission something similar', link: 'custom.html#request' },
  ask:      { badge: 'Original', button: 'Ask about this painting' }
};

function el(tag, attrs, children) {
  var node = document.createElement(tag);
  for (var key in attrs || {}) {
    if (key === 'text') node.textContent = attrs[key];
    else node.setAttribute(key, attrs[key]);
  }
  (children || []).forEach(function (c) { if (c) node.appendChild(c); });
  return node;
}

function mailto(subject) {
  return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject);
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
  var subjects = [['all', 'All'], ['flowers', 'Flowers & Plants'], ['animals', 'Animals'], ['urban', 'Urban Sketches'], ['other', 'Other']]
    .filter(function (s) { return s[0] === 'all' || PAINTINGS.some(function (p) { return p.subject === s[0]; }); });
  function render(sel) {
    grid.innerHTML = '';
    PAINTINGS.filter(function (p) { return sel === 'all' || p.subject === sel; }).forEach(function (p) {
      var s = STATUS[p.status] || STATUS.ask;
      var btn = el('a', { 'class': 'btn ghost', href: s.link || mailto('Question about "' + p.title + '"'), text: s.button });
      grid.appendChild(pieceFigure(p, { before: [el('span', { 'class': 'badge', text: s.badge })], after: [btn] }));
    });
  }
  var f = document.getElementById('paintings-filters');
  if (subjects.length > 2) setupFilters(f, subjects, render); else if (f) f.remove();
  render('all');
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

/* Footer year */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
