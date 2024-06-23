import Header from "./components/Header";
import Clients from "./components/Clients";
import NotFound from "./pages/NotFound"
import Project from "./pages/Project";
import Home from "./pages/Home";
import { ApolloClient,InMemoryCache,ApolloProvider,HttpLink } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials: 'include', // Include cookies in requests
  }),
  cache: cache
});



function App() {
  return (
    <>
      <ApolloProvider client={client}>
      <Router>
          <Header />
          <div className='container'>
            <Routes>
            <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
