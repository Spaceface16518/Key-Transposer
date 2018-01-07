const DynamicStyle = {};

DynamicStyle.setDynamicStyle = function setDynamicStyle() {
  $("*").css({
    "box-sizing": "border-box"
  });

  $("body").css({
    "font-family": "'Helvetica Neue', Helvetica, sans-serif",
    "font-size": "13px",
    "background-color": "rgb(84, 228, 168)",
    "text-align": "center"
  });

  $("#result").css({
    "color": "rgb(4, 53, 95)",
    "font-size": "100%"
  });

  $("#result :hover").css({
    "font-size": "110%",
    "text-shadow": "4px"
  });

  $("h3").css({
    "font-family": "'Trebuchet MS', Arial, sans-serif",
    "font-size": "120%"
  })
}

module.exports = DynamicStyle