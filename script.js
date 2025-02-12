
        const fromText = document.querySelector(".from-text");
        const toText = document.querySelector(".to-text");
        const fromLang = document.querySelector(".from-lang");
        const toLang = document.querySelector(".to-lang");
        const btnTranslate = document.querySelector(".btn-translate");

        btnTranslate.addEventListener("click", () => {
            if (!fromText.value) return;
            
            const text = fromText.value;
            const translateFrom = fromLang.value;
            const translateTo = toLang.value;
            
            // Using Google Translate API
            const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${translateFrom}&tl=${translateTo}&dt=t&q=${encodeURI(text)}`;
            
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    toText.value = data[0].map(item => item[0]).join("");
                })
                .catch(error => {
                    console.error("Translation Error:", error);
                    toText.value = "Translation Error. Please try again.";
                });
        });

        // Exchange languages
        document.querySelector(".exchange").addEventListener("click", () => {
            const tempText = fromText.value;
            fromText.value = toText.value;
            toText.value = tempText;

            const tempLang = fromLang.value;
            fromLang.value = toLang.value;
            toLang.value = tempLang;
        });
