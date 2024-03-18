import React from 'react'

const Status = () => {
  return (
    <div className="wd-cs-margin">
    <div className="wd-title">Course Status</div>
    <div className="btn-group mr-2" role="group">
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        Unpublished
      </button>
      <button className="btn wd-btn-sp btn-success" type="button">
        Published
      </button>
    </div>
    <br />
    <br />
    <div className="btn-group-vertical">
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        Importing Existing Content
      </button>
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        Import From Common
      </button>
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        Choose Home Page
      </button>
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        View Course Stream
      </button>
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        New Announcement
      </button>
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        New Analytics
      </button>
      <button
        className="btn wd-btn-sp btn-outline-secondary"
        type="button"
      >
        View Course Notifications
      </button>
    </div>

    <div className="wd-flex-row-container">
      <div className="wd-title-dark wd-flex-grow-1">Coming Up</div>
      <div className="wd-title-dark">View Calendar</div>
    </div>
    <hr />

    <div className="wd_coming_up_title top_margin">Lecture</div>
    <div className="wd_coming_up_subtitle">CS4550.12631.202410</div>
    <div className="wd_coming_up_subtitle">Sep 7 at 11:45am</div>

    <div className="wd_coming_up_title top_margin">CS5601 SP23</div>
    <div className="wd_coming_up_subtitle">CS4550.12631.202410</div>
    <div className="wd_coming_up_subtitle">Sep 7 at 11:45am</div>

    <div className="wd_coming_up_title top_margin">Web Development</div>
    <div className="wd_coming_up_subtitle">CS4550.12631.202410</div>
    <div className="wd_coming_up_subtitle">Sep 7 at 11:45am</div>
  </div>
  )
}

export default Status