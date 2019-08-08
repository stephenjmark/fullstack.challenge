// @flow

import React, { Component } from "react";
import { computed, action, observable } from "mobx";
import { observer, inject } from "mobx-react";
import _ from "underscore";

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
  /** Track selected calendar
   */
  @observable selectedCal = "ALL";

  /** Track department toggle
   */
  @observable groupByDepartment = "ON";

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
   * Update the selected calendar
   */
  @action
  handleCalSelect = e => {
    let id = e.target.value;
    this.selectedCal = id;
  };

  /**
   * Toggle department groups
   */
  @action
  toggleGroups = () => {
    this.groupByDepartment === "ON"
      ? (this.groupByDepartment = "OFF")
      : (this.groupByDepartment = "ON");
  };

  /**
   * Conditionally render groups unsorted or grouped by department
   */
  @action
  renderEventList = () => {
    if (this.groupByDepartment === "ON") {
      let departments = _.groupBy(this.events, ({ event }) =>
        event.department === undefined ? "none" : event.department
      );
      let lists = [];

      for (let group in departments) {
        lists.push(
          <div className={style.groupContainer}>
            <h3 className={style.groupTitle}>{group}</h3>
            <List>
              {departments[group].map(({ calendar, event }) => (
                <EventCell key={event.id} calendar={calendar} event={event} />
              ))}
            </List>{" "}
          </div>
        );
      }
      return lists;
    } else if (this.groupByDepartment === "OFF") {
      return (
        <List>
          {this.events.map(({ calendar, event }) => (
            <EventCell key={event.id} calendar={calendar} event={event} />
          ))}
        </List>
      );
    }
  };

  render() {
    return (
      <div className={style.outer}>
        <div className={style.container}>
          <div className={style.header}>
            <span className={style.title}>
              <Greeting />
            </span>
            <div className={style.settings}>
              <Select
                handleCalSelect={this.handleCalSelect}
                account={this.props.account}
              />
              <label>
                Group by Department:
                <input
                  type="radio"
                  value="later"
                  checked={this.groupByDepartment === "ON"}
                  onClick={this.toggleGroups}
                />
              </label>
            </div>
          </div>
          {this.renderEventList()}
        </div>
      </div>
    );
  }
}

export default Agenda;
