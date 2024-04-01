// Function to perform search and highlight
function search() {
    // Retrieve search query and paragraph element
    let textToSearch = document.getElementById("text-to-search").value;
    let paragraph = document.getElementById("paragraph");
    
    // Escape special characters in search query
    textToSearch = textToSearch.replace(/[.*+?^${}()\[\]\\]/g, "\\$&");
    
    // Create regular expression pattern with search query
    let pattern = new RegExp(textToSearch, "gi");
    
    // Find all matches in paragraph text
    let matches = paragraph.textContent.match(pattern);
    
    // Get result div
    let resultDiv = document.getElementById("result");
    
    // Check if matches were found
    if (matches && matches.length > 0) {
      // Highlight matching text in paragraph
      paragraph.innerHTML = paragraph.textContent.replace(
        pattern,
        (match) => `<mark>${match}</mark>`
      );
      // Display number of matches and apply green color
      resultDiv.textContent = matches.length + " result(s) found.";
      resultDiv.className = "result-found";
    } else {
      // Reset paragraph content and display no results message in red color
      paragraph.innerHTML = paragraph.textContent;
      resultDiv.textContent = "No results found.";
      resultDiv.className = "no-result";
    }
  }