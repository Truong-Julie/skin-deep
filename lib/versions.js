var React = require('react');
var semver = require('semver');

exports.ReactBefore155 = semver.lt(React.version, "15.5.0");
