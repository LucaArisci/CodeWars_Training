/* ------------------------------------------------------------------------

    You will be given an array of events, which are represented by
    strings. The strings are dates in HH:MM:SS format.

    It is known that all events are recorded in chronological order
    and two events can't occur in the same second. Return the minimum
    number of days during which the log is written.

    Example:

    Input -> ["12:12:12"]
    Output -> 1

    Input -> ["12:00:00", "23:59:59", "00:00:00"]
    Output -> 2

    Input -> []
    Output -> 0

------------------------------------------------------------------------ */

/*
    Date.prototype.setUTCHours():   changes the hours, minutes, seconds, and/or milliseconds
                                    for this date according to universal time

    Array.prototype.slice():    returns a shallow copy of a portion of an array into a new array
                                object selected from start to end

    Date.prototype.getTime():   returns the number of milliseconds for this date since the epoch,
                                which is defined as the midnight at the beginning of January 1,
                                1970, UTC
*/

function checkLogs(log) {
  let days = 1;
  let actual = new Date(2020, 1, 1, 0, 0, 0);
  let next = new Date(2020, 1, 1, 0, 0, 0);

  if (log.length <= 1) {
    return log.length;
  } else {
    for (let i = 0; i < log.length - 1; i++) {
      actual.setUTCHours(
        log[i].slice(0, 2),
        log[i].slice(3, 5),
        log[i].slice(6, 8)
      );

      next.setUTCHours(
        log[i + 1].slice(0, 2),
        log[i + 1].slice(3, 5),
        log[i + 1].slice(6, 8)
      );

      if (actual.getTime() >= next.getTime()) days++;
    }
    return days;
  }
}

/*
    Alternative solution
*/

function checkLogs(log) {
  let prev = "99:99:99";
  let days = 0;
  log.forEach((t) => {
    if (t <= prev) days++;
    prev = t;
  });
  return days;
}
