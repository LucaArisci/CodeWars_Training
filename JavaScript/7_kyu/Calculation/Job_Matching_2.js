/* -----------------------------------------------------------------------------------------------

    Consider a matchmaking system that is designed to deliver jobs to software developers on a
    continual basis. As more quality jobs are handpicked into the system, they will be matched
    to all the enrolled developers; affording them better opportunities daily.

    This means that somewhere in the system there exists functionality to take a job and match
    it against enrolled candidates. There are several factors that go into this matching, but
    we'll focus on two for the purposes of this Kata.

    Create a function match which takes a job, and filters a list of candidates to the ones that
    match the job. We'll focus on two matching properties for this Kata: equity and location.

    Equity

    The candidate has a equity property (boolean) indicating if they desire equity, while the
    job will have a maximum equity property (float) representing the max amount of equity offered.
    If the maximum equity is zero, we can infer there is no equity offered. A job will match
    unless the candidate desires equity, but the job does not offer any.

    Location

    The candidate will have two location properties: current location and desired locations.
    A job can be located in multiple places as well which will be represented by its locations
    property. A match is when a job location is either in the candidate's current location or
    any of the candidate's desired locations.

    So the candidate list might look like this:

    let candidates = [{
        desiresEquity: true, 
        currentLocation: 'New York',
        desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado']
    }, ...];

    And a job might look like this:

    let job = { 
        equityMax: 1.2, 
        locations: ['New York', 'Kentucky'] 
    }

----------------------------------------------------------------------------------------------- */

/*
    for ... of:   executes a loop that operates on a sequence of values sourced from an 
                  iterable object

    Array.prototype.push(): adds the specified elements to the end of an array and returns
                            the new length of the array
*/

function match(job, candidates) {
  let match = [];
  let equity_match;
  let location_match;

  for (const cand of candidates) {
    equity_match = false;
    location_match = false;

    if (!(cand.desiresEquity && job.equityMax <= 0.0)) equity_match = true;

    for (const loc of job.locations) {
      if (loc === cand.currentLocation) {
        location_match = true;
        break;
      } else {
        for (const desLoc of cand.desiredLocations) {
          if (loc === desLoc) {
            location_match = true;
            break;
          }
        }
      }
    }

    if (equity_match && location_match) match.push(cand);
  }

  return match;
}

/*
    Alternative Solution:

    Array.prototype.forEach():   executes a provided function once for each array element

    Array.prototype.push(): adds the specified elements to the end of an array and returns
                            the new length of the array
*/

function match(job, candidates) {
  // Which of these candidates match this job?

  let match = [];
  let equity_match;
  let location_match;

  candidates.forEach((cand) => {
    equity_match = false;
    location_match = false;

    if (!(cand.desiresEquity && job.equityMax <= 0.0)) equity_match = true;

    job.locations.forEach((loc) => {
      if (loc === cand.currentLocation) {
        location_match = true;
      } else {
        cand.desiredLocations.forEach((desLoc) => {
          if (loc === desLoc) location_match = true;
        });
      }
    });

    if (equity_match && location_match) match.push(cand);
  });

  return match;
}

/*
    Alternative Solution:

    Array.prototype.push(): adds the specified elements to the end of an array and returns
                            the new length of the array
*/

const equityMatch = function (candidate, job) {
  return candidate.desiresEquity === false || job.equityMax > 0;
};

const locationMatch = function (candidate, job) {
  for (const location of job.locations) {
    if (candidate.currentLocation === location) return true;
    if (candidate.desiredLocations.includes(location)) return true;
  }
  return false;
};

const match = function (job, candidates) {
  const matches = [];
  for (const candidate of candidates) {
    if (equityMatch(candidate, job) && locationMatch(candidate, job)) {
      matches.push(candidate);
    }
  }

  return matches;
};

/*
    Alternative Solution:

    Array.prototype.filter():   creates a shallow copy of a portion of a given array, filtered
                                down to just the elements from the given array that pass the
                                test implemented by the provided function
    
    Array.prototype.some():   tests whether at least one element in the array passes the test
                              implemented by the provided function. It returns true if, in the
                              array, it finds an element for which the provided function returns
                              true; otherwise it returns false. It doesn't modify the array

    Array.prototype.includes(): determines whether an array includes a certain value among its
                                entries, returning true or false as appropriate.
*/

function match(job, candidates) {
  return candidates.filter(
    (c) =>
      (job.equityMax > 0 || !c.desiresEquity) &&
      job.locations.some(
        (l) => c.currentLocation === l || c.desiredLocations.includes(l)
      )
  );
}
