import React from 'react';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';

import { renderFullPage } from './renderFullPage';
import store from '../../src/redux/store';
import { fetchBooks } from '../../src/redux/slices/books';
import TableOfContents from '../../src/components/TableOfContents';
import StatisticCard from '../../src/components/StatisticCard';

function loadData(store) {
  const promises = [];

  promises.push(fetchBooks())

  return Promise.all(promises);
}

export async function handleRender(req, res) {
  await loadData(store);

  const html = renderToString(
    <Provider store={store}>
      <div className="flex flex col h-screen items-start justify-center bg-gray-200 text-gray-500 pt-30vh">
        <TableOfContents/>
        <StatisticCard/>
      </div>
    </Provider>
  );

  return renderFullPage(res, html, JSON.stringify(store.getState()), Helmet.renderStatic());
}
