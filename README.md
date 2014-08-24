# Angular Revealer

An AngularJS directive that hides and reveals content.

## Browser Support
- IE9+ (no transitions)
- IE10+ with transitions
- Chrome, Safari, Opera, FireFox

## Install

Clone the repository and include directly into your project. You can also use bower and install as a dependency:

```
bower install ng-reaveler
```

Add the dependency in your Angular's project dependency arguments:

```js
var app = angular.module('MyApp', [
  'ng-revealer'
]);
```

### Dependencies

- I use Font-Awesome in the example, but this is not included in the project.

Make sure you reference the script in your javascript:

```js
<script src="bower_components/ng-revealer/ng-revealer.js"></script>
```

## Usage

Make sure your `reaveler-container` includes:
```
data-ng-revealer
```


### Html Structure

```html
<div class='revealer-container' data-ng-revealer>

  <p class='visible'>Visible</p>
  <p class='hidden'>Hidden</p>
  <a class='btn-reveal'>+ Reveal</a>

</div>
```

### TODO

-Modernizr for jQuery-fallback transitions
