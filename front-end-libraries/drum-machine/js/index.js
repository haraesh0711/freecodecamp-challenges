var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} /* FUTURE:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             1) Make separate DrumKey component and create DrumPad by mapping DrumKey to drumKeys object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
// Object containing information for DrumKey component
// Component to create drum header
var DrumHeader = function (_React$Component) {_inherits(DrumHeader, _React$Component);
  function DrumHeader(props) {_classCallCheck(this, DrumHeader);return _possibleConstructorReturn(this, (DrumHeader.__proto__ || Object.getPrototypeOf(DrumHeader)).call(this,
    props));
  }_createClass(DrumHeader, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "drum-header" },
          React.createElement("center", null,
            React.createElement("h1", null, "Drum Machine (freeCodeCamp)"))));



    } }]);return DrumHeader;}(React.Component);

// Component to create display
var DrumDisplay = function (_React$Component2) {_inherits(DrumDisplay, _React$Component2);
  function DrumDisplay(props) {_classCallCheck(this, DrumDisplay);return _possibleConstructorReturn(this, (DrumDisplay.__proto__ || Object.getPrototypeOf(DrumDisplay)).call(this,
    props));
  }_createClass(DrumDisplay, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "display", className: "inverse-panel display-panel" }, "Ba-dum-tssh!"));

    } }]);return DrumDisplay;}(React.Component);

// Component to create drum key
var DrumKey = function (_React$Component3) {_inherits(DrumKey, _React$Component3);
  function DrumKey(props) {_classCallCheck(this, DrumKey);var _this3 = _possibleConstructorReturn(this, (DrumKey.__proto__ || Object.getPrototypeOf(DrumKey)).call(this,
    props));
    _this3.handleAudioClick = _this3.handleAudioClick.bind(_this3);
    _this3.handleKeyPress = _this3.handleKeyPress.bind(_this3);return _this3;
  }
  // componentDidMount and componentWillUnmount used to load and unload keyPress events to and from DOM
  _createClass(DrumKey, [{ key: "componentWillMount", value: function componentWillMount() {
      document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }
    // Play audio with ID corresponding to its parent div
  }, { key: "handleAudioClick", value: function handleAudioClick(id) {
      var audio_id = id + '-play';
      // Magic line
      document.getElementById(audio_id).currentTime = 0;
      document.getElementById(audio_id).play();
      document.getElementById("display").innerHTML = this.props.padId;
    }
    // Handle keyPress event
  }, { key: "handleKeyPress", value: function handleKeyPress(event) {
      if (event.keyCode === this.props.keyCode) {
        // Magic line
        this.handleAudioClick(this.props.padKey);
      }
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("button", { id: this.props.padId, className: "col btn drum-pad", onClick: this.handleAudioClick.bind(this, this.props.padKey) }, this.props.padKey,
          React.createElement("audio", { src: this.props.audioFile, className: "clip", id: this.props.audiopadKey })));


    } }]);return DrumKey;}(React.Component);

// Component to create drum pad
var DrumPad = function (_React$Component4) {_inherits(DrumPad, _React$Component4);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this4 = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));
    _this4.state = {
      // Contains information for pad keys
      drumKeys: [{
        padId: "heater_6",
        padKey: "Q",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        audiopadKey: "Q-play",
        keyCode: 81 },
      {
        padId: "dsc_oh",
        padKey: "W",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        audiopadKey: "W-play",
        keyCode: 87 },
      {
        padId: "kick_n_hat",
        padKey: "E",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        audiopadKey: "E-play",
        keyCode: 69 },
      {
        padId: "cev_h2",
        padKey: "A",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        audiopadKey: "A-play",
        keyCode: 65 },
      {
        padId: "dry_ohh",
        padKey: "S",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        audiopadKey: "S-play",
        keyCode: 83 },
      {
        padId: "bld_h1",
        padKey: "D",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        audiopadKey: "D-play",
        keyCode: 68 },
      {
        padId: "punchy_kick_1",
        padKey: "Z",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        audiopadKey: "Z-play",
        keyCode: 90 },
      {
        padId: "side_stick_1",
        padKey: "X",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        audiopadKey: "X-play",
        keyCode: 88 },
      {
        padId: "brk_snr",
        padKey: "C",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        audiopadKey: "C-play",
        keyCode: 67 }] };return _this4;


  }_createClass(DrumPad, [{ key: "render", value: function render()
    {
      var drumPad = this.state.drumKeys.map(function (drumKey) {
        return (
          React.createElement("div", { className: "col drum-pad" }, React.createElement(DrumKey, { padId: drumKey.padId, padKey: drumKey.padKey, audioFile: drumKey.audioFile, audiopadKey: drumKey.audiopadKey, keyCode: drumKey.keyCode }), React.createElement("br", null)));

      });
      return (
        React.createElement("div", { className: "inverse-pad" },
          React.createElement("div", { className: "row" },
            drumPad)));



    } }]);return DrumPad;}(React.Component);var

DrumFooter = function (_React$Component5) {_inherits(DrumFooter, _React$Component5);
  function DrumFooter(props) {_classCallCheck(this, DrumFooter);return _possibleConstructorReturn(this, (DrumFooter.__proto__ || Object.getPrototypeOf(DrumFooter)).call(this,
    props));
  }_createClass(DrumFooter, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null, "Created by ",
          React.createElement("a", { href: "https://www.freecodecamp.org/haraesh0711", target: "_blank" }, "moi"), "."));


    } }]);return DrumFooter;}(React.Component);

// Wrapper component containing all other components
var AppWrapper = function (_React$Component6) {_inherits(AppWrapper, _React$Component6);
  function AppWrapper(props) {_classCallCheck(this, AppWrapper);return _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this,
    props));
  }_createClass(AppWrapper, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement("center", null,
            React.createElement(DrumHeader, null),
            React.createElement("div", { className: "panel" },
              React.createElement(DrumDisplay, null),
              React.createElement(DrumPad, null)),

            React.createElement(DrumFooter, null))));



    } }]);return AppWrapper;}(React.Component);

React.render(
React.createElement(AppWrapper, null),
document.getElementById("drum-machine"));