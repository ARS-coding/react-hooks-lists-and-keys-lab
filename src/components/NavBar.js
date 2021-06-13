import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let keyIdCount = 0;


  let linkElements = links.map((link) => {

    let linkCopy = link; // create a copy of the link to put it in the content of anchor tag without hash(#) symbol
    let letters = link.split("");
    letters.unshift("#"); // split the link word to it's letters and add hash sybmol to the start
    let modifiedLink = letters.join(""); // join them into in a modified link word which has a hash symbol to use it in the href property of the anchor tag
    keyIdCount++; // change the id to give special ids to each individual link element

    return <a key={keyIdCount} href={modifiedLink}>{linkCopy}</a>
  })

  return (
    <nav>
      {linkElements}
    </nav>
  )
}

export default NavBar;
