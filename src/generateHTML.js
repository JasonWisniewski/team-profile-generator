// have a function that returns html based on user input to index

function cardCreator (data){
  // based off user input of employees added
  // we are going to for loop every employee
  var ud = '';

  for(let i=0; i < data.length; i++){
    ud +=`<section class="card m-2">
        <div class="card-header">
          ${data[i].name}
        </div>
        <div class="card-body justify-content-">
          ${data[i].role}<br>
          ${data[i].email}<br>
          ${data[i].special}<br>
        </div>
      </section>`
    // were going to add card html here
  }
  return ud;
}

// function to generate html
function generateHTML (data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
  </head>
  <body>
    <hero class="d-flex">
      <h1 class="p-5 col text-center bg-warning">
        My Team
      </h1>
    </hero>
    
    <main class="m-2 d-flex">
      ${cardCreator(data)}
    </main>
    <script src="../assets/js/script.js"></script>
  </body>
  </html>
  `
}

module.exports = generateHTML;