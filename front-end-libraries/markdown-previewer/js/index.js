var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Coded exclusively in React (Ho-whee!)
// Component to handle header of application
// Constant containing markdown text
var placeHolder = "# This is a big heading!\n\n## This is a smaller heading.\n\n#### This is how you include inline code.\n`print(\"Hello world!\")`\n\n#### This is the Python function code for adding two numbers. (Nifty IMO, non?)\n```python\ndef swapValues(a,b):\n  return a+b\n```\n\n#### LIST of places I want to visit before I die:\n- Tashirojima\n- The ruins of Carthage\n- Kyoto\n\n#### One of my favorite QUOTES in a BLOCK:\n\n> \"The future belongs to those who know where they belong\"- Jeanine Matthews, Divergent.\n\n#### And this is the Westerosi House I support!\n\n![alt text](https://awoiaf.westeros.org/thumb.php?f=House_Tyrell.PNG&width=150)\n\n#### This is how you include a link.\n[All Wikipedia Ends In Philosophy, Literally](https://www.huffingtonpost.in/entry/wikipedia-philosophy_n_1093460?ec_carp=6734476314041031076)\n\n**Und das ist alles. Au revoir!**\n";var































AppHeader = function (_React$Component) {_inherits(AppHeader, _React$Component);function AppHeader() {_classCallCheck(this, AppHeader);return _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).apply(this, arguments));}_createClass(AppHeader, [{ key: "render", value: function render()
    {
      return (
        React.createElement("center", null, React.createElement("h1", null, "Markdown Previewer")));

    } }]);return AppHeader;}(React.Component);

// Component to handle Markdown editor
var MarkEditor = function (_React$Component2) {_inherits(MarkEditor, _React$Component2);function MarkEditor() {_classCallCheck(this, MarkEditor);return _possibleConstructorReturn(this, (MarkEditor.__proto__ || Object.getPrototypeOf(MarkEditor)).apply(this, arguments));}_createClass(MarkEditor, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "editor" }, React.createElement("h3", null, "Markdown Editor"), React.createElement("br", null), React.createElement("textarea", { rows: "20", cols: "80", onChange: this.props.onChange, value: this.props.editorText })));

    } }]);return MarkEditor;}(React.Component);

// Component to handle Markdown previewer
var MarkPreview = function (_React$Component3) {_inherits(MarkPreview, _React$Component3);function MarkPreview() {_classCallCheck(this, MarkPreview);return _possibleConstructorReturn(this, (MarkPreview.__proto__ || Object.getPrototypeOf(MarkPreview)).apply(this, arguments));}_createClass(MarkPreview, [{ key: "render", value: function render()
    {
      return (
        // The magic line
        React.createElement("div", { id: "preview" }, React.createElement("h3", null, "Markdown Previewer"), React.createElement("br", null), React.createElement("div", { className: "preview", dangerouslySetInnerHTML: { __html: marked(this.props.previewText) } })));

    } }]);return MarkPreview;}(React.Component);

// Component to handle footer
var AppFooter = function (_React$Component4) {_inherits(AppFooter, _React$Component4);function AppFooter() {_classCallCheck(this, AppFooter);return _possibleConstructorReturn(this, (AppFooter.__proto__ || Object.getPrototypeOf(AppFooter)).apply(this, arguments));}_createClass(AppFooter, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null, React.createElement("center", null, "Designed and coded by ", React.createElement("a", { href: "https://www.freecodecamp.com/haraesh0711", target: "_blank" }, "me"), "! Background color because it's ", React.createElement("a", { href: "http://mentalfloss.com/article/566498/2019-pantone-color-of-the-year-living-coral", target: "_blank" }, "2019."), " Gott Nytt \xC5r!")));

    } }]);return AppFooter;}(React.Component);

// "Wrapper" component to join all components // of application
var AppWrapper = function (_React$Component5) {_inherits(AppWrapper, _React$Component5);
  function AppWrapper(props) {_classCallCheck(this, AppWrapper);var _this5 = _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this,
    props));
    _this5.state = {
      markDownText: placeHolder };

    _this5.handleChange = _this5.handleChange.bind(_this5);return _this5;
  }_createClass(AppWrapper, [{ key: "handleChange", value: function handleChange(
    event) {
      this.setState({
        markDownText: event.target.value });

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement(AppHeader, null), React.createElement("br", null), React.createElement("br", null),
          React.createElement(MarkEditor, { initText: this.state.markDownText, onChange: this.handleChange, editorText: this.state.markDownText }), React.createElement("br", null), React.createElement("br", null),
          React.createElement(MarkPreview, { previewText: this.state.markDownText }), React.createElement("br", null), React.createElement("br", null),
          React.createElement(AppFooter, null)));


    } }]);return AppWrapper;}(React.Component);

// Render AppWrapper component in root <div>
React.render(
React.createElement(AppWrapper, null),
document.getElementById('root'));