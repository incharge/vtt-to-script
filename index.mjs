import readline from 'node:readline';

const rd = readline.createInterface({
    input: process.stdin,
    console: false
});

let first_timestamp = '', last_timestamp = '';
let speaker = '';
let text = '';

rd.on('line', function(line) {
  if (line == 'WEBVTT' || line == '' || line.match('^[0-9]*$') ) {
      // Ignore WEBVTT, empty lines, line numbers
  }
  else if (line.match('^[0-9\:\.]+ --> [0-9\:\.]+$')) {
    // Get the timestamp
    last_timestamp = line.replace(/^([0-9\:]+).[0-9]+ --> [0-9\:\.]+$/, '$1');
  }
  else {
    const lineparts = line.split(":");
    if (lineparts.length != 2) {
      console.log('Unexpected: ' + line);
    }
    else if (lineparts[0] == speaker) {
      // The same speaker continues
      text += lineparts[1];
    } else {
      // The speaker changes.
      if (text != '') {
        // Write the previous speaker's words
        console.log(first_timestamp + ' ' + speaker + ': ' + text);
      }
      // Start storing the new speaker's words
      first_timestamp = last_timestamp;
      speaker = lineparts[0];
      text = lineparts[1];
    }
  }
});

rd.on('close', function() {
  if (text != '') {
    // Write the last speaker's words
    console.log(first_timestamp + ' ' + speaker + ': ' + text);
  }
});
