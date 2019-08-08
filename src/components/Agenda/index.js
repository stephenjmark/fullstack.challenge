// @flow

import React, { Component } from "react";
import { computed, action, observable } from "mobx";
import { observer, inject } from "mobx-react";

import type Account from "src/models/Account";

import Greeting from "./Greeting";
import Select from "./Select";
import List from "./List";
import EventCell from "./EventCell";

import style from "./style";

/**
 * Agenda component
 * Displays greeting (depending on time of day)
 * and list of calendar events
 */

type tProps = {
  account: Account
};

@inject("account")
@observer
class Agenda extends Component<tProps> {
  //Create observable selected Calendar
  @observable selectedCal = "ALL";

  /**
   * Return events from SELECTED calendar or ALL calendars, sorted by date-time.
   * Returned objects contain both Event and corresponding Calendar
   */
  @computed
  get events(): Array<{ calendar: Calendar, event: Event }> {
    const events = this.props.account.calendars
      .filter(
        calendar =>
          this.selectedCal === "ALL" || calendar.id === this.selectedCal
      )
      .map(calendar => calendar.events.map(event => ({ calendar, event })))
      .flat();

    // Sort events by date-time, ascending
    events.sort((a, b) => a.event.date.diff(b.event.date).valueOf());

    return events;
  }

  /**
   * Update selectedCal
   */
  @action
  handleCalSelect = e => {
    let id = e.target.value;
    this.selectedCal = id;
  };

  render() {
    return (
      <div className={style.outer}>
        <div className={style.container}>
          <div className={style.header}>
            <span className={style.title}>
              <Greeting />
            </span>
            <Select
              handleCalSelect={this.handleCalSelect}
              account={this.props.account}
            />
          </div>

          <List>
            {this.events.map(({ calendar, event }) => (
              <EventCell key={event.id} calendar={calendar} event={event} />
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default Agenda;
