
function Button(text) {
  this.text = text;
}

Button.prototype = {
  create: function() {
    var self = this;
    this.$element = $('<button>'); 
    this.$element.text(this.text);
    this.$element.click(function() {
      alert(self.text);
    });
    this.$element.appendTo($('body')); 
  }
}

var someBtn = new Button('Hello all little mouses. We going to make u wireless!!!');
someBtn.create();

