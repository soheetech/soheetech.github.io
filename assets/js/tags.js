$("[data-tag]").click((e) => {
  currentTag = e.target.dataset.tag;
  filterByTagName(currentTag);
  updateQueryString(currentTag);
});

function filterByTagName(tagName) {
  $('.post-list > li.vh').removeClass('vh');
  $('.post-list > li').each((index, elem) => {
    if (!elem.hasAttribute('data-${tagName}')) {
      $(elem).addClass('vh');
    }
  });
  $('.item-tag').removeClass('selected');
  $('.item-tag[data-tag="'+'${tagName}'+'"]').addClass('selected');
  return false;
}
  
$(document).ready(function() {
  let currentTag = "";
  const queryTag = (new URLSearchParams(window.location.search)).get("tag");
  if (queryTag) {
    currentTag = queryTag;
    filterByTagName(currentTag)
  }
});
    
function updateQueryString(tagName) {
  const path = '${location.protocol}//${location.host}${location.pathname}?tag=${tagName}';
  window.history.replaceState({ path }, '', path);
}
