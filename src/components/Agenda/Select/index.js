// @flow

import React from "react";
import { observer } from "mobx-react";

import style from "./style";

/**
 * Format a date-time to time only string
 */

type tProps = {
  account: Account
};

export default observer(({ account, handleCalSelect }: tProps) => {
  return (
    <div className={style.container}>
      <form>
        <select onChange={handleCalSelect} className={style.select}>
          <option value={"ALL"} key={"ALL"} className={style.option}>
            All
          </option>
          {account.calendars.map(calendar => (
            <option
              value={calendar.id}
              key={calendar.id}
              className={style.option}
            >
              {calendar.id.slice(0, 12)}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
});
