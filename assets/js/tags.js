$("[data-tag]").click((e) => {
  currentTag = e.target.dataset.tag;
  filterByTagName(currentTag);
});

function filterByTagName(tagName) {
  $('.post-list > li').removeClass('vh');
  $('.post-list > li').each((index, elem) => {
    if (!elem.hasAttribute('data-'+tagName)) {
      $(elem).addClass('vh');
    }
  });
  $('.item-tag').removeClass('selected');
  $('.item-tag[data-tag="'+tagName+'"]').addClass('selected');
}
  
$(document).ready(function() {
  let currentTag = "";
  const queryTag = (new URLSearchParams(window.location.search)).get("tag");
  if (queryTag) {
    currentTag = queryTag;
    filterByTagName(currentTag)
  }
});
