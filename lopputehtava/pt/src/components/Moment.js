import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Trainingslist from './Trainingslist';

const localizer = BigCalendar.momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={Trainingslist}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);
