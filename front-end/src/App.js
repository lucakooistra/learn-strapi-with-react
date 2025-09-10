import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./components/SiteHeader";

// Apollo Client setup
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:1337/graphql" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/details/:documentId" element={<ReviewDetails />} />
            <Route path="/category/:documentId" element={<Category />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
