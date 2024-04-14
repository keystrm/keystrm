const svgNS = "http://www.w3.org/2000/svg";

// Create SVG element
let svgElem = document.createElementNS(svgNS, "svg");
svgElem.setAttribute("width", "200");
svgElem.setAttribute("height", "200");
svgElem.setAttribute("viewBox", "0 0 200 200");
svgElem.setAttribute("xmlns", svgNS);

// Create grid of rectangles
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
        let rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("x", i * 20);
        rect.setAttribute("y", j * 20);
        rect.setAttribute("width", "10");
        rect.setAttribute("height", "10");
        rect.setAttribute("fill", "#216e39");
        rect.classList.add("rect");

        // Add blinking animation to each rectangle
        let animate = document.createElementNS(svgNS, "animate");
        animate.setAttribute("attributeType", "XML");
        animate.setAttribute("attributeName", "opacity");
        animate.setAttribute("values", "0.2;1;0.2");
        animate.setAttribute("dur", "1s");
        animate.setAttribute("repeatCount", "indefinite");
        animate.setAttribute("begin", `${Math.random()}s`); // random start for blinking

        rect.appendChild(animate);
        svgElem.appendChild(rect);
    }
}

function downloadSVG() {
    let data = new XMLSerializer().serializeToString(svgElem);
    let svgBlob = new Blob([data], {type:"image/svg+xml;charset=utf-8"});
    let svgUrl = URL.createObjectURL(svgBlob);
    let downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "blinking-grid.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
