# Password Generator using Javascript

## Criteria

GIVEN I need a new, secure password

WHEN I click the button to generate a password

-THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria

-THEN I select which criteria to include in the password

WHEN prompted for the length of the password

-THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password

-THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt

-THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered

-THEN a password is generated that matches the selected criteria

WHEN the password is generated

-THEN the password is either displayed in an alert or written to the page

## Description

This application asks the user the length of the password which would be between 8 to 128. Then the application creates the variables which contains the password categories. There after it creates the function that collects the user arguments and an empty array for the password to be stored in it.

In the next step the application checks all the input of the required criteria of the password by the user and generates the password using the 'if' and 'for loop' function. Once the password is created, it is then displayed in the html file.

## Screenshot of the application

<img src="/screenshot.png"/>

## Link to the application

https://romzzp.github.io/passwordGenerator/

## Link to the repository

https://github.com/romzzp/passwordGenerator
