# Publisher Redux

Educational Application with React and Redux tech stack.
In this app you can manage content of books, add chapters to books,
add subsections to chapters and see current progress updates in common
Statistic component. As well you can apply filters to see completed/uncompleted
subsections and chapters. As well undo/redo opportunity added to interface
for users convenience.

## Development

Clone this repository to your local computer and install all dependencies according to package.json:

``` bash
  npm install --save-dev @tailwindcss/ui autoprefixer postcss-cli react react-dom react-redux react-scripts redux tailwindcss uuid-random
  yarn add -D cypress msw gatsby-plugin-postcss
```

Build your css:

``` bash
  npm run build
```

To run webpack dev server run this command:

``` bash
  npm run start
```

Now you can go to `localhost:8080` and see the application.
Hot reloaded has been realized here, so you don't have to restart your server
every time you have implemented some changes.

## Documentation

Documentation is composed with `docz` tool. To see it you may run:

``` bash
  yarn docz:dev
```

And go to `localhost:3000` (in demonstrations and educational purposes there
were described only couple of components)

## Testing

Run unit tests:

``` bash
  npm run test
```

To run E2E tests:

1. Run server in one terminal window:

```bash
  npm run start
```

2. In separate terminal window:

``` bash
  yarn run cypress open
```

In opened cypress window click `Run integration tests` button
In opened Chrome window you may observe E2E testing process and its results.

## Feedback

If you want to give a feedback, feel free to email me:
`ruvaleev@gmail.com`
