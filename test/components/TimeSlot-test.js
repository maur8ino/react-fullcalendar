import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { expect } from 'chai';
import moment from 'moment';

import TimeSlot from '../../src/components/TimeSlot.jsx';

describe('TimeSlot', () => {
  const renderer = createRenderer();

  describe('rendered with \'from\' and \'to\'', () => {
    let now = moment();
    let duration = moment.duration(15, 'minutes');
    let from = 'From: '+ now.format(moment.defaultFormat);
    let to = 'To: ' + moment(now).add(duration).format(moment.defaultFormat);

    // Render a timeslot using shallow renderer
    renderer.render(<TimeSlot startTime={now} duration={duration} />);
    let timeslot = renderer.getRenderOutput();

    it('should rendered in a div', () => {
      expect(timeslot.type).to.equal('div');
    });

    it('should have the right text in \'from\'', () => {
      expect(timeslot.props.children[0].props.children.join('')).to.equal(from);
    });

    it('should have the right text in \'to\'', () => {
      expect(timeslot.props.children[1].props.children.join('')).to.equal(to);
    });
  });
});
