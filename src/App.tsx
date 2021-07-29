import "./styles.css";

export default function App() {
  const handlePaste = (e) => {
    const clipboatrdContent = "";
    console.log(e);
    console.log(e.nativeEvent);

    const clipboardData = e.nativeEvent.clipboardData;
    console.log(clipboardData);

    console.log(clipboardData.types);
    console.log(Array.from(clipboardData.items));

    const plainText = clipboardData.getData("text/plain");
    const text = clipboardData.getData("text");
    const text1 = clipboardData.getData("application/vnd.ms-excel");
    // if ('metadata' in plainText) {
    //   console.log("plainText");
    // }
    // if ("metadata" in text) {
    //   console.log("text");
    // }

    // console.log(typeof plainText);
    // console.log(typeof text);
    // console.log(plainText);
    //console.log(clipboardData.getData("text/rtf"));
    console.log(clipboardData.getData("Files"));

    console.log("paste triggered!");
    console.log("text: " + event.clipboardData.getData("text")); // shows text if it was pasted
    console.log("image: " + event.clipboardData.getData("image")); // always returns empty string p.s. I've also tried image/bmp and other formats
    var items = (event.clipboardData || event.originalEvent.clipboardData)
      .items;
    console.log(JSON.stringify(items)); // will give you the mime types
    for (index in items) {
      var item = items[index];
      if (item.kind === "file") {
        var blob = item.getAsFile();
        var reader = new FileReader();
        reader.onload = function (event) {
          console.log(event.target.result);
        }; // data url!
        reader.readAsDataURL(blob);
      }
    }

    // console.log(clipboardData.getData("text/html"));
    // console.log(text);
  };

  return (
    <div className="App">
      <input onPaste={handlePaste} />
      <h1>test paste sandbox</h1>
    </div>
  );
}
