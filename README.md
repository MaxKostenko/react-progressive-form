# Task

Implement a page with a **progressive form**, where each step shows when you have completed the previous one. In other words, we're **not** looking for previous/next buttons or a wizard, but the **next step should appear automatically**.

## Steps

1. Two checkboxes with labels `A1` and `A2`. Both are unchecked by default. Next step is available after at least one of them is checked.
1. Two toggle buttons with labels `B1` and `B2`. One button untoggles another (same as radio buttons behavior). Both are inactive by default. Next step is available when any option has been chosen.
1. Text field with button `Check`. When button is pressed a value of the field will be send. Next step is available if a response from API is fine.
1. Selectbox with `C1`, `C2`, `C3` options. It is empty by default. Next step is available when any option has been chosen.
1. Submit button. Should send data to the server.

If a form submit fails then a user must be informed by an error message. It doesn't matter how the message appears but the redux store should be able to manage it.

## Desired result

* A single page form with steps as specified.
* After meeting a form field requirement, the next item should present. Old items should stay in screen and editable.
* I should be able to submit the form if all fields are filled.

## Form payload specification

JSON with `a` (checked values), `b` (active button value), `text` (text field value) and `c` (selectbox's value) fields.

Example:
```javascript
{
  a: ["A1"],
  b: "B1",
  text: "@abcdef",
  c: "C1"
}
```

## API

Use `api.js` from this gist.

## Requirements

1. Use any starting boilerplate to setup your project. (e.g.: [create-react-app](https://github.com/facebookincubator/create-react-app#quick-overview)).
1. Install Redux and use the Redux store to manage the state. 
1. Use any library you need.
1. Single page is enough. No need to use routers or any other pages.
1. If you want to use inline styles do it in a nice way. :wink:
1. Use best practices for React/Redux/Frontend. We will look at how you apply them.
1. Use software engineering principles to write your code. We will ask about them.
1. Well structured and readable code matters. Can other developers easily read your code and extend it?
1. Keep a healthy commit history.
1. Have at least 20% test coverage. Test at least one react component and one Redux functionality (could be async action, reducer, etc). Don't worry about high coverage, we just want to see if you know how to test.
1. Good UX practices and attention to details :ok_hand:
1. Functional programming is a plus :wink:


## Run project

Next steps are expected to start your project:

```
npm install
npm start
```

_Tip_: as static server tool you can use [serve](https://github.com/zeit/serve).

## Codestyle

We value a clean code style. It would be nice if you will follow something like Airbnb's [JavaScript Style Guide](https://github.com/airbnb/javascript). :sunglasses:

:boom: **GOOD LUCK!** :rocket:
