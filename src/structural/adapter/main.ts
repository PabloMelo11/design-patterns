import ExpressAdapter from './ExpressAdapter';
import HapiAdapter from './HapiAdapter';

const PORT = 3000;

const books = [
  { title: 'Clean Code' },
  { title: 'Refactoring' },
  { title: 'Domain-Driven Design' },
];

const http = new ExpressAdapter();
// const http = new HapiAdapter();

http.on('get', '/books', function () {
  return books;
});

http.listen(PORT);
