var init = function(){
  // console.log('app started');

  var button = document.getElementById('add-button');
  var form = document.getElementById('quote-form');

  var palaver = document.getElementById('quote');
  var author = document.getElementById('author');

  var lastValue = undefined;

  var quotes = [
    {'text': "Visual Basic is the way forward, I don't know why we are doing JavaScript.", 
    'author': 'Jay Chetty'},
    {'text': 'The only CSS you need to know is background-color: tomato',
     'author': 'Rick'},
     {'text': 'Are those hand-cut artisan crisps?',
     'author': 'Keith'},
     {'text': "Scaffolding is nothing but a fiery hell.",
     'author': 'Valerie'}
    ];

    var li;
    var ul = document.getElementById('quote-list');

    for (quote of quotes){
       output = quote.text + ' : ' + '<span>' + quote.author + '</span>';
      
      li = document.createElement('li');
      
      li.innerHTML = output;
      ul.appendChild(li);
    }


  var handleClick = function() {
    var input = palaver.value + ' : ' + '<span>' + author.value + '</span>';
    li = document.createElement('li');
    li.innerHTML = input;
    ul.appendChild(li);
  }

//--remove li when clicked
    function getEventTarget(e) {
        // e = e || window.event;
        // return e.target || e.srcElement;   e.srcElement is for old IE versions
        return e.target ; 
    }
    
    ul.onclick = function(event) {
        var target = getEventTarget(event);
        target.parentNode.removeChild(target);
       // alert(target.innerHTML);
    };



  form.onsubmit = function(event){
    event.preventDefault();
    handleClick();
  } // form








}; // init



window.onload = init;