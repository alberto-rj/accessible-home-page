function DirectionSwap (directionSettings) {
  this.initialPosition = undefined;
  this.finalPosition = undefined;
  this.settings = directionSettings;

  this.setPosition = function(position) {
    if (this.initialPosition === undefined) {
      this.initialPosition = position;
    }
    this.finalPosition = position;
  };

  this.getDistance = function () {
    return (this.finalPosition - this.initialPosition);
  };

  this.reset = function () {
    this.initialPosition = undefined;
    this.finalPosition = 0;
  };

  this.change = function (event) {
    var distance = this.getDistance();
    if (distance < 0) {
      this.settings.toLeft(event);
    } else if (distance > 0) {
      this.settings.toRight(event);
    }
    this.reset();
  };
}

function TouchSwap (settings) {

  this.horizontalSwap = new DirectionSwap({
    toRight: settings.toRight,
    toLeft: settings.toLeft
  });
  
  this.verticalSwap = new DirectionSwap({
    toRight: settings.toBottom,
    toLeft: settings.toTop
  });
  
  var thisValue = this;
  this.settings = settings;

  this.settings.target.addEventListener(
    'touchmove',
    function (event) {
      var touch = event.targetTouches[0];

      thisValue.horizontalSwap.setPosition(touch.clientX);
    
      thisValue.verticalSwap.setPosition(touch.clientY);
    }
  );

  this.settings.target.addEventListener(
    'touchend',
    function (event) {
      thisValue.horizontalSwap.change(event);
      thisValue.verticalSwap.change(event);
    }
  )
}

function TouchSwapSettings () {
  this.target= undefined;
  this.toTop = function (event) {};
  this.toLeft = function (event) {};
  this.toBottom = function (event) {};
  this.toRight = function (event) {}
}

const TouchSwapEvent = {};

TouchSwapEvent.listen = function (settings) {
  new TouchSwap(settings);
};

TouchSwapEvent.listenToLeft = function (target, toLeft){
  var settings = new TouchSwapSettings();
  settings.target = target;
  settings.toLeft = toLeft;
  this.listen(settings);
};

TouchSwapEvent.listenToRight = function (target, toRight) {
  var settings = new TouchSwapSettings();
  settings.target = target;
  settings.toRight = toRight;
  this.listen(settings);
};

TouchSwapEvent.listenX = function (target, toLeft, toRight) {
  var settings = new TouchSwapSettings();
  settings.target = target;
  settings.toLeft = toLeft;
  settings.toRight = toRight;
  this.listen(settings);
}

TouchSwapEvent.listenToTop = function (target, toTop) {
  var settings = new TouchSwapSettings();
  settings.target = target;
  settings.toTop = toTop;
  this.listen(settings);
};

TouchSwapEvent.listenToBottom = function (target, toBottom) {
  var settings = new TouchSwapSettings();
  settings.target = target;
  settings.toBottom = toBottom;
  this.listen(settings);
};

TouchSwapEvent.listenY = function (target, toTop, toBottom) {
  var settings = new TouchSwapSettings();
  settings.target = target;
  settings.toTop = toTop;
  settings.toBottom = toBottom;
  this.listen(settings);
}