var id = "placeholdifier";
if (!document.getElementById(id)) {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = chrome.runtime.getURL("lib/placeholdifier.css");
  link.media = "all";
  head.appendChild(link);
  
  //inline svg filter
  const xmlns = "http://www.w3.org/2000/svg";

  const body = document.getElementsByTagName("body")[0];

  const svg = document.createElementNS(xmlns, "svg");
  svg.setAttributeNS(null, "style", "position: absolute");
  svg.setAttributeNS(null, "width", "0");
  svg.setAttributeNS(null, "height", "0");

  const defs = document.createElementNS(xmlns, "defs");

  const filter = document.createElementNS(xmlns, "filter");
  filter.id = "distorsion";

  const turbulence = document.createElementNS(xmlns, "feTurbulence");
  turbulence.setAttributeNS(null, "baseFrequency", "0.1 0.4");
  turbulence.setAttributeNS(null, "numOctaves", "6");
  turbulence.setAttributeNS(null, "result", "noise");

  const displacement = document.createElementNS(xmlns, "feDisplacementMap");
  displacement.setAttributeNS(null, "in", "SourceGraphic");
  displacement.setAttributeNS(null, "in2", "noise");
  displacement.setAttributeNS(null, "scale", "2");
  displacement.setAttributeNS(null, "xChannelSelector", "R");
  displacement.setAttributeNS(null, "yChannelSelector", "R");

  filter.appendChild(turbulence);
  filter.appendChild(displacement);
  defs.appendChild(filter);
  svg.appendChild(defs);
  body.prepend(svg)
}

document.body.classList.toggle("placeholdify");
