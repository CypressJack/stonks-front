import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  //Set the state responsible to different appointment views. Manipulates the history state to keep track of users place.
  function transition(newMode) {
    setMode(newMode);
  }

  //Function called by cancel and exit buttons to go back one component view.
  function tutBack() {
    setMode('showtutorials');
  }

  return { mode, transition, tutBack };
}