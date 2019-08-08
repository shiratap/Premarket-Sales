# Project_Name

## Resources

- [The spreadsheet the app is linked up to](https://docs.google.com/spreadsheets/d/1MRQyjL9cvOr8lu_k8xSmvAsCH1pM2ESxxKAgfadYc9U/edit?usp=sharing)

- [Tutorial 1 (Submitting html form to google sheets without google forms)](https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175)

- [Tutorial 2 (if the first doesn't work)](https://github.com/jamiewilson/form-to-google-sheets)

## Old HTML file

Will be returning to this file once I have a better understanding of the scripts
and how it's all married together.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>This is a test</title>
  </head>
  <link rel="stylesheet" type="text/css" href="./style/index.css" />
  <header>
    Welcome to the site!
  </header>
  <body>
    <main>
      <form id="test-form">
        <div>
          <label>Account ID</label>
          <input type="text" name="Account_ID" placeholder="Account ID" />
        </div>

        <div>
          <label>School Name</label>
          <input type="text" name="School_Name" placeholder="School Name" />
        </div>

        <div>
          <label>Market Area</label>
          <input type="text" name="Market_Area" placeholder="Market Area" />
        </div>

        <div>
          <label>Student Name</label>
          <input type="text" name="Student_Name" placeholder="Student Name" />
        </div>

        <div>
          <label>Gift</label>
          <input type="text" name="Gift" placeholder="Gift" />
        </div>

        <div>
          <label>Quantity</label>
          <input type="text" name="Quantity" placeholder="Quantity" />
        </div>
        <div>
          <label>Recipient</label>
          <input type="text" name="Recipient" placeholder="Recipient" />
        </div>
        <div>
          <label>Teacher Name</label>
          <input type="text" name="Teacher_Name" placeholder="Teacher Name" />
        </div>

        <div>
          <button type="submit" id="submit-form">Submit</button>
        </div>
      </form>
    </main>
  </body>
  <footer>
    Thanks for stopping by
  </footer>
  <script src="./src/jquery-3.4.1.min.js"></script>
  <script src="./src/jquery.serialize-object.min.js"></script>
  <script src="./src/script.js"></script>
</html>
```
