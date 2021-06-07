import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./components/Navigation";
import CharacterDetails from "./components/CharacterDetails";
import EpisodeDetails from "./components/EpisodeDetails";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import Character from "./components/Character";
import LocationDetails from "./components/LocationDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <QueryClientProvider client={queryClient}>
          <Route exact path="/characters/:id" component={CharacterDetails} />
          <Route exact path="/episode/:id" component={EpisodeDetails} />
          <Route exact path="/locations/:id" component={LocationDetails} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/" component={Character} />
        </QueryClientProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
