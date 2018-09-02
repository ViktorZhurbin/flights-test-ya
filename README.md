[Демо](https://flights-vzhurbin.firebaseapp.com)

## Ticker
### Почему `this._i` не увеличивается. Как исправить?

```js
function Ticker() {
  this._i = 0
};

Ticker.prototype = {
  tick: function() {
    console.log(this._i++);
  }
};

var ticker = new Ticker();
setInterval(ticker.tick, 1000);
```

`setInterval` выполняется в контексте глобального объекта (`window` в браузере), которому и будет равен `this`. У window нет свойства `_i`, и `undefined++` возвращает `NaN`.

Контекст можно привязать к нужному объекту с помощью методов `bind, call, apply`.

`setInterval` принимает первым аргументом функцию, поэтом нам подходит метод `bind`, который копирует функцию и возвращает ее с указанным контекстом `this`
```js
setInterval(ticker.tick.bind(ticker), 1000);
```