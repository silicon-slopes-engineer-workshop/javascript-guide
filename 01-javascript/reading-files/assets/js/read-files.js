function printSingleFileAsText(evt) {
    let fileContent = getSingleFileAsText(evt);
    console.log(fileContent);
}

function getSingleFileAsText(evt) {
    //Retrieve the first (and only!) File from the FileList object
    let result = "";
    let file = evt.target.files[0];
    console.log(file);
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function(event) {
            let contents = event.target.result;
            let words = getWords(contents);
        }
        return fileReader.readAsText(file)
    }
    //console.log(words);
}

function getWords(s) {
    let result = "";
    let i = 0;
    while (i < s.length) {
        result += s[i];
        i++;
    }
    console.log(result);
    return result;
}


let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', getSingleFileAsText, false);