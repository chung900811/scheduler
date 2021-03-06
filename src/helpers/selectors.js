export function getAppointmentsForDay(state, day) {

  const filteredDay = state.days.find(days => days.name === day);

  if (!filteredDay) return [];

return filteredDay.appointments.map(appointmentId => state.appointments[appointmentId])
}

export function getInterview(state, interview) {

  if (!interview) return null;

  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };

}