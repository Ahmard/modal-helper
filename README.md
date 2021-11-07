# Modal Helper

[Bootstrap](https://getbootstrap.com) 5 javascript modal helper.

# Requirements
This library requires
[Bootstrap](https://getbootstrap.com) and
[jQuery](https://jquery.com) to work
.
# Installation

```
npm install @ahmard/modal-helper
```

## Basic Usage

```js
const modal = ModalHelper.create(jQuery('#modal'));

modal.setTitle('Login')
    .setBody('<b>Login Form</b>')
    .setFooter('Footer')
    .show();

setTimeout(() => modal.hide(), 2500);
```

## Sizing

When setting the size of modal, the following values are expected: **small**, **large** & **extra-large**
or you can provide **sm**, **lg** & **xl** of course

```js
const modal = ModalHelper.create(jQuery('#modal'));

modal.setTitle('Login');
modal.setBody('<b>Login Form</b>');
modal.setSize('medium');

modal.show();
```

## Fullscreen

When providing modal fullscreen value, the following values are expected: **small**, **medium**, **large**, 
**extra-large** & **extra-extra-large**
or provide **sm**, **md**, **lg**, **xl** & **xxl**

```js
const modal = ModalHelper.create(jQuery('#modal'));

modal.setTitle('Login');
modal.setBody('<b>Login Form</b>');
modal.setFullScreen('medium');

modal.show();
```

## Options

```js
const modal = ModalHelper.create(jQuery('#modal'));

modal.setTitle('Login');
modal.setBody('<b>Login Form</b>');

modal.setFullScreen('medium');

modal.setOption({
    backdrop: false,
    keyboard: false,
    focus: true
});

modal.show();
```

## Events

**ModalHelper** makes it easier to work with **BS** event system too
- Adding Listeners
```js
const modal = ModalHelper.create(jQuery('#modal'));

modal.getEvent().onShow(function () {
    console.log('Modal is showing...');
});

modal.getEvent().onShown(function () {
    console.log('Modal has shown');
});

modal.getEvent().onHide(function () {
    console.log('Modal is hiding...');
});

modal.getEvent().onHidden(function () {
    console.log('Modal is hidden');
});

modal.getEvent().onHidePrevented(function () {
    console.log('Modal is hide prevented');
});
```

Both of the methods above accept second parameter **fireOnce**
that indicated this event shall fire once, this parameter has **false** as default.

```js
const modal = ModalHelper.create(jQuery('#modal'));
const listener = function () {
    console.log('Modal has shown, and this message won\'t be showing again.');
};

modal.getEvent().onShown(listener, false);

modal.show();
```

- Removing Listeners
```js
const modal = ModalHelper.create(jQuery('#modal'));

modal.getEvent().offShow(); // Remove "showing event"
modal.getEvent().offShown(); // Remove "shown event"
modal.getEvent().offHide(); // Remove "hide event"
modal.getEvent().offHidden(); // Remove "hidden event"
modal.getEvent().offHidePrevented(); // Remove "hide prevented event"
```

## Miscellaneous

```js
const modal = ModalHelper.create(jQuery('#modal'));

modal.setScrollable(true); // Make the modal scrollable
modal.setVerticallyCentered(true); // Make the modal vertically centered

modal.show();
```