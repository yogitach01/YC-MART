import { Home, NotFound } from './components/default';
import Header from './components/header/Header';
import DetailView from './components/itemDetails/DetailView';
import TemplateProvider from './components/template/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import { Box, Slide } from '@material-ui/core';
function App() {
  return (
    <TemplateProvider>
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop: 54}}>
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route exact path= '/cart' component={Cart} />
            <Route exact path= '/product/:id' component={DetailView} />
            <Route component={NotFound} />
          </Switch>
        </Box>
      </BrowserRouter>
    </ContextProvider>
  </TemplateProvider>
  );
}

export default App;
