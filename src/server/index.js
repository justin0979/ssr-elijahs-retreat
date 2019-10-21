import express from 'express';
import { matchRoutes } from 'react-router-config';
import createStore from 'helpers/createStore';
import renderer from 'helpers/renderer';
import Routes from 'client/Routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
