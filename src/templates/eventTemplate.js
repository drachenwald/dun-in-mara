import React, { useState, useEffect } from "react"
import { Button, Alert, Spinner } from 'react-bootstrap'
import Icon from '@mdi/react';
import {  mdiCrown, mdiShieldHalfFull, mdiBullseyeArrow, mdiCandle, mdiWeb, mdiFacebook,
          mdiCalendarCheck, mdiCalendarClock, mdiCalendarQuestion, mdiSwordCross, mdiMapMarker,
          mdiAlert, mdiCalendarBlank, mdiWifi, mdiMonitor, mdiCheckCircleOutline } from '@mdi/js';
import Papa from 'papaparse';

import Layout from "../components/layout"

export default function Template({ pageContext }) {

  const [ ev, setEv ] = useState( pageContext.event )
  const [ loading, setLoading ] = useState( true )

  useEffect(() => {
    fetch(`https://scripts.drachenwald.sca.org/calendar/data/cal.csv`)
      .then(response => response.text())
      .then(resultData => {
        Papa.parse( resultData , {
          header: true,
          complete: ( cal ) => {
            const hev = cal.data.find( e => e.slug === pageContext.event.slug )
            setEv({
              ...hev,
              'emergency_alert': hev['emergency-alert'],
              'start_date': hev['start-date'],
              'start_time': hev['start-time'],
              'end_date': hev['end-date'],
              'end_time': hev['end-time'],
              'event_name': hev['event-name'],
              'host_branch': hev['host-branch'],
              'progress_nordmark': hev['progress-nordmark'],
              'progress_id': hev['progress-id'],
              'site_address': hev['site-address'],
              'site_info': hev['site-info'],
              'reservation_info': hev['reservation-info'],
              'event_steward': hev['event-steward'],
              'event_steward_email': hev['event-steward-email'],
              'vc_url': hev['vc-url']
            })
            setLoading( false )
          }
        });
      })
  }, [pageContext.event.slug])

  const summary = ev.summary.replace(/^\n+/,'').replace(/\n+$/,'').replace(/\n\n+/g,'\n\n').split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);
  const cost = ev.cost.replace(/^\n+/,'').replace(/\n+$/,'').replace(/\n\n+/g,'\n').split('\n\n').reduce((total, line, index) => [total, <br key={index}/>, line]);
  const siteaddr = ev['site_address'].replace(/^\n+/,'').replace(/\n+$/,'').replace(/\n\n+/g,'\n\n').split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);
  const emergencyalert = ev['emergency_alert'].replace(/^\n+/,'').replace(/\n+$/,'').replace(/\n\n+/g,'\n\n').split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);
  const resinfo = ev['reservation_info'].replace(/^\n+/,'').replace(/\n+$/,'').replace(/\n\n+/g,'\n\n').split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);
  const paymentinfo = ev['payment'].replace(/^\n+/,'').replace(/\n+$/,'').replace(/\n\n+/g,'\n\n').split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);
  const siteinfo = ev['site_info'].replace(/^\n+/,'').replace(/\n+$/,'').replace(/\n\n+/g,'\n\n').split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);

  const startdate = new Date( `${ev['start_date']}T${ev['start_time']}` )
  const enddate = new Date( `${ev['end_date']}T${ev['end_time']}` )

  return (
    <Layout
      headline={ev['event_name']}
    >

      {
        loading
        ?
          <Alert variant="warning">
            <Spinner animation="border" size="sm" /> Loading latest info...
          </Alert>
        :
          <Alert variant="success">
            <Icon size='1rem' path={mdiCheckCircleOutline} /> Loaded
          </Alert>
      }

      <div>
        Hosted by <b>{ev['host_branch']}</b><br />

        <p>
          From <b>{startdate.toLocaleString('en-GB', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</b><br />
          until <b>{enddate.toLocaleString('en-GB', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</b>
        </p>
      </div>
      
      <br />

      { ev.status.toLowerCase() !== 'cancelled' ? <p>{summary}</p> : <div><h2><Icon size='1.5rem' path={mdiAlert} color='#900' title="Cancelled" /> This event has been cancelled</h2><p>Contact the event staff for more information.</p></div> }

      { ev['emergency-alert'] ? <div><h2><Icon size='1.5rem' path={mdiAlert} color='#900' title="Important Info" /> Important information</h2><p>{emergencyalert}</p></div> : null }

      <p>
        { ev['progress'].toLowerCase() === 'king' ? <span><Icon size='1rem' path={mdiCrown} title='The King will be present' /> The King will be present<br /></span> : null }
        { ev['progress'].toLowerCase() === 'queen' ? <span><Icon size='1rem' path={mdiCrown} title='The Queen will be present' /> The Queen will be present<br /></span> : null }
        { ev['progress'].toLowerCase() === 'both' ? <span><Icon size='1rem' path={mdiCrown} title='The King and Queen will be present' /> The King and Queen will be present<br /></span> : null }

        { ev['progress_nordmark'] && ev['progress_nordmark'].toLowerCase() === 'prince' ? <span><Icon size='1rem' path={mdiCrown} title='The Prince of Nordmark will be present' /> The Prince of Nordmark will be present<br /></span> : null }
        { ev['progress_nordmark'] && ev['progress_nordmark'].toLowerCase() === 'princess' ? <span><Icon size='1rem' path={mdiCrown} title='The Princess of Nordmark will be present' /> The Princess of Nordmark will be present<br /></span> : null }
        { ev['progress_nordmark'] && ev['progress_nordmark'].toLowerCase() === 'both' ? <span><Icon size='1rem' path={mdiCrown} title='The Prince and Princess of Nordmark will be present' /> The Prince and Princess of Nordmark will be present<br /></span> : null }

        { ev['progress_id'].toLowerCase() === 'prince' ? <span><Icon size='1rem' path={mdiCrown} title='The Prince of Insulae Draconis will be present' /> The Prince of Insulae Draconis will be present<br /></span> : null }
        { ev['progress_id'].toLowerCase() === 'princess' ? <span><Icon size='1rem' path={mdiCrown} title='The Prince of Insulae Draconis will be present' /> The Prince of Insulae Draconis will be present<br /></span> : null }
        { ev['progress_id'].toLowerCase() === 'both' ? <span><Icon size='1rem' path={mdiCrown} title='The Prince of Insulae Draconis will be present' /> The Prince of Insulae Draconis will be present<br /></span> : null }

        { ev['activities'].indexOf( 'Heavy Fighting' ) !== -1 ? <span><Icon size='1rem' path={mdiShieldHalfFull} title='Armoured Combat is scheduled' /> Armoured Combat is scheduled<br /></span> : null }
        { ev['activities'].indexOf( 'Fencing' ) !== -1 ? <span><Icon size='1rem' path={mdiSwordCross} title='Fencing is scheduled' /> Fencing is scheduled<br /></span> : null }

        { ev['activities'].indexOf( 'Archery' ) !== -1 ? <span><Icon size='1rem' path={mdiBullseyeArrow} title='Archery is scheduled' /> Archery is scheduled<br /></span> : null }

        { ev['activities'].indexOf( 'Dancing' ) !== -1 ? <span><Icon size='1rem' path={mdiCandle} title='Dancing is scheduled' /> Dancing is scheduled<br /></span> : null }
        { ev['activities'].indexOf( 'A&S' ) !== -1 ? <span><Icon size='1rem' path={mdiCandle} title='Arts &amp; Sciences are scheduled' /> Arts &amp; Sciences are scheduled<br /></span> : null }
      </p>

      { ev['site_address'] ? <div><h2>Site Address</h2><p>{siteaddr}</p><p><Button variant="primary" href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(siteaddr)}><Icon size='1rem' path={mdiMapMarker} color='#fff' title='View on Google Maps' />View on Google Maps</Button></p></div> : null }
      { ev['site_info'] ? <div><h2>Site information</h2><p>{siteinfo}</p></div> : null }

      { ev['cost'] ? <div><h2>Cost</h2><p>{cost}</p></div> : null }

      { ev['reservation_info'] ? <div><h2>Reservation</h2><p>{resinfo}</p></div> : null }
      { ev['payment'] ? <div><h2>Payment</h2><p>{paymentinfo}</p></div> : null }

      { ev['event_steward'] && !ev['event_steward_email'] ? <div><h2>Event Steward</h2> <p>{ev['event_steward']}</p></div> : null }
      { ev['event_steward'] && ev['event_steward_email'] ? <div><h2>Event Steward</h2> <p>{ev['event_steward']} (<a href={'mailto:' + ev['event_steward_email']}>{ev['event_steward_email']}</a>)</p></div> : null }

      { ev['vc_url'] ? <p><Button variant="primary" href={ev['vc_url']}><Icon size='1rem' path={mdiMonitor} color='#fff' title="Video conference" /> Join this online meeting</Button></p> : null }
      { ev['pwinfo'] ? <p><b>Password information:</b> {ev['pwinfo']}</p> : null }


      <p>
        { ev['website'] ? <Button variant="primary" href={ev.website}><Icon size='1rem' path={mdiWeb} color='#fff' title="Website" /> Visit the event website</Button> : null }&nbsp;
        { ev['facebook'] ? <Button variant="primary" href={ev.facebook}><Icon size='1rem' path={mdiFacebook} color='#fff' title="Facebook" /> Follow this event on Facebook</Button> : null }
      </p>

      <p>
        { ev['status'] === 'official' ? <span><Icon size='1rem' path={mdiCalendarCheck} /> This event has been accepted by the Kingdom Chronicler</span> : null }
        { ev['status'] === 'updated' ? <span><Icon size='1rem' path={mdiCalendarCheck} /> This event announcement has been updated since approval by the Kingdom Chronicler</span> : null }
        { ev['status'] === 'pending' ? <span><Icon size='1rem' path={mdiCalendarClock} /> This event is pending review by the Kingdom Chronicler</span> : null }
        { ev['status'] === 'unofficial' || ev['status'].toLowerCase() === 'calendar' ? <span><Icon size='1rem' path={mdiCalendarQuestion} /> The Kingdom Chronicler requires more information before listing this as an official event</span> : null }
        { ev['status'].toLowerCase() === 'local' ? <span><Icon size='1rem' path={mdiCalendarBlank} /> This local event is not published in the Kingdom Newsletter</span> : null }
        { ev['status'].toLowerCase() === 'online' ? <span><Icon size='1rem' path={mdiWifi} /> This is an online-only event</span> : null }
      </p>

    </Layout>

  )
}
