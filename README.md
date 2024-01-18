# Candidate Hub

## Live Link - https://candidate-hub.netlify.app/login

A web app managing candidates who are applying for companies.

## INSTALLATION

```
1. git clone https://github.com/TusharAnekar/candidate-hub.git
2. cd candidate-hub
3. npm install
4. npm start
```

## Pages and Features -

### Login Page

- Login with test user.

### Home Page

- Header
- List of all candidates.
- Add Button

### New Candidate Page

- Header
- List of all candidates.
- Form for new candidate.

### Candidate Detail Page

- Header
- List of all candidates.
- Edit Candidate.
  - Form to edit candidate details.
  - Cancel edit.
- Delete Candidate

### [Other Features]

- Logout
- Toasts
- Responsive

## Built with -

- React JS
- React Context API + useReducer
- React Router v6
- TailwindCSS
- Material UI icons
- React Toastify

### BACKEND

- Get all candidates: GET
- https://60d5a2c2943aa60017768b01.mockapi.io/candidate

- Create a candidate: POST
- https://60d5a2c2943aa60017768b01.mockapi.io/candidate

- Update a candidate: PUT
- https://60d5a2c2943aa60017768b01.mockapi.io/candidate/<candidate_id>

- Delete a candidate: DELETE
- https://60d5a2c2943aa60017768b01.mockapi.io/candidate/<candidate_id>
