// Included for informational purposes. Only needs to be re-run if re-exported from original EPUB.

authorities = document.querySelectorAll(".table-of-authorities p");

authorities.forEach(v => {
    // Create <div>
    var div = document.createElement("div");
    // Create initial <p>
    var p = document.createElement("p");
    // Append <p class=block_128> to <div>
    div.appendChild(p);
    p.classList.add("block_128");
    // for all child nodes with tag <p> in authorities table
    for (var i = 0; i < v.childNodes.length; i++) {
        var el = v.childNodes[i];
        // if the tag name of child of <p> is <i> or <span class=text_5>, make a NEW <p>, put it in the <div>
        if (el.tagName == "I" || el.tagName == "SPAN" && el.className == "text_5") {
            p = document.createElement("p");
            div.appendChild(p);
            p.classList.add("block_128");
        }
        // append child to last <p>, either initial, or new <p>
        p.append(el.cloneNode(true));
    }
    // replace the current <p> with the <div> of <p>'s
    v.parentNode.replaceChild(div, v);
});
