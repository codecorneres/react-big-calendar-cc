import React from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from '../../src'
import demoEvents from '../resources/events'
import mdx from './events.mdx'

const mLocalizer = momentLocalizer(moment)

export default {
  title: 'props',
  component: Calendar,
  argTypes: {
    localizer: { control: { type: null } },
    defaultDate: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
}

const Template = (args) => (
  <div className="height600">
    <Calendar {...args} />
  </div>
)

export const Events = Template.bind({})
Events.storyName = 'events *'
Events.args = {
  defaultDate: new Date(2015, 3, 13),
  events: demoEvents,
  localizer: mLocalizer,
}
