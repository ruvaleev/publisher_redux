import manifest from '../../dist/assets/manifest.json';

export function renderFullPage(res, html, preloadedState, helmet) {
  const fullPage = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Publisher 2</title>
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <link rel="stylesheet" href="/assets/${manifest['bundle.css']}" />
    </head>
    <body>
      <div id="bookList" className="h-screen">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${preloadedState};
      </script>
      <script src="/assets/${manifest['bundle.js']}"></script>
    </body>
    </html>
  `;

  res.send(fullPage);
}
