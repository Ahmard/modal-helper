# Modal Helper

Bootstrap 5 modal helper

# Installation

```
npm install @ahmard/modal-helper
```

## Basic Usage

```js
const modal = ModalHelper.create($('#modal'));

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
const modal = ModalHelper.create($('#modal'));

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
const modal = ModalHelper.create($('#modal'));

modal.setTitle('Login');
modal.setBody('<b>Login Form</b>');
modal.setFullScreen('medium');

modal.show();
```

## Options

```js
const modal = ModalHelper.create($('#modal'));

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

```js
const modal = ModalHelper.create($('#modal'));

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
const modal = ModalHelper.create($('#modal'));
const listener = function () {
    console.log('Modal has shown, and this message won\'t be showing again.');
};

modal.getEvent().onShown(listener, false);

modal.show();
```

## Miscellaneous

```js
const modal = ModalHelper.create($('#modal'));

modal.setScrollable(true); // Make the modal scrollable
modal.setVerticallyCentered(true); // Make the modal vertically centered

modal.show();
```