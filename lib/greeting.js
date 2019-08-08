import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
// @flow

/**
 * Greeting string depending on the time of day.
 */

const Greeting = () => {
  const [hour, setHour] = useState(DateTime.local().hour);

  //track time in state of component
  useEffect(() => {
    const id = setInterval(() => {
      setHour(DateTime.local().hour);
      console.log("hi");
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (hour < 6) {
    return "Good night";
  } else if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else if (hour < 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
};

export default Greeting;
