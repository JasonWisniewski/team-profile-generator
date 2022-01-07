// have a function that returns html based on user input to index

// function to check how many managers there are

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
      <section class="card m-2">
        <div class="card-header">
          ${data.name}
        </div>
        <div class="card-body justify-content-">
          ${data.title}<br>
          ${data.github}<br>
          ${data.otherinfo}<br>

        </div>
      </section>
      <section class="card m-2">
        <div class="card-header">
          ${data.name}
        </div>
        <div class="card-body justify-content-">
          ${data.title}<br>
          ${data.github}<br>
          ${data.otherinfo}<br>
        </div>
      </section>
    </main>
    <script src="../assets/js/script.js"></script>
  </body>
  </html>
  `
}

module.exports = generateHTML;