// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  // Your code here
  var capsule = [];

  var help = function(element) {
    if (element.classList && element.classList.contains(className)) {
      capsule.push(element);
      console.log(element);
    }

    if (element.childNodes) {
      _.each(element.childNodes, function(child) {
        help(child);
      })
    }
  }

  help(document.body);
  return capsule;
};

