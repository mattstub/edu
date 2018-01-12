# Intermediate HTML

## HTML Tables
- With HTML 5, you use thead and tbody to differentiate between the head row and content rows
```html
<table>
    <thead>
        <th></th>
        <th></th>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
```

## A Simple Web Form
A simple login form broken down

```html
<h1>Sign In</h1>

<form action="/sign-in-url" method="POST">
    <input type="text">
    <input type="password">
    <button>Login</button>
</form>
```

Other common form elements
```html
<input type="text">
<input type="color">
<input type="radio">
<input type="password">
<input type="submit">
```

## Handling Inputs
- Action: Where the forms send data to
- Method: What HTTP method is used to send (GET/POST)
- Name Attribute: Forms the data into a query string to use in the backend

## Labels
- Allow us to add labels to form, and are accessible for screen readers
- We use labels instead of just random words

```html
<form action="sign-in-url" method="POST">
    <label>Username: <input type="text" placeholder="username"></label>
    <label>Password: <input type="password" placeholder="password"></label>
    <input type="submit">
</form>
```

```html
<form action="sign-in-url" method="POST">
    <label for="username">Username:</label>
    <input id="username" type="text" placeholder="username">
    <label for"password">Password:</label>
    <input id="password" type="password" placeholder="password">
    <input type="submit">
</form>
```

## Simple Validations
- Validations refer to the ability to enforce rules and structure on different parts of a form
- The required attribute validates that an input is not empty
- There are also type validations. Try changing type from text to email
- Presence Validation makes sure something is present, i.e. 'required'
- Type Validation enforces a style structure

## Other Input Tags
- Checkboxes Radio Buttons

```html
<input type="radio">
<input type="checkbox">
```

- If the button is at the bottom of a form, it will automatically be a submit button
- Set a value to tags to relay information from input
- Select tag lets us make drop down menus

```html
<select>
    <option></option>
</select>
```

- Textareas can be any size defined

```html 
<textarea rows="10" cols="50"></textarea>
```

## Form Exercise
Requirements for this exercise are as required.
- First Name
- Last Name
- Sex
- Email
- Password
- Birthday (dropdowns)
- Agree Statement
- Submit Button

1. REQUIREMENT Validation
  - First Name
  - Last Name
2. FORMAT Validation
  - E-Mail must be correct
3. BONUS Validation
  - Password must be between 5 & 10 characters
  - HTML only, no javascript
