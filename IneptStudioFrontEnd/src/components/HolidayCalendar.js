
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export default class HolidayCalendar extends React.Component {
    constructor() {
        super(...arguments);
        this.scheduleData = [{
                Id: 3,
                Subject: 'Testing',
                StartTime: new Date(2018, 1, 11, 9, 0),
                EndTime: new Date(2018, 1, 11, 10, 0),
                IsAllDay: false
            }, {
                Id: 4,
                Subject: 'Vacation',
                StartTime: new Date(2018, 1, 13, 9, 0),
                EndTime: new Date(2018, 1, 13, 10, 0),
                IsAllDay: false
            }];
    }
    onDeleteClick() {
        this.scheduleObj.deleteEvent(4);
        this.buttonObj.element.setAttribute('disabled', 'true');
    }
    render() {
        return (<div>
        <ButtonComponent id='delete' ref={t => this.buttonObj = t} title='Delete' onClick={this.onDeleteClick.bind(this)}>Delete</ButtonComponent>
        <ScheduleComponent ref={t => this.scheduleObj = t} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.scheduleData }}>
            <ViewsDirective>
                <ViewDirective option='Day'/>
                <ViewDirective option='Week'/>
                <ViewDirective option='WorkWeek'/>
                <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month]}/>
        </ScheduleComponent>
    </div>);
    }
}
;

