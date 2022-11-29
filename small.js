fetch("https://raw.githubusercontent.com/MrFast-Java/gimkithack/main/script.txt").then((r)=>{r.text().then((text)=>{eval(text);});});
